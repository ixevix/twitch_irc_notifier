NOT WORKING ANYMORE, TWITCH STOPPED SENDING EMAILS IF YOU DON'T MANUALLY WATCH THE STREAMS WITH THE RESPECTIVE ACCOUNT. Need to make new bot with the new Twitch API.

twitch_irc_notifier
===================

1. Set up a twitch account and an email account. Receive notifications in IRC when a streamer goes live.
   (set up imap for gmail for example:
https://support.google.com/mail/troubleshooter/1668960?hl=en#ts=1665018,1665141,2769074)
   Google will block your access so you need to allow it by logging into the gmail account from a browser and adding an exception to allow all traffic.

2. Copy config_example.js to config.js and configure it for your imap and irc settings.

3. npm install irc<br>
   npm install mail-notifier<br>
   npm install jquery<br>
   npm install jsdom<br>

4. run with node ircbot.js (in screen e.g.)
