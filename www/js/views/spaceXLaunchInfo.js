"use strict";

import m from 'mithril';

import spaceXModel from "../models/spaceX.js";

let spaceXLaunchInfo = {
    oninit: function() {
        spaceXModel.load();
    },

    view: function() {

    }
}

export default spaceXLaunchInfo;
