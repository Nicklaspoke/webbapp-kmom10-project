"use strict";

import m from 'mithril';
import spaceXModel from '../models/spaceX';

let spaceX = {
    optionArray: [],

    oncreate: function() {
        spaceXModel.getLatestLaunchId();
        spaceXModel.reset();
    },

    view: function() {
        spaceX.optionArray = [];

        for (let i = 0; i < spaceXModel.latestLaunchId; i++) {
            spaceX.optionArray[i] = i+1;
        }

        return [
            m("div.container.slide-in", [
                m("h1", "What do you wanna see?"),
                m("input[type=submit][value=Latest Launch].button.blue-button.full-width-button", {
                    onclick: function() {
                        m.route.set("/spaceX/latest");
                    }
                }, "Latest Launch"),

                m("input[type=submit][value=Upcoming Launch].button.blue-button.full-width-button", {
                    onclick: function() {
                        m.route.set("/spaceX/upcoming");
                    }
                }, "Next Upcoming Launch"),
                m("form", {
                    onsubmit: function() {
                        event.preventDefault();
                        console.log(spaceXModel.selectedLaunchId);
                        if (spaceXModel.selectedLaunchId != 0) {
                            m.route.set("/spaceX/" + spaceXModel.selectedLaunchId);
                        }
                    }
                }, [
                    m("label.input-label", "Select A Specific Launch"),
                    m("select.dropdown-menu", {
                        onchange: function(e) {
                            spaceXModel.selectedLaunchId = e.target.value;
                            console.log(spaceXModel.selectedLaunchId);
                        },
                    }, [
                        m("option", "Select a launch"),
                        spaceX.optionArray.map(function(launchId) {
                            return m("option", {value: launchId}, launchId);
                        }),
                    ]),
                    m("input[type=submit][value=Get Launch Info].button.blue-button.full-width-button", "Get Launch Info")
                ])
            ])
        ];
    }
};

export default spaceX;
