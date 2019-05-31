"use strict";

import m from "mithril";
import utils from "../utils";

let auth = {
    email: "",
    password: "",
    token: "",
    errorMessage: "",

    clear: function() {
        auth.email = "";
        auth.password = "";
        auth.token = "";
        auth.errorMessage = "";
    },

    login: function() {
        var payload = {
            email: auth.email,
            password: auth.password,
            api_key: utils.api_key
        };

        return m.request({
            url: utils.base_url + "/login",
            method: "POST",
            data: payload
        }).then(function(result) {
            auth.token = result.data.token;
            m.route.set("/");
        }).catch(function(error) {
            var errorJSON = JSON.parse(error.message);

            auth.errorMessage = errorJSON.errors.detail;
        });
    }
};

export default auth;
