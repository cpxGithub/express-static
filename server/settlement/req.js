exports.init = function (app) {
  // 根据日期学校筛选
  app.post('/merchantadmin/school-order/statement-by-merchant', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": [
        {
          "id": 1,
          "paymentDate": "2016/11/1",
          "schoolId": 1,
          "schoolName": "龙华小学",
          "payNum": 111,
          "payAmount": 52800,
          "paymentDate": 1509948392
        },
        {
          "id": 2,
          "paymentDate": "2016/11/1",
          "schoolId": 2,
          "schoolName": "龙华小学",
          "payNum": 111,
          "payAmount": 52800,
          "paymentDate": 1509948392
        },
        {
          "id": 3,
          "paymentDate": "2016/11/1",
          "schoolId": 3,
          "schoolName": "龙华小学",
          "payNum": 111,
          "payAmount": 52800,
          "paymentDate": 1509948392
        }
      ],
      "page": {
        "currentPage": 1,
        "currentCount": 1,
        "totalCount": 1,
        "totalPage": 1
      }
    });
  });

  // 学校结算明细
  app.post('/merchantadmin/school-order/statement-by-merchant-school-detail', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": [
        {
          "id": 1,
          "paymentDate": 1508342400,
          "schoolId": 1,
          "schoolName": "龙华小学",
          "payNum": 111,
          "payAmount": 52800
        },
        {
          "id": 12,
          "paymentDate": 1508342400,
          "schoolId": 12,
          "schoolName": "龙华小学11",
          "payNum": 111,
          "payAmount": 52800
        }
      ],
      "page": {
        "currentPage": 1,
        "currentCount": 1,
        "totalCount": 1,
        "totalPage": 1
      }
    });
  });

  // 学校缴费流水
  app.post('/merchantadmin/school-order/statement-by-merchant-school-water', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": [
        {
          "id": 1,
          "orderNo": "11100002017102716411408572",
          "studentName": "张丹",
          "cardNo": "221245456432166",
          "payTime": 11212,
          "price": 52800,
          "schoolPaymentSkuName": "书本费"
        }
      ],
      "page": {
        "currentPage": 1,
        "currentCount": 1,
        "totalCount": 1,
        "totalPage": 1
      }
    });
  });

  // 已缴费金额，已缴费笔数
  app.post('/merchantadmin/school-order/count-payment-info-by-statement', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "payAmount": 1111,
        "payNum": 111
      }
    });
  });
}