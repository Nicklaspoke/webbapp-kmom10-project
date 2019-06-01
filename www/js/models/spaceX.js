"use strict";

import m from 'mithril';

import utils from "../utils.js";

let spaceXModel = {
    baseUrl: "https://api.spacexdata.com/v3/launches/",
    launchInfo: {},
    missonPatch: "",
    rocketName: "",

    load: function() {
        let launchId = utils.spaceXLaunchId;

        m.request({
            method: "GET",
            url: spaceXModel.baseUrl + launchId
        }).then(function(result) {
            spaceXModel.launchInfo = result;
            spaceXModel.missonPatch = spaceXModel.launchInfo.links.mission_patch;
            spaceXModel.rocketName = spaceXModel.launchInfo.rocket.rocket_name;
        });
    }
};

export default spaceXModel;
