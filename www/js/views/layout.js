// js/layout.js, a module that defines the standard layout for the page

"use strict";

import m from 'mithril';

import logoutButton from './logout.js';
import auth from '../models/auth.js';
import loggedInNav from './loggedinNav.js';
import loginButton from './loginButton.js';

let layout = {
    view: function(vnode) {
        return [
            m("nav.top-nav", [
                auth.token ? m(logoutButton) : null,
            ], "Space Nerds"),

            m("main.container", vnode.children),

            m("nav.bottom-nav",
                m("span", [
                    m("a", { href: "/", oncreate: m.route.link }, [
                        m("i.fas.fa-home.fa-2x")
                    ], "Home")
                ]),

                m("span", [
                    m("a", { href: "/spaceX", oncreate: m.route.link }, [
                        m("i.fas.fa-space-shuttle.fa-2x")
                    ], "SpaceX Launches")
                ]),

                // m("span", [
                //     m("a", { href: "/login", oncreate: m.route.link }, [
                //         m("i.fas.fa-sign-in-alt.fa-2x")
                //     ], "Login")
                // ]),

                auth.token ? m(loggedInNav) : m(loginButton),
            ),
        ];
    }
};

export default layout;
