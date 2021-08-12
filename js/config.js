var config = {
    // My token
    style: 'mapbox://styles/csjapps/ckrzf8zz80v8717rsgluva1tg',
    accessToken: 'pk.eyJ1IjoiY3NqYXBwcyIsImEiOiJjamdwZmpzdHcydDYwMnlvOGpmaTlnNW9qIn0.rzeCF3W-6Z4jxsm06I0SYQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'overview',
            alignment: 'left',
            hidden: false,
            title: 'Mapping disparity: COVID-19’s impact on Black Americans',
            image: '',
            description: 'A closer look at the pandemic’s disproportionate effect in two communities: Washington, D.C., and central Alabama.',
            location: {
                center: { lon: -83.09079, lat: 35.32604 },
                zoom: 5.05,
                pitch: 55,
                bearing: 0.0,
            },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-lines-labels',
                    opacity: 0.9,
                //     duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-lines-labels',
                    opacity: 0
                }
            ]
        },
        {
            id: 'dc-overview',
            alignment: 'left',
            hidden: false,
            title: 'D.C. Population',
            image: '',
            description: 'In Washington, D.C., known as \"Chocolate City,\" Black people make up 46% of the nearly 700,000 residents, according to the Census Bureau. In Ward 7, more than 92% of the population is Black and in Ward 8 more than 89% of the population is Black. Black people are least represented in Ward 3, where they make up nearly 8% of the population.',
            location: {
                center: { lon: -77.03279, lat: 38.89016 },
                zoom: 12,
                pitch: 50,
                bearing: -1.19,
            },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-lines-labels',
                    opacity: 0.9,
                //     duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-lines-labels',
                    opacity: 0
                }
            ]
        },
        {
            id: 'povertyline',
            alignment: 'right',
            hidden: false,
            title: 'Below the Poverty Line',
            image: '',
            description: 'In 2018, more than 1 in 3 residents in Ward 8 live below the poverty line, according to the Census Bureau. The Black population ranges from 12% to about 32% in the other wards.',
            location: {
                center: { lon: -76.98935, lat: 38.85864 },
                zoom: 12,
                pitch: 59.0,
                bearing: 26.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'data-driven-lines-labels',
                opacity: 1,
              },
              // {
              //   layer: 'data-driven-lines-labels',
              //   opacity: 1,
              // },
            ],
            onChapterExit: [{
                layer: 'data-driven-lines-labels',
                opacity: 0,
              },
              // {
              //   layer: 'data-driven-lines-labels',
              //   opacity: 0,
              // },
            ]
        },
        {
            id: 'totalcovidcases',
            alignment: 'left',
            hidden: false,
            title: 'Total COVID-19 Cases in D.C.',
            image: '',
            description: 'Black people account for more than 51% of the 50,320 total COVID-19 cases in the district as of July 28, according to <a href="https://coronavirus.dc.gov/" style="color:#F2F2F2">D.C.’s COVID-19 vaccination data</a>.',
            location: {
                center: { lon: -77.02691, lat: 38.89237 },
                zoom: 11,
                pitch: 45,
                bearing: 15,
            },            
              onChapterEnter: [
                {
                  layer: 'data-driven-lines-labels',
                  opacity: 0.8,
                },
              ],
              onChapterExit: [
                {
                  layer: 'data-driven-lines-labels',
                  opacity: 0.3,
                },
            ]
        },
        {
            id: 'totalcoviddeaths',
            alignment: 'right',
            hidden: false,
            title: 'Total COVID-19 Deaths in D.C.',
            image: '',
            description: 'Black people account for more than 78% of 1,120 total COVID-19 deaths in the district as of July 28, according to <a href="https://coronavirus.dc.gov/" style="color:#F2F2F2">D.C.’s COVID-19 vaccination data</a>.',
            location: {
                center: { lon: -77.03279, lat: 38.89016 },
                zoom: 11,
                pitch: 50,
                bearing: -1.19,
            },
              onChapterEnter: [
                {
                  layer: 'data-driven-lines-labels',
                  opacity: 0.8,
                },
              ],
              onChapterExit: [
                {
                  layer: 'data-driven-lines-labels',
                  opacity: 0.3,
                },
            ]
        },
        {
            id: 'urbanruralimpact',
            alignment: 'left',
            hidden: false,
            title: 'Impact on Urban and Rural Communities',
            image: '',
            description: 'The pandemic disproportionately impacted Black communities across the country, in cities and in rural areas. The Centers for Disease Control and Prevention report that Black Americans are <a href="https://www.cdc.gov/coronavirus/2019-ncov/covid-data/investigations-discovery/hospitalization-death-by-race-ethnicity.html" style="color:#F2F2F2">twice as likely</a> to die from COVID-19 compared to their white counterparts.',
            location: {
                center: { lon: -96.34049, lat: 42.19010 },
                zoom: 3.88,
                pitch: 1.0,
                bearing: -0.0,
              },
              onChapterEnter: [
                {
                  layer: 'data-driven-lines-labels',
                  opacity: 0.8,
                },
              ],
              onChapterExit: [
                {
                  layer: 'data-driven-lines-labels',
                  opacity: 0.3,
                },
            ]
        },
        {
            id: 'alabamapopulation',
            alignment: 'left',
            hidden: false,
            title: 'Alabama Population',
            image: '',
            description: 'In Lowndes County, in the heart of central Alabama, nearly 3 out of 4 people are Black compared to a state average of nearly 27%, according to 2019 data from the Census Bureau. In Macon County, more than 4 out of 5 people are Black.',
            location: {
                center: { lon: -86.65440, lat: 32.35462 },
                zoom: 6.96,
                pitch: 35.0,
                bearing: 0.0,
              },
              onChapterEnter: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.8,
                },
              ],
              onChapterExit: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.3,
                },
            ]
        },
        {
            id: 'alabamamedianincome',
            alignment: 'left',
            hidden: false,
            title: 'Median Household Income',
            image: '',
            description: 'Black residents in Lowndes County have a median income that is 45.5% of the state average of $51,734. Black residents in Macon County have a median income that is 59% of the state average.',
            location: {
                center: { lon: -86.49573, lat: 32.24841 },
                zoom: 8.95,
                pitch: 44,
                bearing: 2.4,
              },
              onChapterEnter: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.8,
                },
              ],
              onChapterExit: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.3,
                },
            ]
        },
        {
            id: 'alabamapovertyline',
            alignment: 'left',
            hidden: false,
            title: 'Below the poverty line',
            image: '',
            description: 'Compared to Alabama’s poverty rate of 15.5%, nearly 1 in 3 Black residents in Lowndes County and more than 1 in 5 Black residents in Macon County live below the poverty line.',
            location: {
                center: { lon: -86.49573, lat: 32.24841 },
                zoom: 8,
                pitch: 44,
                bearing: 2.4,
              },
              onChapterEnter: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.8,
                },
              ],
              onChapterExit: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.3,
                },
            ]
        },
        {
            id: 'alcovidcases',
            alignment: 'left',
            hidden: false,
            title: 'Total COVID-19 Cases in Alabama',
            image: '',
            description: 'Alabama had 577,463 COVID-19 cases and 11,510 deaths as of July 29, according to the <a href="https://alpublichealth.maps.arcgis.com/apps/MapSeries/index.html?appid=d84846411471404c83313bfe7ab2a367" style="color:#F2F2F2">Alabama Department of Public Health</a>, which doesn’t record COVID-19 data by race.<br />In Lowndes County, about 14% of the population has been infected with COVID-19.<br />In Macon County, 9% of the population has been infected with COVID-19.',
            location: {
                center: { lon: -86.65440, lat: 32.35462 },
                zoom: 6.96,
                pitch: 35.0,
                bearing: 0.0,
              },
              onChapterEnter: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.8,
                },
              ],
              onChapterExit: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.3,
                },
            ]
        },
        {
            id: 'alcoviddeaths',
            alignment: 'left',
            hidden: false,
            title: 'Total COVID-19 Deaths in Alabama',
            image: '',
            description: 'Of the 1,687 total COVID-19 cases in Macon County, 52 people had died as of July 29.<br />Of the 1,448 total COVID-19 cases in Lowndes County, 54 people had died as of July 29 — one of the highest per capita death rates in the state.',
            location: {
                center: { lon: -86.65440, lat: 32.35462 },
                zoom: 6.96,
                pitch: 48.0,
                bearing: 0.0,
              },
              onChapterEnter: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.8,
                },
              ],
              onChapterExit: [
                {
                  layer: 'choropleth-labels',
                  opacity: 0.3,
                },
            ]
        }
    ]
};
