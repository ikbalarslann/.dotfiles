#!/bin/bash

if xrandr | grep "HDMI-1 connected"; then
    xrandr --output eDP-1 --off --output HDMI-1 --auto
else
    xrandr --output HDMI-1 --off --output eDP-1 --auto
fi
