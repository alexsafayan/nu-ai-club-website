from PIL import Image
import colorsys
import math

def oklch_to_rgb(l, c, h):
    # Convert OKLCH to OKLab
    # h is in degrees, convert to radians
    h_rad = math.radians(h)
    # a and b components in OKLab
    a = c * math.cos(h_rad)
    b = c * math.sin(h_rad)
    
    # OKLab to linear sRGB (approximation)
    l_ = l + 0.3963377774 * a + 0.2158037573 * b
    m_ = l - 0.1055613458 * a - 0.0638541728 * b
    s_ = l - 0.0894841775 * a - 1.2914855480 * b
    
    # Linear sRGB to sRGB
    l_ = math.pow(l_, 3) if l_ > 0 else 0
    m_ = math.pow(m_, 3) if m_ > 0 else 0
    s_ = math.pow(s_, 3) if s_ > 0 else 0
    
    r = +4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_
    g = -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_
    b = -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147010 * s_
    
    # Clamp values to [0, 1] range
    r = max(0, min(1, r))
    g = max(0, min(1, g))
    b = max(0, min(1, b))
    
    # Convert to 8-bit RGB
    return (
        int(r * 255),
        int(g * 255),
        int(b * 255)
    )

# Create a 32x32 image (standard favicon size)
size = 32
img = Image.new('RGB', (size, size))

# Convert OKLCH(0.625 0.2664 303.35) to RGB
rgb = oklch_to_rgb(0.625, 0.2664, 303.35)

# Fill the image with our color
for x in range(size):
    for y in range(size):
        img.putpixel((x, y), rgb)

# Save as ICO file
img.save('app/favicon.ico', format='ICO') 
print("Favicon generated successfully!")