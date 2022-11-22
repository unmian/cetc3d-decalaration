/*
 * @Author: Quarter
 * @Date: 2022-11-22 10:49:10
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 14:55:33
 * @FilePath: /cetc3d-declaration/material/index.d.ts
 * @Description: 材质
 */

export interface Material {
  // 材质属性(Entity使用) 基础类
  BaseMaterialProperty: any;
  // 圆形扫描效果 材质属性
  CircleScanMaterialProperty: any;
  // 圆形扩散波纹效果 材质属性
  CircleWaveMaterialProperty: any;
  // 圆锥 波纹扩散效果 材质
  CylinderWaveMaterial: any;
  // 球体: 电弧球体效果 材质
  EllipsoidElectricMaterialProperty: any;
  // 波纹球体效果 材质
  EllipsoidWaveMaterialProperty: any;
  // 线状: 闪烁线 材质
  LineFlickerMaterialProperty: any;
  // 线状 流动效果 材质
  LineFlowColorMaterialProperty: any;
  // 线状 流动效果 材质
  LineFlowMaterialProperty: any;
  // 线状: 轨迹线 材质
  LineTrailMaterialProperty: any;
  // 面状： 渐变面 材质
  PolyGradientMaterialProperty: any;
  // 圆形: 雷达线(圆+旋转半径线) 材质
  RadarLineMaterialProperty: any;
  // 圆形: 雷达线(圆+旋转半径线) 材质
  RadarWaveMaterialProperty: any;
  // 下雨效果
  RainEffect: any;
  // 矩形面： 轮播图 材质
  RectSlideMaterialProperty: any;
  // 面状: 用于面状对象的 扫描线放大效果 材质属性
  ScanLineMaterialProperty: any;
  // 文字贴图 primitive材质
  TextMaterial: any;
  // 文字贴图 entity材质
  TextMaterialProperty: any;
  // 墙体: 走马灯围墙 材质
  WallScrollMaterialProperty: any;
  // 水面效果材质
  WaterMaterialProperty: any;
}
