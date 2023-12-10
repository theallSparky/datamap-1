const canvas = d3.select(".canva");

let dataArray = [4, 15, 34];

const svg = canvas.append("svg").attr("width", 600).attr("height", 600);

const rect = svg.append("rect");

rect
  .attr("width", 24)
  .data(dataArray)
  .attr("height", 100)
  .attr("fill", "orange")
  //d is element in array, i is index
  .attr("y", function (d, i) {
    return d * 12;
  })
  .attr("x", function (d, i) {
    return d * 20;
  });
