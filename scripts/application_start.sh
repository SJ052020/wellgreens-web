#!/bin/bash
cd /home/ec2-user/app-frontend
sudo rm -rf node_modules/
sudo npm install
sudo npm run build
sudo npm run dev > /dev/null 2> /dev/null < /dev/null &
