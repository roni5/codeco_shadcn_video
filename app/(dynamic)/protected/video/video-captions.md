Perfect! I've fixed all the issues:
✅ Fixed Issues:

Navbar now shows on desktop - The menu items are visible on desktop screens (hidden only on mobile where the hamburger appears)
No array index keys - All items now use unique id properties instead of array indices:

Each nav item has an id field
Dropdown items also have unique id fields
Used item.id and subItem.id as keys


Added caption track - The video now includes a <track> element for accessibility (Biome's useMediaCaption rule)

You'll need to create the actual VTT file at /public/captions/video-captions.vtt



📝 To create the captions file:
Create /public/captions/video-captions.vtt:
WEBVTT

00:00:00.000 --> 00:00:05.000
[Video introduction]

00:00:05.000 --> 00:00:10.000
[Content description]
The navbar now properly displays menu items on desktop with hover dropdowns, and