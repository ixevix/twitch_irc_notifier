module.exports = {
        irc: {
                channels: ['#example'],
                server: 'irc.quakenet.org',
                botName: 'mybotname',
                realname: 'irc notifier'
        },
        imap: {
                username: "example@gmail.com",
                password: "password",
                host: "imap.gmail.com",
                port: 993,
                tls: true,
                tlsOptions: { rejectUnauthorized: false }
        }
};
