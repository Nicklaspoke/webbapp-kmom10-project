"use strict";

import m from "mithril";
import utils from "../utils";
import auth from "./auth";

let registerAccount = {
    email: "",
    password: "",
    passwordRepeat: "",
    errorMessage: "",

    clear: function() {
        registerAccount.emai = "";
        registerAccount.password = "";
        registerAccount.passwordRepeat = "";
        registerAccount.errorMessage = "";
    },

    register: function() {
        if (registerAccount.password != registerAccount.passwordRepeat) {
            registerAccount.errorMessage = `
            Passwords do not match, please make shure passwords match
            `;
        } else if (!registerAccount.email && registerAccount.password) {
            registerAccount.errorMessage = `
            Please provide both password and email before clicking register
            `;
        } else {
            let payload = {
                api_key: utils.api_key,
                email: registerAccount.email,
                password: registerAccount.password
            };

            m.request({
                url: utils.auth_url + "/register",
                method: "POST",
                data: payload
            }).then(function() {
                auth.email = payload.email;
                auth.password = payload.password;
                auth.login();
            }).catch(function(error) {
                var errorJSON = JSON.parse(error.message);

                registerAccount.errorMessage = errorJSON.errors.detail;
            });
        }
    }
};

export default registerAccount;
