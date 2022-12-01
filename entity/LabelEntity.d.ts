/*
 * @Author: Quarter
 * @Date: 2022-12-01 20:37:33
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 20:59:11
 * @FilePath: /cetc3d-declaration/entity/LabelEntity.d.ts
 * @Description: 文本点 支持的样式信息
 */

import Cesium from "cesium";

export interface StyleOptions {
  // 文本内容，换行可以用换行符'\n'
  text?: string;
  // 指定缩放比例
  scale?: number;
  // 指定缩放比例
  horizontalOrigin?: Cesium.HorizontalOrigin;
  // 垂直方向的定位
  verticalOrigin?: Cesium.VerticalOrigin;
  // 字体 ,可选项：微软雅黑,宋体,楷体,隶书,黑体 等
  font_family?: string;
  // 字体大小
  font_size?: number;
  // 是否加粗 ,可选项：bold (解释：是),normal (解释：否)
  font_weight?: string;
  // 是否斜体 ,可选项：italic (解释：是),normal (解释：否)
  font_style?: string;
  // 上叙4个属性的一次性指定CSS字体的属性
  font?: string;
  // 是否填充
  fill?: boolean;
  // 文本颜色
  color?: string;
  // 透明度，取值范围：0.0-1.0
  opacity?: number;
  // 是否衬色
  outline?: boolean;
  // 衬色颜色
  outlineColor?: string | Cesium.Color;
  // 衬色透明度
  outlineOpacity?: number;
  // 衬色宽度
  outlineWidth?: number;
  // 是否背景
  background?: boolean;
  // 背景颜色
  backgroundColor?: string | Cesium.Color;
  // 背景透明度
  backgroundOpacity?: number;
  // 背景内边距，指定文字与填充边界内容之间的空间(以像素为单位)
  backgroundPadding?: number | Cesium.Cartesian2;
  // 是否存在偏移量
  hasPixelOffset?: boolean;
  // 横向偏移像素
  pixelOffsetX?: number;
  // 纵向偏移像素
  pixelOffsetY?: number;
  // A Cartesian2 Property specifying the pixel offset
  pixelOffset?: Cesium.Cartesian2 | number[];
  // A NearFarScalar Property used to set pixelOffset based on distance from the camera
  pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
  // A Cartesian3 Property specifying the eye offset
  eyeOffset?: Cesium.Cartesian3;
  // 是否按视距缩放 或 设定基于与相机的距离设置比例
  scaleByDistance?: boolean | Cesium.NearFarScalar;
  // 上限
  scaleByDistance_far?: number;
  // 比例值
  scaleByDistance_farValue?: number;
  // 下限
  scaleByDistance_near?: number;
  // 比例值
  scaleByDistance_nearValue?: number;
  // 是否按视距显示 或 指定此框将显示在与摄像机的多大距离
  distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
  // 最大距离
  distanceDisplayCondition_far?: number;
  // 最小距离
  distanceDisplayCondition_near?: number;
  // 是否贴地
  clampToGround?: boolean;
  // 指定高度相对于什么的属性
  heightReference?: Cesium.HeightReference;
  // 是否被遮挡
  visibleDepth?: boolean;
  // 指定从相机到禁用深度测试的距离
  disableDepthTestDistance?: number;
  // 用于基于与相机的距离设置半透明度
  translucencyByDistance?: Cesium.NearFarScalar;
  // 指定坐标高度值（常用于图层中配置）
  setHeight?: number;
  // 在现有坐标基础上增加的高度值（常用于图层中配置）
  addHeight?: number;
}
