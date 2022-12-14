import { useEffect, useState } from 'react';
import axios from 'axios';
import DoughnutChartGraph from './DoughnutChart';
import { Link } from 'react-router-dom';


const URL = 'http://34.131.205.106/node/v2data'


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
              <div>
                  <h1> Visualizations:(Temperature and Co2 impact over time)</h1> 
                  <DoughnutChartGraph doughnutData = {DoughnutData} />
          
        
          <Link to = "/"><button>Go for Previous visualizations</button> </Link>
          </div>
    )
}
export default Page;