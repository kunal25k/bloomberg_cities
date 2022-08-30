/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}


/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config.toptitle;
    header.appendChild(toptitle);
}
if (config.initialGraphic) {
    var wrapperinit = document.createElement("div");
    wrapperinit.setAttribute('id','wrapperINITIAL');

    header.appendChild(wrapperinit)
    // drawLineChart();
    drawLineChartForward();

    var title_2 = document.createElement('p');
    title_2.setAttribute('id','title_2');
    // title_1.classList.add('imageCredit');
    title_2.innerHTML = '<b>Prevention</b>, <b>Re-Opening</b>, <b>Vaccinations</b> and <b>ARPA</b>';
    // imageCredit.style.color = 'purple';
    var originalHtml = title_2.innerHTML;
    var firstStr = 'Prevention'
    var secondStr = 'Re-Opening'
    var thirdStr = 'Vaccinations'
    var fourthStr = 'ARPA'    
    var newHtml = originalHtml.replace(firstStr, firstStr.fontcolor('#00FF00'));
    var newHtml = newHtml.replace(secondStr, secondStr.fontcolor('#FF00FF'));
    var newHtml = newHtml.replace(thirdStr, thirdStr.fontcolor('#00FFFF'));
    var newHtml = newHtml.replace(fourthStr, fourthStr.fontcolor('#FFFF00'));
    title_2.innerHTML = newHtml;
    header.appendChild(title_2);

}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('h3');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}
if (config.clout) {
    var cloutText = document.createElement('p');
    cloutText.classList.add('clout');
    cloutText.innerHTML = config.clout;
    header.appendChild(cloutText);
    // drawLineChartForward();
}
if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    header.appendChild(descriptionText);
    // drawLineChartForward();
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}
if (config.plugin){

    var descriptionText = document.createElement('p');
    // descriptionText.innerHTML = 'We analysed over 5000 local actions, and we observed that <i> Local actions </i> were <i>reactive to the pandemic</i>. Here are three main takeaways- <br><br> <b>1. There is a correlation between peaks in case counts and prevention policies </b>';
    descriptionText.innerHTML = "The database contains over 5,000 local actions, where the different types of policies taken by local governments across the country have been documented and classified.<br><br>Each policy was manually classified based on the Policy Area, the type of action and the population impacted. There were more than 20 different Policy Areas, including Preventions, Re-Opening, Vaccinations and ARPA. <br><br> Data analysis shows clear trends in how cities reacted to different waves and milestones of the COVID-19 pandemic, and how they shifted strategies in response to the changing contours of the virus. <b> <br><br> 1. There is a correlation between peaks in case counts and prevention policies </b>";
    header.appendChild(descriptionText);

    // var wrapperINITIALleg = document.createElement("p");
    // wrapperINITIALleg.setAttribute('id','wrapperINITIALleg');
    // header.appendChild(wrapperINITIALleg)    

    // drawInitialLegend();

    var wrapper1 = document.createElement("div");
    wrapper1.setAttribute('id','wrapper');

    header.appendChild(wrapper1)
    // drawLineChart();
    drawLineChartPrev();

    var title_1 = document.createElement('p');
    title_1.setAttribute('id','title_1');
    // title_1.classList.add('imageCredit');
    title_1.innerHTML = 'Figure: ' + 'Comparing the<b> Number of Prevention Policies</b>, <b>Number of Cases</b> and their <b>Correlated Peaks</b>';
    // imageCredit.style.color = 'purple';
    var originalHtml = title_1.innerHTML;
    var firstStr = 'Number of Prevention Policies'
    var secondStr = 'Number of Cases'
    var thirdStr = 'Correlated Peaks'
    var newHtml = originalHtml.replace(firstStr, firstStr.fontcolor('red'));
    var newHtml = newHtml.replace(secondStr, secondStr.fontcolor('#89CFF0'));
    var newHtml = newHtml.replace(thirdStr, thirdStr.fontcolor('#9E00FF'));
    title_1.innerHTML = newHtml;
    header.appendChild(title_1);

    var descriptionText = document.createElement('p');
    // descriptionText.innerHTML = 'One can identify <b>3</b> peaks in covid cases, and <b>3</b> peaks in prevention policies in the graph above.The first peak of the pandemic, seen in April 2020, corresponds to the largest peak of prevention policies - with as many as <b>65</b> different cities coming out with prevention policies on a single day. <br></br> The first peak saw local actions being taken much earlier than the increase in cases: As America had already seen the spread of the pandemic in countries like China and Italy, cities preemptively planned for the onslaught of COVID.';
    descriptionText.innerHTML = "The first peak of the pandemic, seen in April 2020, corresponds to the largest peak of prevention policies– policies such as New York City declaring a state of emergency, and Miami announcing a curfew, designed to slow the spread of the disease– with <b> as many as 65 different cities rolling out prevention policies on a single day</b>. During this time, local action preempted the rise in cases: as local leaders had witnessed the devastation of the pandemic in countries like China and Italy, cities preemptively planned for its onslaught. ";
    header.appendChild(descriptionText);

    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = '<b>2. While covid cases were on the rise, prevention policy peaks reduced to a straight line.</b>';
    header.appendChild(descriptionText);

    var descriptionText = document.createElement('p');
    // descriptionText.innerHTML = "This can be explained by the following -<br>•  With every wave, people's understanding about the disease process increased.<br>•  So people and cities were better equipped due to the policies already in place.<br>•  People's mindsets got adjusted to the ‘new normal’, and they started following the policies already in place.<br>•  Public awareness and cooperation increased<br>•  The cases peaked according to the nature of the strain of virus at the time, but no new policies needed to be in place.";
    descriptionText.innerHTML = "With every wave, people's understanding about the disease process increased, and they adjusted to the prevention policies established upfront to navigate the evolving epidemic. <br><br> City leaders had set up the policy tools pretty early on, and tightened and loosened those in response to the changing pandemic";
    header.appendChild(descriptionText);

    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = '<b>3. The link between prevention policies and COVID cases breaks</b>';
    header.appendChild(descriptionText);
    

    var wrapperTWO = document.createElement("div");
    wrapperTWO.setAttribute('id','wrapperTWO');

    header.appendChild(wrapperTWO)
    // drawLineChart();
    drawLineChartPrev1();

    var title_1 = document.createElement('p');
    title_1.setAttribute('id','title_1');
    // title_1.classList.add('imageCredit');
    title_1.innerHTML = 'Figure: ' + 'Comparing the<b> Number of Prevention Policies</b>, <b>Number of Cases</b> and the <b>Inflection Point</b>';
    // imageCredit.style.color = 'purple';
    var originalHtml = title_1.innerHTML;
    var firstStr = 'Number of Prevention Policies'
    var secondStr = 'Number of Cases'
    var thirdStr = 'Inflection Point'
    var newHtml = originalHtml.replace(firstStr, firstStr.fontcolor('red'));
    var newHtml = newHtml.replace(secondStr, secondStr.fontcolor('#89CFF0')); 
    var newHtml = newHtml.replace(thirdStr, thirdStr.fontcolor('#9E00FF'));
    title_1.innerHTML = newHtml;
    header.appendChild(title_1);


    var descriptionText = document.createElement('p');
    // descriptionText.innerHTML = "In January 2021, we see an inflection point - where the correlation between prevention policies and covid cases ceases to exist. <br> <br>We do see that covid cases themselves didn't peak until September 2021, and had no corresponding peak of prevention policies. Another reason for this drying up of prevention policies was the introduction of COVID vaccines in January 2021.";
    descriptionText.innerHTML = "In January 2021, we see an inflection point where the correlation between prevention policies and COVID-19 cases falls away. <br><br> At this point, COVID-19 vaccines are being introduced and policy action subsides. <br><br>Even as the US contended with one of the steepest peaks in September 2021 (Omicron), prevention policies have largely been phased out as cities looked towards economic recovery and living with the virus. "
    header.appendChild(descriptionText);

}


// Function for rolling
// var x;
function displayPolicy(chapter, i, dataArray) {    
    var storyCity = document.createElement('p');
    storyCity.innerHTML = dataArray[i].city;
    storyCity.classList.add('city');
    chapter.appendChild(storyCity);

    var storyPolicy = document.createElement('p');
    storyPolicy.innerHTML = dataArray[i].policy;
    storyPolicy.classList.add('policy');
    chapter.appendChild(storyPolicy);

    var storyDate = document.createElement('p');
    storyDate.innerHTML = dataArray[i].date;
    storyDate.classList.add('date');
    chapter.appendChild(storyDate);
}

// function removePolicy(chapter, i) {
//     i = i+1
//     chapter.removeChild(chapter.lastElementChild);
// }

function updatePolicyRight(chapter, i, dataArray) {   
    if (i+1 == dataArray.length) {
        i = -1;
    }
    i = i + 1;
    chapter.removeChild(chapter.lastElementChild);
    chapter.removeChild(chapter.lastElementChild);
    chapter.removeChild(chapter.lastElementChild);
    
    var storyCity = document.createElement('p');
    storyCity.innerHTML = dataArray[i].city;
    storyCity.classList.add('city');
    chapter.appendChild(storyCity);
    
    var storyPolicy = document.createElement('p');
    storyPolicy.innerHTML = dataArray[i].policy;
    storyPolicy.classList.add('policy');
    chapter.appendChild(storyPolicy);

    var storyDate = document.createElement('p');
    storyDate.innerHTML = dataArray[i].date;
    storyDate.classList.add('date');
    chapter.appendChild(storyDate);

    return i;
}

function updatePolicyLeft(chapter, i, dataArray) {   
    if (i == 0 ) {
        i = dataArray.length;
    }
    i = i - 1;

    chapter.removeChild(chapter.lastElementChild);
    chapter.removeChild(chapter.lastElementChild);
    chapter.removeChild(chapter.lastElementChild);
    
    var storyCity = document.createElement('p');
    storyCity.innerHTML = dataArray[i].city;
    storyCity.classList.add('city');
    chapter.appendChild(storyCity);
    
    var storyPolicy = document.createElement('p');
    storyPolicy.innerHTML = dataArray[i].policy;
    storyPolicy.classList.add('policy');
    chapter.appendChild(storyPolicy);

    var storyDate = document.createElement('p');
    storyDate.innerHTML = dataArray[i].date;
    storyDate.classList.add('date');
    chapter.appendChild(storyDate);
    
    return i;
}

function updateToLarger(chapter, i, dataArray, buttonLeft, buttonRight) {   
    if (i == 0 ) {
        i = dataArray.length;
    }
    i = i - 1;
    buttonRight.classList.remove('buttSelect');
    buttonRight.classList.add('clicked');

    buttonLeft.classList.remove('clicked');
    buttonLeft.classList.add('buttSelect');    

    var j = 1
    chapter.removeChild(chapter.lastElementChild);
    chapter.removeChild(chapter.lastElementChild);
    chapter.removeChild(chapter.lastElementChild);
    
    var storyCity = document.createElement('p');
    storyCity.innerHTML = dataArray[i].city;
    storyCity.classList.add('city');
    chapter.appendChild(storyCity);
    
    var storyPolicy = document.createElement('p');
    storyPolicy.innerHTML = dataArray[i].policy;
    storyPolicy.classList.add('policy');
    chapter.appendChild(storyPolicy);

    var storyDate = document.createElement('p');
    storyDate.innerHTML = dataArray[i].date;
    storyDate.classList.add('date');
    chapter.appendChild(storyDate);

    console.log(i,j)
    
    return i, j;
}

function updateToSmaller(chapter, i, dataArray, buttonLeft, buttonRight) {   
    if (i == 0 ) {
        i = dataArray.length;
    }
    i = i - 1;

    buttonLeft.classList.remove('buttSelect');
    buttonLeft.classList.add('clicked');

    buttonRight.classList.remove('clicked');
    buttonRight.classList.add('buttSelect');    

    var j = 0
    chapter.removeChild(chapter.lastElementChild);
    chapter.removeChild(chapter.lastElementChild);
    chapter.removeChild(chapter.lastElementChild);
    
    var storyCity = document.createElement('p');
    storyCity.innerHTML = dataArray[i].city;
    storyCity.classList.add('city');
    chapter.appendChild(storyCity);
    
    var storyPolicy = document.createElement('p');
    storyPolicy.innerHTML = dataArray[i].policy;
    storyPolicy.classList.add('policy');
    chapter.appendChild(storyPolicy);

    var storyDate = document.createElement('p');
    storyDate.innerHTML = dataArray[i].date;
    storyDate.classList.add('date');
    chapter.appendChild(storyDate);

    console.log(i,j)
    
    return i, j;
}


/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        // var imageCredit = document.createElement('div');
        // imageCredit.setAttribute('id','imageCredit');
        // imageCredit.classList.add('imageCredit');
        // imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        // chapter.appendChild(imageCredit);
    }
    if (record.graph){

        console.log(record.graph[6])

        // var wrapper44 = document.createElement("p");
        // wrapper44.setAttribute('id','wrapper44');
        // chapter.appendChild(wrapper44)    

        // record.graph[0]()

        if (record.graph[6]=='first'){
            // var wrapperFIRSTleg = document.createElement("p");
            // wrapperFIRSTleg.setAttribute('id','wrapperFIRSTleg');
            // chapter.appendChild(wrapperFIRSTleg)    

            var wrapperFIRST = document.createElement("div");
            wrapperFIRST.setAttribute('id','wrapperFIRST');
            chapter.appendChild(wrapperFIRST)
        }

        if (record.graph[6]=='second'){
            // var wrapperSECONDleg = document.createElement("p");
            // wrapperSECONDleg.setAttribute('id','wrapperSECONDleg');
            // chapter.appendChild(wrapperSECONDleg)    

            var wrapperSECOND = document.createElement("div");
            wrapperSECOND.setAttribute('id','wrapperSECOND');
            chapter.appendChild(wrapperSECOND)
        }

        if (record.graph[6]=='third'){
            // var wrapperTHIRDleg = document.createElement("p");
            // wrapperTHIRDleg.setAttribute('id','wrapperTHIRDleg');
            // chapter.appendChild(wrapperTHIRDleg)    

            var wrapperTHIRD = document.createElement("div");
            wrapperTHIRD.setAttribute('id','wrapperTHIRD');
            chapter.appendChild(wrapperTHIRD)
        }

        if (record.graph[6]=='reopen'){
            // var wrapperREOPENleg = document.createElement("p");
            // wrapperREOPENleg.setAttribute('id','wrapperREOPENleg');
            // chapter.appendChild(wrapperREOPENleg)    

            var wrapperREOPEN = document.createElement("div");
            wrapperREOPEN.setAttribute('id','wrapperREOPEN');
            chapter.appendChild(wrapperREOPEN)
        }

        if (record.graph[6]=='arpa'){
            // var wrapperARPAleg = document.createElement("p");
            // wrapperARPAleg.setAttribute('id','wrapperARPAleg');
            // chapter.appendChild(wrapperARPAleg)    

            var wrapperARPA = document.createElement("div");
            wrapperARPA.setAttribute('id','wrapperARPA');
            chapter.appendChild(wrapperARPA)
        }

        if (record.graph[6]=='vaxx'){
            // var wrapperVAXleg = document.createElement("p");
            // wrapperVAXleg.setAttribute('id','wrapperVAXleg');
            // chapter.appendChild(wrapperVAXleg)    

            var wrapperVAX = document.createElement("div");
            wrapperVAX.setAttribute('id','wrapperVAX');
            chapter.appendChild(wrapperVAX)
        }

        record.graph[0]()

        record.graph[1]()

        var imageCredit = document.createElement('p');
        imageCredit.setAttribute('id','imageCredit');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Figure: ' + record.imageCredit;
        // imageCredit.style.color = 'purple';
        var originalHtml = imageCredit.innerHTML;
        var firstStr = record.graph[4]
        var secondStr = record.graph[5]
        var newHtml = originalHtml.replace(firstStr, firstStr.fontcolor(record.graph[2]));
        var newHtml = newHtml.replace(secondStr, secondStr.fontcolor(record.graph[3]));
        imageCredit.innerHTML = newHtml;
        chapter.appendChild(imageCredit);

    
        // const bounds = wrapper1.append("g")
        //     .style("transform", `translate(${
        //       dimensions.margin.left
        //     }px, ${
        //       dimensions.margin.top
        //     }px)`)
      
       }
    

    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }


   ////
 
   ////

        //BUTTONS!!!
    // if (record.graph) {

        // const wrapper = d3.select("#wrapper")
        //    .append('center')
        //    .append("svg")
        //    .attr("width", dimensions.width)
        //     .attr("height", dimensions.height)

        //     var storyPolicy = document.createElement('p');
        // storyPolicy.innerHTML = record.butt.policy;
        // storyPolicy.classList.add('policy');
        // chapter.appendChild(storyPolicy);     

        // }

    //BUTTONS!!!
    if (record.butt) {
        var buttTextLeft = document.createElement('span');
        buttTextLeft.classList.add('arrowL');
        var buttLeft = document.createElement('BUTTON');
        buttLeft.insertAdjacentElement("afterbegin", buttTextLeft)
        buttLeft.classList.add('butt1');
        chapter.appendChild(buttLeft);
        
        var buttTextRight = document.createElement('span');
        // buttLeft.innerHTML = '<img src="images/chevron.png" />';  // WORKING!!
        buttTextRight.classList.add('arrowright');
        var buttRight = document.createElement('BUTTON');
        // buttLeft.innerHTML = buttText;
        buttRight.insertAdjacentElement("afterbegin", buttTextRight)
        buttRight.classList.add('butt1');
        chapter.appendChild(buttRight);
        // var buttRight = document.createElement('BUTTON');
        // buttRight.innerHTML = record.butt;
        // chapter.appendChild(buttRight); 
         
    }
    
    if(record.butt){
        var i = 0;
        displayPolicy(chapter, i, record.butt); 
        // buttRight.addEventListener("click", removePolicy(chapter,i));
        // var el = document.getElementsByClassName('butt1');
        if(buttRight){
            buttRight.addEventListener('click', function() {i = updatePolicyRight(chapter, i, record.butt)});
        }
        // removePolicy(chapter, i);
        if(buttLeft){
            buttLeft.addEventListener('click', function() {i = updatePolicyLeft(chapter, i, record.butt)});
        }

        // var story = document.createElement('p');
        // story.innerHTML = arr[i];
        // chapter.appendChild(story);
    }    

        //BUTTONS!!!
    if (record.sec) {
        // var j = 0;
        // var i = 0;
        var buttonTextLeft = document.createElement('span');
        // buttTextLeft.classList.add('nameButton');        
        var buttonLeft = document.createElement('BUTTON');
        buttonLeft.innerHTML = 'LARGER';
        buttonLeft.insertAdjacentElement("afterbegin", buttonTextLeft)
        buttonLeft.classList.add('buttSelect');
        chapter.appendChild(buttonLeft);
        
        var buttonTextRight = document.createElement('span');
        // buttLeft.innerHTML = '<img src="images/chevron.png" />';  // WORKING!!
        // buttTextRight.classList.add('arrowright');
        var buttonRight = document.createElement('BUTTON');
        // buttLeft.innerHTML = buttText;
        buttonRight.innerHTML = 'SMALLER';
        buttonRight.insertAdjacentElement("afterbegin", buttonTextRight)
        buttonRight.classList.add('buttSelect');
        chapter.appendChild(buttonRight);
        // var buttRight = document.createElement('BUTTON');
        // buttRight.innerHTML = record.butt;
        // chapter.appendChild(buttRight); 
        var buttTextLeft = document.createElement('span');
        buttTextLeft.classList.add('arrowL');
        var buttLeft = document.createElement('BUTTON');
        buttLeft.insertAdjacentElement("afterbegin", buttTextLeft)
        buttLeft.classList.add('butt1');
        chapter.appendChild(buttLeft);
        
        var buttTextRight = document.createElement('span');
        // buttLeft.innerHTML = '<img src="images/chevron.png" />';  // WORKING!!
        buttTextRight.classList.add('arrowright');
        var buttRight = document.createElement('BUTTON');
        // buttLeft.innerHTML = buttText;
        buttRight.insertAdjacentElement("afterbegin", buttTextRight)
        buttRight.classList.add('butt1');
        chapter.appendChild(buttRight);

    }
    
    if (record.sec){
        // buttRight.addEventListener("click", removePolicy(chapter,i));
        // var el = document.getElementsByClassName('butt1');
        var i = 0;
        var j = 0;

        buttonLeft.classList.remove('buttSelect');
        buttonLeft.classList.add('clicked');    

        displayPolicy(chapter, i, record.sec[j]);

        if(buttRight){
            buttRight.addEventListener('click', function() {i = updatePolicyRight(chapter, i, record.sec[j])});
        }
        // removePolicy(chapter, i);
        if(buttLeft){
            buttLeft.addEventListener('click', function() {i = updatePolicyLeft(chapter, i, record.sec[j])});
        }   
        if(buttonRight){
            buttonRight.addEventListener('click', function() {i, j = updateToLarger(chapter, i, record.sec[1], buttonLeft, buttonRight)});
        // console.log(record.sec[0])
        }
        if(buttonLeft){
            buttonLeft.addEventListener('click', function() {i, j = updateToSmaller(chapter, i, record.sec[0], buttonLeft, buttonRight)});
        // console.log(record.sec[0])
        }         
    }


    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement('div');
// This assigns all the content to the footer element
if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
    footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

// Create a inset map if enabled in config.js
if (config.inset) {
    var insetMap = new mapboxgl.Map({
       container: 'mapInset', // container id
       style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
       center: config.chapters[0].location.center,
       // Hardcode above center value if you want insetMap to be static.
       zoom: 3, // starting zoom
       hash: false,
       interactive: false,
       attributionControl: false,
       //Future: Once official mapbox-gl-js has globe view enabled,
       //insetmap can be a globe with the following parameter.
       //projection: 'globe'
     });
   }   



// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }


    //                 0            1               2           3              4                5               6              7            8           9     10            11          12              13          14          15              16          17              18          19          20          21                 22     23            24          25
    // var dateArray = ['2020-03-20','2020-04-10', '2020-06-22', '2020-08-01','2020-09-18', '2020-10-16','2020-10-25','2020-11-12', '2020-12-05', '2021-01-01' ,'2021-01-25','2021-02-18', '2021-03-06','2021-05-06','2021-07-06','2021-07-15','2021-09-30','2021-11-01', '2021-12-20','2022-01-01','2022-01-10','2022-01-16','2022-02-01','2022-02-07','2022-02-28','2022-03-05','2022-03-15','2022-05-01'];
    //               first cases,  water0,    reopening,   SE spread,        in bw         dakotas       in bw     schools     second wave      vax 50%,              omicron dom    omicron crazy
    //                  prev1                                  reop                                    prev2                                                                        prev3                                                 vax                                    arpa
    var dateArray = ['2020-04-25','2020-05-05','2020-05-15','2020-05-27','2020-06-10','2020-07-15', '2020-08-01','2020-08-20','2020-09-14','2020-09-27','2020-10-25','2020-11-21','2020-12-15','2021-01-15','2021-02-15','2021-03-01','2021-07-06','2021-08-01','2021-08-20','2021-09-05','2021-09-30','2022-01-15', '2022-02-01'];
    // var dateArray = ['2021-01-15','2021-02-15', '2021-03-01', '2021-07-06'];
    layerAdder(dateArray);
    // 11-01, 12-20

    // var fns = [drawLineChartPrev,drawLineChartForward];
    // Setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            console.log(response.element.id);
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            // if (chapter.callback == 'removeLegend') {
            //     removeLegend();
            // }
            // if(chapter.graph.includes('draw')) {
                // fns[parseInt(chapter.graph[4])]()
                // drawLineChartPrev()
            // }
            if (chapter.callback == 'addLegend') {
                addLegend();
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
            if (response['index'] == 0 && response['direction'] == 'up') {
                removeLegend('YEET')
            }
        });
});


/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);


function layerAdder(dateColumn) {
    for (let i = 0; i < dateColumn.length; i++) {

        // console.log(dateColumn.length)                                       //white         //cyan          //lightblue     //yellow         //orange         //pink           //red
        // R=[ 'interpolate', ['linear'],['number',['get',  dateColumn[i]]], 0, "#ffffff", 300, "#00FFFF", 600, "#1AA7EC", 1000, "#FFFF00", 1500, '#FFA500', 2000, '#FFC0CB', 2800, '#FF0000']//, 100, "#fd8d3c", -66, "#feb24c", -50, "#fed976", -33, "#ffeda0", -16, "#ffffcc", 0, "#ffffff"]
        // R=[ 'interpolate', ['linear'],['number',['get',  dateColumn[i]]], 0, "#ffffff", 300, "#00FFFF", 600, "#6ded97", 1000, "#c9ca2b", 1500, '#efa300', 2000, '#ff7600', 3000, '#ff4100', 4200,'#A020F0']//, 100, "#fd8d3c", -66, "#feb24c", -50, "#fed976", -33, "#ffeda0", -16, "#ffffcc", 0, "#ffffff"]
        R=[ 'interpolate', ['linear'],['number',['get',  dateColumn[i]]], 0, "#2a2a2a", 300, "#00FFFF", 600, "#6ded97", 1000, "#c9ca2b", 1500, '#efa300', 2000, '#ff7600', 3000, '#ff0000'] //, 4200,'#A020F0']//, 100, "#fd8d3c", -66, "#feb24c", -50, "#fed976", -33, "#ffeda0", -16, "#ffffcc", 0, "#ffffff"]
        // light ^^^
        // R=[ 'interpolate', ['linear'],['number',['get',  dateColumn[i]]], 0, "#2a2c2c", 300, "#00FFFF", 600, "#6ded97", 1000, "#c9ca2b", 1500, '#efa300', 2000, '#ff7600', 2800, '#ff4100']//, 100, "#fd8d3c", -66, "#feb24c", -50, "#fed976", -33, "#ffeda0", -16, "#ffffcc", 0, "#ffffff"]
        // dark ^^^
        // R=[ 'interpolate', ['linear'],['number',['get',  dateColumn[i]]], 0, "#ffffff", 300, "#00FFFF", 600, "#1AA7EC", 900, "#FFFF00" , 1200, "#FFA500", 1500 , "FF0000"] //, -66, "#feb24c", -50, "#fed976", -33, "#ffeda0", -16, "#ffffcc", 0, "#ffffff"]
        map.addLayer({
            'id': `info${i}`,
            'type': 'fill',
            'source': {
                'type': 'geojson',
                // 'data': 'data/master_gdf.geojson'
                'data': 'data/limited_gdf13.geojson'
            },
            'opacity': 0,
            'paint': {
                'fill-color': R,
                // 'fill-color': ['step', ['get', dateColumn[i]],
                //     '#ffffff',
                //     300, '#ffffff', //white
                //     600, '#00FFFF', //cyan
                //     900, '#1AA7EC', //light blue
                //     1200, '#FFFF00', //yellow
                //     1500, '#FFA500', //orange
                //     1800, '#FF0000', //red
                //     2500, '#FFC0CB'  // pink
                // ],
                'fill-opacity': 0
            }
        }, 'waterway-shadow');
    }
}

const collection = document.getElementsByClassName("step");

// // console.log(collection[0])
var x = collection
// console.log(x[4])
x[1].classList.add('fino');
x[2].classList.add('fino');

x[4].classList.add('fino');
x[5].classList.add('fino');

x[7].classList.add('fino4');
x[8].classList.add('fino4');
x[9].classList.add('fino4');
x[10].classList.add('fino4');
x[11].classList.add('fino4');

x[13].classList.add('fino3');
x[14].classList.add('fino3');
x[15].classList.add('fino3');

x[17].classList.add('fino4');
x[18].classList.add('fino4');
x[19].classList.add('fino4');
x[20].classList.add('fino4');
x[21].classList.add('fino4');

// x[16].classList.add('fino');

// x[19].classList.add('fino3');
// x[20].classList.add('fino3');
// x[21].classList.add('fino3');

// x[23].classList.add('fino4');
// x[24].classList.add('fino4');
// x[25].classList.add('fino4');
// x[26].classList.add('fino4');
// console.log(x[4].className);