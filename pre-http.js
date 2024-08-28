/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
const express = require("express");
const fs = require("fs");
const path = require('path');

const prehttp = express();
prehttp.use(express.json());

prehttp.post("/define", async (request, response) => {
    const origin = new URL(originURI);
    const action = origin.hash;

    const directory = path.join(__dirname, `${origin.protocol.slice(0. -1)}@${origin.hostname}~${origin.port}`);

    await fs.mkdir(directory, {
        "recursive": true
    });

    fs.writeFile(path.join(directory, `${action}.json`), JSON.stringify(request.body));

});

