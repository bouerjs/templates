import { $createApp } from "bouerjs";

import './assets';

import Home from "./pages/home/home";
import About from "./pages/about/about";
import NotFound from "./pages/404/notfound";

$createApp('#app', {
    config: {
        // Setting usehash using to `false`
        usehash: false
    },
    components: [
        Home,
        About,
        NotFound
    ],
    loaded: function () {
        // Redirecting to the route the user was navigating to
        var route = localStorage.getItem('redirect');
        if (route)
            this.$routing.navigate(route);
    }
});