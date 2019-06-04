"use strict";

import m from 'mithril';
import issModel from '../models/issModel';

let issAtYou = {

    oninit: function() {
        issModel.loadPeopleInSpace();
    },

    view: function() {
        return [
            m("div.container.slide-in", [
                m("h1", "Current Persons Living in space"),
                issModel.peopleInSpace.length > 0 ?
                    issModel.peopleInSpace.map(function(person) {
                        return m("div", [
                            m("p", "Space Caft: ", person.craft, "\n", "Name: ", person.name)
                        ]);
                    })
                    : m("h2", "There are currently no one space")
            ])
        ];
    }
};

export default issAtYou;
