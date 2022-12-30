import React from "react";
import Restaurant from "./component/basics/Restaurant"
import bootstrap from "bootstrap"
import MakeList from "./MakeList";
import Wapi from "./weatherapi";
import Axios from "./Axios";
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Home from "./Home";

function App() {
return (
<>
<Home />

<Routes>
    <Route exact path="/restaurant" element = {<Restaurant/>}/>
    <Route exact path="/news" element = {<Axios/>}/>
    <Route exact path="/weather" element = {<Wapi/>}/>
    <Route exact path="/makelist" element = {<MakeList/>} />

</Routes>

</>


)
}

export default App;
