async function drawReOpeningLegend() {

let box = document.querySelector('.step');

let dimensions = {
  width: box.offsetWidth*0.8,
  height: box.offsetWidth*0.8/8,
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}
dimensions.boundedWidth = dimensions.width
  - dimensions.margin.left
  - dimensions.margin.right
dimensions.boundedHeight = dimensions.height
  - dimensions.margin.top
  - dimensions.margin.bottom

const wrapper = d3.select("#wrapper44")
.append('center')
  .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)

  const legendGroup = wrapper.append("g")
      // .attr('fill','red')
    //   .attr("transform", `translate(${
        // dimensions.boundedWidth - 0.25*(dimensions.boundedWidth)
    //   },${
        // dimensions.width < 800
        // ? dimensions.boundedHeight - 30
        // : dimensions.boundedHeight * 0.20 //- 0.15*(dimensions.boundedHeight)
    //   })`)

//   console.log(dimensions.width < 800
    // ? dimensions.boundedHeight - 30
    // : dimensions.boundedHeight * 0.5
// )    
      legendGroup.append("rect")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
    //   .attr('stroke', '#2378ae')
    //   .attr('stroke-dasharray', '10,5')
    //   .attr('stroke-linecap', 'butt')
    //   .attr('stroke-width', '1.5')
    //   // .attr('opacity','35%')
      .attr("fill", "rgba(0,0,0,0)");

//   const legendTitle = legendGroup.append("text")
    //   .attr("y", 20)
    //   .attr('x', 20)
    //   .attr("class", "legend-title")
    //   .text("Legend")

  const legendCirclePrev = legendGroup.append("circle").attr("cx",30).attr("cy",18).attr("r", 3).style("fill", "blue")
//   const legendCircleVax = legendGroup.append("circle").attr("cx",30).attr("cy",50).attr("r", 3).style("fill", "green")
//   const legendCircleHous = legendGroup.append("circle").attr("cx",30).attr("cy",65).attr("r", 3).style("fill", "orange")
//   const legendCircleARPA = legendGroup.append("circle").attr("cx",30).attr("cy",80).attr("r", 3).style("fill", "blue")
//   const legendCircleReOp = legendGroup.append("circle").attr("cx",30).attr("cy",95).attr("r", 3).style("fill", "yellow")
  const legendCircleCases = legendGroup.append("circle").attr("cx",85).attr("cy",18).attr("r", 3).style("fill", "purple")
  const legendCircleCorrelation = legendGroup.append("circle").attr("cx",195).attr("cy",18).attr("r", 3).style("fill", "#B8ECB8")

  legendGroup.append("text").attr("x", 36).attr("y", 18).text("Cases").style("font-size", "10px").attr("alignment-baseline","middle")
//   legendGroup.append("text").attr("x", 40).attr("y", 50).text("Vaccinations").style("font-size", "10px").attr("alignment-baseline","middle")
//   legendGroup.append("text").attr("x", 40).attr("y", 65).text("Housing").style("font-size", "10px").attr("alignment-baseline","middle")
//   legendGroup.append("text").attr("x", 40).attr("y", 80).text("ARPA").style("font-size", "10px").attr("alignment-baseline","middle")
//   legendGroup.append("text").attr("x", 40).attr("y", 95).text("Re-Opening").style("font-size", "10px").attr("alignment-baseline","middle")
  legendGroup.append("text").attr("x", 91).attr("y", 18).text("Re-Opening Policies").style("font-size", "10px").attr("alignment-baseline","middle")  
  legendGroup.append("text").attr("x", 201).attr("y", 18).text("Re-Opening Peak period").style("font-size", "10px").attr("alignment-baseline","middle")  


}
// drawLineChart()