exports.init = function (app) {
  // 缴费信息列表
  app.post('/merchantadmin/school-order/get-payment-list', function (req, res) {
    // res.statusCode = 401;
    res.send({"errcode":"0","errmsg":"ok","data":[{"id":112,"schoolPaymentSkuName":"缴费缴费哦","price":1,"className":"class 3","name":"王先杰","cardNo":"513001199308157490","mobile":"13333333333"}],"page":{"currentPage":1,"currentCount":1,"totalCount":1,"totalPage":1}});
  });

  // 缴费联动条件查询
  app.post('/merchantadmin/school-order/get-payment-condition', function (req, res) {
    res.send({"errcode":"0","errmsg":"ok","data":{"school":[{"id":1,"schoolName":"阳光幼儿园"},{"id":2,"schoolName":"月光幼儿园"}],"year":["2015-2016","2016-2017","2017-2018"],"payment":[],"default":{}}});
  });

  // 已缴费详情
  app.post('/merchantadmin/school-order/get-payment-info', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "id": 112,
        "orderNo": "11100002017102716411408572",
        "schoolPaymentSkuName": "缴费缴费哦",
        "schoolPaymentSkuAmount": 1,
        "payAmount": 1,
        "noPayAmount": 0,
        "price": 1,
        "payTime": 1509541135,
        "tradeNo": "11111",
        "className": "class 3",
        "name": "王先杰",
        "cardNo": "513001199308157490",
        "mobile": "13333333333",
        "sex": 1,
        "idType": 1,
        payMethods: 2,
        "gradeYear": 2017,
        "orderDetail": [
          {
            "id": 72,
            "orderNo": "011200002017112014262631674",
            "price": 2,
            "payTime": 1511159196
          },
          {
            "id": 75,
            "orderNo": "011200002017112014262611111",
            "price": 3,
            "payTime": 1511159196
          }
        ]
      }
    });
  });

  // 数据统计
  app.post('/merchantadmin/school-order/count-payment-info', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "studentNum": 1,
        "amount": 112000,
        "paymentScheduling": 0.6666666666666666
      }
    });
  });

  // 未缴费数据列表
  app.post('/merchantadmin/school-order/get-un-payment-list', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": [
        {
          "id": 145,
          "uid": 0,
          "merchantId": 1,
          "schoolId": 1,
          "classId": 1,
          "className": "class1",
          "classGradeYear": 2016,
          "name": "张三三x",
          "sex": 1,
          "birth": 915148800,
          "idType": 1,
          "cardNo": "ZJH001x",
          "infoNo": "XH001x",
          "guardian": "张三",
          "mobile": "18938888062",
          "gradeYear": 2016,
          "graduateYear": 2018,
          "province": 0,
          "city": 0,
          "county": 0,
          "address": "比克大厦101",
          "isEnroll": 1,
          "enrollTime": 1508912335,
          "created": 0,
          "modified": 1508461028,
          "deleted": 0
        },
        {
          "id": 146,
          "uid": 0,
          "merchantId": 1,
          "schoolId": 1,
          "classId": 1,
          "className": "class1",
          "classGradeYear": 2016,
          "name": "李四四x",
          "sex": 1,
          "birth": 894412800,
          "idType": 1,
          "cardNo": "ZJH002x",
          "infoNo": "XH002x",
          "guardian": "李四",
          "mobile": "18938888063",
          "gradeYear": 2016,
          "graduateYear": 2018,
          "province": 0,
          "city": 0,
          "county": 0,
          "address": "比克大厦102",
          "isEnroll": 1,
          "enrollTime": 1508912335,
          "created": 0,
          "modified": 1508461028,
          "deleted": 0
        },
        {
          "id": 147,
          "uid": 0,
          "merchantId": 1,
          "schoolId": 1,
          "classId": 1,
          "className": "class1",
          "classGradeYear": 2016,
          "name": "王五五x",
          "sex": 2,
          "birth": 839548800,
          "idType": 2,
          "cardNo": "ZJH003x",
          "infoNo": "XH003x",
          "guardian": "王五",
          "mobile": "18938888064",
          "gradeYear": 2016,
          "graduateYear": 2018,
          "province": 0,
          "city": 0,
          "county": 0,
          "address": "比克大厦103",
          "isEnroll": 1,
          "enrollTime": 1508912335,
          "created": 0,
          "modified": 1508461028,
          "deleted": 0
        }
      ],
      "page": {
        "currentPage": 1,
        "currentCount": 10,
        "totalCount": 30,
        "totalPage": 1
      }
    });
  });

  // 未缴费数据统计
  app.post('/merchantadmin/school-order/count-un-payment-info', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "studentNum": 3,
        "amount": 33600
      }
    });
  });

  // 获取缴费项目列表
  app.get('/merchantadmin/school-payment-sku/find-all', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": [
        {
          "id": 204,
          "name": "timer2"
        },
        {
          "id": 139,
          "name": "timer"
        },
        {
          "id": 135,
          "name": "哈哈哈"
        }
      ]
    });
  });
}