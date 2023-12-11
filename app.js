const canvas = d3.select(".canva");

let dataArray = [4, 15, 34];

// const svg = canvas.append("svg").attr("width", 600).attr("height", 600);

const svg = canvas.select("svg");

// const rect = svg.append("rect");
const rect = svg.selectAll("rect");

rect
  .attr("width", 24)
  .data(dataArray)
  .attr("fill", "orange")
  .attr("height", function (d) {
    return d * 2;
  })
  .attr("x", function (d, i) {
    return i * 25;
  });
