"""Warning Label for Humans — R2 entry. One fixed line, written verbatim."""
import pathlib

LINE = "WARNING: This human checks a phone with no new messages every 30 seconds. Do not ask what changed. Nothing did."

def main():
    out = pathlib.Path("/output/entry.txt")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(LINE, encoding="utf-8")

if __name__ == "__main__":
    main()
