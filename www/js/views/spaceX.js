"use strict";

import m from 'mithril';
import spaceXModel from '../models/spaceX';

let spaceX = {
    optionArray: [],

    oncreate: function() {
        // spaceXModel.getLatestLaunchId();
        // spaceXModel.reset();
    },

    view: function() {
        return [
            m("div.container.slide-in", [
                m("h1", "What do you wanna see?"),
                m("input[type=submit][value=Latest Launch].button.space-button.full-width-button", {
                    onclick: function() {
                        m.route.set("/spaceX/latest");
                    }
                }, "Latest Launch"),

                m("input[type=submit][value=Upcoming Launches].button.space-button.full-width-button", {
                    onclick: function() {
                        m.route.set("/spaceXList/upcoming");
                    }
                }, "Upcoming Launches"),

                m("input[type=submit][value=Browse All Launches].button.space-button.full-width-button", {
                    onclick: function() {
                        m.route.set("/spaceXList/all");
                    }
                }, "Upcoming Launches"),
            ])
        ];
    }
};

export default spaceX;
