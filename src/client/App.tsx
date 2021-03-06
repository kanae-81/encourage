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
	Soshina,
	Zako,
} from './Components/index';

const app = () => {
	return (
		<Router>
			<Route exact path="(/)?" component={Home}></Route>
			<Route exact path="/shuzo" component={Shuzo}></Route>
			<Route exact path="/ikezaki" component={Ikezaki}></Route>
			<Route exact path="/tsunku" component={Tsunku}></Route>
			<Route exact path="/pekopa" component={Pekopa}></Route>
			<Route exact path="/soshina" component={Soshina}></Route>
			<Route exact path="/zako" component={Zako}></Route>
		</Router>
	);
};
export default app;
