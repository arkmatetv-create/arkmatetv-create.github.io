from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path

ROOT = Path('/Users/mehmetarkinyegul/Documents/New project/site-work/arkmatetv-create.github.io')
IMG = ROOT / 'images'
FONT_BOLD = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
FONT_REG = '/System/Library/Fonts/Supplemental/Arial.ttf'
LOGO = Image.open(IMG / 'logo.png').convert('RGBA')

slides = [
    {'output': 'store_live.png', 'source': 'perfect_live.png', 'title': 'FAST LIVE TV', 'subtitle': 'Browse channels instantly', 'accent': (47, 138, 255), 'kind': 'live', 'title_size': 60},
    {'output': 'store_player.png', 'source': 'app_player.png', 'title': 'POWERFUL VIDEO\nPLAYER', 'subtitle': 'Smooth playback controls', 'accent': (255, 126, 66), 'kind': 'player', 'title_size': 44},
    {'output': 'store_movies.png', 'source': 'clean_app_movies_en.png', 'title': 'MOVIE LIBRARY', 'subtitle': 'Organized content browsing', 'accent': (72, 214, 153), 'kind': 'movie', 'title_size': 58},
    {'output': 'store_settings.png', 'source': 'screenshot_settings.png', 'title': 'SMART SETTINGS', 'subtitle': 'Customize your experience', 'accent': (171, 118, 255), 'kind': 'settings', 'title_size': 58},
    {'output': 'store_series.png', 'source': 'clean_app_series_en.png', 'title': 'SERIES & FAVORITES', 'subtitle': 'Access your content quickly', 'accent': (255, 196, 72), 'kind': 'series', 'title_size': 50},
]


def font(path, size):
    return ImageFont.truetype(path, size=size)


def rounded_mask(size, radius):
    mask = Image.new('L', size, 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def add_brand_bar(img):
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    d.rounded_rectangle((18, 16, img.size[0] - 18, 74), radius=18, fill=(7, 13, 24, 235))
    logo = LOGO.copy()
    logo.thumbnail((28, 28))
    overlay.alpha_composite(logo, (34, 30))
    d.text((72, 28), 'Arkmate TV', font=font(FONT_BOLD, 24), fill=(245, 248, 255, 240))
    return Image.alpha_composite(img.convert('RGBA'), overlay)


def add_live_scrub(img):
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    sidebar = (18, 16, 318, img.size[1] - 18)
    listpanel = (324, 16, 520, img.size[1] - 18)
    d.rounded_rectangle(sidebar, radius=18, fill=(7, 15, 28, 255))
    d.rounded_rectangle(listpanel, radius=18, fill=(7, 15, 28, 255))

    small = font(FONT_REG, 18)
    strong = font(FONT_BOLD, 22)
    categories = ['Nature Channels', 'Sports Channels', 'News Channels', 'Kids Channels', 'Entertainment']
    channels = ['Nature One', 'Global News', 'Sports Central', 'Kids Planet', 'Docu World', 'Travel Live']

    y = 32
    d.text((42, y), 'LIVE TV', font=font(FONT_BOLD, 28), fill=(255, 255, 255, 235))
    y += 54
    for item in categories:
        d.rounded_rectangle((36, y, 296, y + 42), radius=12, outline=(255,255,255,26), fill=(18, 31, 53, 255))
        d.text((52, y + 10), item, font=small, fill=(225, 232, 242, 230))
        y += 50

    y = 32
    d.text((346, y), 'NOW PLAYING', font=strong, fill=(255, 255, 255, 235))
    y += 52
    for idx, item in enumerate(channels, start=1):
        d.rounded_rectangle((340, y, 500, y + 54), radius=12, outline=(255,255,255,20), fill=(14, 22, 38, 255))
        d.text((356, y + 8), f'{idx:02d}', font=small, fill=(120, 176, 255, 220))
        d.text((392, y + 8), item, font=small, fill=(240, 244, 250, 225))
        y += 62

    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    return add_brand_bar(img)


def clean_source(card, kind):
    card = card.resize((820, 560))
    if kind == 'live':
        return add_live_scrub(card)
    if kind in {'movie', 'series'}:
        return add_brand_bar(card)
    return card.convert('RGBA')


def build_slide(source_name, title, subtitle, accent, kind, title_size):
    canvas = Image.new('RGBA', (1600, 1000), (4, 10, 24, 255))
    bg = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
    dbg = ImageDraw.Draw(bg)
    dbg.ellipse((-120, -100, 620, 540), fill=(*accent, 80))
    dbg.ellipse((980, 40, 1580, 620), fill=(33, 95, 199, 60))
    dbg.ellipse((900, 540, 1500, 1040), fill=(10, 30, 70, 180))
    bg = bg.filter(ImageFilter.GaussianBlur(72))
    canvas = Image.alpha_composite(canvas, bg)

    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((58, 54, 248, 110), radius=28, fill=(255,255,255,26), outline=(255,255,255,30), width=1)
    logo = LOGO.copy()
    logo.thumbnail((34, 34))
    canvas.alpha_composite(logo, (74, 65))
    draw.text((122, 66), 'Arkmate TV', font=font(FONT_BOLD, 27), fill=(245, 248, 255, 240))

    draw.multiline_text((74, 184), title, font=font(FONT_BOLD, title_size), fill=(255, 255, 255, 250), spacing=6)
    draw.text((78, 270), subtitle, font=font(FONT_REG, 31), fill=(210, 220, 235, 228))
    draw.rounded_rectangle((78, 336, 318, 392), radius=18, fill=(*accent, 56), outline=(*accent, 180), width=2)
    draw.text((110, 351), 'Xtream API Ready', font=font(FONT_BOLD, 23), fill=(255,255,255,245))

    draw.text((78, 448), 'Use your own Xtream credentials to access\nlive TV, movies and series.', font=font(FONT_REG, 23), fill=(170, 182, 200, 230), spacing=8)
    draw.text((78, 520), 'Arkmate TV does not provide media content.', font=font(FONT_REG, 23), fill=(170, 182, 200, 230))

    card = clean_source(Image.open(IMG / source_name).convert('RGBA'), kind)

    shadow = Image.new('RGBA', canvas.size, (0,0,0,0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle((650, 174, 1512, 770), radius=40, fill=(0,0,0,170))
    shadow = shadow.filter(ImageFilter.GaussianBlur(26))
    canvas = Image.alpha_composite(canvas, shadow)

    frame = Image.new('RGBA', canvas.size, (0,0,0,0))
    frame_draw = ImageDraw.Draw(frame)
    frame_draw.rounded_rectangle((636, 160, 1502, 780), radius=38, fill=(10,16,32,210), outline=(255,255,255,36), width=2)
    canvas = Image.alpha_composite(canvas, frame)

    mask = rounded_mask(card.size, 28)
    holder = Image.new('RGBA', card.size, (0,0,0,0))
    holder.paste(card, (0,0), mask)
    canvas.alpha_composite(holder, (658, 182))

    badge = Image.new('RGBA', canvas.size, (0,0,0,0))
    bd = ImageDraw.Draw(badge)
    bd.rounded_rectangle((1184, 704, 1472, 758), radius=16, fill=(6,12,24,185), outline=(255,255,255,34), width=1)
    bd.text((1210, 719), 'macOS App Store Preview', font=font(FONT_REG, 21), fill=(226,234,244,235))
    canvas = Image.alpha_composite(canvas, badge)

    return canvas.convert('RGB')

for slide in slides:
    out = build_slide(slide['source'], slide['title'], slide['subtitle'], slide['accent'], slide['kind'], slide['title_size'])
    out.save(IMG / slide['output'], quality=95)
    print('generated', slide['output'])
