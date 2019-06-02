"use strict";

import m from "mithril";
import utils from "../utils";

let issModel = {
    currentPosition: {},
    nextPass: {},
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

    loadNextissPass: function() {
        let passUrl = utils.issAPI + "iss-pass.json";

        passUrl += "?lat=" + issModel.currentPosition.latitude;
        passUrl += "&lon=" + issModel.currentPosition.longitude;
        passUrl += "&alt=20&n=1";
        console.log(passUrl);
        m.request({
            method: "GET",
            url: passUrl,
        }).then(function(result) {
            console.log(result);
            issModel.nextPass = result;
        });
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
