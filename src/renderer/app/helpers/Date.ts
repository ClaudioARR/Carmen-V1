export const YEAR = new Date().getFullYear(); //AÑO
export const MONTH = new Date().getMonth() + 1; //MES
export const DAY = new Date().getDate(); //DIA
export const ACTUALDATE = DAY + "/" + MONTH + "/" + YEAR; // FECHA ACTUAL DIA/MES/AÑO
export const MONTHS = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']; // MESES DEL AÑO
export var MONTHSPRICES = new Array(); // PRECIOS TOTALES DE LOS MESES DEL AÑO

export let MONTHCARD: string; // Mes de la carta seleccionada

// SEA EL MES 
export function setMONTHCARD(month?: string) {
    MONTHCARD = month;
}

// LIMPIA EL ARRAY DE PRECIOS
export function cleanMONTHSPRICES() {
    MONTHSPRICES = [];
}

