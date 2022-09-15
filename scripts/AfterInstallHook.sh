#!/bin/bash
sudo npm install
sudo npm build
sudo npm run dev > /dev/null 2> /dev/null < /dev/null &