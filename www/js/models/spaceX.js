"use strict";

import m from 'mithril';

import utils from "../utils.js";

let spaceXModel = {
    latestLaunchId: 0,
    selectedLaunchId: 0,
    launchInfo: {},
    missonPatch: "",
    rocketName: "",

    reset: function() {
        spaceXModel.selectedLaunchId = 0;
    },

    getLatestLaunchId: function() {
        m.request({
            method: "GET",
            url: utils.spaceXAPI + "/launches/latest"
        }).then(function(result) {
            spaceXModel.latestLaunchId = result.flight_number;
        });
    },

    load: function() {
        let launchId = utils.spaceXLaunchId;

        m.request({
            method: "GET",
            url: utils.spaceXAPI + "/launches/" + launchId
        }).then(function(result) {
            if (launchId === "upcoming") {
                spaceXModel.launchInfo = result[0];
                spaceXModel.missonPatch = spaceXModel.launchInfo.links.mission_patch;
                spaceXModel.rocketName = spaceXModel.launchInfo.rocket.rocket_name;
            } else {
                spaceXModel.launchInfo = result;
                spaceXModel.missonPatch = spaceXModel.launchInfo.links.mission_patch;
                spaceXModel.rocketName = spaceXModel.launchInfo.rocket.rocket_name;
            }
        });
    }
};

export default spaceXModel;
