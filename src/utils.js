/**
 * @desc   获取设备的id
 * @return {String} deviceId
 */

const getDeviceId = platf => {
	let deviceId = platf === 32 ? my.getStorageSync('userDevId') : wx.getStorageSync('userDevId')
	if (!deviceId) {
		deviceId = generateUUID()
		platf === 32 ? my.setStorageSync('userDevId', deviceId) : wx.setStorageSync('userDevId', deviceId)
	}
	return deviceId
}

/**
 * @desc   生成uuid
 * @return {String} uuid
 */
const generateUUID = () => {
	let d = new Date().getTime()
	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		let r = (d + Math.random() * 16) % 16 | 0
		d = Math.floor(d / 16)
		return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16)
	})
	return uuid
}

const getOs = platf => {
	const sysInfo = platf === 32 ? my.getSystemInfoSync() : wx.getSystemInfoSync()
	let os = 0
	let osVer = sysInfo.system
	if (osVer.indexOf('Android') > -1) {
		os = 1
	} else if (osVer.indexOf('iOS') > -1) {
		os = 2
	} else if (osVer.indexOf('Windows') > -1) {
		os = 3
	} else if (osVer.indexOf('macOS') > -1) {
		os = 4
	}
	return {
		os,
		osVer,
		mtype: sysInfo.model
	}
}

/**
 * @desc   公共参数部分
 * @param {number} platf 平台 31=微信小程序 32=支付宝小程序
 * @return {Object}
 */
const defaultParams = platf => {
	let dev_id = getDeviceId(platf)// 设备ID
	let osInfo = getOs(platf)
	return {
		'platf': 31, //平台 31=微信小程序
		'dev_id': dev_id, // 设备ID
		'imei': '', // 手机串号
		'mac': '', // 硬件编号
		'adid': '', // AndroidID
		'mtype': osInfo.mtype, // 设备型号
		'app_ver': '', // App版本
		'app_gid': '', // App渠道
		'login_status': '0', // 登录状态
		'role': '', // 账号角色
		'user_id': '',  // 账号ID
		'baby_id': '',  // 宝宝ID
		'student_id': '', // 学生ID
		'school_id': '',  // 学校ID
		'adcode': '', // 地区编码
		'pay_state': '', // 付费状态
		'logtime': '', // 日志时间
		'net': '', // 网络状态
		'coordinate': '', // 经纬度坐标
		'ip': '', // IP地址
		'country': '', // 国家
		'province': '', // 省份
		'city': '', // 城市
		'county': '', // 区县
		'os': osInfo.os, // 操作系统 1=Android 2=iOS 3=Windows 4=mac
		'os_ver': osInfo.osVer // 系统版本
	}
}


/**
 * @desc   getUrl函数 获取当前的url
 * @param {String} prefix 环境变量 
 * @param {object} param 参数
 * @return {Object}
 */
const getUrl = (prefix, prams) => {
	let aliyunUrl = ''
	switch (prefix) {
		case 'alpha':
			aliyunUrl = `https://ztjy-test.cn-hangzhou.log.aliyuncs.com/logstores/${prams}/track?APIVersion=0.6.0`
			break
		default:
			aliyunUrl = `https://ztjy.cn-hangzhou.log.aliyuncs.com/logstores/${prams}/track?APIVersion=0.6.0`
			break
	}
	return  {
		aliyunUrl: aliyunUrl // 阿里云url
	}
}

module.exports = {
	getUrl,
	defaultParams
}
