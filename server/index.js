var http = require('http');
var app = require('express')();
var httpServer = http.createServer(app);

var login = require('./login/req');
var payManage = require('./payManage/req');
var firstIndex = require('./first/req');
var school = require('./school/req');
var setReq = require('./set/req');
var settlement = require('./settlement/req');

login.init(app);
payManage.init(app);
firstIndex.init(app);
school.init(app);
setReq.init(app);
settlement.init(app);

httpServer.listen(3000, function () {
  console.log('HTTP Server is running on: http://localhost:%s', 3000);
})