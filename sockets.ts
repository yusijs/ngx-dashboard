import io = require('socket.io');
import http = require('http');

export default class sockets {
    private server: SocketIO.Server;
    public charts = {
        stats: [{
            name: 'Pixel',
            value: 0
        }, {
            name: 'iPhone 7',
            value: 0
        }],
    }

    emitStats() {
        this.server.emit('stats', this.charts.stats);
    }

    increment() {
        for (let key in this.charts.stats) {
            this.charts.stats[key].value += Math.round(Math.random() * 10);
        }

        this.emitStats();
    }

    constructor(server: http.Server) {
        this.server = io(server);

        setInterval(() => {
            this.increment();
            // console.log("Doing stuff?")
        }, Math.random() * 10000);
    }
}