"""
Entfernt schwarzen Hintergrund aus einem Bild und macht ihn transparent.
Verwendung: python scripts/remove-bg.py <input.png> [output.png]
"""
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Bitte zuerst installieren: pip install Pillow")
    sys.exit(1)

def remove_black_bg(input_path: str, output_path: str | None = None, threshold: int = 50):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        r, g, b, a = item
        # Schwarz und sehr dunkle Pixel transparent machen
        if r < threshold and g < threshold and b < threshold:
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    out = output_path or input_path.replace(".png", "-transparent.png")
    img.save(out, "PNG")
    print(f"Gespeichert: {out}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Verwendung: python remove-bg.py <input.png> [output.png]")
        sys.exit(1)
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    remove_black_bg(input_file, output_file)
