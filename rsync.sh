#!/bin/bash
rsync -avzr --exclude=.git --exclude=rsync.sh --delete -e ssh /home/projects/sotapatroi/ pi@pi3:/home/projects/sotapatroi
