# szyreport-minip

 
小程序报数工具  


### 安装使用
```
使用npm安装
$ npm install --save-dev szyreport-minip
```

```
// 使用CommonJs方式引入
const szyreport = require('szyreport-minip')
```
#### 或者：
```
// 使用ES6方式引入
import szyreport from 'szyreport-minip'
```
### 调用：
```
    const prefix = 'alpha'

    // PV 报数
    szyreport.reportPV({
        prefix, // 默认线上环境
        data: {
            'platf': 31, // 平台(选填) 31=微信小程序 32=支付宝小程序 默认31
            'status': '', // 状态 (选填)
            'trial': '',// 试看(选填)
            'stay_time': '',// 时长(选填)
            'progress': '',// 浏览进度(选填)
            'page_category': '',// 页面大类(选填)
            'page': '',// 页面(选填)
            'page_id': '',// 页面ID(选填)
            'parm': '',// 自定义参数(选填)
            'f_page': '',// 来路页面(选填)
            'f_page_id': '',// 来路页面ID(选填)
            'f_page_location': ''// 来路页面位置(选填)
        },
        callback: (res) => { // 埋点报数支持 回调函数 （可选项） 返回上报状态 成功 res=success  失败 res=fail
            console.log(res)
        }
    })
    
    // 埋点报数
    szyreport.reportEvent({
        prefix, // 默认线上环境
        data: {
            'platf': 31, // 平台(选填) 31=微信小程序 32=支付宝小程序  默认31
            'event_id': '', // 事件ID
            'obj_type': '',// 事件对象类型(选填)
            'obj_id': '',// 事件对象ID(选填)
            'parm': '',// 自定义参数(选填)
            'f_page': '',// 来路页面(选填)
            'f_page_id': '',// 来路页面ID(选填)
            'f_page_location': ''// 来路页面位置(选填)
        },
        callback: (res) => { // 埋点报数支持 回调函数 （可选项） 返回上报状态 成功 res=success  失败 res=fail
            console.log(res)
        }
    })

```

### 注意事项：
```
    微信小程序
    1. 测试环境验收需要开启不检验合法域名，因测试环境请求域名不会添加到生产环境配置
    2. 生产环境把阿里埋点域名配置至微信小程序合法域名内
```