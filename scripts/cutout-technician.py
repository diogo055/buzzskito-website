"""Background-remove the BuzzSkito technician from the real site photos
to transparent PNGs for the cinematic-hero parallax layers."""
from rembg import remove, new_session
from PIL import Image
import io, os

SRC = r"C:\Users\buzzs\buzzskito-website\public"
JOBS = [
    ("spray-backyard.webp", "technician-walk.png"),   # side profile + orange backpack
    ("hero-spray.webp",     "technician-spray.png"),  # facing camera, spraying mist
]

# Human-specific segmentation isolates the PERSON only (ignores the shed/wheelbarrow
# that the general u2net model kept as foreground).
session = new_session("u2net_human_seg")

for src, out in JOBS:
    src_path = os.path.join(SRC, src)
    out_path = os.path.join(SRC, out)
    with open(src_path, "rb") as f:
        data = f.read()
    cut = remove(data, session=session, alpha_matting=True,
                 alpha_matting_foreground_threshold=240,
                 alpha_matting_background_threshold=15,
                 alpha_matting_erode_size=8)  # returns PNG bytes with alpha
    img = Image.open(io.BytesIO(cut)).convert("RGBA")
    # Trim to the non-transparent bounding box so the layer is tight
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    img.save(out_path)
    print(f"{src} -> {out}  size={img.size}")
print("done")
