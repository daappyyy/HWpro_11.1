let tableSize = 10;
const table = document.querySelector('.table-wrapper');

for(let i = 1; i <= tableSize; i++){
    for(let j = 1; j <= tableSize; j++){
        const tableCell = document.createElement('div')
        tableCell.textContent = i * j;
        table.appendChild(tableCell);
    }
}
console.log(table);