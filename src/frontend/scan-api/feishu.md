# 飞书

[官方文档](https://open.feishu.cn/document/client-docs/h5/)

## 源码

### 引入 SDK


```html
<!-- index.html -->
<head>
  <script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/ee/lark/h5jssdk/lark/js_sdk/h5-js-sdk-1.5.11.js"></script>
</head>
```

### 调用 API 前先鉴权

::: code-group

```js [vue 3]
onMounted(() => {
  apiAuth()
})
```

```js [官方示例 - jquery]
$('document').ready(()=>{
  apiAuth()
});
```

:::

```js
function apiAuth() {
  console.log('start apiAuth');
  if (!window.h5sdk) {
    console.log('invalid h5sdk');
    alert('please open in feishu');
    return;
  }

  // 调用config接口的当前网页url
  const url = encodeURIComponent(location.href.split('#')[0]);
  console.log('接入方前端将需要鉴权的url发给接入方服务端,url为:', url);
  // 向接入方服务端发起请求，获取鉴权参数（appId、timestamp、nonceStr、signature）
  fetch(`/get_config_parameters?url=${url}`)
    .then((response) =>
      response.json().then((res) => {
        console.log('接入方服务端返回给接入方前端的结果(前端调用config接口的所需参数):', res);
        // 通过error接口处理API验证失败后的回调
        window.h5sdk.error((err) => {
          throw ('h5sdk error:', JSON.stringify(err));
        });
        // 调用config接口进行鉴权
        window.h5sdk.config({
          appId: res.appid,
          timestamp: res.timestamp,
          nonceStr: res.noncestr,
          signature: res.signature,
          jsApiList: [],
          //鉴权成功回调
          onSuccess: (res) => {
            console.log(`config success: ${JSON.stringify(res)}`);
          },
          //鉴权失败回调
          onFail: (err) => {
            throw `config failed: ${JSON.stringify(err)}`;
          },
        });
        // 完成鉴权后，便可在 window.h5sdk.ready 里调用 JSAPI
        window.h5sdk.ready(() => {
          // 调用 API
        });
      })
    )
    .catch(function (e) {
      console.error(e);
    });
}
```

### 调用 API

```js
window.h5sdk.config({})
window.h5sdk.ready(() => {
  // https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/scan-code/scancode
  tt.scanCode({
    // scanType 扫码类型：[qrCode, barCode, datamatrix, pdf417]
    // qrCode：二维码
    // barCode：条形码
    // datamatrix：Data Matrix 码
    // pdf417：PDF417 条码
    scanType: ['barCode', 'qrCode'],
    // 是否支持手动输入条形码
    barCodeInput: false,
    success(res) {
      // res: {
      //   "result": "something",
      //   "errMsg": "scanCode:ok"
      // }
      console.log('scanCode', JSON.stringify(res));
    },
    fail(res) {
      console.log(`scanCode fail: ${JSON.stringify(res)}`);
    },
    complete(res) {
      console.log('scanCode 调用结束', res.errMsg);
    },
  });
})
```

### 错误码

scanCode 相关错误码：

- 1505001：现在正在扫码，不能重复调用（iOS特有）
- 1505002：用户取消扫码操作

> [飞书错误码总览](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)

## 开发环境快速测试方案

::: warning
**注意**：调试时需确保手机与电脑在同一局域网下
:::

### 官方示例代码包项目结构

> **public和templates**：前端模块，主要功能有：调取客户端API（JSAPI）获取用户信息、展示用户信息。
>
> **其他**：服务端模块，使用Flask构建，主要功能有：使用 App ID 和 App Secret 获取 tenant_access_token；使用 tenant_access_token 获取 jsapi_ticket；使用jsapi_ticket、随机字符串、当前时间戳、当前鉴权的网页URL 生成签名signature。

目录结构与部分核心代码文件：

```text
.
├── README.zh.md     ----- 说明文档
├── public
│   ├── svg     ----- 前端图形文件
│   ├── index.css     ----- 前端展示样式
│   ├── index.js     ----- 前端交互代码
├── templates
│   ├── index.html     ----- 前端用户信息展示页面
├── auth.py     ----- 服务端获取jsapi_ticket等
├── server.py     ----- 服务端核心业务代码
├── requirements.txt     ----- 环境配置文件
└── .env     ----- 全局默认配置文件，主要存储App ID和App Secret等
```

### 替换代码

1. 下载官方提供的示例代码包[web_app_with_jssdk.zip](https://open.feishu.cn/document/client-docs/h5/)（仅提供文档链接，请从文档中下载最新包）
2. 构建项目生产包，以 Vue 3 项目为例，默认输入目录为`./dist`
3. 将`./dist/index.html`放入`./templates`目录
4. 将`./dist/assets/*`放入`./public`目录
5. 修改`index.html`中文件的引用路径，将`./assets/`替换为`../public/`

### 启动（Python 3）

1. 安装[Python 3](https://www.python.org/)
2. 在[飞书开发者后台](https://open.feishu.cn/app/)创建应用，点击应用名称进入详情，点击**凭证与基础信息**，获取 App ID 和 App Secret
3. 修改`.env`中的 App ID 和 App Secret 为自己的应用信息
4. 打开终端，测试包的路径为`web_app_with_jssdk/python`，可选择进入目录或者直接删除外层目录进行操作

   ```bash
   <!-- 进入目录 -->
   cd web_app_with_jssdk/python
   ```

5. 确保当前执行目录与`server.py`同级，创建并激活虚拟环境
   :::code-group

   ```bash [windows]
   <!-- 创建虚拟环境，只需执行一次 -->
   <!-- python -m venv [虚拟环境名] -->
   python -m venv venv
   
   <!-- 激活环境 -->
   venv\Scripts\activate
   ```

   ```bash [mac/linux]
   <!-- 创建虚拟环境，只需执行一次 -->
   <!-- python -m venv [虚拟环境名] -->
   python -m venv venv
   
   <!-- 激活环境 -->
   . venv/bin/activate
   ```

   :::
   激活后，终端会显示虚拟环境的名称

   ```bash
   (venv) **** python %
   ```

6. 安装依赖

   ```bash
   pip install -r requirements.txt
   ```

7. 启动服务器

   ```bash
   python3 server.py
   ```

8. 复制终端中的临时内网访问地址用于后续配置

   ```bash{3}
   Running On http://127.0.0.1:[port]
   <!-- 临时内网访问地址 -->
   Running On http://[ip]:[port] (Press CTRL+C to quit)
   ```

### 配置本地调试地址

1. 进入飞书开发者后台，进入应用信息页
2. 在菜单`应用功能-网页`中将临时内网访问地址填入`桌面端主页`和`移动端主页`字段（按需填写）
3. 在菜单`安全设置`中将临时内网访问地址填入`H5 可信域名`字段，点击添加
4. 创建版本并发布
