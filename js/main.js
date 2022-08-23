/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
    'use strict'; // Demande un interprétation stricte du code

    const tempCelsius = Number(prompt('Température en Celsius : '));

    alert(`${tempCelsius} °C = ${tempCelsius * 9 / 5 + 32} °F`);

}()); // Main IIFE



