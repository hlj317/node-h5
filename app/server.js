const Koa = require('koa');

class Server extends Koa {
    constructor() {
        super();
    }

    async startup(router, port = 80) {
        if (port <= 0 || isNaN(port)) {
            throw new Error('服务端口必须 >= 0 且 <= 65535');
        }

        this.use(router.routes())
            .use(router.allowedMethods());

        this.listen(port);
    }
}

module.exports =  Server;