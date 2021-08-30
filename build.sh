#!/bin/sh
rm -f ./dist/*
zip \
	-x ./build.sh \
	-x ./.gitignore \
	-x ./dist \
	-x ./notes.md \
	-j ./dist/extension.zip ./*