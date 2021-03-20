// import the data from data.js
//var data = 1;
const tableData = data;

//REfernce the HTML table using d3
var tbody = d3.select("tbody");

//Module 11.5 - Create a reusable function that builds a table
function buildTable(data) {
    //Clear the existing data before loading new dataset
    tbody.html("");
    //Next loop through each object in the data
    //and append a row and cell for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");
        //Loop through each field in the dataRow and add
        //each values as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            });
    });
}
