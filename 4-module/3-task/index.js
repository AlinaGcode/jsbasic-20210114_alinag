/**
* Метод устанавливает необходимые по условию аттрибуты таблице
* @param {Element} table
*/
function highlight(table) {
    
    for (let i = 1; i < table.rows.length; i++){
        let row = table.cells[i];
        if (td.dataset.available = "true") {
            td.setAttribute("class", "available")
        } else if (td.dataset.available = "false") {
            td.setAttribute("class", "unavailable")
        } else {
            td.setAttribute("hidden", " hidden")
        }
    }
}

