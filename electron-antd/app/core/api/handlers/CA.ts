/* eslint-disable prettier/prettier */
/**
 * 详细接口类型定义在: @/typescript/api-interface/*
 */

/**
 * 测试签章
 */
export function callCASign(params?: queryCASignGET.Params): Promise<any> {
  return $api.request('/index.html', params, {
    method: 'POST',
    host: 'localhost:7688',
    protocol: 'https://',
    baseUrl: '',
    timeout: 30000,
    loading: false,
    errorType: 'notification',
    checkStatus: true,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
