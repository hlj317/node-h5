const demo = require('../../app/controllers/demo');
const activity = require('../../app/controllers/activity');

module.exports = {
    // <demo> hello world
    '/demo/hello': demo.hello,
    '/guess': activity.guess
};
