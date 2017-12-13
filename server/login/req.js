exports.init = function (app) {
  // 登录
  app.post('/merchantadmin/login/do', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "loginKey": "a6402631-432e-49f7-a78a-b6f18d966188"
      }
    });
  });

  // 发送验证码
  app.post('/merchantadmin/password/send-code', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok"
    });
  });

  // 验证手机号
  app.post('/merchantadmin/password/check-mobile', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok"
    });
  });

  // 重新设置密码
  app.post('/merchantadmin/password/reset-pass', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok"
    });
  });
}