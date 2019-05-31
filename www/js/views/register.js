"use strict";

import m from "mithril";
import registerAccount from "../models/register";
import registerModal from "./registerModal";

var errorMessage = {
    view: function() {
        return m("div.error", registerAccount.errorMessage);
    }
};

let register = {
    oninit: registerAccount.clear,

    view: function() {
        return [
            m("div.container.slide-in", [
                m("h1", "Register New Account"),
                registerAccount.errorMessage ? m(errorMessage) : null,
                m(registerModal),
                m("form", {
                    onsubmit: function(event) {
                        event.preventDefault();
                        registerAccount.register();
                    }
                }, [
                    m("label.input-label", "Email"),
                    m("input[type=email][required].input", {
                        oninput: function(e) {
                            registerAccount.email = e.target.value;
                        }
                    }),

                    m("label.input-label", "Password"),
                    m("input[type=password][required].input", {
                        oninput: function(e) {
                            registerAccount.password = e.target.value;
                        }
                    }),

                    m("label.input-label", "Retype Password"),
                    m("input[type=password][required].input", {
                        oninput: function(e) {
                            registerAccount.passwordRepeat = e.target.value;
                        }
                    }),

                    m("input[type=submit][value=register].button.blue-button", "Register")

                ]),
                m("p", `By clicking create account, you will be
                aggreing to the following agrement`),
                // m("a", { href: "/registerModal", oncreate: m.route.link}, "User Agreement")
                m("a", { onclick: function() {
                    registerModal.vissable = true;
                    m.redraw();
                }}, "User Agreement")
            ])
        ];
    }
};

export default register;
