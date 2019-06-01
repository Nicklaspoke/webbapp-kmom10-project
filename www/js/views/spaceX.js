"use strict";

import m from 'mithril';
import spaceXModel from '../models/spaceX';

let spaceX = {
    latestLaunchId: 0,
    oninit: function() {
        spaceX.latestLaunchId = spaceXModel.getLatestLaunchId();
    },

    view: function() {
        return [
            m("div.container.slide-in", [
                m("h1", "What do you wanna see?"),
                m("input[type=submit][value=Latest Launch].button.blue-button", {
                    onclick: function() {
                        m.route.set("/spaceX/latest");
                    }
                }, "Latest Launch"),
            ])
        ];
    }
};

export default spaceX;
