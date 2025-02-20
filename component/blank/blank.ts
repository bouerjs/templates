import { Component } from 'bouerjs';

import html from './blank.html';
import style from './blank.css';

class Blank extends Component {
	constructor() {
		super(html, [style]);
	}

	name = 'BlankComponent';
}