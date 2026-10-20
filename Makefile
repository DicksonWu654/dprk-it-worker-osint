.PHONY: help setup format validate build serve check-sources search new clean

PY ?= python3
PORT ?= 8765

help:
	@echo "make setup          install the one Python dependency (jsonschema)"
	@echo "make format         rewrite data files in canonical form"
	@echo "make validate       schema, referential integrity and sensitive-data lint"
	@echo "make build          compile build/ (static viewer, data, CSVs, stats) and docs/ (Markdown wiki)"
	@echo "make serve          build, then serve the viewer at http://localhost:$(PORT)/viewer/"
	@echo "make check-sources  HEAD-check every source URL (network)"
	@echo "make search Q=term  search names, aliases, handles, emails, wallets"
	@echo "make new TYPE=persona ID=jane-doe   scaffold a new entity file"

setup:
	$(PY) -m pip install -r requirements.txt

format:
	$(PY) tools/format.py

validate:
	$(PY) tools/validate.py

build: validate
	$(PY) tools/build.py

serve: build
	@echo "open http://localhost:$(PORT)/viewer/"
	$(PY) -m http.server $(PORT) --directory .

check-sources:
	$(PY) tools/check_sources.py

search:
	$(PY) tools/search.py "$(Q)"

new:
	$(PY) tools/new_entity.py --type $(TYPE) --id $(ID)

clean:
	rm -rf build
