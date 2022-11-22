/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:39:12
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 20:02:17
 * @FilePath: /cetc3d-declaration/const/TerrainType.d.ts
 * @Description: 常量
 */

// 地形类型
export interface TerrainType {
  // 无地形
  readonly NONE: "none";
  // 标准xyz瓦片地形
  readonly XYZ: "xyz";
  // arcgis地形
  readonly ARCGIS: "arcgis";
  // ION在线地形(cesium官方服务)
  readonly ION: "ion";
  // GoogleEarth Enterprise 地形服务
  readonly GEE: "gee";
  // VR 地形
  readonly VR: "vr";
}
