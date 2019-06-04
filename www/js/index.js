/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import m from 'mithril';

import layout from "./views/layout.js";
import home from "./views/home.js";
import login from "./views/login.js";
import register from "./views/register.js";
import spaceX from './views/spaceX.js';
import spaceXLaunchInfo from './views/spaceXLaunchInfo.js';
import peopleInSpace from './views/peopleInSpace.js';
import utils from "./utils.js";
import auth from "./models/auth.js";
import issTracker from './views/issTracker.js';


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(layout, m(home));
                }
            },

            "/spaceX": {
                render: function() {
                    return m(layout, m(spaceX));
                }
            },

            "/spaceX/:launchId": {
                render: function(vnode) {
                    utils.spaceXLaunchId = vnode.attrs.launchId;
                    return m(layout, m(spaceXLaunchInfo));
                }
            },

            "/issPeople": {
                render: function() {
                    console.log("/issPeople");
                    return m(layout, m(peopleInSpace));
                }
            },

            "/issPos": {
                render: function() {
                    console.log("/issPoss");
                    return m(layout, m(issTracker));
                }
            },

            "/login": {
                render: function() {
                    return m(layout, m(login));
                }
            },

            "/logout": {
                render: function() {
                    auth.clear();

                    return m.route.set("/");
                }
            },

            "/register": {
                render: function() {
                    return m(layout, m(register));
                }
            },
        });
    },
};

app.initialize();
