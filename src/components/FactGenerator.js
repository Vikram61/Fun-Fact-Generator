
import React,{useState} from 'react'

const FactGenerator = () => {
    const [fact,setFact] = useState('');
    const [loading,setLoading]=useState(false);
    const fetchFact=async()=>{
        setLoading(false);
        try
        {
            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
            const data = await response.json();
            setFact(data.text)
        }
        catch(error)
        {
          setFact(" Can't Fetch a fact please try again after sometime");
        }
        finally{
            setLoading(true);
        }
    }
  return (
    <div>
        <div className="container">
        <h1>Fun Fact Generator</h1>
        <br/>
      <div className='box'>
       <p>{fact ||'Click the below button to get an interesting fun fact'}</p>

       <button type="button" className="btn btn-info"onClick={fetchFact}>

        {loading?"Get a Random Fun Fact":"Fetching a Fun Fact..."}
        </button>
      </div>
      </div>
    </div>
  )
}

export default FactGenerator
