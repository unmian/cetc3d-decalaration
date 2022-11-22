/*
 * @Author: Quarter
 * @Date: 2022-11-22 10:46:37
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 14:28:13
 * @FilePath: /cetc3d-declaration/control/index.d.ts
 * @Description:
 */

import { BaseControl } from "./BaseControl";
import { Compass } from "./Compass";

export interface Control {
  // 控件 基类
  BaseControl: BaseControl;
  // 导航球控件
  Compass: Compass;
  // 比例尺 控件
  DistanceLegend: any;
  // 鼠标经纬度等信息状态栏, 一般在页面下侧区域
  LocationBar: any;
  // 卷帘对比 控件
  MapSplit: any;
  // 鼠标旋转、放大时的按键效果美化图标
  MouseDownView: any;
  // 工具栏 单个按钮控件
  ToolButton: any;
  // 放大缩小按钮控件
  Zoom: any;
}
