import React from "react"
import ReactDOM from "react-dom"
import "./styles.scss"
import Img from "./rocket.svg"

const App = () => {
    return (
        <>
            <h1>It Works!</h1>
            <p>Scss test - it's red.</p>
            <img src={Img} width={40+'px'} alt={'Rocket'} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

