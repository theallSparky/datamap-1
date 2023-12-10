const canvas = d3.select(".canva");

let dataArray = [4, 15, 34];

const svg = canvas.append("svg").attr("width", 600).attr("height", 600);

const rect = svg.append("rect");

rect.attr("width", 24).attr("height", 100).attr("fill", "orange");
