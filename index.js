'use strict';
const alfy = require('alfy');

var fs = require('fs');
var parser = require('ssh-config-parser');
var configDir = process.env['HOME'] + '/.ssh/config';
var config = fs.readFileSync(configDir, 'utf8');


var items = parser(config).map((host) => {
  return {
		title: host.Host,
		autocomplete: host.Host,
		subtitle: `ssh ${host.User}@${host.HostName}`,
		valid: true,
		arg: `ssh ${host.Host}`
	}
})


alfy.output(alfy.matches(alfy.input,items, 'title'));
