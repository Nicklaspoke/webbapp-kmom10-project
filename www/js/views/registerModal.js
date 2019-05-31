"use strict";

import m from "mithril";

let registerModal = {
    aggrement: `
    By creating this account, you "the user", agrees that
    the provided password and email will be stored in a database at
    https://auth.emilfolino.se. This information (email and password),
    will only be accessible by the webbmaster for the database.
    This information will not be shared to any 3rd party members,
    unless you "the user" agrees to it.
    `,
    vissable: false,

    view: function() {
        if (registerModal.vissable === true) {
            return m("div.modal.slide-in", [
                m("a", { onclick: function() {
                    registerModal.vissable = false;
                    m.redraw();
                }}, [
                    m("i.material-icons", "close")
                ], ""),
                m("p", registerModal.aggrement)
            ]);
        } else {
            return m("p", "");
        }
    }
};

export default registerModal;
