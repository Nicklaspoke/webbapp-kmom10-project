// js/layout.js, a module that defines the standard layout for the page

"use strict";

import m from 'mithril';

import logoutButton from './logout.js';
import auth from '../models/auth.js';
let layout = {
    view: function(vnode) {
        return [
            m("nav.top-nav", [
                auth.token ? m(logoutButton) : null,
            ], "Lager 6"),

            m("main.container", vnode.children),

            m("nav.bottom-nav",
                m("span", [
                    m("a", { href: "/", oncreate: m.route.link }, [
                        m("i.material-icons", "home")
                    ], "Home")
                ]),
            ),

            m("nav.bottom-nav",
                m("span", [
                    m("a", { href: "/", oncreate: m.route.link }, [
                        m("i.material-icons", "home")
                    ], "Home")
                ]),
            ),
        ];
    }
};

export default layout;
