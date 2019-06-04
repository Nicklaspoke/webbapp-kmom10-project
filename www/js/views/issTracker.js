"use strict";

import m from 'mithril';
import L from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import issModel from '../models/issModel';

var map;
var iss;
var isscirc;

var locationMarker = L.icon({
    iconUrl: 'location.png',

    iconSize:     [24, 24],
    iconAnchor:   [12, 12],
    popupAnchor:  [0, 0]
});

var issIcon = L.icon({
    iconUrl: "ISSIcon.png",
    iconSize: [50, 30],
    iconAnchor: [25, 15],
    popupAnchor: [50, 25],
    shadowUrl: 'ISSIcon_shadow.png',
    shadowSize: [60, 40],
    shadowAnchor: [30, 15]
});

function showMap() {
    map = L.map('map').setView([56.181932, 15.590525], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 4,
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    iss = L.marker([0, 0], {icon: issIcon}).addTo(map);
    isscirc = L.circle([0, 0], 2200e3, {color: "#c22", opacity: 0.3, weight: 1, fillColor: "#c22",
        fillOpacity: 0.1}).addTo(map).bindPopup("ISS Current Position");
}

function showPosition() {
    if (issModel.currentPosition.latitude && issModel.currentPosition.longitude) {
        L.marker(
            [issModel.currentPosition.latitude, issModel.currentPosition.longitude],
            {icon: locationMarker}
        ).addTo(map).bindPopup("Your Position");
    }
}

function renderMarker() {
    var issLat = issModel.issPosition[0];
    var issLon = issModel.issPosition[1];

    iss.setLatLng([issLat, issLon]);
    isscirc.setLatLng([issLat, issLon]);

    map.panTo(L.latLng(issLat, issLon));
}



let issTracker = {
    oninit: function() {
        issModel.loadissPositon();
        issModel.getPosition();
    },
    oncreate: function() {
        showMap();
    },
    view: function() {
        if (issModel.issPosition.length > 0) {
            setTimeout(function() {
                issModel.loadissPositon();
                renderMarker();
            }, 5000);
        }
        showPosition();
        return [
            m("div#map.map", "")
        ];
    }
};

export default issTracker;
