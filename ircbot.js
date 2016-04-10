/*
set up imap for gmail for example:
https://support.google.com/mail/troubleshooter/1668960?hl=en#ts=1665018,1665141,2769074

requires:
 irc
 mail-notifier
 jquery

to install:
 npm install irc
 npm install mail-notifier
 npm install jquery

to run:
 node ircbot.js
*/

var config = require('./config');

var timeout = 10000;
var env = require('jsdom').env;
var irc = require('irc');
var notifier = require('mail-notifier');
var bot = new irc.Client(config.irc.server, config.irc.botName, { autoConnect: false, channels: config.irc.channels, realName: config.irc.realname });
var n;
var $;
var output;
var who;
var actualMail;

var reconnect = function(msg) {
	console.log(msg);
	setTimeout(startListening, timeout);
	timeout = timeout * 2;
}

var startListening = function(){
	console.log('Connecting');
	n = notifier(config.imap).on('mail', processMail);
	n.on('end', function(){ reconnect('Disconnected'); });
	n.on('error', function(err){ console.log('Error: ' + err); });
	n.start();
};

bot.connect(function(){
	startListening();
});

var parseMail = function(errors, window){
	console.log('Errors: ' + errors);
	if ( actualMail.headers.subject.indexOf('just went live') > -1 ) {
		$ = require('jquery')(window);
		output = $(actualMail.html).find('strong').find('a').text();
		$.each(config.irc.channels, function(i, channel){
			who = output.split(' ')[0];
			bot.say(channel, "Stream online: http://twitch.tv/" + who);
		});
		$ = null;
		output = null;
		who = null;
	}
	actualMail = null;
	window.close();
};

var processMail = function(mail){
	timeout = 10000;
	actualMail = mail;
	env(mail.html, function(errors, window){ parseMail(errors, window); });
};
