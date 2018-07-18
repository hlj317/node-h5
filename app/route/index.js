const demo = require('../../app/controllers/demo');
const activity = require('../../app/controllers/activity');
const cms = require('../../app/controllers/cms');

module.exports = {
    // <demo> hello world
    '/demo/hello': demo.hello,
    '/guess': activity.guess,
    '/cms': cms.index
};
