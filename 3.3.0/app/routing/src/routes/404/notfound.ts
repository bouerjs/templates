import { Component } from 'bouerjs';

import html from './notfound.html';
import style from './notfound.scss';

export default class NotFound extends Component {
	constructor() {
		super({
			path: html,
			title: "Not Found",
			route: "/notfound",
			isNotFound: true,
		}, [style]);
	}

}