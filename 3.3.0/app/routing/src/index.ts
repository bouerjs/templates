import Bouer from "bouerjs";

import './assets';

import './main.scss';

import Home from "./routes/home/home";
import About from "./routes/about/about";
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