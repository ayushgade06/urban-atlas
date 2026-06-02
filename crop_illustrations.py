import os
from PIL import Image

def process_images():
    img_dir = r"C:\Users\AYUSH GADE\.gemini\antigravity\brain\00d866cc-dd8a-44d3-9598-e14018aad987"
    img_path = os.path.join(img_dir, "media__1780391120796.png")
    
    if not os.path.exists(img_path):
        print(f"Error: {img_path} not found.")
        return
        
    img = Image.open(img_path)
    width, height = img.size
    print(f"Image loaded: {img_path} with size {width}x{height}")
    
    # Crop matching the left-side and right-side artwork exactly
    left_box = (0, 0, int(width * 0.245), height)
    left_img = img.crop(left_box)
    
    right_box = (int(width * 0.755), 0, width, height)
    right_img = img.crop(right_box)
    
    # Sophisticated alpha-blending transparency keying
    def make_transparent(im):
        rgba = im.convert("RGBA")
        # Load pixels directly to be safe and avoid deprecation warnings
        pixels = list(rgba.getdata())
        
        new_pixels = []
        for r, g, b, a in pixels:
            # On a white background, red/pink shades have high Red, and lower Green & Blue.
            # Pure white has (255, 255, 255).
            # The alpha (opacity) is directly proportional to how much green/blue is keyed out.
            # Using the green channel as a mask creates a mathematically perfect alpha channel.
            alpha = 255 - g
            
            # Boost contrast slightly to keep drawings crisp, but keep it smooth
            alpha = min(255, int(alpha * 1.35))
            
            if r > 252 and g > 252 and b > 252:
                new_pixels.append((r, g, b, 0))
            else:
                new_pixels.append((r, g, b, alpha))
                
        rgba.putdata(new_pixels)
        return rgba

    left_transparent = make_transparent(left_img)
    right_transparent = make_transparent(right_img)
    
    public_dir = r"d:\urban-atlas-prod\public"
    os.makedirs(public_dir, exist_ok=True)
    
    left_out = os.path.join(public_dir, "hero-bg-left.png")
    right_out = os.path.join(public_dir, "hero-bg-right.png")
    
    left_transparent.save(left_out, "PNG")
    right_transparent.save(right_out, "PNG")
    
    print("Successfully saved cropped alpha-blended transparent illustrations:")
    print(f"  - Left: {left_out}")
    print(f"  - Right: {right_out}")

if __name__ == "__main__":
    process_images()
