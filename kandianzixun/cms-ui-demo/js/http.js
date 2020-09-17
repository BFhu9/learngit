let qs = Qs;
let baseURL = 'http://127.0.0.1:7788';
//1.提供登录方法，提供获取token方法
/* // 登录页面
login({},function(){
  跳转页面
},function(){}); */
// api 与后台接口对接层次
// 业务逻辑层 前端业务逻辑
// 视图层  页面数据变化，页面样式变化
function login(user, successFun, errorFun) {
  myAjax.postJSON('/user/login', user).then((res) => {
    console.log(res, '--');
    if (res.status == 200) {
      // 存token
      sessionStorage.setItem('token', res.data.token);
      successFun(res);
    } else {
      errorFun(res);
    }
  }).catch((err) => {
    console.log(err);
    errorFun(err);
  });
  /* myAjax.postJSON(baseURL + '/user/login', user, (res) => {
    //保存到sessionStorage中
    sessionStorage.setItem('token', JSON.parse(res).data.token);
  }, (error) => {
    console.log(error);
  }); */
}
//2.myAjax对象，对象里有get方法，postForm方法，postJSON方法
// myAjax.get('/my', {}).then((res) => { }).catch((err) => { });
let myAjax = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: baseURL + url,
        method: 'get',
        data: qs.stringify(params),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf8',
          'Authorization': sessionStorage.getItem('token')
        },
        success(res) {
          // resolve(res);
          if (res.status == 200) {
            resolve(res);
          } else {
            reject(res);
          }
        },
        error(err) {
          reject(err);
        }
      })
    });
  },
  postForm(url, params) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: baseURL + url,
        method: 'post',
        data: qs.stringify(params),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf8',
          'Authorization': sessionStorage.getItem('token')
        },
        success(res) {
          // resolve(res);
          if (res.status == 200) {
            resolve(res);
          } else {
            reject(res);
          }
        },
        error(err) {
          reject(err);
        }
      })
    })
  },
  postJSON(url, params) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: baseURL + url,
        method: 'post',
        data: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json;charset=utf8',
          'Authorization': sessionStorage.getItem('token')
        },
        success(res) {
          // resolve(res);
          if (res.status == 200) {
            resolve(res);
          } else {
            reject(res);
          }
        },
        error(err) {
          reject(err);
        }
      })
    })
  }
};