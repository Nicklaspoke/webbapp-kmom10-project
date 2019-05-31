"use strict";

import m from 'mithril';

let logoutButton = {
    view: function() {
        return m("a.right-link", { href: "/logout", oncreate: m.route.link }, "Log Out");
    }
};

export default logoutButton;
