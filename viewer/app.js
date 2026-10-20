/* DPRK IT-worker OSINT viewer. Dependency-free; reads one JSON file.
   Contact selectors (handles, emails, domains, wallets) are rendered as plain text, never as links. */
(() => {
  "use strict";

  // Static builds keep the data alongside the viewer; make serve uses the fallback.
  const DATA_URL = "./data.json";
  const DATA_FALLBACK_URL = "../build/data.json";

  const REPO = "https://github.com/DicksonWu654/dprk-it-worker-osint";
  const CORRECTIONS_URL = REPO + "/blob/main/CORRECTIONS.md";
  const ISSUE_URL = REPO + "/issues/new?template=correction.yml";
  const SCOPE_URL = REPO + "/blob/main/SCOPE-AND-ETHICS.md";
  const PAGE = 50;
  // Satire lives only in the chrome and is aimed at the regime and its revenue scheme, never at a person.
  const SLOGANS = [
    "The Dear Leader thanks you for your direct deposit",
    "Cameras off, comrades: the video call is a capitalist plot",
    "One laptop farm, twelve time zones, one treasury",
    "Fulfil the five-year plan in a single sprint",
    "Every paycheck flows upward to the Party",
    "Stand-up meetings are a bourgeois indulgence",
  ];
  const PAUSE_SVG = `<svg class="i-pause" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><rect x="3" y="2" width="3.5" height="12" fill="currentColor"/><rect x="9.5" y="2" width="3.5" height="12" fill="currentColor"/></svg>`;
  const PLAY_SVG = `<svg class="i-play" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M4 2l10 6-10 6z" fill="currentColor"/></svg>`;
  // The slogan ticker moves even under reduced motion (owner request); a pause toggle covers WCAG 2.2.2.
  const TICKER_KEY = "dprk-osint-ticker-paused";
  function tickerPaused() { try { return localStorage.getItem(TICKER_KEY) === "1"; } catch (_) { return false; } }
  function bindTicker() {
    const t = $(".ticker"); if (!t) return;
    const btn = t.querySelector(".ticker-toggle");
    btn.addEventListener("click", () => {
      const paused = !t.classList.contains("paused");
      t.classList.toggle("paused", paused);
      btn.setAttribute("aria-pressed", String(paused));
      try { localStorage.setItem(TICKER_KEY, paused ? "1" : "0"); } catch (_) {}
    });
  }
  const STAR_SVG = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="12,1.5 14.9,8.6 22.5,8.9 16.6,13.8 18.6,21.2 12,17 5.4,21.2 7.4,13.8 1.5,8.9 9.1,8.6" fill="currentColor"/></svg>`;

  /* ---------------- Vocabulary ---------------- */
  const POSTURES = [
    { key: "convicted", name: "Convicted", def: "A court entered a conviction." },
    { key: "sanctioned-designation", name: "Sanctioned or designated", def: "Designated by OFAC, the UN, South Korea or another government. A designation is an administrative measure." },
    { key: "charged-allegation", name: "Charged (allegation)", def: "Prosecutors have filed criminal charges. The case is open, or resolved as the record shows." },
    { key: "officially-attributed", name: "Officially attributed", def: "Named in UN Panel, MSMT or government reporting." },
    { key: "affected-organization-report", name: "Reported by an affected organization", def: "Described by a company that encountered the persona." },
    { key: "research-attributed", name: "Research-attributed", def: "Assessed by a security vendor, researcher or journalist. The assessment is the publisher’s own." },
    { key: "unverified-lead", name: "Unverified lead", def: "A possible connection, recorded as a lead to check." },
  ];
  const P = Object.fromEntries(POSTURES.map((p, i) => [p.key, Object.assign({ order: i }, p)]));
  const TYPES = {
    worker: { one: "DPRK IT worker", many: "DPRK IT workers", note: "People a government or court has named." },
    persona: { one: "Employment persona", many: "Employment personas", note: "Names an employer or platform saw." },
    facilitator: { one: "Facilitator", many: "Facilitators", note: "People outside the DPRK who supplied identities, laptops, accounts or companies." },
    front_company: { one: "Front company", many: "Front companies", note: "Companies a government or publisher has named." },
    organization: { one: "Organization", many: "Organizations", note: "" },
    cluster: { one: "Cluster or incident", many: "Clusters and incidents", note: "Incidents or grouped observations described without naming individuals." },
    infrastructure: { one: "Infrastructure", many: "Infrastructure", note: "Accounts, domains and tools a source published as indicators." },
    ttp: { one: "Tactic or technique", many: "Tactics and techniques", note: "How the scheme operates, as sources describe it." },
    lead: { one: "Lead", many: "Leads", note: "Open questions that need corroboration." },
  };
  const TYPE_ORDER = Object.keys(TYPES);
  const PEOPLE = new Set(["worker", "persona", "facilitator"]);
  const CONF = {
    confirmed: { name: "Confirmed", def: "Primary official document." },
    high: { name: "High", def: "Several independent publishers, or one authoritative publisher with detail." },
    medium: { name: "Medium", def: "One publisher, or indirect." },
    lead: { name: "Lead", def: "Unverified." },
  };
  const CONF_ORDER = ["confirmed", "high", "medium", "lead"];
  const STATUS = { published: "Published", needs_corroboration: "Needs corroboration" };
  const CLAIM_TYPES = [
    ["legal_event", "Legal events"], ["identity_name", "Names"], ["alias", "Aliases"], ["account", "Accounts"],
    ["employment", "Employment"], ["organization_affiliation", "Affiliations"], ["relationship", "Relationships"],
    ["incident", "Incidents"], ["location", "Locations (historical report context)"], ["infrastructure", "Infrastructure"],
    ["wallet", "Wallets"], ["skill", "Skills"], ["contact", "Contact selectors"], ["image", "Images"], ["note", "Notes"],
  ];
  const FIELD_GROUPS = [
    { key: "all", label: "All records", test: () => true },
    { key: "people", label: "People and personas", test: (e) => PEOPLE.has(e.type) },
    { key: "companies", label: "Companies", test: (e) => e.type === "front_company" || e.type === "organization" },
    { key: "incidents", label: "Clusters and incidents", test: (e) => e.type === "cluster" },
    { key: "methods", label: "Tactics and infrastructure", test: (e) => e.type === "ttp" || e.type === "infrastructure" },
    { key: "leads", label: "Leads", test: (e) => e.type === "lead" },
  ];

  /* ---------------- Utilities ---------------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);
  const fmt = (n) => Number(n).toLocaleString("en-US");
  const plural = (n, one, many) => `${fmt(n)} ${n === 1 ? one : (many || one + "s")}`;
  const ACRO = { un: "UN", dprk: "DPRK", ofac: "OFAC", msmt: "MSMT", fbi: "FBI", doj: "DOJ", us: "US", usd: "USD", ip: "IP", ips: "IPs", url: "URL", urls: "URLs", id: "ID", ids: "IDs", it: "IT", rfj: "RFJ", sdn: "SDN", vpn: "VPN", rmm: "RMM", ttp: "TTP", ttps: "TTPs", kyc: "KYC", pdf: "PDF", html: "HTML", ai: "AI", nk: "NK", rok: "ROK", uk: "UK", eu: "EU", api: "API", cv: "CV", ceo: "CEO", cto: "CTO", llc: "LLC", github: "GitHub", linkedin: "LinkedIn", upwork: "Upwork", telegram: "Telegram" };
  const human = (k) => { const s = String(k).replace(/[_]+/g, " ").replace(/(^|\s)-+|-+(\s|$)/g, " ").replace(/([a-z])-([a-z])/g, "$1 $2").trim().split(/\s+/).map((w) => ACRO[w.toLowerCase()] || w).join(" "); return s.charAt(0).toUpperCase() + s.slice(1); };
  const LANG = (() => { try { return new Intl.DisplayNames(["en"], { type: "language" }); } catch (e) { return null; } })();
  const langName = (c) => { try { return (LANG && LANG.of(c)) || c; } catch (e) { return c; } };
  const enc = encodeURIComponent;
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fmtDate(s) {
    if (!s) return "";
    const m = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?/.exec(s);
    if (!m) return esc(s);
    if (m[3]) return `${+m[3]} ${MONTHS[+m[2] - 1]} ${m[1]}`;
    if (m[2]) return `${MONTHS[+m[2] - 1]} ${m[1]}`;
    return m[1];
  }
  function norm(s) {
    return String(s == null ? "" : s).normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase()
      .replace(/\[(\.|dot)\]|\((\.|dot)\)|\{\.\}/g, ".").replace(/\[(@|at)\]|\((@|at)\)/g, "@").replace(/hxxp/g, "http")
      .replace(/[‘’`´']/g, "").replace(/[^\p{L}\p{N}@._+#-]+/gu, " ").replace(/\s+/g, " ").trim();
  }
  const squash = (s) => norm(s).replace(/[^\p{L}\p{N}]/gu, "");
  const wordsOf = (s) => norm(s).replace(/[@._+#-]+/g, " ").split(" ").filter(Boolean);
  function strings(o, out = []) {
    if (o == null) return out;
    if (typeof o === "string") out.push(o);
    else if (Array.isArray(o)) o.forEach((v) => strings(v, out));
    else if (typeof o === "object") Object.values(o).forEach((v) => strings(v, out));
    return out;
  }
  // Highlight query match inside an escaped string.
  function hl(text, q) {
    const t = String(text);
    if (!q) return esc(t);
    const qn = q.trim().toLowerCase();
    const i = qn ? t.toLowerCase().indexOf(qn) : -1;
    if (i < 0) return esc(t);
    return esc(t.slice(0, i)) + `<mark class="q">${esc(t.slice(i, i + qn.length))}</mark>` + esc(t.slice(i + qn.length));
  }
  const sw = (p) => `<span class="sw" data-p="${esc(p)}" aria-hidden="true"></span>`;
  const postureLabel = (p) => `<span class="pl">${sw(p)}${esc((P[p] || { name: p }).name)}</span>`;
  const FLAG_SVG = `<svg viewBox="0 0 12 14" width="11" height="13" aria-hidden="true"><path d="M1.5 13.5V1M1.5 1.5h8l-2 3 2 3h-8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
  const flag = (status) => status === "needs_corroboration" ? `<span class="flag" title="Rests on one source family or an open identity question">${FLAG_SVG}Needs corroboration</span>` : "";

  /* ---------------- Data model ---------------- */
  let D = null;
  const byId = new Map();
  const cited = new Map();      // source id -> Set(entity id)
  const entSrc = new Map();     // entity id -> Set(source id)
  const entPubs = new Map();    // entity id -> Set(publisher)
  let pubCounts = [];
  let searchRows = [];          // {e, w, label, raw, n, sq}
  let srcRows = [];             // {s, n}
  let quoteRows = [];           // {e, c, ref, n}
  let mentionOut = null, mentionIn = null; // computed in idle time
  const withheldHosts = new Set();

  function prepare(data) {
    D = data;
    for (const e of D.entities) {
      byId.set(e.id, e);
      const set = new Set();
      (e.sources || []).forEach((r) => set.add(r.source_id));
      (e.claims || []).forEach((c) => (c.sources || []).forEach((r) => set.add(r.source_id)));
      entSrc.set(e.id, set);
      const pubs = new Set();
      for (const sid of set) {
        if (!cited.has(sid)) cited.set(sid, new Set());
        cited.get(sid).add(e.id);
        const s = D.sources[sid];
        if (s && s.publisher) pubs.add(s.publisher);
      }
      entPubs.set(e.id, pubs);
    }
    const pc = new Map();
    for (const pubs of entPubs.values()) for (const p of pubs) pc.set(p, (pc.get(p) || 0) + 1);
    pubCounts = Array.from(pc.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    // Search index
    const W = { name: 1, legal: 0.97, alias: 0.92, account: 0.92, roman: 0.92, org: 0.62, front: 0.62 };
    for (const e of D.entities) {
      const add = (w, label, raw) => { if (raw && typeof raw === "string") searchRows.push({ e, w, label, raw, n: norm(raw), sq: squash(raw) }); };
      add(W.name, "Name", e.name);
      add(W.legal, "Name in official document", e.legal_or_reported_name);
      (e.romanizations || []).forEach((r) => add(W.roman, "Romanization", r));
      (e.aliases || []).forEach((a) => add(W.alias, a.alias_type ? `Alias (${human(a.alias_type).toLowerCase()})` : "Alias", a.value));
      (e.accounts || []).forEach((a) => add(W.account, `Account on ${a.platform || "unknown platform"}`, a.identifier));
      (e.organizations || []).forEach((o) => add(W.org, "Organization", o));
      (e.front_companies || []).forEach((o) => add(W.front, "Front company", o));
      for (const c of e.claims || []) for (const r of c.sources || []) if (r.quote) quoteRows.push({ e, c, ref: r, n: norm(r.quote) });
    }
    for (const s of Object.values(D.sources)) srcRows.push({ s, n: norm(`${s.title || ""} ${s.publisher || ""} ${s.id}`) });

    // Hosts that belong to subjects (defanged indicators or domain records): never linked, even as a source URL.
    for (const e of D.entities) {
      const pool = [];
      (e.accounts || []).forEach((a) => pool.push(a.identifier));
      (e.infrastructure || []).forEach((i) => strings(i, pool));
      for (const s of pool) {
        if (typeof s !== "string" || !/\[\.\]|\(\.\)/.test(s)) continue;
        const re = /([a-z0-9-]+(?:(?:\[\.\]|\(\.\)|\.)[a-z0-9-]+)+)/gi;
        let m;
        while ((m = re.exec(s))) withheldHosts.add(m[1].replace(/\[\.\]|\(\.\)/g, ".").toLowerCase().replace(/^www\./, ""));
      }
    }
  }

  function searchEntities(q, limit = Infinity) {
    const qn = norm(q), qs = squash(q);
    if (qn.length < 2 && qs.length < 2) return [];
    const toks = qn.split(" ").filter(Boolean);
    const best = new Map();
    for (const r of searchRows) {
      const n = r.n;
      let s = 0;
      if (n === qn) s = 100;
      else if (qs.length >= 3 && r.sq === qs) s = 94;
      else if (n.startsWith(qn)) s = 80;
      else if (n.includes(" " + qn) || n.includes("/" + qn)) s = 70;
      else if (n.includes(qn)) s = 48;
      else if (qs.length >= 4 && r.sq.includes(qs)) s = 42;
      else if (toks.length > 1 && toks.every((t) => n.includes(t))) s = 32;
      else continue;
      s *= r.w;
      const prev = best.get(r.e.id);
      if (!prev || s > prev.score) best.set(r.e.id, { e: r.e, score: s, row: r });
    }
    const out = Array.from(best.values());
    out.sort((a, b) => b.score - a.score || entSrc.get(b.e.id).size - entSrc.get(a.e.id).size || a.e.name.localeCompare(b.e.name));
    return limit === Infinity ? out : out.slice(0, limit);
  }
  function searchSources(q) {
    const qn = norm(q);
    if (qn.length < 3) return [];
    const toks = qn.split(" ");
    return srcRows.filter((r) => toks.every((t) => r.n.includes(t))).map((r) => r.s)
      .sort((a, b) => (cited.get(b.id)?.size || 0) - (cited.get(a.id)?.size || 0));
  }
  function searchQuotes(q, exclude) {
    const qn = norm(q);
    if (qn.length < 4) return [];
    return quoteRows.filter((r) => r.n.includes(qn) && !exclude.has(r.e.id));
  }

  /* ---------------- Related records ---------------- */
  // Text-based cross references: a record mentions another by id or by a distinctive name (8+ characters).
  function recordText(e) {
    const parts = [];
    (e.claims || []).forEach((c) => { strings(c.value, parts); (c.sources || []).forEach((r) => parts.push(r.quote || "")); strings(c.notes, parts); });
    (e.sources || []).forEach((r) => parts.push(r.support || ""));
    strings([e.caveats, e.identity_boundary, e.infrastructure, e.organizations, e.front_companies, e.attribution && e.attribution.legal_posture], parts);
    return parts.join(" \n ");
  }
  function buildMentions(done) {
    const names = new Map(); // normalized word sequence -> Set(ids)
    let maxWords = 1;
    for (const e of D.entities) {
      if (e.type === "ttp") continue;
      const cands = [e.name, e.legal_or_reported_name].concat((e.aliases || []).filter((a) => /persona|organization|spelling/.test(a.alias_type || "")).map((a) => a.value));
      for (const c of cands) {
        if (!c || c.length < 8) continue;
        const w = wordsOf(c);
        if (!w.length || w.length > 8) continue;
        const k = w.join(" ");
        if (!names.has(k)) names.set(k, new Set());
        names.get(k).add(e.id);
        maxWords = Math.max(maxWords, w.length);
      }
    }
    const out = new Map(), inn = new Map();
    const list = D.entities.slice();
    let i = 0;
    const step = (deadline) => {
      const t0 = performance.now();
      while (i < list.length && (deadline ? deadline.timeRemaining() > 2 : performance.now() - t0 < 12)) {
        const e = list[i++];
        const text = recordText(e);
        const found = new Set();
        const idRe = /[a-z0-9][a-z0-9._-]{2,120}/g;
        let m;
        while ((m = idRe.exec(text))) if (byId.has(m[0])) found.add(m[0]);
        const w = wordsOf(text);
        for (let a = 0; a < w.length; a++) {
          let k = "";
          for (let b = a; b < Math.min(w.length, a + maxWords); b++) {
            k = b === a ? w[a] : k + " " + w[b];
            const hit = names.get(k);
            if (hit) hit.forEach((x) => found.add(x));
          }
        }
        found.delete(e.id);
        out.set(e.id, found);
        for (const x of found) { if (!inn.has(x)) inn.set(x, new Set()); inn.get(x).add(e.id); }
      }
      if (i < list.length) schedule(step); else { mentionOut = out; mentionIn = inn; done && done(); }
    };
    schedule(step);
  }
  const schedule = (fn) => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 300 }) : setTimeout(fn, 16));

  function sharedSources(e, limit = 6) {
    const score = new Map();
    for (const sid of entSrc.get(e.id)) {
      const set = cited.get(sid);
      if (!set || set.size > 60) continue;
      const w = 1 / Math.log2(set.size + 1);
      for (const x of set) if (x !== e.id) score.set(x, (score.get(x) || 0) + w);
    }
    return Array.from(score.entries()).sort((a, b) => b[1] - a[1]).slice(0, limit).map((entry) => byId.get(entry[0]));
  }

  /* ---------------- Links ---------------- */
  // Source URLs that are themselves a subject's profile, messaging handle or indicator domain are shown as text.
  const defangedUrl = (url) => /^(?:hxxps?)\:\/\/|\[\.\]|\(\.\)/i.test(String(url || ""));
  function withheldReason(url) {
    if (defangedUrl(url)) return "It is a defanged contact or profile address.";
    let u;
    try { u = new URL(url); } catch (e) { return "The stored address is malformed."; }
    const host = u.hostname.toLowerCase().replace(/^www\./, "");
    const segs = u.pathname.split("/").filter(Boolean);
    if (/^(t|telegram)\.me$/.test(host)) return "It is a messaging handle.";
    if (/^(x|twitter|mobile\.twitter)\.com$/.test(host) && segs.length <= 1) return "It is a social profile.";
    if (host === "github.com" && segs.length === 1) return "It is an account profile.";
    if (host === "api.github.com" && segs[0] === "users") return "It is an account profile.";
    if (/linkedin\.com$/.test(host) && segs[0] === "in") return "It is a personal profile.";
    if (/(^|\.)(freelancer|upwork|laborx|freelancermap|guru|crowdworks)\.[a-z.]+$/.test(host) && /^(u|freelancers|profile|users|projects)$/.test(segs[0] || "")) return "It is a freelancer profile or listing.";
    if (withheldHosts.has(host)) return "The domain is an indicator recorded in this dataset.";
    return "";
  }
  function extLink(url, text) {
    if (defangedUrl(url)) return `<span class="id">${text} <span class="m">(address shown as text: ${esc(url)})</span></span>`;
    return `<a href="${esc(url)}" rel="noopener noreferrer nofollow" target="_blank">${text}<span class="sr"> (opens the original document in a new tab)</span></a>`;
  }
  const sentence = (t) => { const x = String(t).trim(); return x ? x.charAt(0).toUpperCase() + x.slice(1) + (/[.!?)]$/.test(x) ? "" : ".") : ""; };
  const eLink = (e, inner) => `<a href="#/e/${enc(e.id)}">${inner || esc(e.name)}</a>`;
  const sTitle = (s) => s ? (s.title || s.id) : "Unknown source";

  /* ---------------- Rendering helpers ---------------- */
  // showFlag is false on the overview: the owner keeps the corroboration flag off the landing page.
  function entityRow(e, extra = "", showFlag = true) {
    const n = entSrc.get(e.id).size;
    return `<li><a class="row" href="#/e/${enc(e.id)}">${sw(e.attribution.status)}
      <span class="row-name">${esc(e.name)}</span><span class="row-n">${plural(n, "source")}</span>
      <span class="row-meta"><span class="pl">${esc(P[e.attribution.status].name)}</span><span>${esc(TYPES[e.type].one)}</span>${showFlag ? flag(e.status) : ""}${extra}</span></a></li>`;
  }
  function sourceRow(s, extra = "") {
    const n = cited.get(s.id)?.size || 0;
    return `<li><a class="row" href="#/s/${enc(s.id)}"><span class="row-name">${esc(sTitle(s))}</span><span class="row-n">${plural(n, "record")}</span>
      <span class="row-meta"><span>${esc(s.publisher || "")}</span>${s.published_at ? `<span>${fmtDate(s.published_at)}</span>` : ""}${extra}</span></a></li>`;
  }

  function renderValue(v, depth = 0) {
    if (v == null) return `<span class="no">Not given</span>`;
    if (typeof v === "boolean") return v ? "Yes" : `<span class="no">No</span>`;
    if (typeof v === "number") return esc(fmt(v));
    if (typeof v === "string") {
      if (byId.has(v) && v.length > 6) return eLink(byId.get(v));
      return esc(v);
    }
    if (Array.isArray(v)) {
      if (!v.length) return `<span class="no">None</span>`;
      if (v.every((x) => x && typeof x === "object" && !Array.isArray(x))) {
        const keys = Array.from(new Set(v.flatMap((x) => Object.keys(x))));
        if (keys.length <= 6 && depth < 2) {
          const rows = v.slice(0, 40).map((x) => `<tr>${keys.map((k) => `<td>${renderValue(x[k], depth + 1)}</td>`).join("")}</tr>`).join("");
          return `<table class="vt"><thead><tr>${keys.map((k) => `<th scope="col">${esc(human(k))}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table>${v.length > 40 ? `<span class="more-v">and ${fmt(v.length - 40)} more rows in the data file</span>` : ""}`;
        }
      }
      if (v.every((x) => typeof x !== "object" || x === null) && v.every((x) => String(x).length < 80) && v.join(", ").length < 900) return v.map((x) => renderValue(x, depth + 1)).join(", ");
      return `<ul>${v.slice(0, 60).map((x) => `<li>${renderValue(x, depth + 1)}</li>`).join("")}</ul>${v.length > 60 ? `<span class="more-v">and ${fmt(v.length - 60)} more in the data file</span>` : ""}`;
    }
    if (typeof v === "object") {
      const ks = Object.keys(v);
      if (!ks.length) return `<span class="no">None</span>`;
      return `<dl class="kv">${ks.map((k) => `<dt>${esc(human(k))}</dt><dd>${renderValue(v[k], depth + 1)}</dd>`).join("")}</dl>`;
    }
    return esc(String(v));
  }

  /* ---------------- Views ---------------- */
  const main = () => $("#main");
  let firstOverview = true;

  function viewOverview() {
    const st = D.stats;
    const ticker = SLOGANS.map((x) => `<span>${esc(x)}</span><i aria-hidden="true">★</i>`).join("");
    const html = `<section class="poster" aria-labelledby="hero-h">
      <div class="poster-inner">
        <div class="poster-copy">
          <p class="ribbon ribbon-light">Directive of the central archive</p>
          <p class="slogan" aria-hidden="true">Glorious remote workers of the People’s Laptop Farm!</p>
          <h1 class="hero-title" id="hero-h" tabindex="-1">North Korea’s remote IT workers, by the documents that name them.</h1>
          <p class="lede">A free, public index of the workers governments and courts have named, the personas they used to get hired, and the facilitators, front companies and methods around them. Every claim carries the exact words of a public document.</p>
        </div>
        <div class="poster-form">
          <span class="poster-star">${STAR_SVG}</span>
          <form class="enquiry hero-search" id="hero-form" role="search" autocomplete="off">
            <p class="form-no" aria-hidden="true">Form 7-B: public enquiry</p>
            <p class="stamp" aria-hidden="true">Public documents only</p>
            <label for="hero-q">Is a name, handle, email or company in here?</label>
            <div class="field"><input id="hero-q" type="search" spellcheck="false" placeholder="Name, handle or company" aria-describedby="hero-ex"><button type="submit">Search</button></div>
            <p class="examples" id="hero-ex"><span>Try</span>
              <button type="button" class="chip" data-q="Christina Marie Chapman">Christina Marie Chapman</button>
              <button type="button" class="chip" data-q="Hopana Tech LLC">Hopana Tech LLC</button>
              <button type="button" class="chip" data-q="Chinyong">Chinyong</button>
            </p>
            <div class="hero-results" id="hero-results" aria-live="polite"></div>
          </form>
        </div>
      </div>
    </section>
    <div class="ticker${tickerPaused() ? " paused" : ""}"><div class="ticker-view" aria-hidden="true"><div class="ticker-track">${ticker}${ticker}</div></div><button type="button" class="ticker-toggle" aria-pressed="${tickerPaused()}" aria-label="Pause the slogan ticker" title="Pause the slogan ticker">${PAUSE_SVG}${PLAY_SVG}</button></div>
    <div class="page">
      <section class="quota" aria-labelledby="quota-h">
        <h2 class="ribbon" id="quota-h">Production quotas overfulfilled</h2>
        <dl class="quota-grid">
          <div><dt>records filed</dt><dd>${fmt(st.entities)}</dd></div>
          <div><dt>claims, each with an exact quote</dt><dd>${fmt(st.claims)}</dd></div>
          <div><dt>public documents cited</dt><dd>${fmt(st.sources)}</dd></div>
          <div><dt>publishers</dt><dd>${fmt(st.publishers)}</dd></div>
        </dl>
      </section>

      <section class="section field-section" aria-labelledby="field-h">
        <div class="section-head">
          <h2 id="field-h">What the sources establish</h2>
          <p>Each square is one record, filed under the strongest legal posture its sources support. Select one to open it.</p>
        </div>
        <div class="field-legend" aria-hidden="true">
          <span><span class="sw" data-p="convicted" style="--pc:var(--ink-2)"></span>Solid: court or government finding</span>
          <span><span class="sw" data-p="charged-allegation" style="--pc:var(--ink-2)"></span>Striped: criminal charge</span>
          <span><span class="sw" data-p="officially-attributed" style="--pc:var(--ink-2)"></span>Tinted: official or company report</span>
          <span><span class="sw" data-p="research-attributed" style="--pc:var(--ink-2)"></span>Grey: research assessment</span>
          <span><span class="sw" data-p="unverified-lead" style="--pc:var(--ink-2)"></span>Dashed: lead</span>
        </div>
        <div class="field-filter" role="group" aria-label="Highlight a kind of record">
          ${FIELD_GROUPS.map((g, i) => `<button type="button" class="seg" data-g="${g.key}" aria-pressed="${i === 0}">${esc(g.label)}</button>`).join("")}
        </div>
        <div class="field" id="field">${POSTURES.map((p) => {
          const list = D.entities.filter((e) => e.attribution.status === p.key)
            .sort((a, b) => TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type) || entSrc.get(b.id).size - entSrc.get(a.id).size);
          if (!list.length) return "";
          return `<div class="field-row" data-p="${p.key}">
            <div><h3><span class="sw" data-p="${p.key}" aria-hidden="true"></span><a href="#/browse?posture=${p.key}">${esc(p.name)}</a><span class="n" data-n>${fmt(list.length)}</span></h3><p>${esc(p.def)}</p></div>
            <div class="cells${firstOverview ? " reveal" : ""}" aria-hidden="true">${list.map((e, i) => `<i class="sw" data-p="${p.key}" data-id="${esc(e.id)}" data-t="${e.type}" style="--d:${Math.min(i * 3, 700)}"></i>`).join("")}</div>
          </div>`;
        }).join("")}</div>
      </section>

      <section class="section split">
        <div>
          <div class="section-head"><h2>Kinds of record</h2></div>
          <ul class="bars">${(() => {
            const max = Math.max(...Object.values(st.by_type));
            return TYPE_ORDER.filter((t) => st.by_type[t]).map((t) => `<li><a href="#/browse?type=${t}"><span class="bar-name">${esc(TYPES[t].many)}</span><span class="bar-track"><span class="bar-fill" style="width:${(st.by_type[t] / max * 100).toFixed(1)}%"></span></span><span class="bar-n">${fmt(st.by_type[t])}</span></a></li>`).join("");
          })()}</ul>
        </div>
        <div>
          <div class="section-head"><h2>Most-cited records</h2><p>Records backed by the most distinct documents.</p></div>
          <ul class="ledger">${D.entities.slice().sort((a, b) => entSrc.get(b.id).size - entSrc.get(a.id).size || (b.claims || []).length - (a.claims || []).length).slice(0, 6).map((e) => entityRow(e, "", false)).join("")}</ul>
          <p class="more"><a class="btn" href="#/browse?sort=sources">Browse all ${fmt(st.entities)} records</a></p>
        </div>
      </section>

      <section class="section split">
        <div>
          <div class="section-head"><h2>Newest documents</h2><p>By the date printed on the document.</p></div>
          <ul class="ledger src">${Object.values(D.sources).filter((s) => s.published_at).sort((a, b) => b.published_at.localeCompare(a.published_at)).slice(0, 7).map((s) => sourceRow(s)).join("")}</ul>
          <p class="more"><a class="btn" href="#/sources?sort=newest">All ${fmt(st.sources)} sources</a></p>
        </div>
        <div>
          <div class="section-head"><h2>Convicted</h2><p>Every record where a court entered a conviction.</p></div>
          <ul class="ledger">${D.entities.filter((e) => e.attribution.status === "convicted").sort((a, b) => a.name.localeCompare(b.name)).map((e) => entityRow(e, "", false)).join("")}</ul>
        </div>
      </section>

      <section class="section ethics" aria-labelledby="eth-h">
        <div>
          <p class="ribbon ribbon-ink">Plain-language notice. No satire in this box.</p>
          <h2 id="eth-h">Read this before you use it</h2>
          <p>This is a compilation of what governments, courts, the UN, security vendors and journalists have already published. Every record starts from a published document. Two records are joined only when a source joins them; a shared name, handle, photo or IP address stays a lead until a source confirms it.</p>
          <p>Individual DPRK IT workers act under state direction and surrender most of their pay. They appear here as subjects of reporting. Handles and emails are shown as historical plain text. Please leave everyone listed alone.</p>
          <p>The dataset holds only what public documents connect to the scheme. A missing name tells you about the sources, and only that.</p>
          <p><b>How it was built.</b> AI agents compiled this dataset from public documents. Every claim quotes and links its source, and the quotes were re-checked against the originals, but it will contain mistakes. Check the source before relying on a record, and <a href="${ISSUE_URL}" rel="noopener">request a correction</a> if something is wrong.</p>
        </div>
        <div>
          <h2>Left out on purpose</h2>
          <ul>
            <li>Phone numbers, street addresses, identity documents, payment-card and bank details.</li>
            <li>Victims: people whose identities were stolen, employees who were deceived.</li>
            <li>Present whereabouts, private-account material, and any identity inferred from a face.</li>
          </ul>
          <p style="margin-top:14px">Anything here can be wrong. <a href="${ISSUE_URL}" rel="noopener">Open a correction</a>; requests from a named person are handled first. <a href="#/about">How to read a record</a>.</p>
        </div>
      </section>
    </div>`;
    main().innerHTML = html;
    bindTicker();
    firstOverview = false;
    bindField();
    bindHeroSearch();
    alignRays();
  }

  function bindField() {
    const field = $("#field");
    const tip = $("#tip");
    let hot = null;
    const show = (cell) => {
      const e = byId.get(cell.dataset.id);
      if (!e) return;
      if (hot) hot.classList.remove("hot");
      hot = cell; cell.classList.add("hot");
      tip.innerHTML = `<b>${esc(e.name)}</b>${esc(TYPES[e.type].one)}. ${esc(P[e.attribution.status].name)}.`;
      tip.hidden = false;
      const r = cell.getBoundingClientRect();
      const tw = tip.offsetWidth, th = tip.offsetHeight;
      let x = r.left + r.width / 2 - tw / 2;
      x = Math.max(8, Math.min(window.innerWidth - tw - 8, x));
      let y = r.top - th - 10;
      if (y < 70) y = r.bottom + 10;
      tip.style.left = x + "px"; tip.style.top = y + "px";
    };
    const hide = () => { tip.hidden = true; if (hot) hot.classList.remove("hot"); hot = null; };
    field.addEventListener("pointerover", (ev) => { const c = ev.target.closest(".cells i"); if (c && ev.pointerType !== "touch") show(c); });
    field.addEventListener("pointerleave", hide);
    field.addEventListener("click", (ev) => { const c = ev.target.closest(".cells i"); if (c) { hide(); location.hash = "#/e/" + enc(c.dataset.id); } });
    window.addEventListener("scroll", hide, { passive: true, once: true });
    $$(".field-filter .seg").forEach((b) => b.addEventListener("click", () => {
      const g = FIELD_GROUPS.find((x) => x.key === b.dataset.g);
      $$(".field-filter .seg").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      $$(".field-row").forEach((row) => {
        let n = 0;
        $$(".cells i", row).forEach((c) => { const on = g.test(byId.get(c.dataset.id)); c.classList.toggle("dim", !on); if (on) n++; });
        const total = $$(".cells i", row).length;
        $("[data-n]", row).textContent = g.key === "all" ? fmt(total) : `${fmt(n)} of ${fmt(total)}`;
        const a = $("h3 a", row);
        a.href = `#/browse?posture=${row.dataset.p}` + (g.key === "people" ? "&type=worker,persona,facilitator" : g.key === "companies" ? "&type=front_company,organization" : g.key === "incidents" ? "&type=cluster" : g.key === "methods" ? "&type=ttp,infrastructure" : g.key === "leads" ? "&type=lead" : "");
      });
    }));
  }

  // Point the poster's sunburst at the star, wherever the layout put it.
  function alignRays() {
    const poster = $(".poster"), star = $(".poster-star");
    if (!poster || !star) return;
    const p = poster.getBoundingClientRect(), r = star.getBoundingClientRect();
    poster.style.setProperty("--ray-x", `${Math.round(r.left + r.width / 2 - p.left)}px`);
    poster.style.setProperty("--ray-y", `${Math.round(r.top + r.height / 2 - p.top)}px`);
  }
  let rayRaf = 0;
  window.addEventListener("resize", () => { cancelAnimationFrame(rayRaf); rayRaf = requestAnimationFrame(alignRays); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => alignRays());

  function bindHeroSearch() {
    const form = $("#hero-form"), input = $("#hero-q"), out = $("#hero-results");
    let raf = 0;
    const run = () => { runInner(); alignRays(); };
    const runInner = () => {
      const q = input.value.trim();
      if (q.length < 2) { out.innerHTML = ""; return; }
      const res = searchEntities(q);
      if (!res.length) {
        out.innerHTML = `<div class="empty"><p class="empty-slogan">The central archive has no file on this.</p><h2>No record matches “${esc(q)}”.</h2><p>This index holds only what public documents connect to the scheme, so a missing result tells you about the sources, and only that. Try another spelling, a handle, or part of a company name.</p></div>`;
        return;
      }
      out.innerHTML = `<ul class="ledger">${res.slice(0, 6).map((r) => hitRow(r, q, false)).join("")}</ul>
        <p class="more"><a class="btn" href="#/search?q=${enc(q)}">${res.length > 6 ? `See all ${fmt(res.length)} matching records` : "Also search quotes and sources"}</a></p>`;
    };
    input.addEventListener("input", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(run); });
    form.addEventListener("submit", (ev) => { ev.preventDefault(); const q = input.value.trim(); if (q) location.hash = "#/search?q=" + enc(q); });
    $$(".chip", form).forEach((c) => c.addEventListener("click", () => { input.value = c.dataset.q; run(); input.focus(); }));
  }

  function hitRow(r, q, showFlag = true) {
    const e = r.e;
    const why = r.row.label === "Name" ? "" : `<span class="hit-why">Matched ${esc(r.row.label.toLowerCase())}: ${hl(r.row.raw, q)}</span>`;
    const n = entSrc.get(e.id).size;
    return `<li><a class="row" href="#/e/${enc(e.id)}">${sw(e.attribution.status)}
      <span class="row-name">${r.row.label === "Name" ? hl(e.name, q) : esc(e.name)}</span><span class="row-n">${plural(n, "source")}</span>
      ${why}
      <span class="row-meta"><span class="pl">${esc(P[e.attribution.status].name)}</span><span>${esc(TYPES[e.type].one)}</span>${showFlag ? flag(e.status) : ""}</span></a></li>`;
  }

  function viewSearch(params) {
    const q = params.get("q") || "";
    main().innerHTML = `<div class="page search-page">
      <p class="ribbon">Office of public enquiries</p>
      <h1 tabindex="-1">Search</h1>
      <form class="hero-search" id="s-form" role="search" autocomplete="off">
        <label for="s-q">Name, alias, handle, email, company or words from a quote</label>
        <div class="field"><input id="s-q" type="search" spellcheck="false" value="${esc(q)}"><button type="submit">Search</button></div>
      </form>
      <div id="s-out" aria-live="polite"></div>
    </div>`;
    const input = $("#s-q"), out = $("#s-out");
    const run = () => {
      const q = input.value.trim();
      history.replaceState(null, "", "#/search" + (q ? "?q=" + enc(q) : ""));
      document.title = q ? `“${q}”: search, DPRK IT-worker OSINT` : "Search, DPRK IT-worker OSINT";
      if (q.length < 2) { out.innerHTML = `<p class="lede" style="margin-top:28px">Type at least two characters. Search covers record names, official name forms, romanizations, aliases, account handles, emails as stored, organizations and front companies, plus source titles and quoted text.</p>`; return; }
      const ents = searchEntities(q);
      const ids = new Set(ents.map((r) => r.e.id));
      const srcs = searchSources(q);
      const quotes = searchQuotes(q, ids);
      let html = "";
      if (!ents.length && !srcs.length && !quotes.length) {
        html = `<div class="empty" style="margin-top:28px"><p class="empty-slogan">The central archive has no file on this.</p><h2>No record matches “${esc(q)}”.</h2><p>This index holds only what public documents connect to the scheme, so a missing result tells you about the sources, and only that.</p><p>Check another spelling, a handle without the @, or part of a company name. If you know a public document that belongs here, <a href="${REPO}/blob/main/CONTRIBUTING.md" rel="noopener">contribute it</a>.</p></div>`;
      }
      if (ents.length) html += `<section class="result-group"><h2>Records <span>${fmt(ents.length)}</span></h2><ul class="ledger">${ents.slice(0, 100).map((r) => hitRow(r, q)).join("")}</ul>${ents.length > 100 ? `<p class="more">Showing the first 100. Refine the search to narrow it.</p>` : ""}</section>`;
      if (quotes.length) {
        const seen = new Set(), list = [];
        for (const r of quotes) { if (seen.has(r.e.id)) continue; seen.add(r.e.id); list.push(r); }
        html += `<section class="result-group"><h2>Mentioned in quoted text <span>${fmt(list.length)}</span></h2><ul class="ledger">${list.slice(0, 40).map((r) => {
          const e = r.e;
          return `<li><a class="row" href="#/e/${enc(e.id)}">${sw(e.attribution.status)}<span class="row-name">${esc(e.name)}</span><span class="row-n"></span><span class="hit-why">“${quoteSnippet(r.ref.quote, q)}”</span><span class="row-meta"><span class="pl">${esc(P[e.attribution.status].name)}</span><span>${esc(TYPES[e.type].one)}</span></span></a></li>`;
        }).join("")}</ul></section>`;
      }
      if (srcs.length) html += `<section class="result-group"><h2>Sources <span>${fmt(srcs.length)}</span></h2><ul class="ledger src">${srcs.slice(0, 40).map((s) => sourceRow(s)).join("")}</ul></section>`;
      out.innerHTML = html;
    };
    let raf = 0;
    input.addEventListener("input", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(run); });
    $("#s-form").addEventListener("submit", (ev) => { ev.preventDefault(); run(); });
    run();
    if (!q) input.focus();
  }
  function quoteSnippet(quote, q) {
    const i = quote.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(quote.length > 180 ? quote.slice(0, 180) + "…" : quote);
    const a = Math.max(0, i - 70), b = Math.min(quote.length, i + q.length + 90);
    return (a > 0 ? "…" : "") + hl(quote.slice(a, b), q) + (b < quote.length ? "…" : "");
  }

  /* ----- Browse ----- */
  function readFilters(params) {
    const list = (k) => (params.get(k) || "").split(",").filter(Boolean);
    return { type: list("type"), posture: list("posture"), conf: list("conf"), status: list("status"), pub: params.get("pub") || "", q: params.get("q") || "", sort: params.get("sort") || "posture" };
  }
  function filterEntities(f, skip) {
    const qn = norm(f.q);
    const matches = qn.length >= 2 ? new Set(searchEntities(f.q).map((r) => r.e.id)) : null;
    return D.entities.filter((e) =>
      (skip === "type" || !f.type.length || f.type.includes(e.type)) &&
      (skip === "posture" || !f.posture.length || f.posture.includes(e.attribution.status)) &&
      (skip === "conf" || !f.conf.length || f.conf.includes(e.confidence)) &&
      (skip === "status" || !f.status.length || f.status.includes(e.status)) &&
      (skip === "pub" || !f.pub || entPubs.get(e.id).has(f.pub)) &&
      (!matches || matches.has(e.id)));
  }
  function sortEntities(list, sort) {
    const by = {
      posture: (a, b) => P[a.attribution.status].order - P[b.attribution.status].order || TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type) || a.name.localeCompare(b.name),
      name: (a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
      sources: (a, b) => entSrc.get(b.id).size - entSrc.get(a.id).size || a.name.localeCompare(b.name),
      claims: (a, b) => (b.claims || []).length - (a.claims || []).length || a.name.localeCompare(b.name),
    };
    return list.sort(by[sort] || by.posture);
  }
  function viewBrowse(params) {
    const f = readFilters(params);
    const facet = (key, legend, values, label) => `<fieldset class="facet" data-facet="${key}"><legend>${legend}</legend>${values.map((v) =>
      `<label><input type="checkbox" value="${esc(v)}" ${f[key].includes(v) ? "checked" : ""}>${label(v)}<span class="c" data-c="${esc(v)}"></span></label>`).join("")}</fieldset>`;
    main().innerHTML = `<div class="page">
      <div class="browse-head"><p class="ribbon">Bureau of filing</p><h1 tabindex="-1">Records</h1><p>Filter by what the record is, what its sources establish, and who published them. Each filter shows how many records it would leave.</p></div>
      <div class="browse" style="margin-top:28px">
        <aside class="filters" aria-label="Filters">
          <details id="filt-d"><summary>Filters <span id="filt-n"></span></summary><div class="facets">
            ${facet("posture", "Legal posture", POSTURES.map((p) => p.key), (v) => `${sw(v)}<span>${esc(P[v].name)}</span>`)}
            ${facet("type", "Kind of record", TYPE_ORDER, (v) => `<span>${esc(TYPES[v].one)}</span>`)}
            ${facet("conf", "Confidence in the sourcing", CONF_ORDER, (v) => `<span>${esc(CONF[v].name)}</span>`)}
            ${facet("status", "Editorial status", ["published", "needs_corroboration"], (v) => `<span>${esc(STATUS[v])}</span>`)}
            <div class="facet"><label for="f-pub" style="font-weight:650;padding:0 0 6px">Cited publisher</label>
              <select id="f-pub"><option value="">Any publisher</option>${pubCounts.map(([p, n]) => `<option value="${esc(p)}" ${f.pub === p ? "selected" : ""}>${esc(p.length > 60 ? p.slice(0, 58) + "…" : p)} (${n})</option>`).join("")}</select></div>
          </div></details>
        </aside>
        <div>
          <div class="toolbar">
            <span class="count" id="b-count" aria-live="polite"></span>
            <label for="b-q">Within results <input id="b-q" type="search" value="${esc(f.q)}" placeholder="Filter by name or handle" spellcheck="false"></label>
            <label for="b-sort">Sort <select id="b-sort">
              <option value="posture">Legal posture</option><option value="sources">Most sources</option><option value="claims">Most claims</option><option value="name">Name</option>
            </select></label>
          </div>
          <div class="active-filters" id="b-active"></div>
          <ul class="ledger" id="b-list" style="border-top:0"></ul>
          <p class="more" id="b-more"></p>
        </div>
      </div>
    </div>`;
    $("#b-sort").value = f.sort;
    if (window.matchMedia("(min-width: 821px)").matches) $("#filt-d").open = true;
    let shown = PAGE;
    const update = (resetPaging = true) => {
      if (resetPaging) shown = PAGE;
      const qs = new URLSearchParams();
      ["type", "posture", "conf", "status"].forEach((k) => f[k].length && qs.set(k, f[k].join(",")));
      if (f.pub) qs.set("pub", f.pub);
      if (f.q) qs.set("q", f.q);
      if (f.sort !== "posture") qs.set("sort", f.sort);
      const s = qs.toString().replace(/%2C/g, ",");
      history.replaceState(null, "", "#/browse" + (s ? "?" + s : ""));
      const list = sortEntities(filterEntities(f), f.sort);
      $("#b-count").textContent = `${plural(list.length, "record")}`;
      $("#b-list").innerHTML = list.slice(0, shown).map((e) => entityRow(e)).join("") || `<li class="empty"><h2>No records match these filters.</h2><p>Remove a filter to widen the results.</p></li>`;
      $("#b-more").innerHTML = list.length > shown ? `<button class="btn" type="button" id="b-more-btn">Show ${fmt(Math.min(PAGE, list.length - shown))} more of ${fmt(list.length - shown)}</button>` : "";
      const mb = $("#b-more-btn"); if (mb) mb.addEventListener("click", () => { shown += PAGE; update(false); });
      // Facet counts: how many records each option would leave, given the other filters.
      for (const key of ["type", "posture", "conf", "status"]) {
        const base = filterEntities(f, key);
        const prop = { type: (e) => e.type, posture: (e) => e.attribution.status, conf: (e) => e.confidence, status: (e) => e.status }[key];
        const counts = {};
        base.forEach((e) => { const v = prop(e); counts[v] = (counts[v] || 0) + 1; });
        $$(`[data-facet="${key}"] .c`).forEach((c) => { const n = counts[c.dataset.c] || 0; c.textContent = fmt(n); c.parentElement.classList.toggle("zero", !n); });
      }
      const act = [];
      ["posture", "type", "conf", "status"].forEach((k) => f[k].forEach((v) => act.push([k, v, k === "posture" ? P[v].name : k === "type" ? TYPES[v].one : k === "conf" ? `Confidence: ${CONF[v].name}` : STATUS[v]])));
      if (f.pub) act.push(["pub", f.pub, `Publisher: ${f.pub}`]);
      $("#b-active").innerHTML = act.map(([k, v, l]) => `<button type="button" data-k="${k}" data-v="${esc(v)}" aria-label="Remove filter ${esc(l)}">${esc(l)}</button>`).join("") + (act.length > 1 ? `<button type="button" class="clear" data-k="*">Clear all</button>` : "");
      $("#filt-n").textContent = act.length ? `(${act.length} active)` : "";
    };
    $$(".facet[data-facet] input").forEach((cb) => cb.addEventListener("change", () => {
      const key = cb.closest("[data-facet]").dataset.facet;
      f[key] = $$(`[data-facet="${key}"] input:checked`).map((x) => x.value);
      update();
    }));
    $("#f-pub").addEventListener("change", (ev) => { f.pub = ev.target.value; update(); });
    $("#b-sort").addEventListener("change", (ev) => { f.sort = ev.target.value; update(); });
    let raf = 0;
    $("#b-q").addEventListener("input", (ev) => { f.q = ev.target.value.trim(); cancelAnimationFrame(raf); raf = requestAnimationFrame(() => update()); });
    $("#b-active").addEventListener("click", (ev) => {
      const b = ev.target.closest("button"); if (!b) return;
      const k = b.dataset.k, v = b.dataset.v;
      if (k === "*") { ["type", "posture", "conf", "status"].forEach((x) => (f[x] = [])); f.pub = ""; }
      else if (k === "pub") f.pub = "";
      else f[k] = f[k].filter((x) => x !== v);
      $$(".facet[data-facet] input").forEach((cb) => { cb.checked = f[cb.closest("[data-facet]").dataset.facet].includes(cb.value); });
      $("#f-pub").value = f.pub;
      update();
    });
    update();
  }

  /* ----- Entity ----- */
  function viewEntity(id) {
    const e = byId.get(id);
    if (!e) return viewMissing("record", id);
    const p = P[e.attribution.status];
    const srcList = (e.sources || []).map((r) => r.source_id);
    const allSrc = Array.from(entSrc.get(e.id));
    const order = srcList.concat(allSrc.filter((s) => !srcList.includes(s)));
    const num = new Map(order.map((s, i) => [s, i + 1]));
    const claims = e.claims || [];
    const longName = e.name.length > 60;
    document.title = `${e.name}, DPRK IT-worker OSINT`;

    const claimHtml = CLAIM_TYPES.map(([t, label]) => {
      const cs = claims.filter((c) => c.type === t);
      if (!cs.length) return "";
      return `<div class="claim-group"><h3>${esc(label)} <span class="num">(${cs.length})</span></h3>${cs.map((c) => `
        <article class="claim" id="c-${esc(c.id)}">
          <div class="claim-head"><h4>${esc(human(c.predicate))}</h4>
            <span class="conf">Confidence: ${esc(CONF[c.confidence] ? CONF[c.confidence].name : c.confidence)}${c.observed_at ? `, observed ${fmtDate(c.observed_at)}` : ""}</span>${flag(c.status)}</div>
          ${c.value && Object.keys(c.value).length ? `<div class="claim-value">${renderValue(c.value)}</div>` : ""}
          <div class="evidence">${(c.sources || []).map((r) => {
            const s = D.sources[r.source_id];
            return `<figure class="quote"><blockquote><span>${esc(r.quote || "")}</span></blockquote>
              <figcaption>Source ${num.get(r.source_id) || ""}: <a href="#/s/${enc(r.source_id)}">${esc(sTitle(s))}</a>${s && s.publisher ? `, ${esc(s.publisher)}` : ""}${s && s.published_at ? `, ${fmtDate(s.published_at)}` : ""}. ${r.locator ? `Located at ${esc(r.locator)}.` : ""}</figcaption></figure>`;
          }).join("")}</div>
          ${(c.notes || []).length ? `<ul class="notes">${c.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
        </article>`).join("")}</div>`;
    }).join("");

    const sourcesHtml = `<ol class="cite-list">${order.map((sid) => {
      const s = D.sources[sid];
      const ref = (e.sources || []).find((r) => r.source_id === sid);
      return `<li id="src-${esc(sid)}"><div><div class="cite-title"><a href="#/s/${enc(sid)}">${esc(sTitle(s))}</a></div>
        <div class="cite-pub">${esc(s ? s.publisher : "")}${s && s.published_at ? `, ${fmtDate(s.published_at)}` : ""}</div>
        ${ref && ref.support ? `<p class="cite-support">${esc(ref.support)}</p>` : ""}
        ${ref && ref.locator ? `<p class="cite-loc">Located at ${esc(ref.locator)}</p>` : ""}
        ${!ref ? `<p class="cite-loc">Cited by a claim on this page.</p>` : ""}</div></li>`;
    }).join("")}</ol>`;

    const ids = [];
    if (e.legal_or_reported_name && e.legal_or_reported_name !== e.name) ids.push(`<li><span class="v">${esc(e.legal_or_reported_name)}</span><span class="m">Name as printed in an official document</span></li>`);
    (e.romanizations || []).forEach((r) => ids.push(`<li><span class="v">${esc(r)}</span><span class="m">Romanization</span></li>`));
    (e.aliases || []).forEach((a) => ids.push(`<li><span class="v${a.alias_type === "online-handle" ? " idv" : ""}">${esc(a.value)}</span><span class="m">${esc(human(a.alias_type || "alias"))}${a.relationship ? `, ${esc(human(a.relationship).toLowerCase())}` : ""}</span>${a.note ? `<span class="m-note">${esc(a.note)}</span>` : ""}</li>`));
    const accts = (e.accounts || []).map((a) => `<li><span class="v idv">${esc(a.identifier)}</span><span class="m">${esc(a.platform)}${a.status ? `, ${esc(a.status)}` : ""}${a.relationship ? `, ${esc(human(a.relationship).toLowerCase())}` : ""}</span>${a.note ? `<span class="m-note">${esc(a.note)}</span>` : ""}</li>`);

    const mOut = mentionOut ? Array.from(mentionOut.get(e.id) || []) : null;
    const mIn = mentionIn ? Array.from(mentionIn.get(e.id) || []) : null;
    const relList = (arr) => `<ul class="rel">${arr.map((x) => typeof x === "string" ? byId.get(x) : x).filter(Boolean)
      .sort((a, b) => P[a.attribution.status].order - P[b.attribution.status].order || a.name.localeCompare(b.name)).slice(0, 14)
      .map((x) => `<li><a href="#/e/${enc(x.id)}">${sw(x.attribution.status)}<span>${esc(x.name)}</span><small>${esc(TYPES[x.type].one)}, ${esc(P[x.attribution.status].name.toLowerCase())}</small></a></li>`).join("")}</ul>`;
    const shared = sharedSources(e);
    const nameKeys = new Set([e.name, e.legal_or_reported_name].filter(Boolean).map(squash));
    const sameName = D.entities.filter((x) => x.id !== e.id && [x.name, x.legal_or_reported_name].filter(Boolean).some((n) => nameKeys.has(squash(n))));

    const listBlock = (title, arr) => arr && arr.length ? `<section><h2>${esc(title)} <span>${arr.length}</span></h2><ul class="tags">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></section>` : "";
    const images = e.images || [];

    main().innerHTML = `<div class="page">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="#/browse?type=${e.type}">${esc(TYPES[e.type].many)}</a><span class="id">${esc(e.id)}</span><button class="copy" type="button" id="copy">Copy link</button></nav>
      <h1 class="ent-title${longName ? " long" : ""}" tabindex="-1">${esc(e.name)}</h1>
      <p class="ent-sub"><span>${esc(TYPES[e.type].one)}</span>${e.legal_or_reported_name && e.legal_or_reported_name !== e.name ? `<span>Officially printed as <b>${esc(e.legal_or_reported_name)}</b></span>` : ""}${sameName.length ? `<span>A separate record shares this name: ${sameName.slice(0, 3).map((x) => `${eLink(x)} (${esc(P[x.attribution.status].name.toLowerCase())})`).join(", ")}</span>` : ""}</p>

      <section class="posture" data-p="${p.key}" aria-label="Legal posture">
        <div class="posture-band"><span class="sw" data-p="${p.key}"></span></div>
        <div class="posture-body">
          <p class="posture-name">${esc(p.name)}</p>
          <p class="posture-def">${esc(p.def)}</p>
          ${e.attribution.legal_posture ? `<p class="posture-text">${esc(sentence(e.attribution.legal_posture))}</p>` : ""}
          <p class="posture-meta">${e.attribution.as_of ? `<span>Posture as of ${fmtDate(e.attribution.as_of)}</span>` : ""}${(e.attribution.source_ids || []).length ? `<span>Based on ${e.attribution.source_ids.slice().sort((a, b) => (num.get(a) || 99) - (num.get(b) || 99)).map((s) => `<a href="#src-${esc(s)}" data-jump>source ${num.get(s) || ""}</a>`).join(", ")}</span>` : ""}</p>
        </div>
      </section>
      ${e.status === "needs_corroboration" ? `<div class="corro-note" role="note">${FLAG_SVG.replace('width="11" height="13"', 'width="14" height="16"')}<p><b>Needs corroboration.</b> This record rests on one source family or has an open identity question. Treat it as a lead to check.</p></div>` : ""}

      <dl class="facts">
        <div><dt>Confidence in sourcing</dt><dd>${esc(CONF[e.confidence].name)}<small>${esc(CONF[e.confidence].def)}</small></dd></div>
        <div><dt>Editorial status</dt><dd>${esc(STATUS[e.status])}</dd></div>
        <div><dt>Evidence</dt><dd>${plural(allSrc.length, "source")}<small>${plural(claims.length, "quoted claim")}</small></dd></div>
        <div><dt>Last checked against sources</dt><dd>${fmtDate(e.last_verified_at) || "Not recorded"}</dd></div>
      </dl>

      ${e.identity_boundary ? `<section class="boundary"><h2>Identity boundary: read before linking anything to this record</h2><p>${esc(e.identity_boundary)}</p></section>` : ""}

      <div class="ent-grid">
        <div>
          ${claims.length ? `<section class="block"><h2>Claims and the exact words behind them</h2><p class="block-sub">Each claim quotes its source verbatim, with where in the document it appears.</p>${claimHtml}</section>` : ""}
          <section class="block"><h2>${claims.length ? "Sources" : "What the sources say"}</h2><p class="block-sub">${claims.length ? "Every document this record cites." : "This record has no atomic claims yet. Each source below says, in one sentence, what it establishes."}</p>${sourcesHtml}</section>
          ${(e.caveats || []).length ? `<section class="block"><h2>Limits of this record</h2><p class="block-sub">How far the editors say this record goes.</p><ul class="caveats">${e.caveats.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></section>` : ""}
          ${(e.infrastructure || []).length ? `<section class="block infra"><h2>Structured notes and indicators</h2><p class="block-sub">As recorded from the sources. Values are historical and shown as text only.</p>${e.infrastructure.map((it, i) => {
            const label = human(it.type || it.kind || "Item " + (i + 1));
            const hint = [it.value, it.indicator, it.domain, it.reported_name, it.name, it.provider].find((x) => typeof x === "string");
            return `<details><summary>${esc(label)}${hint ? `: <span class="id">${esc(hint.length > 70 ? hint.slice(0, 68) + "…" : hint)}</span>` : ""}</summary>${renderValue(it)}</details>`;
          }).join("")}</section>` : ""}
        </div>
        <aside class="aside" aria-label="Identifiers and related records">
          ${ids.length ? `<section><h2>Names and aliases <span>${ids.length}</span></h2><ul class="ids">${ids.join("")}</ul></section>` : ""}
          ${accts.length ? `<section><h2>Accounts as reported <span>${accts.length}</span></h2><ul class="ids">${accts.join("")}</ul><p class="hint">Historical identifiers, shown as plain text exactly as the source published them, for recognition only. Please leave these accounts alone.</p></section>` : ""}
          ${listBlock("Organizations", e.organizations)}
          ${listBlock("Front companies", e.front_companies)}
          ${listBlock("Locations in the reporting", e.locations)}
          ${listBlock("Methods", e.ttps)}
          ${(e.lazarus_group_routes || []).length ? `<section><h2>lazarus.group profiles <span>${e.lazarus_group_routes.length}</span></h2><ul class="tags">${e.lazarus_group_routes.map((x) => `<li class="id">${esc(x)}</li>`).join("")}</ul><p class="hint">Profile names a source ties to this record. A trailing ? marks a possible, unconfirmed link.</p></section>` : ""}
          ${images.length ? `<section><h2>Images in the sources <span>${images.length}</span></h2><ul class="ids">${images.map((im) => {
            const reason = im.source_url ? withheldReason(im.source_url) : "x";
            const how = im.publication_handling === "link-only" && !reason ? extLink(im.source_url, "View on the source page") : "Not reproduced here";
            return `<li><span class="v" style="font-weight:500">${esc(im.caption || "Untitled image")}</span><span class="m">${how}</span></li>`;
          }).join("")}</ul><p class="hint">Photographs of people stay on the source page.</p></section>` : ""}
          ${sameName.length ? `<section><h2>Same name, separate record</h2>${relList(sameName)}<p class="hint">Each record stays separate until a source links them. Compare the identity boundaries before treating these as one person or company.</p></section>` : ""}
          <section id="rel-out"><h2>Records this one mentions</h2>${mOut ? (mOut.length ? relList(mOut) : `<p class="hint">None found.</p>`) : `<p class="hint">Working it out…</p>`}</section>
          <section id="rel-in"><h2>Records that mention this one</h2>${mIn ? (mIn.length ? relList(mIn) : `<p class="hint">None found.</p>`) : `<p class="hint">Working it out…</p>`}<p class="hint">Found by matching names and record ids in the text. Check the quotes before relying on a link.</p></section>
          ${shared.length ? `<section><h2>Cited by the same documents</h2>${relList(shared)}<p class="hint">These records share a document. Each one stands on its own claims.</p></section>` : ""}
          <section><h2>Something wrong?</h2><p class="hint" style="font-size:0.88rem">Open a <a href="${ISSUE_URL}" rel="noopener">correction issue</a> with the record id <span class="id">${esc(e.id)}</span> and the source that shows it. If you are named here, say so; your request is handled first and can be kept private.</p></section>
        </aside>
      </div>
    </div>`;
    bindCopy();
    $$("[data-jump]").forEach((a) => a.addEventListener("click", (ev) => { ev.preventDefault(); const t = document.getElementById(a.getAttribute("href").slice(1)); if (t) { t.scrollIntoView({ block: "start" }); t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true }); } }));
    if (!mentionOut) pendingRelated = () => { if (current === "#/e/" + enc(e.id) || current === "#/e/" + e.id) { const y = scrollY; viewEntity(id); scrollTo(0, y); } };
  }
  let pendingRelated = null;

  function bindCopy() {
    const b = $("#copy");
    if (!b) return;
    b.addEventListener("click", async () => {
      const url = location.href;
      try { await navigator.clipboard.writeText(url); b.textContent = "Link copied"; }
      catch (err) { window.prompt("Copy this link", url); }
      setTimeout(() => (b.textContent = "Copy link"), 2000);
    });
  }

  /* ----- Source ----- */
  function viewSource(id) {
    const s = D.sources[id + ""];
    if (!s) return viewMissing("source", id);
    document.title = `${sTitle(s)}, DPRK IT-worker OSINT`;
    const ents = Array.from(cited.get(id) || []).map((x) => byId.get(x)).filter(Boolean)
      .sort((a, b) => P[a.attribution.status].order - P[b.attribution.status].order || a.name.localeCompare(b.name));
    const quotes = [];
    for (const e of ents) for (const c of e.claims || []) for (const r of c.sources || []) if (r.source_id === id) quotes.push({ e, c, r });
    const supports = ents.map((e) => ({ e, ref: (e.sources || []).find((r) => r.source_id === id) })).filter((x) => x.ref && x.ref.support);
    const reason = withheldReason(s.url);
    const meta = [
      ["Publisher", esc(s.publisher)],
      s.published_at ? ["Published", fmtDate(s.published_at)] : ["Published", `<span class="no">No date printed (a living page)</span>`],
      s.accessed_at ? ["Last read", fmtDate(s.accessed_at)] : null,
      s.content_type ? ["Format", esc(human(s.content_type))] : null,
      (s.languages || []).length ? ["Language", esc(s.languages.map(langName).join(", "))] : null,
      ["Address", `<span class="id">${esc(s.url)}</span>`],
      s.sha256 ? ["SHA-256 of reviewed copy", `<span class="id">${esc(s.sha256)}</span>`] : null,
      s.local_copy ? ["Copy in repository", `<span class="id">${esc(s.local_copy)}</span>`] : null,
      s.note ? ["Note", esc(s.note)] : null,
      ["Source id", `<span class="id">${esc(s.id)}</span>`],
    ].filter(Boolean);
    main().innerHTML = `<div class="page">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="#/sources">Sources</a><span>${esc(s.publisher)}</span><button class="copy" type="button" id="copy">Copy link</button></nav>
      <h1 class="src-title" tabindex="-1">${esc(sTitle(s))}</h1>
      <p class="src-pub">${esc(s.publisher)}${s.published_at ? `, ${fmtDate(s.published_at)}` : ""}</p>
      <div class="src-open">
        ${reason ? `<p class="withheld">The original address is shown as plain text. ${esc(reason)}${s.archived_url && !defangedUrl(s.archived_url) ? " The archived copy is linked instead." : ""}</p>` : `<a class="btn" href="${esc(s.url)}" rel="noopener noreferrer nofollow" target="_blank">Open the original document<span class="sr"> (new tab)</span></a>`}
        ${s.archived_url ? extLink(s.archived_url, "Archived copy") : ""}
      </div>
      <div class="src-meta"><dl class="kv">${meta.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl></div>
      <div class="ent-grid">
        <div>
          ${quotes.length ? `<section class="block"><h2>Quoted from this document</h2><p class="block-sub">${plural(quotes.length, "exact quote")} used as evidence in this dataset.</p>
            ${quotes.map(({ e, c, r }) => `<div class="claim"><div class="claim-head"><h4>${eLink(e)}</h4><span class="conf">${esc(human(c.predicate))}</span></div>
              <div class="evidence"><figure class="quote"><blockquote><span>${esc(r.quote || "")}</span></blockquote><figcaption>${r.locator ? `Located at ${esc(r.locator)}.` : ""}</figcaption></figure></div></div>`).join("")}</section>` : ""}
          ${supports.length ? `<section class="block"><h2>What it establishes, record by record</h2><ol class="cite-list">${supports.map(({ e, ref }) => `<li><div><div class="cite-title">${eLink(e)}</div><p class="cite-support">${esc(ref.support)}</p>${ref.locator ? `<p class="cite-loc">Located at ${esc(ref.locator)}</p>` : ""}</div></li>`).join("")}</ol></section>` : ""}
        </div>
        <aside class="aside" aria-label="Records citing this source">
          <section><h2>Cited by <span>${plural(ents.length, "record")}</span></h2><ul class="rel">${ents.map((x) => `<li><a href="#/e/${enc(x.id)}">${sw(x.attribution.status)}<span>${esc(x.name)}</span><small>${esc(TYPES[x.type].one)}, ${esc(P[x.attribution.status].name.toLowerCase())}</small></a></li>`).join("")}</ul></section>
        </aside>
      </div>
    </div>`;
    bindCopy();
  }

  /* ----- Sources index ----- */
  function viewSources(params) {
    let q = params.get("q") || "", sort = params.get("sort") || "cited", pub = params.get("pub") || "";
    const pubs = new Map();
    Object.values(D.sources).forEach((s) => pubs.set(s.publisher, (pubs.get(s.publisher) || 0) + 1));
    const pubList = Array.from(pubs.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    main().innerHTML = `<div class="page">
      <div class="browse-head"><p class="ribbon">Ministry of footnotes</p><h1 tabindex="-1">Sources</h1><p>Every public document the dataset cites: court filings, sanctions notices, UN reports, advisories, research and reporting. Open one to see each record it supports and every quote taken from it.</p></div>
      <div class="toolbar" style="margin-top:28px">
        <span class="count" id="src-count" aria-live="polite"></span>
        <label for="src-q">Find <input id="src-q" type="search" value="${esc(q)}" placeholder="Title, publisher or id" spellcheck="false"></label>
        <label for="src-pub">Publisher <select id="src-pub" style="max-width:220px"><option value="">Any</option>${pubList.map(([p, n]) => `<option value="${esc(p)}" ${p === pub ? "selected" : ""}>${esc(p.length > 50 ? p.slice(0, 48) + "…" : p)} (${n})</option>`).join("")}</select></label>
        <label for="src-sort">Sort <select id="src-sort"><option value="cited">Most cited</option><option value="newest">Newest</option><option value="publisher">Publisher</option></select></label>
      </div>
      <ul class="ledger src" id="src-list" style="border-top:0"></ul>
      <p class="more" id="src-more"></p>
    </div>`;
    $("#src-sort").value = sort;
    let shown = PAGE;
    const update = (reset = true) => {
      if (reset) shown = PAGE;
      const qs = new URLSearchParams();
      if (q) qs.set("q", q); if (pub) qs.set("pub", pub); if (sort !== "cited") qs.set("sort", sort);
      history.replaceState(null, "", "#/sources" + (qs.toString() ? "?" + qs : ""));
      const toks = norm(q).split(" ").filter(Boolean);
      let list = srcRows.filter((r) => (!pub || r.s.publisher === pub) && toks.every((t) => r.n.includes(t))).map((r) => r.s);
      const c = (s) => cited.get(s.id)?.size || 0;
      list.sort(sort === "newest" ? (a, b) => (b.published_at || "").localeCompare(a.published_at || "") : sort === "publisher" ? (a, b) => a.publisher.localeCompare(b.publisher) || sTitle(a).localeCompare(sTitle(b)) : (a, b) => c(b) - c(a) || sTitle(a).localeCompare(sTitle(b)));
      $("#src-count").textContent = plural(list.length, "source");
      $("#src-list").innerHTML = list.slice(0, shown).map((s) => sourceRow(s)).join("") || `<li class="empty"><h2>No source matches.</h2><p>Try part of a title or a publisher name.</p></li>`;
      $("#src-more").innerHTML = list.length > shown ? `<button class="btn" type="button" id="src-more-btn">Show ${fmt(Math.min(PAGE, list.length - shown))} more of ${fmt(list.length - shown)}</button>` : "";
      const mb = $("#src-more-btn"); if (mb) mb.addEventListener("click", () => { shown += PAGE; update(false); });
    };
    let raf = 0;
    $("#src-q").addEventListener("input", (ev) => { q = ev.target.value.trim(); cancelAnimationFrame(raf); raf = requestAnimationFrame(() => update()); });
    $("#src-pub").addEventListener("change", (ev) => { pub = ev.target.value; update(); });
    $("#src-sort").addEventListener("change", (ev) => { sort = ev.target.value; update(); });
    update();
  }

  /* ----- About ----- */
  function viewAbout() {
    document.title = "About, DPRK IT-worker OSINT";
    main().innerHTML = `<div class="page"><div class="prose">
      <p class="ribbon">Instructions from the committee for careful reading</p>
      <h1 tabindex="-1">How to read this dataset</h1>
      <p style="margin-top:18px">This dataset exists so that hiring teams, incident responders, researchers and reporters can recognise a known persona or facilitator and find the public document that names them. It compiles what governments, courts, the UN, security vendors and journalists have already published, with the citation attached to every statement. Every record starts from a published document.</p>
      <h2>How this was compiled</h2>
      <p>This dataset was compiled by AI agents from public documents. Every claim quotes and links its source, and the quotes were re-checked against the originals, but it will contain mistakes. Treat a record as a pointer to its sources: check the source before relying on it, and <a href="${ISSUE_URL}" rel="noopener">request a correction</a> if something is wrong.</p>
      <h2>Legal posture comes before the name</h2>
      <p>Each record is filed under the strongest posture its sources establish, and each posture keeps its own meaning. A charge means prosecutors have filed criminal charges and a court decides the case. UN and government reporting names a person or company in an official report. A research attribution is a publisher’s assessment.</p>
    </div>
    <ul class="key about-key">${POSTURES.map((p) => `<li data-p="${p.key}">${postureLabel(p.key)}<p>${esc(p.def)}</p></li>`).join("")}</ul>
    <div class="prose">
      <h2>Confidence and status</h2>
      <p><b>Confidence</b> is about the sourcing. ${CONF_ORDER.map((c) => `${CONF[c].name}: ${CONF[c].def.replace(/\.$/, "").toLowerCase()}.`).join(" ")}</p>
      <p><b>Status</b> is the editorial call. A record marked <b>needs corroboration</b> rests on one source family or has an open identity question. Flagged records stay visible so the gap can be closed.</p>
      <h2>Personas, workers and the identity boundary</h2>
      <p>A persona is a name an employer or platform saw. A worker is a person a government or court has named. A facilitator is someone outside the DPRK who provided identities, laptops, bank accounts or companies. A front company is an entity a government or publisher has named. A cluster is an incident or a group of observations described without naming individuals.</p>
      <p>Records are linked only where a source links them. A shared name, handle, photograph, IP address or wallet is recorded as a lead. Every person record carries an identity boundary saying what it is and what stays separate from it.</p>
      <h2>Left out on purpose</h2>
      <ul>
        <li>Phone numbers, street addresses, national identity numbers, payment-card or bank details.</li>
        <li>Identity-document images. A written statement that the source showed one is enough.</li>
        <li>Present whereabouts. Locations are report context, dated to the source.</li>
        <li>Victim details: the people whose identities were stolen, the employees who were deceived.</li>
        <li>Anything from a private account, a login, a paywall bypass, active scanning, malware execution, or contact with a subject.</li>
        <li>Facial recognition or any identity inference from appearance.</li>
        <li>The workers’ families, and anything about a worker beyond what the scheme documents establish. Individual DPRK IT workers act under state direction and surrender most of their pay; they appear here as subjects of reporting.</li>
      </ul>
      <p style="margin-top:12px">Full policy: <a href="${SCOPE_URL}" rel="noopener">SCOPE-AND-ETHICS.md</a>.</p>
      <h2>How this viewer handles identifiers</h2>
      <p>Handles, emails, domains and wallets are shown exactly as the dataset stores them, as plain text. Source documents are linked. When a document’s address is itself a subject’s profile, messaging handle or indicator domain, that address is shown as plain text too. Photographs of people stay on the source page.</p>
      <h2>Corrections and removal</h2>
      <p>Anything here can be wrong: a source misread, a posture overstated, two people merged into one, a case that has since been resolved. <a href="${ISSUE_URL}" rel="noopener">Open a correction issue</a> with the record id, what is wrong, and the source that shows it, or read <a href="${CORRECTIONS_URL}" rel="noopener">CORRECTIONS.md</a>. If the matter is sensitive, open the issue with only the record id and the words “private review requested”.</p>
      <p>If you are named here, say so. Your request is handled before anything else, the record is marked as needing corroboration while it is reviewed, and the review can be kept private. Your word that the record is wrong is enough to start a review.</p>
      <h2>Use the data</h2>
      <p>Data is released under CC BY 4.0 and code under MIT. Wherever you can, cite the underlying document directly. The whole dataset is one file, <span class="id">build/data.json</span>, with flat CSV exports alongside. Built ${fmtDate(D.stats.generated_at)}.</p>
    </div></div>`;
  }

  function viewMissing(kind, id) {
    document.title = "Not found, DPRK IT-worker OSINT";
    main().innerHTML = `<div class="page"><div class="empty missing"><p class="empty-slogan big">This page does not exist. It has always not existed.</p><h1 tabindex="-1">No ${kind} with the id “${esc(id)}”.</h1><p>It may have been withdrawn: records that lose their basis are deleted, and their ids stay retired. The repository history shows why.</p><p><a href="#/search?q=${enc(id.replace(/[-_]+/g, " "))}">Search for it by name</a> or <a href="#/browse">browse all records</a>.</p></div></div>`;
  }

  /* ---------------- Router ---------------- */
  let current = "";
  function route() {
    const h = location.hash || "#/";
    const prev = current;
    current = h;
    const [path, query] = h.slice(1).split("?");
    const params = new URLSearchParams(query || "");
    const parts = path.split("/").filter(Boolean);
    const tip = $("#tip"); if (tip) tip.hidden = true;
    closeQuick();
    let nav = "";
    try {
      if (!parts.length) { document.title = "DPRK IT-worker OSINT"; viewOverview(); }
      else if (parts[0] === "e" && parts[1]) { nav = "browse"; viewEntity(decodeURIComponent(parts.slice(1).join("/"))); }
      else if (parts[0] === "s" && parts[1]) { nav = "sources"; viewSource(decodeURIComponent(parts.slice(1).join("/"))); }
      else if (parts[0] === "browse") { nav = "browse"; document.title = "Records, DPRK IT-worker OSINT"; viewBrowse(params); }
      else if (parts[0] === "sources") { nav = "sources"; document.title = "Sources, DPRK IT-worker OSINT"; viewSources(params); }
      else if (parts[0] === "search") { viewSearch(params); }
      else if (parts[0] === "about") { nav = "about"; viewAbout(); }
      else viewMissing("page", path);
    } catch (err) {
      console.error(err);
      main().innerHTML = `<div class="page"><div class="empty"><h1 tabindex="-1">This page failed to render.</h1><p>${esc(err.message)}</p><p><a href="#/">Back to the overview</a></p></div></div>`;
    }
    $$(".nav a").forEach((a) => { if (a.dataset.nav === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    if (prev) {
      window.scrollTo(0, 0);
      const h1 = $("#main h1");
      if (h1 && parts[0] !== "search") h1.focus({ preventScroll: true });
    }
  }

  /* ---------------- Header quick search ---------------- */
  let quickSel = -1, quickItems = [];
  function closeQuick() {
    const list = $("#quick-list"), input = $("#quick-input");
    if (!list) return;
    list.hidden = true; input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); quickSel = -1;
  }
  function bindQuick() {
    const input = $("#quick-input"), list = $("#quick-list"), form = $("#quick-form");
    let raf = 0;
    const render = () => {
      const q = input.value.trim();
      if (!D || q.length < 2) { closeQuick(); return; }
      const res = searchEntities(q, 8);
      quickItems = res.map((r) => ({ href: "#/e/" + enc(r.e.id) })).concat([{ href: "#/search?q=" + enc(q) }]);
      list.innerHTML = res.map((r, i) => `<li role="option" id="qo-${i}" data-i="${i}" aria-selected="false">${sw(r.e.attribution.status)}<span class="ql-name">${r.row.label === "Name" ? hl(r.e.name, q) : esc(r.e.name)}</span><span class="ql-meta">${esc(P[r.e.attribution.status].name)}, ${esc(TYPES[r.e.type].one.toLowerCase())}${r.row.label !== "Name" ? `. ${esc(r.row.label)}: ${hl(r.row.raw, q)}` : ""}</span></li>`).join("")
        + `<li role="option" class="ql-all" id="qo-${res.length}" data-i="${res.length}" aria-selected="false">${res.length ? "All results" : "No record matches. Search quotes and sources"} for “${esc(q)}”</li>`;
      list.hidden = false; input.setAttribute("aria-expanded", "true"); quickSel = -1;
    };
    const select = (i) => {
      quickSel = i;
      $$("li", list).forEach((li) => li.setAttribute("aria-selected", String(+li.dataset.i === i)));
      if (i >= 0) { input.setAttribute("aria-activedescendant", "qo-" + i); $("#qo-" + i).scrollIntoView({ block: "nearest" }); }
    };
    input.addEventListener("input", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(render); });
    input.addEventListener("focus", () => { if (input.value.trim().length >= 2) render(); });
    input.addEventListener("keydown", (ev) => {
      if (list.hidden) return;
      if (ev.key === "ArrowDown") { ev.preventDefault(); select(Math.min(quickItems.length - 1, quickSel + 1)); }
      else if (ev.key === "ArrowUp") { ev.preventDefault(); select(Math.max(-1, quickSel - 1)); }
      else if (ev.key === "Escape") { closeQuick(); }
    });
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const q = input.value.trim();
      if (quickSel >= 0 && quickItems[quickSel]) location.hash = quickItems[quickSel].href;
      else if (q) location.hash = "#/search?q=" + enc(q);
      input.blur();
    });
    list.addEventListener("mousedown", (ev) => { const li = ev.target.closest("li"); if (li) { ev.preventDefault(); location.hash = quickItems[+li.dataset.i].href; input.blur(); } });
    input.addEventListener("blur", () => setTimeout(closeQuick, 120));
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && !ev.metaKey && !ev.ctrlKey) {
        ev.preventDefault();
        const hero = $("#hero-q");
        (hero || input).focus();
      }
    });
  }

  /* ---------------- Theme ---------------- */
  function bindTheme() {
    const btn = $("#theme-btn");
    const isDark = () => {
      const t = document.documentElement.getAttribute("data-theme");
      return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    };
    const label = () => btn.setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme");
    label();
    btn.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("dprk-theme", next); } catch (e) { /* storage unavailable */ }
      label();
    });
  }

  /* ---------------- Boot ---------------- */
  bindTheme();
  bindQuick();
  async function loadData() {
    for (const url of [DATA_URL, DATA_FALLBACK_URL]) {
      try {
        const r = await fetch(url, { cache: "no-cache" });
        if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
        return await r.json();
      } catch (err) {
        if (url === DATA_FALLBACK_URL) throw err;
      }
    }
  }
  loadData()
    .then((data) => {
      prepare(data);
      const gen = data.stats && data.stats.generated_at;
      $("#foot-meta").textContent = `Dataset built ${gen ? fmtDate(gen) : "on an unknown date"}: ${fmt(data.stats.entities)} records, ${fmt(data.stats.claims)} claims, ${fmt(data.stats.sources)} sources.`;
      window.addEventListener("hashchange", route);
      route();
      buildMentions(() => { if (pendingRelated) { const f = pendingRelated; pendingRelated = null; f(); } });
    })
    .catch((err) => {
      console.error(err);
      $("#boot-msg").innerHTML = `The dataset could not be loaded. ${esc(err.message)}. Serve the built site over HTTP, or run <span class="id">make serve</span> and open <span class="id">/viewer/</span>.`;
    });
})();
