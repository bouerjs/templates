import Bouer from "bouerjs";

import './assets';

import './main.scss';

new Bouer('#app', {
	config: {
		usehash: false
	},
	data: {
		showMessage: false
	}
});