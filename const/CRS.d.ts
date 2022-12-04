/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:39:12
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 17:21:01
 * @FilePath: /cetc3d-declaration/const/CRS.d.ts
 * @Description: 常量
 */

// 坐标系
export interface CRSCollection {
  // Web墨卡托投影坐标系
  readonly EPSG3857: "EPSG:3857";
  // WGS84地理坐标系
  readonly EPSG4326: "EPSG:4326";
  // 中国大地2000 （CGCS2000）地理坐标系
  readonly EPSG4490: "EPSG:4490";
  // CGCS2000 Gauss-Kruger Zone 平面投影，3度分带，横坐标前加带号。 范围：EPSG:4513 到 EPSG:4533
  // eslint-disable-next-line camelcase
  readonly CGCS2000_GK_Zone_3: "CGCS2000_GK_Zone_3";
  // CGCS2000 Gauss-Kruger Zone 平面投影，6度分带，横坐标前加带号。 范围：EPSG:4491 到 EPSG:4501
  // eslint-disable-next-line camelcase
  readonly CGCS2000_GK_Zone_6: "CGCS2000_GK_Zone_6";
  // CGCS2000 Gauss-Kruger CM 平面投影，3度分带，横坐标前不加带号。 范围：EPSG:4534 到 EPSG:4554
  readonly CGCS2000_GK_CM_3: "CGCS2000_GK_CM_3";
  // CGCS2000 Gauss-Kruger CM 平面投影，6度分带，横坐标前不加带号。 范围：EPSG:4502 到 EPSG:4512
  readonly CGCS2000_GK_CM_6: "CGCS2000_GK_CM_6";
}

// 坐标系值
export type CRS = CRSCollection[keyof CRSCollection];
