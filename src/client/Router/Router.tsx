import React from 'react';
import { Route } from 'react-router';
import {
	Shuzo,
} from '../Components/index';

const Router = () => {
	return (
		<>
				{/* <Route exact path="(/)?" component={Home} /> */}
				<Route exact path="(/)?" component={Shuzo} />
		</>
	);
};
export default Router;
