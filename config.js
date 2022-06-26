var infoZoom = 2.1;

var incomeLegend = document.getElementById('income-legend');

function removeLegend() {
    incomeLegend.style.opacity = 0;
    incomeLegend.style.transition= 'opacity 0.75s';
  }

function addLegend() {
    incomeLegend.style.opacity = 1;
    incomeLegend.style.transition= 'opacity 1.2s';
  }

removeLegend();

const ob1_1 = {city:"Buffalo, New York", policy:"Mayor announces state of emergency and issues guidance regarding city office closures and emergency management resources", date:"13 March, 2020"};
const ob1_2 = {city:"Memphis, Tennessee", policy:"Mayor Jim Strickland has issued a declaration of emergency for the City of Memphis.", date:"17 March, 2020"};
const ob1_3 = {city:"Baltimore, Maryland", policy:"Mayor Bernard C. 'Jack' Young declares a state of emergency for Baltimore.", date:"18 March, 2020"};
const ob1_4 = {city:"Dakota City, Nebraska", policy:"Dakota City, Nebraska has declared a state of emergency. They have closed city hall as well as public libraries,", date:"20 March, 2020"};
const ob1_5 = {city:"Miami Beach, Florida", policy:"The City Manager of the City of Miami Beach, promulgated an Emergency Order which, among other requirements, temporarily closed certain City facilities and businesses located in the City,  and imposed emergency measures, including a general curfew throughout the City, effective 12: 00 a. m. on March 24, 2020;", date:"24 March, 2020"};

var sl1 = [ob1_1, ob1_2, ob1_3, ob1_4, ob1_5];

//Slide 2

const ob2_1 = {city:"Houston, Texas", policy:"The City announced that water service disconnections will be suspended until further notice", date:"12 March, 2020"};
const ob2_2 = {city:"Washington, DC", policy:"The city council unanimously passed the Covid-19 Response bill, which prohibits disconnection of electric, gas, and water utilities, and prohibits evictions during the public health emergency for both residential and non-residential tenants.", date:"23 March, 2020"};
const ob2_3 = {city:"Nashville, Tennessee", policy:"The Metro Water Services' Pandemic Plan Phase 2 went into effect to help protect the community further. The plan includes continuation of services and will not assess late fees or disconnect water through the end of June", date:"14 April, 2020"};

var sl2 = [ob2_1, ob2_2, ob2_3];

// Slide 3

const ob3_1 = {city:"New York, New York", policy:"Open Streets + Restaurants: The new program will expand seating options for restaurants on select restaurant corridors throughout the five boroughs.", date:"3 July, 2020"};
const ob3_2 = {city:"Wilmington, Delaware", policy:"'Curbside Wilmington' will enable Downtown restaurants to expand their outdoor dining into former parking spaces directly in front of their businesses, thereby allowing more seating at safely spaced distances in accordance with Governor Carney's guidelines.", date:"10 June 2020"};
const ob3_3 = {city:"Albuquerque, New Mexico", policy:"Mayor Tim Keller announced that, for the second summer in a row, the City of Albuquerque will allow restaurants to add sidewalk seating. The mayor will also work to expand outdoor seating into parking lots, where it makes sense to do so.", date:"27 June, 2020"};
const ob3_4 = {city:"Columbus, Ohio", policy:"In an effort to assist local restaurants during the Public Health Emergency Order declared by Mayor Andrew J. Ginther in March, the City of Columbus is implementing a pilot program that will allow restaurants to expand outdoor seating in Columbus.", date:"31 August, 2020"};

var sl3 = [ob3_1, ob3_2, ob3_3, ob3_4];

// Slide 4

const ob4_1 = {city:"Miami, Florida", policy:"Miami Mayor Francis Suarez today formally extended the City of Miami's state of emergency declaration in keeping with Charter requirements.", date:"2 July 2020"};
const ob4_2 = {city:"Baton Rouge, Louisiana", policy:"Mayor-President Sharon Weston Broome announced Tuesday her intention to extend the mask order for East Baton Rouge Parish. Once the extended order is signed, it will stay in effect until the parish enters Phase 3 of reopening.", date:"28 July 2020"};
const ob4_3 = {city:"Memphis, Tennessee", policy:"The mayor has extended the emergency order due to the continued danger that COVID-19 poses in the community. This additionally extends 'Safer at Home' policies throughout the city, even as the city remains in Phase 2", date:"7 July, 2020"};
const ob4_4 = {city:"Louisville, Kentucky", policy:"Mayor Greg Fischer today announced he is extending his State of Emergency order through August 31 because of a continued surge in COVID-19 case counts. The original order was set to expire on July 31, but Fischer extended it through August 31, 2020. This allows the city to respond to the administrative challenges with greater flexibility.", date:"21 July, 2020"};
const ob4_5 = {city:"Plano, Texas", policy:"The city has instituted mandatory mask wearing in all public spaces. This includes businesses, parks and recreation facilities, religious centers, and other places where social distancing may not be possible. This ordinance is in place through August 10, or until such time that it is not required. ", date:"30 June, 2020"};

var sl4 = [ob4_1, ob4_2, ob4_3, ob4_4, ob4_5];

// Slide 5

const ob5_1 = {city:"Yankton, South Dakota", policy:"The Yankton City Commission unanimously approved an ordinance on Tuesday, March 24th, temporarily closing on-site services at some businesses, such as bars, restaurants, hair salons, etc., and limiting public gatherings to 10 or less.", date:"24 March 2020"};
const ob5_2 = {city:"Grand Forks, North Dakota", policy:"Mayor Mike Brown declared a public health emergency in Grand Forks, North Dakota. It gives the Mayor the power to enact a curfew, shut off utilities or quarantine people. ", date:"16 March 2020"};
const ob5_3 = {city:"Sioux Falls, South Dakota", policy:"Mayor Paul TenHaken limits public gatherings at city-owned buildings to 10 people.", date:"17 March 2020"};
const ob5_4 = {city:"Grand Forks, North Dakota", policy:"Suspension of water shutoffs, no announced restoration of service for pre-existing shutoffs.", date:"20 March 2020"};
const ob5_5 = {city:"Rapid City, South Dakota", policy:"Suspension of water shutoffs, no announced restoration of service for pre-existing shutoffs.", date:"12 March 2020"};

var sl5 = [ob5_1, ob5_2, ob5_3, ob5_4, ob5_5];

// Slide 7

const ob7_1 = {city:"Newark, New Jersey", policy:"As the City faces a spike in COVID-19 cases, much like most of the nation, Mayor Ras J. Baraka has enacted some of the same restrictions that were so successful in curbing the spread last spring.", date:"12 November, 2020"};
const ob7_2 = {city:"Columbus, Ohio", policy:"Columbus Public Health and Franklin County Health announced that the Stay at Home Advisory that began Nov. 20,2020 will continue until Jan. 21, 2021.", date:"20 November 2020"};
const ob7_3 = {city:"Oakland, California", policy:"City of Oakland Temporarily Suspends Indoor Recreation Programs Due to Rise in COVID-19 Cases.", date:"2 December 2020"};
const ob7_4 = {city:"Jacksonville, Florida", policy:"The Mayor of Jacksonville, renews the state of emergency requiring residents to wear mask.", date:"26 December 2020"};
const ob7_5 = {city:"New York, New York", policy:"COVID-19 continues to spread in New York City (NYC) with concerning increases in community transmission in certain neighborhoods. NYC is taking action by implementing restrictions in three zones identified by the State - red, orange, yellow.", date:"19 November 2020"};

var sl7 = [ob7_1, ob7_2, ob7_3, ob7_4, ob7_5];

// Slide 6

const ob6_1 = {city:"New York, New York", policy:"On Thursday, November 19, all school buildings temporarily closed for teaching and learning, and all New York City public school students transitioned to fully remote learning. Public school buildings have begun reopening in phases for in-person learning.", date:"19 November, 2020"};
const ob6_2 = {city:"Washington, DC", policy:"Mayor Bowser outlined new asymptomatic coronavirus (COVID-19) testing protocols for students and staff participating in DC Public Schools (DCPS) in-person programming. The pilot will begin next week, and tests are at no cost to students or staff.", date:"30 November, 2020"};
const ob6_3 = {city:"New Orleans, Louisiana", policy:"Due to a very concerning spike in the prevalence of COVID-19 in New Orleans, NOLA Public Schools (NOLA-PS) will return to distance learning District-wide to best protect the health and safety of our students, their families, and our staff and teachers", date:"28 December, 2020"};
const ob6_4 = {city:"San Antonio, Texas", policy:"The Parks and Recreation Department is offering students free access to Virtual Learning Hubs at eight community centers. Students and staff will follow COVID-19 health and safety protocols such health screenings, temperature checks, as well as wearing face coverings or masks daily, physical distancing and frequent hand washing.", date:"23 September, 2020"};
const ob6_5 = {city:"Los Angeles, California", policy:"Efforts to close the digital divide took a step forward on Sept. 15 when the LA County Board of Supervisors approved LACOE's proposal to allocate $12.8 million in federal coronavirus relief funds (CARES Act funding) to purchase devices and hotspots for students in need.", date:"17 September, 2020"};

var sl6 = [ob6_1, ob6_2, ob6_3, ob6_4, ob6_5];

// Slide 8

const ob8_1 = {city:"Los Angeles, California", policy:"The Los Angeles City Council unanimously passed two motions Wednesday with the goal of making Los Angeles' vaccine distribution equitable and inoculating low-income communities of color.", date:"27 January 2021"};
const ob8_2 = {city:"Seattle, Washington", policy:"Seattle has created a vaccine information site so that residents can quickly confirm eligibility for the vaccine and locations to receive it.", date:"21 January 2021"};
const ob8_3 = {city:"Mesa, Arizona", policy:"The city of Mesa is offering employees the first round of the COVID-19 vaccine and several pop-ups have been scheduled throughout the city.", date:"21 January, 2021"};
const ob8_4 = {city:"Henderson, Nevada", policy:"City employees and frontline workers have begun receiving the COVID-19 vaccine. ", date:"4 March, 2021"};
const ob8_5 = {city:"Phoenix, Arizona", policy:"Phoenix provides employees information on COVID-19 vaccination to encourage employees to get the vaccine from Maricopa County.", date:"4 February 2021"};

var sl8 = [ob8_1, ob8_2, ob8_3, ob8_4, ob8_5];

// Slide 9

const ob9_1 = {city:"North Las Vegas, Nevada", policy:"The City of North Las Vegas has partnered with the ridesharing company Lyft to offer free rides to and from North Las Vegas vaccination sites.", date:"1 April, 2021"};
const ob9_2 = {city:"New Orleans, Louisiana", policy:"City Partners With Uber, Greater New Orleans Foundation, Lcmc Health, And Urban League Of Louisiana To Provide 20,000 Rides To Vaccine Sites", date:"16 March, 2021"};
const ob9_3 = {city:"San Jose, California", policy:"San Jose Mayor Sam Liccardo announced the generous contribution of $1 million from Google to the Silicon Valley Strong fund, a recently launched regional effort to support those in the community hit hard by COVID-19.", date:"30 March, 2021"};
const ob9_4 = {city:"Irving, Texas", policy:"SEWA International and the SLPS Community Center joined partners to provide food, face masks, and essential supplies to community members in need. This partnership with the City of Irving is helping to ensure residents are taken care of as cases continue to rise", date:"5 May, 2021"};

var sl9 = [ob9_1, ob9_2, ob9_3, ob9_4];

// Slide 10

const ob10_1 = {city:"Pensacola, Florida", policy:"The City of Pensacola has officially rolled out its vaccine incentive program -- offering $100 to city employees who get a COVID vaccine shot.", date:"26 July 2021"};
const ob10_2 = {city:"New York, New York", policy:"Mayor Bill de Blasio today announced 50,000 New Yorkers have received the $100 vaccine incentive available at City-run vaccine sites. A majority of the $100 cards have gone to New Yorkers of color.", date:"17 August 2021"};
const ob10_3 = {city:"Rogers, Arkansas", policy:"The City of Rogers has launched a new incentive program to help encourage its citizens to get vaccinated, and it involves free T-shirts and tank tops.", date:"21 July 2021"};
const ob10_4 = {city:"Chicago, Illinois", policy:"[Local barber] Coleman has partnered with the City of Chicago to help vaccinate her clients and neighbors in Englewood, a predominantly Black neighborhood with the lowest vaccination rate in town. The latest incentive to boost vaccinations? Get a cut for a jab at your local barbershop.", date:"21 June 2021"};

var sl10 = [ob10_1, ob10_2, ob10_3, ob10_4];

// Slide 11

const ob11_3 = {city:"Phoenix, Arizona", policy:"The Phoenix, Arizona, city council voted Wednesday evening in support of giving bonuses ranging from $250 to $2,000 to city employees if they are fully vaccinated for COVID-19 by next month – using money from President Biden’s American Rescue Plan.", date:"16 December, 2021"};
const ob11_4 = {city:"Tulare, California", policy:"The city of Tulare will now offer $500 to city employees who get or are already vaccinated against COVID-19.", date:"15 December, 2020"};
const ob11_1 = {city:"New York, New York", policy:"New York City's vaccine mandate now covers all municipal workers -- and comes with a $500 bonus for those who start their shots between now and October 29 at a city-run site.", date:"20 October, 2021"};
const ob11_2 = {city:"Eureka, California", policy:"The Eureka City Council has unanimously voted to pass a vaccine requirement for city personnel. The requirement provides no testing option. ", date:"4 October 2021"};
const ob11_5 = {city:"Ann Arbour, Michigan", policy:"Ann Arbor, Michigan has implemented a vaccine mandate for all city employees that includes an option for regular testing. ", date:"1 October 2021"};

var sl11 = [ob11_1, ob11_2, ob11_3, ob11_4, ob11_5];

// Slide 12

// const ob12_1 = {city:"", policy:"", date:""};
// const ob12_2 = {city:"", policy:"", date:""};
// const ob12_3 = {city:"", policy:"", date:""};
// const ob12_4 = {city:"", policy:"", date:""};
// const ob12_5 = {city:"", policy:"", date:""};

// var sl12 = [ob12_1, ob12_2, ob12_3, ob12_4, ob12_5];

// Slide Arpa Smaller

const obAS_1 = {city:"Marble Falls, Texas", policy:"The bulk of $1.74 million in federal Coronavirus Local Fiscal Recovery Funds will go toward water and sewer infrastructure projects, the Marble Falls City Council agreed at its regular meeting Tuesday, Dec. 7.", date:"9 December, 2021"};
const obAS_2 = {city:"Prescott Valley, Arizona", policy:"Broadband is coming to Yavapai County. Stan Goligoski, execu­tive director of Yavapai County Education Service Agency's Support Services Division, gave an update to the Sedona City Council on Sept. 14, on the county's Broadband Final Mile Initiative to get broadband internet service to all homes and businesses within Yavapai County.", date:"4 November, 2021"};
const obAS_3 = {city:"Archer, Texas", policy:"The council gave City Manager George Huffman the go ahead to begin taking bids for a major water lined improvement project. Funds provided to the city because of the American Rescue Plan Act of 2021 will finance the project cost anticipated to be more than $400,000.", date:"26 January, 2022"};
const obAS_4 = {city:"Prinsburg, Minnesota", policy:"Approximately 500 residents of Prinsburg will soon have the option of purchasing high-speed broadband services following the construction of an 8.1-mile fiber network. Helping fund the project are American Rescue Plan Act funds from both the city of Prinsburg ($45,000 from ARPA, $175,000 from a bond) and Kandiyohi County ($330,000 from ARPA).", date:"6 December, 2021"};
const obAS_5 = {city:"Yuba, California", policy:"The Yuba City Council approved the transfer of $4 million in American Rescue Plan Act (ARPA) funding to finance two sewer projects on Tuesday.", date:"18 November, 2021"};

var slAS = [obAS_1, obAS_2, obAS_3, obAS_4, obAS_5];

// Slide Arpa Larger

const obAL_1 = {city:"Detroit, Michigan", policy:"Detroit City Council approved a resolution to use ARPA dollars to help fund a project to turn a long vacant high-rise — the Lee Plaza — into senior housing", date:"18 January, 2022"};
const obAL_5 = {city:"St. Paul, Minnesota", policy:"St. Paul and Ramsey County officials plan to spend $74.5 million in federal American Rescue Plan funding on new housing affordable for the area's poorest residents. Under the plan, St. Paul will commit $37.5 million and Ramsey County will commit another $37 million.", date:"13 December 2021"};
const obAL_3 = {city:"Rochester, New York", policy:"The Rochester City Council approved a two-year pilot program which will provide $500 per month to 175 families that live at or below the federal poverty level. The next year, a different set of 175 families would be given $500 per month. The pilot program would cost $2.2 million and be funded by money from the American Rescue Plan Act.", date:"15 December 2021"};
const obAL_2 = {city:"San Francisco, California", policy:"San Francisco has announced the city's new rental relief program, which is the latest emergency measure to help ease months of money fears from those suffering most during the COVID-19 pandemic.", date:"25 May 2021"};
const obAL_4 = {city:"Louisville, Kentucky", policy:"With millions in federal stimulus dollars in hand, Louisville Metro Government asked residents where they think more funds need to be dedicated. And for many of them, affordable housing was their number one pick.", date:"4 August, 2021"};

var slAL = [obAL_1, obAL_2, obAL_3, obAL_4, obAL_5];

var config = {    
    accessToken: 'pk.eyJ1Ijoia3VuYWwyNWsiLCJhIjoiY2wzZXk5aHV6MDJxNjNrcWkzc3NmbmZsbSJ9.doJOBOpo8o2JpjQL1cCsNQ',
    // style: 'mapbox://styles/kunal25k/cl3f3k2yq001n15pkeduqy8ew', //light
    style: 'mapbox://styles/kunal25k/cl3nyck2d005v15o4er1jluqu', // dark
    theme: 'dark',
    plugin: 'yes',
    // inset: true,
    // projection: 'equirectangular',
    alignment: 'right',
    // toptitle: 'Bloomberg Philanthropies | National League of Cities | NYU CUSP',
    title: 'Local Actions were Reactive to the Pandemic - How the pandemic shaped city actions in America',
    // byline: 'Story by Kunal Kulkarni and Manisha Mirchandani Graphics by Kunal Kulkarni',
    clout: '<br>Story by <a href="www.linkedin.com/in/kunal25k/"> Kunal Kulkarni</a> and <a href="https://www.linkedin.com/in/manisha-mirchandani">Manisha Mirchandani</a> <br> Graphics by <a href="www.linkedin.com/in/kunal25k/">Kunal Kulkarni</a>',
    // description: '<p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
    description: "Bloomberg Philanthropies, along with the NLC created the COVID-19 local action tracker. The data in this Tracker reflects how communities across the country jumped into action to address community needs and learn from one another. ",
    footer: 'This story is based on data by <a href="https://www.nlc.org/resource/covid-19-local-action-tracker/">Bloomberg Philantropies and the National League of Cities</a> ',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',
    chapters: [
        {
            id: '0info',
            title: '1. COVID-19 arrives on American Shores, March 2020', // 2020-03-20
            // image: 'images/chevron.png',
            imageCredit: '<b>Prevention Policies</b> and <b>Cases</b>',
            description: '<span>On March 13, 2020, the novel coronavirus outbreak was declared a national emergency.<br> Anticipating a wave of infections after COVID had ravaged through China and Italy, in the following week, more than <b>350</b> cities came out with emergency policies. The next month saw more than <b>1600</b> policies proposed.<span>', //That’s 35% of all local covid actions to date!
            butt: sl1,
            graph : [drawFirstLegend,drawLineChartFirst, 'blue', 'red', 'Cases' ,'Prevention Policies','first'],
            callback: 'addLegend',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                
                {
                    layer: 'info0',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'info0',
                    opacity: 0,
                }
            ]
        },
        {
            id: '1info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info1',
                    opacity: 0
                }
            ]
        },
        {
            id: '2info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info2',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info2',
                    opacity: 0
                }
            ]
        },

        {
            id: '3info',
            title: '2. Re-Opening, April 2020', // 2020-04-10
            // image: 'images/Chapter_1_Image.jpg',
            // imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: '<b>Reopening</b> policies spiked in June 2020, when the first wave had sort of plateaued before rising up again. This indicates that the laxing of policies/ loosening up lockdown policies were strongly correlated with the rise in cases.',
            callback: 'addLegend',
            imageCredit: '<b>Re-Opening Policies</b> and <b>Cases</b>',
            butt: sl3,
            graph : [drawReOpeningLegend,drawLineChartReOpening, 'blue', 'purple', 'Cases' ,'Re-Opening Policies','reopen'],
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                
                {
                    layer: 'info3',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'info3',
                    opacity: 0,
                }
            ]
        },
        {
            id: '4info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info4',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info4',
                    opacity: 0
                }
            ]
        },
        {
            id: '5info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info5',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info5',
                    opacity: 0
                }
            ]
        },

        {
            id: '6info',
            // hidden: true,
            callback: addLegend,
            // butt: sl3,
            title: '3. Prevention (2), June 2020',
            imageCredit: '<b>Prevention Policies</b> and <b>Cases</b>',
            graph : [drawSecondLegend,drawLineChartSecond, 'blue', 'red', 'Cases' ,'Prevention Policies','second'],
            // image: 'images/Chapter_2_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'The loosening of Covid restrictions saw a second wave of the coronavirus corresponding with a <b>second wave of Prevention Policies</b> - with cities reimposing many restrictions',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info6',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'info6',
                    opacity: 0
                }
            ]
        },
        {
            id: '7info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info7',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info7',
                    opacity: 0
                }
            ]
        },
        {
            id: '8info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info8',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info8',
                    opacity: 0
                }
            ]
        },
        {
            id: '9info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info9',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info9',
                    opacity: 0
                }
            ]
        },
        {
            id: '10info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info10',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info10',
                    opacity: 0
                }
            ]
        },
        {
            id: '11info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info11',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info11',
                    opacity: 0
                }
            ]
        },


        {
            id: '12info',   //2020-08-01
            title: '4. Prevention (3), August 2020',
            butt: sl7,
            imageCredit: '<b>Third Policies</b> and <b>Cases</b>',
            graph : [drawThirdLegend,drawLineChartThird, 'blue', 'red', 'Cases' ,'Prevention Policies','third'],
            // image: 'images/Chapter_2_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'As a devastating third wave swept through the country, while there were lesser city policies, cities imposed tighter restrictions - have a look below.',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info12',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info12',
                    opacity: 0
                }
            ]
        },

        {
            id: '13info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info13',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info13',
                    opacity: 0
                }
            ]
        },
        {
            id: '14info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info14',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info14',
                    opacity: 0
                }
            ]
        },
        {
            id: '15info',   //2020-08-01
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info15',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info15',
                    opacity: 0
                }
            ]
        },

        {
            id: '16info',  //2020-10-16
            title: '5. Vaccination, October 2020',
            butt: sl8,
            imageCredit: '<b>Vaccination Policies</b> and <b>Cases</b>',
            // callback: addLegend,
            graph : [drawVaxLegend,drawLineChartVax, 'blue', 'green', 'Cases' ,'Vaccination Policies','vaxx'],
            description: 'The approval of COVID vaccines in December, 2020 coincided with a decrease in overall cases throughout the country.',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info16',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info16',
                    opacity: 0
                }
            ]
        },

        {
            id: '17info',  //2020-10-16
            // title: '5. The Dakotas, October 2020',
            // butt: sl8,
            // // image: 'images/rushmore.jpg',
            // // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            // description: 'With no mask mandates and only two cities having some sort of covid regulation (limiting gatherings of more than 10 people), North and South Dakota saw an unprecedented covid outbreak. A traditionally republican voter base, South Dakota saw a huge Trump rally in July at Mount Rushmore, with thousands of people turning up. Another event attributed as a super spreader by the CDC, the Sturgis motorcycle rally in August saw hundreds of thousands of visitors. Hospitals were so short-staffed that North Dakota had to allow healthcare workers who had tested positive to continue working.',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info17',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info17',
                    opacity: 0
                }
            ]
        },
        {
            id: '18info',  //2020-10-16
            // title: '5. The Dakotas, October 2020',
            // butt: sl8,
            // // image: 'images/rushmore.jpg',
            // // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            // description: 'With no mask mandates and only two cities having some sort of covid regulation (limiting gatherings of more than 10 people), North and South Dakota saw an unprecedented covid outbreak. A traditionally republican voter base, South Dakota saw a huge Trump rally in July at Mount Rushmore, with thousands of people turning up. Another event attributed as a super spreader by the CDC, the Sturgis motorcycle rally in August saw hundreds of thousands of visitors. Hospitals were so short-staffed that North Dakota had to allow healthcare workers who had tested positive to continue working.',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info18',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info18',
                    opacity: 0
                }
            ]
        },
        {
            id: '19info',  //2020-10-16
            // title: '5. The Dakotas, October 2020',
            // butt: sl8,
            // // image: 'images/rushmore.jpg',
            // // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            // description: 'With no mask mandates and only two cities having some sort of covid regulation (limiting gatherings of more than 10 people), North and South Dakota saw an unprecedented covid outbreak. A traditionally republican voter base, South Dakota saw a huge Trump rally in July at Mount Rushmore, with thousands of people turning up. Another event attributed as a super spreader by the CDC, the Sturgis motorcycle rally in August saw hundreds of thousands of visitors. Hospitals were so short-staffed that North Dakota had to allow healthcare workers who had tested positive to continue working.',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info19',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info19',
                    opacity: 0
                }
            ]
        },
        {
            id: '20info',  //2020-10-16
            // title: '5. The Dakotas, October 2020',
            // butt: sl8,
            // // image: 'images/rushmore.jpg',
            // // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            // description: 'With no mask mandates and only two cities having some sort of covid regulation (limiting gatherings of more than 10 people), North and South Dakota saw an unprecedented covid outbreak. A traditionally republican voter base, South Dakota saw a huge Trump rally in July at Mount Rushmore, with thousands of people turning up. Another event attributed as a super spreader by the CDC, the Sturgis motorcycle rally in August saw hundreds of thousands of visitors. Hospitals were so short-staffed that North Dakota had to allow healthcare workers who had tested positive to continue working.',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info20',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info20',
                    opacity: 0
                }
            ]
        },

        {
            id: '21info',  //2020-10-16
            // title: '5. The Dakotas, October 2020',
            // butt: sl8,
            // // image: 'images/rushmore.jpg',
            // // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            // description: 'With no mask mandates and only two cities having some sort of covid regulation (limiting gatherings of more than 10 people), North and South Dakota saw an unprecedented covid outbreak. A traditionally republican voter base, South Dakota saw a huge Trump rally in July at Mount Rushmore, with thousands of people turning up. Another event attributed as a super spreader by the CDC, the Sturgis motorcycle rally in August saw hundreds of thousands of visitors. Hospitals were so short-staffed that North Dakota had to allow healthcare workers who had tested positive to continue working.',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info21',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info21',
                    opacity: 0
                }
            ]
        },

        {
            id: '22info',  //2020-10-16
            title: '6. ARPA, November 2020',
            sec: [slAL, slAS],
            // callback: removeLegend,
            imageCredit: '<b>ARPA Policies</b> and <b>Cases</b>',
            graph : [drawARPALegend,drawLineChartARPA, 'blue', 'green', 'Cases' ,'ARPA Policies','arpa'],
            description:'The American Rescue Plan Act was introduced to speed up the countries recovery from the economic and health effects of the COVID-19 pandemic and the ongoing recession. More than <b>350</b> cities have since introduced ARPA policies.<br><br> While larger cities seemed to focus investments on housing, smaller cities used their ARPA budgets to update their infrastructure.',
            location: {
                center: [-95.7129, 37.0902],
                zoom: infoZoom,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'info22',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'info22',
                    opacity: 0
                }
            ]
        },

        // {
        //     id: '8info',
        //     // title: '6. The big Second Wave, December 2020',  //2020-12-05
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     // description: "With hospitals struggling to find Intensive Care Unit beds for patients, many cities in the United States imposed lockdowns and business closures in an attempt to contain a wave of illness which was catalysed by November's Thanksgiving gatherings. <br></br>Emergency measures included lockdowns, curfews and mask mandates, as officials urged people not to travel in a rather grim holiday season.",
        //     // butt: sl7,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         // zoom: 7,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info6',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info6',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '9info',
        //     title: '7. Vaccination, January 2021',  //2020-12-05
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: "After the announcement of the success of Pfizer’s clinical trials for a covid vaccine, <b>“Vaccinations”</b> was by far the most popular policy area, and continued to be for the next 6 months. The first wave of shots went to healthcare workers, as well as some top government officials. By March 12, 2021, The US surpassed 100 million doses, almost 1/3rd of its population. <br></br>Local actions included creating websites for vaccination information and setting up vaccination sites.",
        //     butt: sl8,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         // zoom: 7,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info9',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info9',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '10info',  //2020-10-16
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info10',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info10',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '11info',  //2020-10-16
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info11',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info11',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '12info',
        //     title: '7. Public-Private partnerships, March 2021', //2021-03-06
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: "PPPs bring together the expertise and resources of the two sectors in order to provide services or infrastructure at a lower cost. Private organisations manufactured critical medical supplies, supported first responders and healthcare professionals, and provided direct monetary donations. Some big names include <b>Google</b>, <b>CVS</b> and <b>Ford</b>.</br>Some cities partnered with ride hailing companies like <b>Uber</b> and <b>Lyft</b> for free, possibly safer trips to vaccination centres. <br><br> Meanwhile, America saw its first Delta variant case on 23 February, 2021.",
        //     butt: sl9,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info12',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info12',
        //             opacity: 0
        //         }
        //     ]
        // },


        // {
        //     id: '13info',

        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info13',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info13',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '14info',

        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info14',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info14',
        //             opacity: 0
        //         }
        //     ]
        // },


        // {
        //     id: '15info',
        //     title: '8. 50% of the country is vaccinated, August 2021',  //2021-08-06
        //     butt: sl10,
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: "During a relatively dormant five-month Spring-Summer period, there were two things to note - <br> 1. The Delta variant gradually became the dominant strain in the country, crossing the mark on 7 July. <br> 2. On August 6, more than half of the population was fully vaccinated. <br><br>To rev up the country's sluggish immunisation campaign, cities started offering incentives. In fact, in the NLC dataset, 33% of all vaccination policies in this period were city incentives, ranging from $100 payouts to free haircuts.",
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info15',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info15',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '16info',
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info16',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info16',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: '17info',
        //     title: '9. November 2021, ARPA',
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: "The American Rescue Plan Act was introduced to speed up the countries recovery from the economic and health effects of the COVID-19 pandemic and the ongoing recession. More than <b>350</b> cities have since introduced ARPA policies. <br><br>  We divided cities in two categories - smaller cities, with populations below a 100k, and larger cities, with populations above a 100k. <b></b>The pandemic has exacerbated pre-existing homelessness issues, and larger cities focused their ARPA budgets on improving affordable housing. 51% of all ARPA policies in larger cities focused on homelessness. <br><br><b>Small cities, big infrastructure problems</b> Small cities have often struggled to find adequate funding to replace and rebuild their critical infrastructure. After the 2008 recession, the TIGER program, along with other huge infrastructure grants, supported needed repairs and long-term transformative investments, along with boosting government spending. Such programs require cities to match grants - which smaller cities couldn’t afford without going over budget, according to Vince Williams, mayor of union city, Georgia, in a conversation with Kathy Maness, president of the NLC. <i>ARPA allocations have finally given smaller cities an opportunity to fix lagging infrastructure issues</i> - with 52% of all small city ARPA policies containing phrases like ‘water infrastructure’, ‘sewage treatment’, ‘broadband’, ‘drainage issues’. In the NLC dataset, half of all smaller city ARPA policies focused on infrastructure.",
        //     sec: [slAL, slAS],
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info17',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info17',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '18info',
        //     title: '10. Holiday season, December 2021',
        //     butt: sl11,
        //     description: 'The holiday season welcomed a huge increase in cases, as Omicron quickly replaced the Delta variant as the dominant strain within two weeks of its arrival in the US.',
        //     // callback: removeLegend,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info18',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info18',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '19info',
        //     // callback: removeLegend,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info19',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info19',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '20info',
        //     // callback: removeLegend,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info20',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info20',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '21info',
        //     // title: '10.Red! The entire country is affected, January 2021',
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     // description: 'America struggle with Omicron',
        //     // callback: removeLegend,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info21',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info21',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '22info',
        //     title: 'Omicron dethrones delta',
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: 'The Omicron variant rapidly swept through America, and it became the dominant strain less than 14 days after the first registered Omicron Case. With the vaccine now available for kids between 5-11, 65% of the country vaccinated,and Omicron proving to have a much lower fatality rate compared to other variants, other than a few mask mandates in major cities, the main focus of city actions was still ARPA.',
        //     // callback: removeLegend,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info22',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info22',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '23info',
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info23',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info23',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '24info',
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info24',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info24',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '25info',
        //     // title: 'Conclusion',
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     // description: 'issover',
        //     // callback: removeLegend,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info25',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info25',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '26info',
        //     // title: 'Conclusion',
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     // description: 'issover',
        //     // callback: removeLegend,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info26',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info26',
        //             opacity: 0
        //         }
        //     ]
        // },

        // {
        //     id: '27info',
        //     title: 'is it the end of the pandemic phase of covid-19?',
        //     // image: 'images/Chapter_2_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: "With the Omicron wave receding almost as quickly as it spread through the country, mask mandates and case numbers are falling throughout the country. It is imperative that local leaders remain prepared for what's next with COVID-19, and to keep using data to communicate and decide future plans of action. Working with the Johns Hopkins Bloomberg School of Public Health, the Bloomberg Harvard City Leadership Initiative, United States Conference of Mayors, and others, Bloomberg Philanthropies is supporting mayors and other local leaders with tools and guidance to help manage the crisis and protect the social and economic well-being of their communities. This includes ongoing technical assistance, coaching, and access to critical public health information. ",
        //     // callback: removeLegend,
        //     location: {
        //         center: [-95.7129, 37.0902],
        //         zoom: infoZoom,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'info27',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'info27',
        //             opacity: 0
        //         }
        //     ]
        // },

    ]
};