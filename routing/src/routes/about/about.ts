import { Component } from 'bouerjs';

import html from './about.html';
import style from './about.css';

export default class About extends Component{
	constructor() {
		super(html, [style]);
	}

	title = "About";
	route = "/about";
}