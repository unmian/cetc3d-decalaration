/*
 * @Author: Quarter
 * @Date: 2022-12-01 20:25:53
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 20:59:52
 * @FilePath: /cetc3d-declaration/entity/BillboardEntity.d.ts
 * @Description:
 */

import Cesium from "cesium";
import { StyleOptions as LabelEntityStyleOptions } from "./LabelEntity";

// 图标点 支持的样式信息
export interface StyleOptions {
  // 用于矢量对象的 图像、URI或Canvas
  image?: string | HTMLCanvasElement;
  // 透明度，取值范围：0.0-1.0
  opacity?: number;
  // 图像大小的比例
  scale?: number;
  // 旋转角度（弧度值），正北为0，逆时针旋转
  rotation?: number;
  // 旋转角度（度数值，0-360度），与rotation二选一
  rotationDegree?: number;
  // 横向方向的定位
  horizontalOrigin?: Cesium.HorizontalOrigin;
  // 垂直方向的定位
  verticalOrigin?: Cesium.VerticalOrigin;
  // 指定广告牌的宽度(以像素为单位)，覆盖图片本身大小
  width?: number;
  // 指定广告牌的高度(以像素为单位)，覆盖图片本身大小
  height?: number;
  // 是否存在偏移量
  hasPixelOffset?: boolean;
  // 横向偏移像素
  pixelOffsetX?: number;
  // 纵向偏移像素
  pixelOffsetY?: number;
  // 指定像素偏移量
  pixelOffset?: Cesium.Cartesian2 | number[];
  // 是否按视距缩放 或 设置基于与相机的距离缩放点
  scaleByDistance?: boolean | Cesium.NearFarScalar;
  // 上限
  scaleByDistance_far?: number;
  // 比例值
  scaleByDistance_farValue?: number;
  // 下限
  scaleByDistance_near?: number;
  // 比例值
  scaleByDistance_nearValue?: number;
  // 是否按视距显示 或 指定该广告牌将显示在与摄像机的多大距离
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
  // 附加的颜色
  color?: Cesium.Color;
  // 眼偏移量
  eyeOffset?: Cesium.Cartesian3;
  // 指定单位旋转向量轴
  alignedAxis?: Cesium.Cartesian3;
  // 指定该广告牌的大小是否应该以米来度量
  sizeInMeters?: boolean;
  // 用于基于与相机的距离设置半透明度
  translucencyByDistance?: Cesium.NearFarScalar;
  // 用于基于与相机的距离设置pixelOffset
  pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
  // 定义用于广告牌的图像的子区域，而不是从左下角开始以像素为单位的整个图像
  imageSubRegion?: Cesium.BoundingRectangle;
  // 指定坐标高度值（常用于图层中配置）
  setHeight?: number;
  // 在现有坐标基础上增加的高度值
  addHeight?: number;
  // 支持附带文字的显示
  label?: LabelEntityStyleOptions;
}
