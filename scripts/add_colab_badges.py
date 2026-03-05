#!/usr/bin/env python3
"""Add 'Open in Colab' badges to all template notebooks."""

import json
from pathlib import Path

REPO = "duoan/TorchCode"
BRANCH = "main"
TEMPLATES_DIR = Path(__file__).resolve().parent.parent / "templates"
BADGE_IMG = "https://colab.research.google.com/assets/colab-badge.svg"


def colab_url(filename: str) -> str:
    return (
        f"https://colab.research.google.com/github/{REPO}"
        f"/blob/{BRANCH}/templates/{filename}"
    )


def badge_markdown(filename: str) -> str:
    return f"[![Open In Colab]({BADGE_IMG})]({colab_url(filename)})"


def process_notebook(path: Path) -> bool:
    with open(path, "r", encoding="utf-8") as f:
        nb = json.load(f)

    cells = nb.get("cells", [])
    if not cells or cells[0].get("cell_type") != "markdown":
        return False

    source_lines = cells[0]["source"]
    flat = "".join(source_lines) if isinstance(source_lines, list) else source_lines
    if "colab-badge.svg" in flat:
        return False

    badge = badge_markdown(path.name)
    cells[0]["source"] = [badge + "\n\n"] + (
        source_lines if isinstance(source_lines, list) else [source_lines]
    )

    with open(path, "w", encoding="utf-8") as f:
        json.dump(nb, f, ensure_ascii=False, indent=1)
        f.write("\n")

    return True


def main() -> None:
    updated = 0
    for nb_path in sorted(TEMPLATES_DIR.glob("*.ipynb")):
        if process_notebook(nb_path):
            print(f"  ✅ {nb_path.name}")
            updated += 1
        else:
            print(f"  ⏭️  {nb_path.name} (already has badge or skipped)")
    print(f"\nDone — updated {updated} notebooks.")


if __name__ == "__main__":
    main()
