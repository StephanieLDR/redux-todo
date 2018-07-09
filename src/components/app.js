import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import List from "./list";
import {Route, Switch} from "react-router-dom";
import AddItem from "./add_item";
import ViewItem from "./view_item";
import NotFound from "./not_found";


const App = () => (
    <div className="container">
        <Switch>
            <Route exact path ="/" component={List}/>
            <Route path="/add-item" component={AddItem}/>
            {/*the colon below means it is url param*/}
            <Route path ="/todo/:item_id" component={ViewItem}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default App;
