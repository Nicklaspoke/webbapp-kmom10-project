"use strict"

import m from 'mithril';

let spaceX = {
    view: function() {
        return [
            m("div.container.slide-in", [
                m("h1", "What do you wanna see?"),
                m("button.blue-button", {
                    onclick: function() {
                        m.route.set("/spaceX/latest")
                    },
                }, "Latest Launch")

            ])
        ]
    }
}

export default spaceX;
