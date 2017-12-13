exports.init = function (app) {
  // 学校列表
  app.post('/merchantadmin/school/find', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": [
        {
          "id": 14,
          "schoolName": "test school4",
          "schoolLogo": "http://img3.imgtn.bdimg.com/it/u=3083730696,1947070135&fm=27&gp=0.jpg",
          "schoolAddress": "测试地址4",
        },
        {
          "id": 11,
          "schoolName": "test school4",
          "schoolLogo": "http://img0.imgtn.bdimg.com/it/u=3212909169,2152633561&fm=27&gp=0.jpg",
          "schoolAddress": "测试地址4",
          "schoolLevel": "幼儿园",
          "linkMan": "阳光",
          "linkMobile": "18938888061"
        }
      ],
      "page": {
        "currentPage": 1,
        "currentCount": 2,
        "totalCount": 12,
        "totalPage": 6
      }
    });
  });

  // 学校详情
  app.get('/merchantadmin/school/get-school-and-account', function (req, res) {
    res.send({
      "errcode": "0",
      "errmsg": "ok",
      "data": {
        "school": {
          "id": 1,
          "schoolName": "阳光幼儿园",
          "schoolLogo": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3771737617,2320039355&fm=27&gp=0.jpg",
          "schoolAddress": "测试地址",
          "schoolLevel": "幼儿园",
          "linkMan": "阳光",
          "linkMobile": "18938888061"
        },
        "settings": {
          "industry": "教育",
          "category": "义务教育",
          "legalPersonPicOne": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1811457400,1412920344&fm=27&gp=0.jpg",
          "legalPersonPicTwo": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1811457400,1412920344&fm=27&gp=0.jpg",
          "businessLicensePic": "http://fs01.bokee.net/userfilespace/2011/08/11/sp10001011960601.JPG",
          "licenseNumber": "654965136891325",
          "corporateAccount": "123456789",
          "introductions": "xxxxxx",
          "schoolName": "阳光幼儿园"
        }
      }
    });
  });
}