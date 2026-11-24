from pathlib import Path

LINE = "WARNING: This human will win an argument in the shower that ended six hours ago."

out = Path("/output/entry.txt")
out.parent.mkdir(parents=True, exist_ok=True)
text = LINE.strip()
assert 1 <= len(text) <= 160
out.write_text(text, encoding="utf-8")
