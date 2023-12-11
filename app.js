const canvas = d3.select(".canva");

let dataArray = [4, 25, 34, 123, 43];

const svg = canvas.append("svg").attr("width", 600).attr("height", 600);

const rect = svg.selectAll("rect");

rect
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", 24)
  .attr("fill", "orange")
  .attr("height", function (d) {
    return d * 2;
  })
  .attr("x", function (d, i) {
    return i * 25;
  })
  .attr("y", function (d, i) {
    return 100 - d * 2;
  });
