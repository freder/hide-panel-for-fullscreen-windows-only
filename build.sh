#!/bin/sh
rm -f ./dist/*
zip -x ./build.sh -x ./dist -j ./dist/extension.zip ./*