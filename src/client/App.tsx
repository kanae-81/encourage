import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
	Home,
	Shuzo,
	Ikezaki,
	Tsunku,
	Pekopa,
} from './Components/index';

const app = () => {
	return (
		<Router>
			<Route exact path="(/)?" component={Home}></Route>
			<Route exact path="/shuzo" component={Shuzo}></Route>
			<Route exact path="/ikezaki" component={Ikezaki}></Route>
			<Route exact path="/tsunku" component={Tsunku}></Route>
			<Route exact path="/pekopa" component={Pekopa}></Route>
		</Router>
	);
};
export default app;
