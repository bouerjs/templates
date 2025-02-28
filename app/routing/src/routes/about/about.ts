import { Component, DataType, dynamic } from 'bouerjs';

import html from './about.html';
import style from './about.scss';

export default class About extends Component{
	constructor() {
		super(html, [style]);
	}

	title = "About";
	route = "/about";

	data = {
		name: "Routing App",
		version: "v1.0.0"
	};
}