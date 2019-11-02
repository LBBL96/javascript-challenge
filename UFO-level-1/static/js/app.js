// from data.js
var tableData = data;
console.log(tableData)


// // Select the submit button
// var submit = d3.select("#submit");

// Creating handle variable
var el = d3.selectAll("tbody")
    .selectAll("tr")
    .data(tableData);


// Loading table data 
el.enter()
    .append("tr")
    .html(aliens => {
      return `<td>${aliens.datetime}</td>
      <td>${aliens.city}</td>
      <td>${aliens.state}</td>
      <td>${aliens.country}</td>
      <td>${aliens.shape}</td>
      <td>${aliens.durationMinutes}</td>
      <td>${aliens.comments}</td>`
    })
    .append(d => [d.datetime, d.city, d.state, d.country, d.shape, d.durationMinutes, d.comments]);

