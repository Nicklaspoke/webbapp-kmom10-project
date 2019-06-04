"use strict";

import m from 'mithril';
import spaceXModel from '../models/spaceX';

let spaceXList = {
    oninit: spaceXModel.loadLaunchType,
    view: function() {
        return [
            m("div.container.slide-in", [
                spaceXModel.listInfoBase.length > 0 ?
                    spaceXModel.listInfoBase.map(function(launch) {
                        let missionPatch = launch.links.mission_patch ? launch.links.mission_patch
                            : "/img/noimage.png";
                        let rocketName = launch.rocket.rocket_name;
                        let detailsLink = "/spaceX/" + launch.flight_number;

                        return m("div.listContainer.slide-in", [
                            m("a", { href: detailsLink, oncreate: m.route.link }, [
                                m("img.thumb.image-left", {src: missionPatch}),
                            ]),
                            m("h4", "Mission Number: ", launch.flight_number),
                            m("h4", "Mission Name: ", launch.mission_name),
                            m("h4", "Launch Date: ", launch.launch_date_local),
                            m("h4", "Rocket: ", rocketName),
                        ]);
                    })
                    : m("h2", "There are currently no upsoming launches")
            ])
        ];
    }
};

export default spaceXList;
