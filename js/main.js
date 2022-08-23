/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  LIam Santin
 * @version 0.1
 * @since   2022-08-23
 */

(function main() {
    'use strict'; // Demande un interprétation stricte du code

    const tempCelsius = Number(prompt('Température en Celsius : '));

    alert(`${tempCelsius} °C = ${tempCelsius * 9 / 5 + 32} °F`);

}()); // Main IIFE



