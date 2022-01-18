const utils = require('./utils.js')
let defaultParams = null

/**
 * @desc  PV报数
 */
const reportPV = options => {
	const opts = options || {}
	if (!defaultParams) {
		defaultParams = opts.data.platf ? utils.defaultParams(opts.data.platf) : utils.defaultParams()
	}
	let params = Object.assign({}, defaultParams, opts.data)
	let data = {
		prefix: opts.prefix,
		data: params,
		sdo_bfn: 'sdo_bfn_pv'
	}
	sendEvent(data);
}

/**
 * @desc  EV报数
 */
const reportEvent = options => {
	const opts = options || {}
	if (!defaultParams) {
		defaultParams = opts.data.platf ? utils.defaultParams(opts.data.platf) : utils.defaultParams()
	}
	let params = Object.assign({}, defaultParams, opts.data)
	let data = {
		prefix: opts.prefix,
		data: params,
		sdo_bfn: 'sdo_bfn_event'
	}
	if (opts.callback) {
		data.callback = opts.callback
	}
	sendEvent(data)
}

/**
 * @desc  错误报数
 */
 const reportError = options => {
	const opts = options || {}
	if (!defaultParams) {
		defaultParams = opts.data.platf ? utils.defaultParams(opts.data.platf) : utils.defaultParams()
	}
	let params = Object.assign({}, defaultParams, opts.data)
	let data = {
		prefix: opts.prefix,
		data: params,
		sdo_bfn: 'error'
	}
	sendEvent(data);
}

/**
 * @desc  启动报数
 */
const reportStartup = options => {
	const opts = options || {}
	if (!defaultParams) {
		defaultParams = opts.data.platf ? utils.defaultParams(opts.data.platf) : utils.defaultParams()
	}
	let params = Object.assign({}, defaultParams, opts.data)
	let data = {
		prefix: opts.prefix,
		data: params,
		sdo_bfn: 'sdo_bfn_startup'
	}
	if (opts.callback) {
		data.callback = opts.callback
	}
	sendEvent(data)
}

/**
 * @desc  发送请求
 */
const sendEvent = options => {
	const opts = options || {}
	let url = utils.getUrl(opts.prefix, opts.sdo_bfn)
	if (opts.data.platf === 32) {
		my.request({
			method: 'get',
			url: url.aliyunUrl,
			data: opts.data,
			success (res) {
				opts.callback ? opts.callback('success') : console.log('success')
			},
			fail () {
				opts.callback ? opts.callback('fail') : console.log('fail')
			}
		})
	} else {
		wx.request({
			method: 'get',
			url: url.aliyunUrl,
			data: opts.data,
			success (res) {
				opts.callback ? opts.callback('success') : console.log('success')
			},
			fail () {
				opts.callback ? opts.callback('fail') : console.log('fail')
			}
		})
	}
}

module.exports = {
	reportPV,
  reportEvent,
  reportError,
	reportStartup
}
