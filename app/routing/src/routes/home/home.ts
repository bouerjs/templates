import { Component } from 'bouerjs';

import html from './home.html';
import style from './home.scss';

export default class Home extends Component{
	constructor() {
		super(html, [style]);
	}

	title = "Home";

	isDefault = true;
	route = "/home";
}