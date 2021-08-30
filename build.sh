#!/bin/sh
rm -f ./dist/*
zip \
	-x ./build.sh \
	-x ./.gitignore \
	-x ./dist \
	-j ./dist/extension.zip ./*