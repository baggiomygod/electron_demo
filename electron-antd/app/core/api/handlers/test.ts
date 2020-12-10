/**
 * 详细接口类型定义在: @/typescript/api-interface/*
 */

/**
 * 测试接口
 * @param params
 * @param options
 */
export function queryTestInfo(params?: queryTestInfoUsingGET.Params, options?: RequestOptions): Promise<any> {
  return $api.request('/demo/demo-test', params, options)
}

/**
 * 测试接口-返回错误
 * @param params
 * @param options
 */
export function queryTestInfoError(
  params?: queryTestInfoUsingGET.Params,
  options?: RequestOptions
): Promise<any> {
  return $api.request('/demo/demo-test-error', params, options)
}

/**
 * 测试签章
 */
/**
 * 测试签章
 */
export function callCASign(params?: queryCASignGET.Params): Promise<any> {
  console.log('callCaSign...')
  return $api.request('/index.html', params, {
    method: 'GET',
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
