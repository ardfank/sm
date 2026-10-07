#!/bin/bash
/usr/bin/ffmpeg -i "$1" -vcodec libwebp -filter:v fps=fps=20 -lossless 0 -q:v 70 -loop 0 -preset picture -an "$1.webp"
