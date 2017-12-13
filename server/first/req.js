exports.init = function (app) {
  // 首页统计信息
  app.post('/merchantadmin/school-order/get-count-list', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "西乡幼儿园西乡幼儿园西乡幼儿园",
      "data": [{
          "schoolId": 1,
          "schoolName": "西乡幼儿园",
          "schoolPaymentSkuNum": 1,
          "todayTotalPayNum": 1,
          "todayTotalPayAmount": 550,
          "totalPayAmount": 50000
        },
        {
          "schoolId": 1,
          "schoolName": "西乡幼儿园",
          "schoolPaymentSkuNum": 1,
          "todayTotalPayNum": 1,
          "todayTotalPayAmount": 550,
          "totalPayAmount": 50000
        },
        {
          "schoolId": 1,
          "schoolName": "西乡幼儿园",
          "schoolPaymentSkuNum": 1,
          "todayTotalPayNum": 1,
          "todayTotalPayAmount": 550,
          "totalPayAmount": 50000
        },
        {
          "schoolId": 1,
          "schoolName": "西乡幼儿园",
          "schoolPaymentSkuNum": 1,
          "todayTotalPayNum": 1,
          "todayTotalPayAmount": 550,
          "totalPayAmount": 50000
        },
        {
          "schoolId": 1,
          "schoolName": "西乡幼儿园",
          "schoolPaymentSkuNum": 1,
          "todayTotalPayNum": 1,
          "todayTotalPayAmount": 550,
          "totalPayAmount": 50000
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

  // 首页统计详情
  app.get('/merchantadmin/school-order/get-count-info-detail', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "schoolId": "1",
        "schoolName": "阳光幼儿园",
        "schoolPaymentSkuNum": 2,
        "todayTotalPayNum": 23,
        "todayTotalPayAmount": 81,
        "totalPayAmount": 84,
        "schoolPaymentSkuInfo": [{
          "schoolPaymentSkuId": 10,
          "schoolPaymentSkuName": "王先杰缴费2",
          "todayPayNum": 13,
          "todayPayAmount": 13,
          "todayPayClassNum": 2,
          "totalPayNum": 13,
          "totalPayAmount": 13,
          "totalPayclassNum": 2,
          "totalNoPayNum": 16,
          "totalNOPayAmount": 67,
          "totalNoPayclassNum": 4
        }, {
          "schoolPaymentSkuId": 7,
          "schoolPaymentSkuName": "2017秋季学杂费",
          "todayPayNum": 1,
          "todayPayAmount": 2,
          "todayPayClassNum": 1,
          "totalPayNum": 1,
          "totalPayAmount": 2,
          "totalPayclassNum": 1,
          "totalNoPayNum": 7,
          "totalNOPayAmount": 12,
          "totalNoPayclassNum": 1
        }]
      }
    });
  });

  // 首页统计信息
  app.post('/merchantadmin/school-order/get-count-info', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "todayPaySchoolNum": 0,
        "todayPayNum": 0,
        "todayPayAmount": 0,
        "totalPayAmount": 42
      }
    })
  })
}
