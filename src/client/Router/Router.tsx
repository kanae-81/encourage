import React from 'react';
import { Route } from 'react-router';
import {
	Home,
	Shuzo,
	Ikezaki,
	Pekopa,
	Soshina,
} from '../Components/index';
import Tsunku from '../Components/Tsunku';

const Router = () => {
	return (
		<>
			<Route exact path="(/)?" component={Home} />
			<Route exact path="(/shuzo)" component={Shuzo} />
			<Route exact path="(/ikezaki)" component={Ikezaki} />
			<Route exact path="(/tsunku)" component={Tsunku} />
			<Route exact path="(/pekopa)" component={Pekopa} />
			<Route exact path="(/soshina)" component={Soshina} />
		</>
	);
};
export default Router;
