exports.init = function (app) {
  // 获取学校及签约信息
  app.get('/merchantadmin/merchant/get-merchant-setting', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "merchant": {
          "id": 1,
          "name": "云缴费",
          "logo": "http://img15.3lian.com/2015/f2/50/d/136.jpg",
          "addr": "测试地址"
        },
        "settings": {
          "bankOpenUser": "张三",
          "bank": "农行",
          "bankNo": "654685416416513",
          "rate": "0.123000"
        }
      }
    });
  });

  app.post('/merchantadmin/applet_auth/get-applet-info', function (req, res) {
    res.send({"errcode":"0","errmsg":"ok","data":{"appid":"wx19ed5eb6e4bdf76e","nickName":"智慧缴费测试","fileCdnPath":"data:image/jpg;base64,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","isAuthorized":1,"userVersion":"v1.0.0","templateId":"10","latestVersion":"v1.0.0","latesttemplateId":"10"}});
  });

  app.post('/merchantadmin/applet_auth/get-auth-url', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": "https://mp.weixin.qq.com/cgi-bin/componentloginpage?component_appid=wx47229a5682c789bd&pre_auth_code=preauthcode@@@aOptpxNA7-GUHnyl2IK0XRd4vVFRsJPPJRHwMh1NFI6YahVO0ablhEEGq7eScGTi&redirect_uri=https://dev.pay.snsshop.net/merchantadmin/applet_auth/callback?merchant_id=1"
    });
  });
}