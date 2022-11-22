/*
 * @Author: Quarter
 * @Date: 2022-11-22 10:45:39
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 14:55:50
 * @FilePath: /cetc3d-declaration/query/index.d.ts
 * @Description: 查询
 */

export interface Query {
  // 百度 POI查询 工具类
  BaiduPOI: any;
  // 高德 POI查询 工具类
  GaodePOI: any;
  // 高德 路径规划 工具类
  GaodeRoute: any;
  // ArcGIS WFS矢量服务查询类
  QueryArcServer: any;
  // GeoServer WFS服务查询类
  QueryGeoServer: any;
}
