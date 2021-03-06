"use strict";

import m from 'mithril';

let loggedInNav = {
    view: function() {
        return [
            m("span", [
                m("a", { href: "/issPos", oncreate: m.route.link }, [
                    m("i.fas.fa-satellite-dish.fa-2x")
                ], "Track ISS")
            ]),

            m("span", [
                m("a", { href: "/issPeople", oncreate: m.route.link }, [
                    m("i.fas.fa-satellite.fa-2x")
                ], "Who Is In Space?")
            ]),
        ];
    }
};

export default loggedInNav;
