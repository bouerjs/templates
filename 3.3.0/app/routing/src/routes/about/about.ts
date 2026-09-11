import { Component } from 'bouerjs';

import html from './about.html';
import style from './about.scss';

export default class About extends Component {
	constructor() {
		super({
			path: html,
			title: "About",
			route: "/about",
		}, [style]);
	}

	name: string = "Routing App";
	version: string = "v1.0.0";
}