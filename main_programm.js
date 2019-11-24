/*
 * Copyright (c) 2019.
 * All rights lies to "VukAnd12#4407" and "Gravity Assist#0852"
 */

const pm2 = require('pm2');
let exec = require('child_process').exec, child;

const proc_name = "CBA";

pm2.connect(function (err) {
    if (err) {
        console.error(err);
        process.exit(2);
    }
    pm2.stop("all");
    pm2.start({
        script: './bot.js',         // Script to be run
        name: proc_name
    }, function (err, apps) {
        pm2.disconnect();   // Disconnects from PM2
        if (err) throw err
    });
    exec(`pm2 logs ${proc_name} --json >> pm2.log`);
});