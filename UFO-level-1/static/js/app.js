// from data.js
var tableData = data;

// Function to rearrange table data according to filter
function update(data) {

  // Map the data to the new table
  var dateTime = data.map(alien => alien.datetime)
  var city = data.map(alien => alien.city)
  var state = data.map(alien => alien.state)
  var country = data.map(alien => alien.country)
  var shape = data.map(alien => alien.shape)
  var durationMinutes = data.map(alien => alien.durationMinutes)
  var comments = data.map(alien => alien.comments)
  
  var selection = d3.selectAll("tbody").selectAll("tr").data(data);

  selection.enter()
    .append("tr")
    .html(
      `<td>${dateTime}</td>
      <td>${city}</td>
      <td>${state}</td>
      <td>${country}</td>
      <td>${shape}</td>
      <td>${durationMinutes}</td>
      <td>${comments}</td>`
    )
    .merge(selection);

  selection.exit().remove();
}

// Select the submit button
var submit = d3.select("#filter-btn");

// Listening
submit.on("click", function(){
  // Stop refresh
  d3.event.preventDefault();

  // Select the input box and get its value
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  // Filter to find sightings that match the date entered
  var filteredData = tableData.filter(aliens => aliens.datetime === inputValue);
  console.log(filteredData)

  update(filteredData)
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


