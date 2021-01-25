import szyreport from 'szyreport-minip'

Page({
	data: {},
	onLoad: function (options) {

		const prefix = 'alpha'
		szyreport.reportPV({ //pv 报数
			prefix,
			data: {
				'page_category': '',//页面大类(选填)
				'page': '',// 页面(选填)
				'page_id': '',//页面ID(选填)
				'parm': '',//自定义参数(选填)
				'f_page': '',//来路页面(选填)
				'f_page_id': '',//来路页面ID(选填)
				'f_page_location': ''//来路页面位置(选填)
			}
		})
		szyreport.reportEvent({ //  埋点报数
			prefix,
			data: {
				'event_id': '', //事件ID
				'obj_type': '',//事件对象类型(选填)
				'obj_id': '',//事件对象ID(选填)
				'parm': '',//自定义参数(选填)
				'f_page': '',//来路页面(选填)
				'f_page_id': '',//来路页面ID(选填)
				'f_page_location': ''//来路页面位置(选填)
			},
			callback: (res) => { // 埋点报数支持 回调函数 （可选项）
				console.log(res)
			}
		})

	}
})