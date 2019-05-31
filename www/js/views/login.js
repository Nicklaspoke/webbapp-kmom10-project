"use strict";

import m from "mithril";

import auth from "./../models/auth.js";

var errorMessage = {
    view: function() {
        return m("div.error", auth.errorMessage);
    }
};

let login = {
    oninit: auth.clear,

    view: function() {
        return [
            m("div.container.slide-in", [
                m("h1", "Login"),
                auth.errorMessage ? m(errorMessage) : null,
                m("p", "If you don't have an account, click here to create one"),
                m("a", { href: "/register", oncreate: m.route.link}, "Create Account"),
                m("form", {
                    onsubmit: function(event) {
                        event.preventDefault();
                        auth.login();
                    }
                }, [
                    m("label.input-label", "Email"),
                    m("input[type=email].input", {
                        oninput: function(e) {
                            auth.email = e.target.value;
                        }
                    }),

                    m("label.input-label", "Password"),
                    m("input[type=password].input", {
                        oninput: function(e) {
                            auth.password = e.target.value;
                        }
                    }),

                    m("input[type=submit][value=Login].button.blue-button.full-width-button",
                        "Login")
                ])
            ])
        ];
    }
};

export default login;
