#!/bin/bash
# Receive Directory data SCSS to CSS
echo 'Compilando sass "../main desktop.scss" "../../main desktop.css"'
sass "../main desktop.scss" "../../main desktop.css"
echo 'Compilando sass "../main mobile.scss" "../../main mobile.css"'
sass "../main mobile.scss" "../../main mobile.css"
echo 'Compilando sass "../main tablet.scss" "../../main tablet.css"'
sass "../main tablet.scss" "../../main tablet.css"
echo 'Compilando sass "../main.scss" "../../main.css"'
sass "../main.scss" "../../main.css"
