import React from 'react';
import { Route } from 'react-router';
import {
	Home,
	Shuzo,
	Ikezaki,
} from '../Components/index';

const Router = () => {
	return (
		<>
			<Route exact path="(/)?" component={Home} />
			<Route exact path="(/shuzo)" component={Shuzo} />
			<Route exact path="(/ikezaki)" component={Ikezaki} />
		</>
	);
};
export default Router;
