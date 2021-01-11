#!/usr/bin/env bash
rsync -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p8192" ./build/ user@server.flags8192.local:/var/www/weather.listratenkov.com/
