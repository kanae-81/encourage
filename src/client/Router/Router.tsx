import React from 'react';
import { Route } from 'react-router';
import {
	Home,
	Shuzo,
} from '../Components/index';

const Router = () => {
	return (
		<>
				<Route exact path="(/)?" component={Home} />
				<Route exact path="(/shuzo)" component={Shuzo} />
		</>
	);
};
export default Router;
