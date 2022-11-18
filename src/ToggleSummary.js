
import { useState } from "react"

export default function Toggle(){

    const [togglesummary, setSummary] = useState(false)


    return(
        <div>
            <button onClick={()=>{setSummary(!togglesummary)}}>Toggle Summary</button>            
            {console.log(togglesummary)}
        </div>
        
    )
}