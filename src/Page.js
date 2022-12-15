import { useEffect, useState } from 'react';
import axios from 'axios';
import DoughnutChartGraph from './DoughnutChart';
import { Link } from 'react-router-dom';


const URL = 'http://34.131.205.106:3001/v2data'


const Page =()=>{

  const [DoughnutData, setDoughnutData] = useState([])
    

    useEffect (() => {
        axios.get(URL)
          .then((res) => {
          debugger
          setDoughnutData(res.data)
          //setDoughtnut2(response.data.Doughtnut2)
          
        }).catch (error => {
            alert(error.response.data.error)
          })
        }, [])

          return(
            <div className="chart-top">
            <div className="chart-container">
                  <h1> Visualizations:(Temperature and Co2 impact over time)</h1> 
                  <DoughnutChartGraph doughnutData = {DoughnutData} />
          
        
          <Link to = "/"><button>Go for Previous visualizations</button> </Link>
          </div>
          </div>
    )
}
export default Page;