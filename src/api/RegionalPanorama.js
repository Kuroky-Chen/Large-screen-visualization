import request from '@/utils/request'

// 查询企业分布
export function getEnterpriseDistributionList(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getEnterpriseDistributionList',
    method: 'post',
    data
  })
}

// 查询载体类型数据
export function getCarrierTypeList(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getCarrierTypeList',
    method: 'post',
    data
  })
}

// 查询载体分布
export function getCarrierDistributionList(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getCarrierDistributionList',
    method: 'post',
    data
  })
}

// 查询面积
export function getArea(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getArea',
    method: 'post',
    data
  })
}

// 查询建设规划
export function getConstructionPlanning(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getConstructionPlanning',
    method: 'post',
    data
  })
}

// 查询社会信息
export function getSocialInformation(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getSocialInformation',
    method: 'post',
    data
  })
}

// 行业占比TOP3
export function getIndustryProportionTOP3(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getIndustryProportionTOP3',
    method: 'post',
    data
  })
}

// 上市公司概览
export function getListedEnterpriseList(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getListedEnterpriseList',
    method: 'post',
    data
  })
}

// 区域固定资产总值
export function getRegionalFixedAssetsList(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getRegionalFixedAssetsList',
    method: 'post',
    data
  })
}

// 查询地效评估
export function getGroundEffect(data) {
  return request({
    url: '/api/basedata/boardRegionalPanoramicInsight/getGroundEffect',
    method: 'post',
    data
  })
}

