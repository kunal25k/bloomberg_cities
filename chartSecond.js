async function drawLineChartSecond() {
    // 1. Access data
    // const dataset = await d3.json("nyc_weather_data.json")
  
    // const yAccessor = d => d.temperatureMax
    // const dateParser = d3.timeParse("%Y-%m-%d")
    // const xAccessor = d => dateParser(d.date)
    const dataBounds = await d3.json("data/linedata/x_bounds(overall).json")
    const yAccessorBounds = d => d.end
    const dateParserBounds = d3.timeParse("%Y-%m-%d")
    const xAccessorBounds = d => dateParser(d.date)
    
    const dataCases = await d3.json("data/linedata/cases.json")
    const yAccessorCases = d => d.comparison
    const dateParserCases = d3.timeParse("%Y-%m-%d")
    const xAccessorCases = d => dateParser(d.date)
   
    const dataPrevention = await d3.json("data/linedata/prevention.json")
    const yAccessor = d => d.Prevention
    const dateParser = d3.timeParse("%Y-%m-%d")
    const xAccessor = d => dateParser(d.Date)
  
    const dataARPA = await d3.json("data/linedata/arpa.json")
    const yAccessorARPA = d => d.ARPA
    const dateParserARPA = d3.timeParse("%Y-%m-%d")
    const xAccessorARPA = d => dateParser(d.Date)
  
    const dataHousing = await d3.json("data/linedata/housing.json")
    const yAccessorHousing = d => d.Housing
    const dateParserHousing = d3.timeParse("%Y-%m-%d")
    const xAccessorHousing = d => dateParser(d.Date)
  
    const dataReopen = await d3.json("data/linedata/reopening.json")
    const yAccessorReopen = d => d.Reopening
    const dateParserReopen = d3.timeParse("%Y-%m-%d")
    const xAccessorReopen = d => dateParser(d.Date)
  
    const dataVax = await d3.json("data/linedata/vaccinations.json")
    const yAccessorVax = d => d.Vaccinations
    const dateParserVax = d3.timeParse("%Y-%m-%d")
    const xAccessorVax = d => dateParser(d.Date)
  
    // 2. Create chart dimensions
    // console.log(window.innerWidth)
  
    let box = document.querySelector('.step');
  
    let dimensions = {
        width: box.offsetWidth*0.8,
        height: box.offsetWidth*0.8/2,
          margin: {
        top: 5,
        right: 15,
        bottom: 15,
        left: 15,
      },
    }
    dimensions.boundedWidth = dimensions.width
      - dimensions.margin.left
      - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height
      - dimensions.margin.top
      - dimensions.margin.bottom
  
    // 3. Draw canvas
  
    const wrapper = d3.select("#wrapperSECOND")
    .append("center")
      .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
  
    const bounds = wrapper.append("g")
        .style("transform", `translate(${
          dimensions.margin.left
        }px, ${
          dimensions.margin.top
        }px)`)
  
    // wrapper 
    // 4. Create scales
    
  
    const yScale = d3.scaleLinear()
      .domain(d3.extent(dataCases, yAccessorCases))
      .range([dimensions.boundedHeight, 0])
  
    // const freezingTemperaturePlacement = yScale(10)
    // const freezingTemperatures = bounds.append("rect")
    //     .attr("x", 0)
    //     .attr("width", dimensions.boundedWidth)
    //     .attr("y", freezingTemperaturePlacement)
    //     .attr("height", dimensions.boundedHeight
    //       - freezingTemperaturePlacement)
    //     .attr("fill", "#e0f3f3")
  
    const xScale = d3.scaleTime()
      .domain(d3.extent(dataCases, xAccessorCases))
      .range([0, dimensions.boundedWidth])
  
    // console.log(d3.extent(dataPrevention, xAccessor))
    // console.log(d3.extent(dataARPA, xAccessor)[1])
  
    // const begin_focus0 = xScale(Date.parse("March 18, 2020"))
    // const end_focus0 = xScale(Date.parse("April 17, 2020")) - begin_focus0
  
    // const boilingTemperatures0 = bounds.append("rect")
    //     .attr("y", 0)
    //     .attr("height", dimensions.boundedHeight)
    //     .attr("x", begin_focus0)
    //     .attr("width", end_focus0)
    //     .attr("fill", "#B8ECB8")
    //     .attr('opacity','40%')
  
    const begin_focus1 = xScale(Date.parse("June 18, 2020"))
    const end_focus1 = xScale(Date.parse("August 18, 2020")) - begin_focus1
  
    const boilingTemperatures1 = bounds.append("rect")
        .attr("y", 0)
        .attr("height", dimensions.boundedHeight)
        .attr("x", begin_focus1)
        .attr("width", end_focus1)
        .attr("fill", "#B8ECB8")
        .attr('opacity','40%')
  
    // const begin_focus2 = xScale(Date.parse("November 8, 2020"))
    // const end_focus2 = xScale(Date.parse("January 1, 2021")) - begin_focus2
  
    // const boilingTemperatures2 = bounds.append("rect")
    //     .attr("y", 0)
    //     .attr("height", dimensions.boundedHeight)
    //     .attr("x", begin_focus2)
    //     .attr("width", end_focus2)
    //     .attr("fill", "#B8ECB8")
    //     .attr('opacity','40%')
  
      // 5. Draw data
    const lineGeneratorCases = d3.line()
      .x(d => xScale(xAccessorCases(d)))
      .y(d => yScale(yAccessorCases(d)))
  
    const lineGeneratorPrevention = d3.line()
      .x(d => xScale(xAccessor(d)))
      .y(d => yScale(yAccessor(d)))
  
    const areaGeneratorCases = d3.area()
      .x(d => xScale(xAccessorCases(d)))
      .y0(d => dimensions.boundedHeight)
      .y1(d => yScale(yAccessorCases(d)))
   
  //   const lineGeneratorARPA = d3.line()
  //   .x(d => xScale(xAccessorARPA(d)))
  //   .y(d => yScale(yAccessorARPA(d)))
  
  //   const lineGeneratorHousing = d3.line()
  //   .x(d => xScale(xAccessorHousing(d)))
  //   .y(d => yScale(yAccessorHousing(d)))
  
  //   const lineGeneratorReopening = d3.line()
  //   .x(d => xScale(xAccessorReopen(d)))
  //   .y(d => yScale(yAccessorReopen(d)))
  
  //   const lineGeneratorVax = d3.line()
  //   .x(d => xScale(xAccessorVax(d)))
  //   .y(d => yScale(yAccessorVax(d)))
  
      const areaCases = bounds.append("path")
          .attr("d", areaGeneratorCases(dataCases))
          .attr("fill", "lightblue")
          .attr("stroke", "blue")
          // .attr("stroke-width", 2)
  
  //   const lineCases = bounds.append("path")
  //       .attr("d", lineGeneratorCases(dataCases))
  //       .attr("fill", "none")
  //       .attr("stroke", "blue")
  //       .attr("stroke-width", 2)
  
    const linePrevention = bounds.append("path")
        .attr("d", lineGeneratorPrevention(dataPrevention))
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
  
  //   const lineARPA = bounds.append("path")
  //       .attr("d", lineGeneratorARPA(dataARPA))
  //       .attr("fill", "none")
  //       .attr("stroke", "blue")
  //       .attr("stroke-width", 1.5)
  
  //   const lineHousing = bounds.append("path")
  //       .attr("d", lineGeneratorHousing(dataHousing))
  //       .attr("fill", "none")
  //       .attr("stroke", "orange")
  //       .attr("stroke-width", 1.5)
  
  //   const lineReopening = bounds.append("path")
  //       .attr("d", lineGeneratorReopening(dataReopen))
  //       .attr("fill", "none")
  //       .attr("stroke", "yellow")
  //       .attr("stroke-width", 1.5)
  
  //   const lineVax = bounds.append("path")
  //       .attr("d", lineGeneratorVax(dataVax))
  //       .attr("fill", "none")
  //       .attr("stroke", "green")
  //       .attr("stroke-width", 1.5)
  
  //   const legendGroup = wrapper.append("g")
  //       // .attr('fill','red')
  //       .attr("transform", `translate(${
  //         dimensions.boundedWidth - 0.25*(dimensions.boundedWidth)
  //       },${
  //         dimensions.width < 800
  //         ? dimensions.boundedHeight - 30
  //         : dimensions.boundedHeight * 0.20 //- 0.15*(dimensions.boundedHeight)
  //       })`)
  
  //   // console.log(dimensions.width < 800
  //   //   ? dimensions.boundedHeight - 30
  //   //   : dimensions.boundedHeight * 0.5
  // // )    
  //       legendGroup.append("rect")
  //       .attr("width", "100")
  //       .attr("height", "65")
  //       .attr('stroke', '#2378ae')
  //       .attr('stroke-dasharray', '10,5')
  //       .attr('stroke-linecap', 'butt')
  //       .attr('stroke-width', '1.5')
  //       // .attr('opacity','35%')
  //       .attr("fill", "rgba(0,0,0,0)");
  
  //   const legendTitle = legendGroup.append("text")
  //       .attr("y", 20)
  //       .attr('x', 20)
  //       .attr("class", "legend-title")
  //       .text("Legend")
  
  //   const legendCirclePrev = legendGroup.append("circle").attr("cx",30).attr("cy",35).attr("r", 3).style("fill", "red")
  // //   const legendCircleVax = legendGroup.append("circle").attr("cx",30).attr("cy",50).attr("r", 3).style("fill", "green")
  // //   const legendCircleHous = legendGroup.append("circle").attr("cx",30).attr("cy",65).attr("r", 3).style("fill", "orange")
  // //   const legendCircleARPA = legendGroup.append("circle").attr("cx",30).attr("cy",80).attr("r", 3).style("fill", "blue")
  // //   const legendCircleReOp = legendGroup.append("circle").attr("cx",30).attr("cy",95).attr("r", 3).style("fill", "yellow")
  //   const legendCircleCases = legendGroup.append("circle").attr("cx",30).attr("cy",50).attr("r", 3).style("fill", "blue")
  
  //   legendGroup.append("text").attr("x", 40).attr("y", 35).text("Prevention").style("font-size", "10px").attr("alignment-baseline","middle")
  // //   legendGroup.append("text").attr("x", 40).attr("y", 50).text("Vaccinations").style("font-size", "10px").attr("alignment-baseline","middle")
  // //   legendGroup.append("text").attr("x", 40).attr("y", 65).text("Housing").style("font-size", "10px").attr("alignment-baseline","middle")
  // //   legendGroup.append("text").attr("x", 40).attr("y", 80).text("ARPA").style("font-size", "10px").attr("alignment-baseline","middle")
  // //   legendGroup.append("text").attr("x", 40).attr("y", 95).text("Re-Opening").style("font-size", "10px").attr("alignment-baseline","middle")
  //   legendGroup.append("text").attr("x", 40).attr("y", 50).text("Cases").style("font-size", "10px").attr("alignment-baseline","middle")  
  
        // 6. Draw peripherals
  
    const yAxisGenerator = d3.axisLeft()
      .scale(yScale)
      .ticks(0)
      .tickSize(0)
  
    const yAxis = bounds.append("g")
      .call(yAxisGenerator)
  
    const xAxisGenerator = d3.axisBottom()
      .scale(xScale)
      .tickSize(0)
      .tickFormat(function(date){
        if (date > Date.parse("July 12, 2020") && date < Date.parse("August 12, 2020")){
          return d3.timeFormat("Aug '20")(date);
        }
        else if (date > Date.parse("April 12, 2020") && date < Date.parse("July 12, 2020")){
          return d3.timeFormat('')(date);
        }
        else if (date > Date.parse("August 12, 2020") && date < Date.parse("November 12, 2020")){
          return d3.timeFormat('')(date);
        }
        else if (date > Date.parse("March 12, 2020") && date < Date.parse("April 12, 2020")){
            return d3.timeFormat("")(date);
        }
        else if (date > Date.parse("November 12, 2020") && date < Date.parse("Dec 12, 2020")){
          return d3.timeFormat("")(date);
      }
      else if (date > Date.parse("December 12, 2020")){
        return d3.timeFormat('')(date);
    }
      else {
          return d3.timeFormat('%b')(date);
        }
      })
  
    const xAxis = bounds.append("g")
    .call(xAxisGenerator)
        .style("transform",`translateY(${
          dimensions.boundedHeight
        }px)`)
        .selectAll("text")	
        // .style("text-anchor", "end")
        .attr("dx", "-1.5em")
        // .attr("dy", "-0.8em")
        // .attr("transform", "rotate(-20)");
  
  
  
  }
  // drawLineChartPrev()
  