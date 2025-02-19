import { Component } from 'bouerjs';

import html from './notfound.html';
import style from './notfound.css';

export default class NotFound extends Component{
	constructor() {
		super(html, [style]);
	}

	title = "Not Found";

	isNotFound = true;
	route = "/notfound";
}