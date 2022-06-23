async function drawReOpeningLegend() {

    // const dataBounds = await d3.json("data/linedata/x_bounds(overall).json")
    // const yAccessorBounds = d => d.end
    // const dateParserBounds = d3.timeParse("%Y-%m-%d")
    // const xAccessorBounds = d => dateParser(d.date)
    
    // const dataCases = await d3.json("data/linedata/casesReopening.json")
    // const yAccessorCases = d => d.comparison
    // const dateParserCases = d3.timeParse("%Y-%m-%d")
    // const xAccessorCases = d => dateParser(d.date)
   
    // const dataPrevention = await d3.json("data/linedata/prevention.json")
    // const yAccessor = d => d.Prevention
    // const dateParser = d3.timeParse("%Y-%m-%d")
    // const xAccessor = d => dateParser(d.Date)
  
    // const dataARPA = await d3.json("data/linedata/arpa.json")
    // const yAccessorARPA = d => d.ARPA
    // const dateParserARPA = d3.timeParse("%Y-%m-%d")
    // const xAccessorARPA = d => dateParser(d.Date)
  
    // const dataHousing = await d3.json("data/linedata/housing.json")
    // const yAccessorHousing = d => d.Housing
    // const dateParserHousing = d3.timeParse("%Y-%m-%d")
    // const xAccessorHousing = d => dateParser(d.Date)
  
    // const dataReopen = await d3.json("data/linedata/reopening_2.json")
    // const yAccessorReopen = d => d.Reopening
    // const dateParserReopen = d3.timeParse("%Y-%m-%d")
    // const xAccessorReopen = d => dateParser(d.Date)
  
    const dataVax = await d3.json("data/linedata/vaccinations.json")
    const yAccessorVax = d => d.Vaccinations
    const dateParserVax = d3.timeParse("%Y-%m-%d")
    const xAccessorVax = d => dateParser(d.Date)

    let box = document.querySelector('.step');
    // console.log(box)

    if (window.innerWidth < 1025){
    var modHeight = box.offsetWidth*0.8/5
    }
    else{
        var modHeight = box.offsetWidth*0.8/8
    }

    let dimensions = {
        width: box.offsetWidth*0.8,
        height: modHeight,//box.offsetWidth*0.8/8,
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

    const wrapper = d3.select("#wrapperREOPENleg")
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
    legendGroup.append("rect")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)
    .attr("fill", "rgba(0,0,0,0)");
//   console.log(dimensions.width < 800
    // ? dimensions.boundedHeight - 30
    // : dimensions.boundedHeight * 0.5
// )    
//   const legendTitle = legendGroup.append("text")
    //   .attr("y", 20)
    //   .attr('x', 20)
    //   .attr("class", "legend-title")
    //   .text("Legend")
if (window.innerWidth < 1025){
    
    const legendCirclePrev = legendGroup.append("circle").attr("cx",30).attr("cy",18).attr("r", 3).style("fill", "blue")
    const legendCircleCases = legendGroup.append("circle").attr("cx",85).attr("cy",18).attr("r", 3).style("fill", "purple")
    const legendCircleCorrelation = legendGroup.append("circle").attr("cx",30).attr("cy",38).attr("r", 3).style("fill", "#B8ECB8")

    legendGroup.append("text").attr("x", 36).attr("y", 18).text("Cases").style("font-size", "10px").attr("alignment-baseline","middle")
    legendGroup.append("text").attr("x", 91).attr("y", 18).text("Re-Opening Policies").style("font-size", "10px").attr("alignment-baseline","middle")  
    legendGroup.append("text").attr("x", 36).attr("y", 38).text("Re-Opening Peak period").style("font-size", "10px").attr("alignment-baseline","middle")  
}
else {
    
    const legendCirclePrev = legendGroup.append("circle").attr("cx",30).attr("cy",18).attr("r", 3).style("fill", "blue")
    const legendCircleCases = legendGroup.append("circle").attr("cx",85).attr("cy",18).attr("r", 3).style("fill", "purple")
    const legendCircleCorrelation = legendGroup.append("circle").attr("cx",195).attr("cy",18).attr("r", 3).style("fill", "#B8ECB8")
  
    legendGroup.append("text").attr("x", 36).attr("y", 18).text("Cases").style("font-size", "10px").attr("alignment-baseline","middle")
    legendGroup.append("text").attr("x", 91).attr("y", 18).text("Re-Opening Policies").style("font-size", "10px").attr("alignment-baseline","middle")  
    legendGroup.append("text").attr("x", 201).attr("y", 18).text("Re-Opening Peak period").style("font-size", "10px").attr("alignment-baseline","middle")  
}

}
// drawLineChart()