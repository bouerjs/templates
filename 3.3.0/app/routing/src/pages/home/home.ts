import { Component } from 'bouerjs';

import html from './home.html';
import style from './home.scss';

export default class Home extends Component {
	constructor() {
		super({
			path: html,
			title: "Home",
			route: "/home",
			isDefault: true,
		}, [style]);
	}
}