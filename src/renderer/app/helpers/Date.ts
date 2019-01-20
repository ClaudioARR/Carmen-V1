export const YEAR = new Date().getFullYear();
export const MONTH = new Date().getMonth() + 1;
export const DAY = new Date().getDate();
export const ACTUALDATE = DAY + "/" + MONTH + "/" + YEAR;
export const MONTHS = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

export let MONTHCARD: string; // Mes de la carta seleccionada

export function setMONTHCARD(month?: string){
    MONTHCARD = month;
}


