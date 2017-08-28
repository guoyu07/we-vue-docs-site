#!/bin/bash
wget -nv --no-check-certificate https://raw.githubusercontent.com/tianyong90/we-vue/master/CHANGELOG.md -O ./src/assets/docs/changelog.md
git add .
git commit -m 'download changelog.md'
git push origin master
