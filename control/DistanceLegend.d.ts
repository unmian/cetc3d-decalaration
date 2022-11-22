/*
 * @Author: Quarter
 * @Date: 2022-11-22 09:33:08
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 16:30:02
 * @FilePath: /cetc3d-declaration/control/DistanceLegend.d.ts
 * @Description: 比例尺 控件
 */

import { BaseControl, ConstructorOptions as BaseControlConstructorOptions } from "./BaseControl";

export interface DistanceLegend extends BaseControl {
  // 当前类支持的EventType事件类型
  readonly EventTypecontrol: {
    change: "change"; // 比例尺发生变化
  };
  // 当前比例尺值（单位：米）
  readonly distance?: number;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return
   */
  new (options: ConstructorOptions): DistanceLegend;
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
