"use strict";

import m from "mithril";
import utils from "../utils";

let issModel = {
    currentPosition: {},
    peopleInSpace: {},
    issPosition: [],

    loadissPositon: function() {
        m.request({
            method: "GET",
            url: utils.issAPI + "iss-now.json",
        }).then(function(result) {
            let temp = result.iss_position;

            issModel.issPosition[0] = temp.latitude;
            issModel.issPosition[1] = temp.longitude;
        });
    },

    loadPeopleInSpace: function() {
        let astroUrl = utils.issAPI + "astros.json";

        m.request({
            method: "GET",
            url: astroUrl
        }).then(function(result) {
            issModel.peopleInSpace = result.people;
            console.log(issModel.peopleInSpace);
        })
    },

    getPosition: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                issModel.geoSuccess,
                issModel.geoError
            );
        }
    },

    geoSuccess: function(pos) {
        issModel.currentPosition = pos.coords;
        m.redraw();
    },

    geoError: function(error) {
        console.log('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
};

export default issModel;
