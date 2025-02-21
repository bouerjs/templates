import Bouer from "bouerjs";

import './assets';

import './index.html';
import './main.css';

import About from "./routes/about/about";
import Home from "./routes/home/home";
import NotFound from "./routes/404/notfound";

new Bouer('#app', {
	config: {
		usehash: false,
		prefetch: true
	},
	components: [
		Home,
		About,
		NotFound
	]
});