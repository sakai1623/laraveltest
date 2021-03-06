import React, { Component } from "react";
import ReactDOM from "react-dom";

import Nav from "./Nav";
import Form from "./Form";
import List from "./List";
import Edit from "./Edit";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
    return (
        <Router>
            <main>
                <Nav />
                <Switch>
                    <Route path="/employee/index" exact component={List} />
                    <Route path="/employee/form" component={Form} />
                    <Route path="/employee/edit/:id" component={Edit} />
                </Switch>
            </main>
        </Router>
    );
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById("employee"));
