import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MixChartGraph from './MixChart';
import Co2MonthGraphdemo from './Co2graphv3';
import VostokIceCore from './VostokIce';
import IceCoreKGraph from './IceCore800K';
import TwoMillionYearsGraphdemo from './TwoMillionYears';
import { Link } from 'react-router-dom';
import DoughnutChartGraph from './DoughnutChart';
const URL = 'http://34.131.205.106/node/v1data'
const URL2 = 'http://34.131.205.106/node/v2data'
const VisualResource = () => {
    const navigate = useNavigate();

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const [data, setData] = useState({ list: [], vlist: [] });

    const [annualData, setannualData] = useState([])
    const [monthlyData, setmonthlyData] = useState([])
    const [AnnualNorth, setAnnualNorth] = useState([])
    const [MonthNorth, setMonthNorth] = useState([])
    const [AnnualSouth, setAnnualSouth] = useState([])
    const [MonthSouth, setMonthSouth] = useState([])
    const [TwoThousand, setTwoThousand] = useState([])
    const [co2Month, setco2Month] = useState([])
    const [co2Annual, setco2Annual] = useState([])
    const [iceCoreDe, seticeCoreDe] = useState([])
    const [iceCoreDe2, seticeCoreDe2] = useState([])
    const [iceCoreDss, seticeCoreDss] = useState([])
    const [vostokIce, setvostokIce] = useState([])
    const [IceCoreYears, setIceCoreyears] = useState([])
    const [TwoMillionTemperature, setTwoMillionTemperature] = useState([])
    const [TwoMillionCo2, setTwoMillionCo2] = useState([])
    const [DoughnutData, setDoughnutData] = useState([])
    const [V4Co2, setV4Co2] = useState([])
    const [V10Co2, setV10Co2] = useState([])
    
    useEffect(() => {
        loaddata();
    }, []);

    const loaddata = () => {
        axios.get("http://34.131.205.106/node/getmapping?id=" + id)
            .then((result) => {
                setData({ ...data, list: result.data.data[0], vlist: JSON.parse(result.data.data[0].visualisations) })
                axios.get(URL)
                    .then((response) => {
                        setannualData(response.data.annualData)
                        setmonthlyData(response.data.monthlyData)
                        setAnnualNorth(response.data.AnnualNorth)
                        setMonthNorth(response.data.MonthNorth)
                        setAnnualSouth(response.data.AnnualSouth)
                        setMonthSouth(response.data.MonthSouth)
                        setTwoThousand(response.data.TwoThousand)
                        setco2Month(response.data.co2Month)
                        setco2Annual(response.data.co2Annual)
                        seticeCoreDe(response.data.iceCoreDe)
                        seticeCoreDe2(response.data.iceCoreDe2)
                        seticeCoreDss(response.data.iceCoreDss)
                        setvostokIce(response.data.vostokIce)
                        setIceCoreyears(response.data.IceCoreYears)
                        setTwoMillionTemperature(response.data.TwoMillionTemperature)
                        setTwoMillionCo2(response.data.TwoMillionCo2)
                        setV4Co2(response.data.V4Co2)
                        setV10Co2(response.data.V10Co2)
                        axios.get(URL2)
                            .then((response) => {
                                setDoughnutData(response.data)
                                //setDoughtnut2(response.data.Doughtnut2)

                            }).catch(error => {
                                alert(error.response.data.error)
                            })
                    }).catch(error => {
                        alert(error.response.data.error)
                    })
            }, (err) => { alert(err.response.data.message) })
    }

    return (<div className="container-fluid main mt-5">
        {data.list.layout === 'a' && <div className="row">
            {data.vlist.map((el) => (
                <div className="col-6">
                    {el === "1,2" &&
                        <div>
                            <MixChartGraph data1={annualData} data2={monthlyData} data3={AnnualNorth} data4={MonthNorth} data5={AnnualSouth} data6={MonthSouth} data7={TwoThousand} />
                            <br></br>
                            <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                            <br></br>
                            <br></br>
                            <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html" target="_blank"><button> See the Dataset here!</button> </a>
                            <br></br>
                            <br></br>

                            <h6>Visualization 2:</h6>


                            <p>  The graph of Visualisation 2 represents the Northern Hemisphere’s
                                2000-year temperature reconstruction.It is based on the Palaeoclimatological study of 2000 years of temperature.
                                The data used in the graph was reconstructed by “combining low-resolution proxies with tree-ring data,
                                using a wavelet transform technique to achieve timescale-dependent processing of the data.” ( Anders Moberg et al.)
                                It can be observed from the graph data that “high temperatures—similar to those observed in the
                                twentieth century before 1990—occurred around AD 1000 to 1100, and minimum temperatures that are about 0.7 K
                                below the average of 1961–90 occurred around AD 1600.” (Anders Moberg et al.) In V2 graph, represented with
                                brown line graph we get to see the change in the Northern Hemisphere’s mean temperature over the period of 2000 years,
                                where the x-axis of the graph represents the Time period in years and the y-axis of the graph represent the annual mean
                                Temperature in Celsius.
                            </p>
                            <br>
                            </br>
                            <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                            <br>
                            </br>
                            <br></br>
                            <a href="https://www.nature.com/articles/nature03265" target="_blank"><button> Read more about data mesaurements!</button> </a>
                            <br>
                            </br>
                            <br></br>
                            <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt" target="_blank"><button> See the Dataset here!</button> </a>
                            <br>
                            </br>
                            <br></br>
                        </div>
                    }
                    {el === "3,4,10" &&
                        <div>
                            <Co2MonthGraphdemo co2data1={co2Month} co2data2={co2Annual} co2data3={iceCoreDe} co2data4={iceCoreDe2} co2data5={iceCoreDss} co2data6={V4Co2} />
                            <br></br>
                            <h6>Visualisation 3:</h6>
                            <p>
                                The graph above in Visualisation 3, shows the mean data of monthly and annual
                                atmospheric carbon dioxide concentrations made on Mauna Loa, Hawaii, over a period
                                of 65 years. The time measurements started in the year 1958, C. David Keeling of
                                the Scripps Institution of Oceanography, and last for over a period of 65 years.
                                The x-axis of the graph represents the time, in years, and the y-axis represent
                                the mean atmospheric carbon dioxide concentrations. If, observed closely it can
                                be seen from the Monthly CO2 concentrations, represented by blue line, that carbon
                                dioxide concentration levels increase during warm months, highest peak being in
                                summer and decrease in colder months. Moreover, it can be observed from the Annual
                                carbon dioxide concentration, represented with red line, shows that CO2 levels has
                                gradually increased in the atmosphere over the period of 65 years. The data collected
                                can also be used to reflect on the global atmospheric concentrations.
                            </p>

                            <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                            <br>
                            </br>
                            <br></br>
                            <a href="https://gml.noaa.gov/ccgg/trends/" target="_blank"><button> See the Dataset here!</button> </a>
                            <br>
                            </br> <br></br>
                            <div id='Vis4'>
                                <h6>Visualisation 4:</h6>
                                <p>
                                    The graph of Visualisation 4 shows the historical Atmospheric carbon dioxide
                                    concentrations based on Antarctic ice cores, over a period ~1000 years. The data was recorded
                                    over the period 1006 A.D.-1978 A.D., from the three ice cores DE08, DE08-02, and DSS, obtained
                                    at Law Dome, East Antarctica from year 1987 to 1993. The line chart graph displays the three
                                    Ice Core dataset, each dataset represented with three different coloured lines, where pink
                                    line shows the Ice Core DE08, purple line shows Ice Core DE08-02, and brown line shows Ice Core
                                    DSS measurements. DE08, DE08-02, and DSS are the names of the ice sample code from the ice cores.
                                    In the graph, x-axis represents the time, in years, and y-axis shows the atmospheric carbon dioxide
                                    concentrations.  It can be observed from the graph CO2 levels were quite low during 1550-1800 A.D.,
                                    the preindustrial age, probably because of colder global climate, (Etheridge et al. 1996). The Law
                                    Dome ice core CO2 data show major growth in atmospheric CO2 levels over the industrial period, as it
                                    can also be observed from the graph as all three lines show an exponential growth around 1800s.
                                    In addition to this, Mauna Loa CO2 atmospheric concentration levels follows the same pattern as
                                    the Antarctic ice core CO2 levels.
                                </p>
                            </div>

                            <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                            <br>
                            </br><br></br>
                            <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" target="_blank"><button> See the Dataset here!</button> </a>
                            <br>
                            </br>
                        </div>
                    }
                    {el === "5" &&
                        <div>
                            <VostokIceCore vostok={vostokIce} />
                            <div id='Vis4'>
                                <h6>Visualisation5:</h6>
                                <p> In visualization V5 we create the line graph of atmospheric carbon dioxide concentrations based on ice drilling conducted at Soviet Vostok station in the Antarctic. The dataset has a Time period of 400000 years. The horizontal Axis is representation the years. According to a previous ice-drilling project between Russia, the United States, and France at the Russian Vostok station East Antarctica yielded the deepest ice core ever recovered, reaching a depth of 3,623 m (Petit et al. 1997, 1999).
                                    The graph shows Temperature in the Antarctic is closely correlated with CO2 levels in the atmosphere (Barnola et al. 1987). The expansion of the Vostok CO2 dataset demonstrates that the major CO2 trends for each glacial cycle are comparable. Transitions between glacial and interglacial periods are characterized by significant changes from the lowest to the greatest levels. The atmospheric CO2 concentrations increase during these transitions from 180 to 280–300 ppmv (Petit et al. 1999). In the past 30,000–40,000 years, there has been a good agreement between the Vostok ice core data and other ice core data (Delmas et al. 1980; Neftel et al. 1982). All the records show low CO2 values [200 parts per million by volume (ppmv)] during the Last Glacial Maximum and increased atmospheric CO2 concentrations associated with the glacial–Holocene transition. These measurements, according to Barnola et al. (1991) and Petit et al. (1999), show that the CO2 increase either was in phase with the Antarctic temperature at the beginning of the deglaciations or lagged by less than 1000 years, whereas it clearly lagged the temperature at the beginning of the glaciations.
                                </p>

                                <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                <br>
                                </br><br></br>
                                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2" target="_blank"><button> See the Dataset here!</button> </a>
                                <br>
                                </br><br></br>
                            </div>
                        </div>
                    }
                    {el === "6" &&
                        <div>
                            <IceCoreKGraph iceCoreK={IceCoreYears} />
                            <div id='Vis4'>
                                <h6>Visualisation6:</h6>
                                <p>
                                    In V6 we created a line graph of atmospheric carbon dioxide concentrations based on a combined study of ice cores in the southern hemisphere. If we look at the graph the horizontal axis represents the years, and the graph illustrates the CO2 records using different air extraction methods and sections of the core. We have used Antarctic Ice Cores Revised 800KYr CO2 Data, which was obtained by European Project for Ice Coring in Antarctica Dome ice core from Dome C (EDC). The Antarctic composite ice core atmospheric CO2 is shown over 800,000 years, including some very recent studies, e.g., covering the last glacial cycle.
                                </p>
                                <a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                <br>
                                </br><br></br>
                                <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt" target="_blank"><button> See the Dataset here!</button> </a>
                                <br>
                                </br><br></br>
                            </div>
                        </div>
                    }
                    {el === "7,10" &&
                        <div>
                            <TwoMillionYearsGraphdemo v7data1={TwoMillionTemperature} v7data2={TwoMillionCo2} v7data3={V10Co2} />
                            <div id='Vis4'>
                                <h6>Visualisation7:</h6>
                                <p> we created a multi-axis line chart, where we plotted the temperature record from the available 2m year period in combination with the available co2 measurements from the 800k year period. The horizontal axis represents the time in years, and the right vertical axis represents the change in temperature and the left vertical axis is showing the change in the Co2 ppm axis. The multi-line chart graph displays the data in two different colors, where cyan color is showing the temperature and the red color is showing C02.
                                    Only a few discrete windows of time in history of the world’s temperature have been accurately rebuilt, and continuous reconstructions of time in history throughout glacial cycles are still difficult. At the mid- Pleistocene transition, the switch from quasi-100,000-year glacial cycles to quasi-100,000-year glacial cycles may have been a prerequisite, albeit it is likely not the only causative process. A new reconstruction is compared to radiative forcing from greenhouse gases to assess the sensitivity of the Earth system, which is estimated to alter by 9 degrees Celsius (with a range of 7 to 13 degrees Celsius) every doubling of atmospheric carbon dioxide over millennia</p>
                                <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                <br>
                                </br><br></br>
                                <a href="http://carolynsnyder.com/publications.php" target="_blank"><button> See the Dataset here!</button> </a>
                                <br>
                                </br>
                                <br>
                                </br>
                                <Link to="Page"><button>Go for more visualizations</button> </Link>
                            </div>
                        </div>
                    }
                    {el === "9" &&
                        <div>
                            <DoughnutChartGraph doughnutData = {DoughnutData} />
                            <Link to="/"><button>Go for Previous visualizations</button> </Link>
                        </div>
                    }
                </div>
            ))}
        </div>
        }
        {
            data.list.layout === 'b' && <div className="row">
                {data.vlist.map((el) => (
                    <div className="col-3">
                        {el === "1,2" &&
                            <div>
                                <MixChartGraph data1={annualData} data2={monthlyData} data3={AnnualNorth} data4={MonthNorth} data5={AnnualSouth} data6={MonthSouth} data7={TwoThousand} />
                                <br></br>
                                <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                <br></br>
                                <br></br>
                                <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html" target="_blank"><button> See the Dataset here!</button> </a>
                                <br></br>
                                <br></br>

                                <h6>Visualization 2:</h6>


                                <p>  The graph of Visualisation 2 represents the Northern Hemisphere’s
                                    2000-year temperature reconstruction.It is based on the Palaeoclimatological study of 2000 years of temperature.
                                    The data used in the graph was reconstructed by “combining low-resolution proxies with tree-ring data,
                                    using a wavelet transform technique to achieve timescale-dependent processing of the data.” ( Anders Moberg et al.)
                                    It can be observed from the graph data that “high temperatures—similar to those observed in the
                                    twentieth century before 1990—occurred around AD 1000 to 1100, and minimum temperatures that are about 0.7 K
                                    below the average of 1961–90 occurred around AD 1600.” (Anders Moberg et al.) In V2 graph, represented with
                                    brown line graph we get to see the change in the Northern Hemisphere’s mean temperature over the period of 2000 years,
                                    where the x-axis of the graph represents the Time period in years and the y-axis of the graph represent the annual mean
                                    Temperature in Celsius.
                                </p>
                                <br>
                                </br>
                                <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                <br>
                                </br>
                                <br></br>
                                <a href="https://www.nature.com/articles/nature03265" target="_blank"><button> Read more about data mesaurements!</button> </a>
                                <br>
                                </br>
                                <br></br>
                                <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt" target="_blank"><button> See the Dataset here!</button> </a>
                                <br>
                                </br>
                                <br></br>
                            </div>
                        }
                        {el === "3,4,10" &&
                            <div>
                                <Co2MonthGraphdemo co2data1={co2Month} co2data2={co2Annual} co2data3={iceCoreDe} co2data4={iceCoreDe2} co2data5={iceCoreDss} co2data6={V4Co2} />
                                <br></br>
                                <h6>Visualisation 3:</h6>
                                <p>
                                    The graph above in Visualisation 3, shows the mean data of monthly and annual
                                    atmospheric carbon dioxide concentrations made on Mauna Loa, Hawaii, over a period
                                    of 65 years. The time measurements started in the year 1958, C. David Keeling of
                                    the Scripps Institution of Oceanography, and last for over a period of 65 years.
                                    The x-axis of the graph represents the time, in years, and the y-axis represent
                                    the mean atmospheric carbon dioxide concentrations. If, observed closely it can
                                    be seen from the Monthly CO2 concentrations, represented by blue line, that carbon
                                    dioxide concentration levels increase during warm months, highest peak being in
                                    summer and decrease in colder months. Moreover, it can be observed from the Annual
                                    carbon dioxide concentration, represented with red line, shows that CO2 levels has
                                    gradually increased in the atmosphere over the period of 65 years. The data collected
                                    can also be used to reflect on the global atmospheric concentrations.
                                </p>

                                <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                <br>
                                </br>
                                <br></br>
                                <a href="https://gml.noaa.gov/ccgg/trends/" target="_blank"><button> See the Dataset here!</button> </a>
                                <br>
                                </br> <br></br>
                                <div id='Vis4'>
                                    <h6>Visualisation 4:</h6>
                                    <p>
                                        The graph of Visualisation 4 shows the historical Atmospheric carbon dioxide
                                        concentrations based on Antarctic ice cores, over a period ~1000 years. The data was recorded
                                        over the period 1006 A.D.-1978 A.D., from the three ice cores DE08, DE08-02, and DSS, obtained
                                        at Law Dome, East Antarctica from year 1987 to 1993. The line chart graph displays the three
                                        Ice Core dataset, each dataset represented with three different coloured lines, where pink
                                        line shows the Ice Core DE08, purple line shows Ice Core DE08-02, and brown line shows Ice Core
                                        DSS measurements. DE08, DE08-02, and DSS are the names of the ice sample code from the ice cores.
                                        In the graph, x-axis represents the time, in years, and y-axis shows the atmospheric carbon dioxide
                                        concentrations.  It can be observed from the graph CO2 levels were quite low during 1550-1800 A.D.,
                                        the preindustrial age, probably because of colder global climate, (Etheridge et al. 1996). The Law
                                        Dome ice core CO2 data show major growth in atmospheric CO2 levels over the industrial period, as it
                                        can also be observed from the graph as all three lines show an exponential growth around 1800s.
                                        In addition to this, Mauna Loa CO2 atmospheric concentration levels follows the same pattern as
                                        the Antarctic ice core CO2 levels.
                                    </p>
                                </div>

                                <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                <br>
                                </br><br></br>
                                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" target="_blank"><button> See the Dataset here!</button> </a>
                                <br>
                                </br>
                            </div>
                        }
                        {el === "5" &&
                            <div>
                                <VostokIceCore vostok={vostokIce} />
                                <div id='Vis4'>
                                    <h6>Visualisation5:</h6>
                                    <p> In visualization V5 we create the line graph of atmospheric carbon dioxide concentrations based on ice drilling conducted at Soviet Vostok station in the Antarctic. The dataset has a Time period of 400000 years. The horizontal Axis is representation the years. According to a previous ice-drilling project between Russia, the United States, and France at the Russian Vostok station East Antarctica yielded the deepest ice core ever recovered, reaching a depth of 3,623 m (Petit et al. 1997, 1999).
                                        The graph shows Temperature in the Antarctic is closely correlated with CO2 levels in the atmosphere (Barnola et al. 1987). The expansion of the Vostok CO2 dataset demonstrates that the major CO2 trends for each glacial cycle are comparable. Transitions between glacial and interglacial periods are characterized by significant changes from the lowest to the greatest levels. The atmospheric CO2 concentrations increase during these transitions from 180 to 280–300 ppmv (Petit et al. 1999). In the past 30,000–40,000 years, there has been a good agreement between the Vostok ice core data and other ice core data (Delmas et al. 1980; Neftel et al. 1982). All the records show low CO2 values [200 parts per million by volume (ppmv)] during the Last Glacial Maximum and increased atmospheric CO2 concentrations associated with the glacial–Holocene transition. These measurements, according to Barnola et al. (1991) and Petit et al. (1999), show that the CO2 increase either was in phase with the Antarctic temperature at the beginning of the deglaciations or lagged by less than 1000 years, whereas it clearly lagged the temperature at the beginning of the glaciations.
                                    </p>

                                    <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                    <br>
                                    </br><br></br>
                                    <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2" target="_blank"><button> See the Dataset here!</button> </a>
                                    <br>
                                    </br><br></br>
                                </div>
                            </div>
                        }
                        {el === "6" &&
                            <div>
                                <IceCoreKGraph iceCoreK={IceCoreYears} />
                                <div id='Vis4'>
                                    <h6>Visualisation6:</h6>
                                    <p>
                                        In V6 we created a line graph of atmospheric carbon dioxide concentrations based on a combined study of ice cores in the southern hemisphere. If we look at the graph the horizontal axis represents the years, and the graph illustrates the CO2 records using different air extraction methods and sections of the core. We have used Antarctic Ice Cores Revised 800KYr CO2 Data, which was obtained by European Project for Ice Coring in Antarctica Dome ice core from Dome C (EDC). The Antarctic composite ice core atmospheric CO2 is shown over 800,000 years, including some very recent studies, e.g., covering the last glacial cycle.
                                    </p>
                                    <a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                    <br>
                                    </br><br></br>
                                    <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt" target="_blank"><button> See the Dataset here!</button> </a>
                                    <br>
                                    </br><br></br>
                                </div>
                            </div>
                        }
                        {el === "7,10" &&
                            <div>
                                <TwoMillionYearsGraphdemo v7data1={TwoMillionTemperature} v7data2={TwoMillionCo2} v7data3={V10Co2} />
                                <div id='Vis4'>
                                    <h6>Visualisation7:</h6>
                                    <p> we created a multi-axis line chart, where we plotted the temperature record from the available 2m year period in combination with the available co2 measurements from the 800k year period. The horizontal axis represents the time in years, and the right vertical axis represents the change in temperature and the left vertical axis is showing the change in the Co2 ppm axis. The multi-line chart graph displays the data in two different colors, where cyan color is showing the temperature and the red color is showing C02.
                                        Only a few discrete windows of time in history of the world’s temperature have been accurately rebuilt, and continuous reconstructions of time in history throughout glacial cycles are still difficult. At the mid- Pleistocene transition, the switch from quasi-100,000-year glacial cycles to quasi-100,000-year glacial cycles may have been a prerequisite, albeit it is likely not the only causative process. A new reconstruction is compared to radiative forcing from greenhouse gases to assess the sensitivity of the Earth system, which is estimated to alter by 9 degrees Celsius (with a range of 7 to 13 degrees Celsius) every doubling of atmospheric carbon dioxide over millennia</p>
                                    <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf" target="_blank"><button> Know more about the data mesaurements! </button> </a>
                                    <br>
                                    </br><br></br>
                                    <a href="http://carolynsnyder.com/publications.php" target="_blank"><button> See the Dataset here!</button> </a>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <Link to="Page"><button>Go for more visualizations</button> </Link>
                                </div>
                            </div>
                        }
                        {el === "9" &&
                            <div>
                                <DoughnutChartGraph doughnutData = {DoughnutData} />
                                <Link to="/"><button>Go for Previous visualizations</button> </Link>
                            </div>
                        }
                    </div>
                ))}
            </div>
        }
    </div >);
}
export default VisualResource;