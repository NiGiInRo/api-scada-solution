const { getjokesController, getCameraInfoController, getDeepBlueInfoController} = require('./controllers/testApiController')
exports.init = app => {
    app.get('/geek', getjokesController)
    app.post('/camera', getCameraInfoController);
    app.get('/depblue', getDeepBlueInfoController);
};