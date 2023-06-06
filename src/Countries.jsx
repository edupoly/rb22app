import React,{useState} from 'react'
import axios from 'axios'
function Countries() {
    const [countries, setCountries] = useState([])
   
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            console.log(res)
            setCountries(res.data)
        })
    },[])
    
    return (
        <div className='border border-2 border-info m-2 p-2'>
            <h1>Countries</h1>
            {
                countries.map((c)=>{
                    return <li>{c.name.common}</li>
                })
            }
        </div>
    )
}

export default Countries