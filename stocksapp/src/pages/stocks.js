import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"


const Stocks = (props) => {

    const API_KEY = "6fdad60340e4144e8ae4c2b0e945b0ca"
    const {symbol} = useParams()

    const url=`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`
    console.log(url)

        // useState [getter, setter]
        const [stock, setData] = useState(null)

    
        const getData = async () => {
            //method which will run everytime when we hit the endpoint
            const response = await fetch(url)
            //get our info
            const data = await response.json()
            //use that info to set state
            setData(data)
            console.log("this is data from getData:", data)
            
            // loop through array wherejson 
            for(let i = 0; i < data.length; i++){
                setData(data[i])
                
              
            }
        }
        
        useEffect(()=>{
            getData()
        }, [])
    
    
        const Loaded = () =>{
            return (
                <div className="output">
                    <h1>Company name: {stock.name}</h1><br></br>
                    <h1>{stock.symbol}</h1>
                    <h2>Price: {stock.price}</h2>
                </div>
            )
        }
        const Loading = () => <h1>Loading...</h1>

        return stock ? <Loaded /> : <Loading/>




}

export default Stocks