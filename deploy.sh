#!/bin/bash
# Digital Ocean static site deployment script

echo "Building Flash documentation..."
npm run build

echo "Build complete. Contents of build directory:"
ls -la build/

# Ensure the build directory exists at the root
if [ -d "build" ]; then
    echo "Build directory found at ./build"
    # If Digital Ocean needs it at /build, we can copy it
    # cp -r build /build
else
    echo "ERROR: Build directory not found!"
    exit 1
fi