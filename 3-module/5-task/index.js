/**
* Найти min/max в произвольной строке
* @param   {string} str -  входные данные
* @returns {{min:number, max:number}}  объект
*/
function getMinMax(str) {
    
    let regEx = / /gi;
    let newStr = str.replace(regEx, ",").split(",").map(Number).filter((item) => {return !isNaN(item)});
    
    let result = {};
    result.min = Math.min(...newStr);
    result.max = Math.max(...newStr);
    return result;
}
