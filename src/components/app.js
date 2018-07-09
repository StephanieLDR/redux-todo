import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import List from "./list";
import {Route} from "react-router-dom";
import AddItem from "./add_item";

const App = () => (
    <div className="container">
        <Route exact path ="/" component={List}/>
        <Route path="/add-item" component={AddItem}/>
    </div>
);

export default App;
