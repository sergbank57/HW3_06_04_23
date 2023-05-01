const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headers = ['No', 'Full Name', 'Position', 'Salary(mln)'];
headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

const data = [
  [1, 'Bill Gates', 'Founder Microsoft', '$1,000'],
  [2, 'Steve Jobs', 'Founder Apple', '$1,200'],
  [3, 'Larry Page', 'Founder Google', '$1,100'],
  [4, 'Mark Zuckerberg', 'Founder Facebooki', '$1,300'],
 
];

data.forEach(rowData => {
  const row = document.createElement('tr');
  rowData.forEach(cellData => {
    const cell = document.createElement('td');
    cell.textContent = cellData;
    row.appendChild(cell);
  });
  table.appendChild(row);
});

document.body.appendChild(table);
table.style.borderCollapse = 'collapse';
table.style.border = '2px solid black';
table.style.fontFamily = 'Arial, sans-serif';

const cells = document.querySelectorAll('td, th');
cells.forEach(cell => {
  cell.style.border = '1px solid black';
  cell.style.padding = '8px';
  cell.style.textAlign = 'left';
});
