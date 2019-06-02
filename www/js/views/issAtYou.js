"use strict";

import m from 'mithril';
import issModel from '../models/issModel';

let issAtYou = {
    hasCoordinates: false,

    oncreate: function() {
        issModel.getPosition();
    },

    oninit: function() {

    },

    view: function() {
        if (issModel.currentPosition && !issAtYou.hasCoordinates) {
            issModel.loadNextissPass();
            issAtYou.hasCoordinates = true;
            m.redraw();
        }

        return [
            m("h1", "Next ISS pass over you will be"),
            m("pre", issModel.nextPass),
        ];
    }
};

export default issAtYou;
