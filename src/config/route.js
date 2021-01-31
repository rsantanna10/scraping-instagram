const scraping = require('../controllers/scraping');

module.exports = class Route {
    constructor(server){
        server = this.main(server);
        return server;
    }

    main(server) {
        server.route('/scraping/:username').get(scraping.get);
        return server;
    }
}