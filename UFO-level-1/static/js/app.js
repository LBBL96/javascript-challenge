// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

// Listening
submit.on("click", function(){
  var inputElement = d3.select("#filter-btn");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // console.log(tableData)

  var filteredData = tableData.filter(aliens => aliens.datetime === inputValue);
  // console.log(filteredData)
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
    .append("tr")
    .data(d => [filteredData.datetime, filteredData.city, filteredData.state, 
      filteredData.country, filteredData.shape, filteredData.durationMinutes, filteredData.comments]);

});

// Creating handle variable for making the table
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
    .append("tr")
    .data(d => [d.datetime, d.city, d.state, d.country, d.shape, d.durationMinutes, d.comments]);

