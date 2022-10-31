import React from 'react';

const convertTimeToMs = (tempo) => {
    var minuto = tempo.split(':');
    var segundo = minuto[1].split('.');
    var total = parseInt(minuto[0] * 60 * 1000) + parseInt(segundo[0] * 1000) + parseInt(segundo[1])
    return total;
}

const to2Digits = (num) => {
    return num.toString().padStart(2, '0');
}
    
const convertMsToTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let ms = milliseconds - (seconds * 1000);
    
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${to2Digits(minutes)}:${to2Digits(seconds)}.${ms}`;
}

export { convertMsToTime, convertTimeToMs }