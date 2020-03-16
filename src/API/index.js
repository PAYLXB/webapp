import http from '../utils/src/http';
/**
 * 单张图片上传
 * @param {} params
 */
export const uploadImg = (params) => {
    return http({
         url: '/fix/uploadImg',
         data:params,
         method: "post"
    })
}

/**
 * 经纬度转换地理位置
 * @param {} params
 */
export const getAddress = (params)=>{
    return http({
         url: '/fixVehicle/getAddress?longitude',
         params,
         method: "get"
    })
}
/**
 * 根据车牌查询信息
 * @param {} params
 */
export const getPlateLicense = (params) => {
    return http({
          url: '/fixVehicle/getEvVehicleByPlateCode?plateCode=' + params,
          method: 'post'
    })
}
/**
 * 表单提交：安装
 * @param {} params
 */
export const fixEvVehicle = (params) => {
    return http({
          url: '/fixVehicle/fixEvVehicle',
          params,
          method: 'post'
    })
}
/**
 * 信息查询 详情
 * @param {} params
 */
export const findFixVehicleDetail = (params) => {
    return http({
          url: '/fixVehicle/findFixVehicleDetail',
          params,
          method: 'post'
    })
}
/**
 * 设备查询
 * @param {} params
 */
export const getTerminalByCode = (params) => {
    return http({
          url: '/terminal/getTerminalByCode',
          params,
          method: 'get'
    })
}
/**
 * 列表查询：不能安装
 * @param {} params
 */
export const findNotInstallRecordInfoList = (params) => {
    return http({
          url: '/fix/findNotInstallRecordInfoList',
          params,
          method: 'get'
    })
}
/**
 * 不能安装 新增
 * @param {} params
 */
export const insertNotInstallRecordInfoList = (params) => {
    return http({
          url: '/fix/insertNotInstallRecordInfoList',
          params,
          method: 'post'
    })
}
