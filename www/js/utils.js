"use strict";

// import m from 'mithril';
import config from "./config.json";

let utils = {
    auth_url: "https://auth.emilfolino.se",
    api_key: config.api_key,
    spaceXAPI: "https://api.spacexdata.com/v3",
    issAPI: "http://api.open-notify.org/",
}

export default utils;
