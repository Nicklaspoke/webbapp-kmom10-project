"use strict";

import m from 'mithril';

let loginButton = {
    view: function() {
        return m("span", [
            m("a", { href: "/login", oncreate: m.route.link }, [
                m("i.fas.fa-sign-in-alt.fa-2x")
            ], "Login")
        ]);
    }
};

export default loginButton;
