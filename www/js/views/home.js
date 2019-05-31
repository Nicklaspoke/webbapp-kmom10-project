"use strict";

import m from "mithril";

let home = {
    view: function() {
        return [
            m("div.container.slide-in", [
                m("h1", "Welcome to the space app, for all your nerdy space needs")
            ]),
        ];
    }
};

export default home;
