import { $createApp } from "bouerjs";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import NotFound from "./pages/404/notfound";

$createApp('#app', {
	config: {
		usehash: false
	},
	components: [
		Home,
		About,
		NotFound
	]
});