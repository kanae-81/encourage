import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
// import Router from './Router/Router';
import { BrowserRouter as Router, Route } from "react-router-dom";


import {
	Home,
	Shuzo,
	Ikezaki,
} from './Components/index';

const app = () => {
	return (
		<Router>
			<Route exact path="(/)?" component={Home}></Route>
			<Route exact path="/shuzo" component={Shuzo}></Route>
			<Route exact path="/ikezaki" component={Ikezaki}></Route>
		</Router>
	);
};
export default app;
