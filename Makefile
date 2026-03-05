COMPOSE := $(shell command -v podman >/dev/null 2>&1 && echo "podman compose" || echo "docker compose")

.PHONY: run stop clean setup-local badges

run:
	$(COMPOSE) up --build -d
	@echo ""
	@echo "🔥 TorchCode is running!"
	@echo "   Open http://localhost:8888"
	@echo ""

stop:
	$(COMPOSE) down

clean:
	$(COMPOSE) down -v
	rm -f data/progress.json

setup-local:
	@mkdir -p notebooks/_original_templates
	@cp templates/*.ipynb notebooks/_original_templates/
	@cp templates/*.ipynb notebooks/
	@cp solutions/*.ipynb notebooks/
	@echo "✅ Local notebooks ready in ./notebooks/"

badges:
	python scripts/add_colab_badges.py
