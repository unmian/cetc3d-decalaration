/*
 * @Author: Quarter
 * @Date: 2022-11-22 10:47:14
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 14:29:12
 * @FilePath: /cetc3d-declaration/effect/index.d.ts
 * @Description: 特效
 */

import { BaseEffect } from "./BaseEffect";

export interface Effect {
  // 特效 基类
  BaseEffect: BaseEffect;
  // 黑白效果
  BlackAndWhiteEffect: any;
  // 泛光效果, 使明亮的区域更亮，黑暗的区域更暗
  BloomEffect: any;
  // 亮度
  BrightnessEffect: any;
  // 云团 效果
  CloudVolumeEffect: any;
  // 景深
  DepthOfFieldEffect: any;
  // 雾场景效果
  FogEffect: any;
  // 倒影效果
  InvertedEffect: any;
  // 马赛克效果
  MosaicEffect: any;
  // 夜视效果
  NightVisionEffect: any;
  // 线状 OD线效果 材质
  ODLineMaterialProperty: any;
  // 地面积雪 效果
  SnowCoverEffect: any;
  // 下雪效果
  SnowEffect: any;
}
