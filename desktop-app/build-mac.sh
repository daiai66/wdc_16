#!/bin/bash
set -e

cd "$(dirname "$0")"

export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"

echo "Installing dependencies..."
npm install

echo "Building macOS arm64 app..."
npm run build:mac

echo "Done. Output folder:"
echo "$(pwd)/dist"
