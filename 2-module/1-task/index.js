/**
* Складываем зарплаты
* @param {Object} salaries - объект зарплат
* @returns {Number}
*/
function sumSalary(salaries) {
    let total = 0;
    for (let numberValues in salaries) {
        if (typeof salaries[numberValues] === "number" && isNaN(salaries[numberValues]) == false && isFinite(salaries[numberValues] == true) ) {
            total += salaries[numberValues];
        }  
    };
    return  total;
};
