/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:39:12
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 17:20:31
 * @FilePath: /cetc3d-declaration/const/ChinaCRS.d.ts
 * @Description: 常量
 */

// 国内偏移坐标系
export interface ChinaCRSCollection {
  // 标准无偏坐标系
  readonly WGS84: "WGS84";
  // 国测局(GCJ02)偏移坐标系
  readonly GCJ02: "GCJ02";
  // 百度(BD09) 偏移坐标系
  readonly BAIDU: "BD09";
}

// 国内偏移坐标系值
export type ChinaCRS = ChinaCRSCollection[keyof ChinaCRSCollection];
