"use strict";

import m from 'mithril';

import spaceXModel from "../models/spaceX.js";

let spaceXLaunchInfo = {
    oninit: function() {
        spaceXModel.load();
    },

    view: function() {
        return [
            m("div.container.slide-in", [
                m("img.image-center",
                {src: spaceXModel.missonPatch ? spaceXModel.missonPatch : "/img/noimage.png"}),
                m("h1", "Flight Number: " + spaceXModel.launchInfo.flight_number),
                m("h3", "Misson name: " + spaceXModel.launchInfo.mission_name),
                m("h3", "Launch date: " + spaceXModel.launchInfo.launch_date_local),
                m("h3", "Rocket: " + spaceXModel.rocketName),
                m("p", [
                    m("b", "Mission Details: "),
                ], spaceXModel.launchInfo.details),
            ])
        ];
    }
};

export default spaceXLaunchInfo;
