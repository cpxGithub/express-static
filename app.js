var express = require('express');
var http = require('http');
var app = express();
var history = require('connect-history-api-fallback');
var httpServer = http.createServer(app);

var middleware = history({});

var login = require('./server/login/req');
var payManage = require('./server/payManage/req');
var firstIndex = require('./server/first/req');
var school = require('./server/school/req');
var setReq = require('./server/set/req');
var settlement = require('./server/settlement/req');

login.init(app);
payManage.init(app);
firstIndex.init(app);
school.init(app);
setReq.init(app);
settlement.init(app);

app.use(history());
app.use(express.static('./dist'));

var server = app.listen(3006, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});