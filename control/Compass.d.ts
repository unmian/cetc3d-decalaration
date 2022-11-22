/*
 * @Author: Quarter
 * @Date: 2022-11-22 09:29:27
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 16:29:02
 * @FilePath: /cetc3d-declaration/control/Compass.d.ts
 * @Description: 导航球控件
 */

import { BaseControl, ConstructorOptions as BaseControlConstructorOptions } from "./BaseControl";

export interface Compass extends BaseControl {
  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {Compass}
   */
  new (options: ConstructorOptions): Compass;
}

// 构造配置项
interface ConstructorOptions extends BaseControlConstructorOptions {
  // 可选css定位top位置
  top?: string;
  // css定位bottom位置
  bottom?: string;
  // css定位left位置
  left?: string;
  // css定位right位置
  right?: string;
}
