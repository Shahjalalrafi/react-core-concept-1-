import React from "react"
import Card from "./components/card"
import Data from './data.json'

function App() {

    return <div>
        <h1 className="headingStyle">Todo app</h1>
        {Data.map((item,index) => <Card titleText={item.title} descText= {item.desc} key={index}/>)}
    </div>
}

export default App;