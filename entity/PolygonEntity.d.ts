/*
 * @Author: Quarter
 * @Date: 2022-12-01 21:33:57
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 21:42:57
 * @FilePath: /cetc3d-declaration/entity/PolygonEntity.d.ts
 * @Description: 面 Entity矢量数据
 */

import Cesium from "cesium";
import { LatLngPoint } from "../core/LatLngPoint";
import { StyleOptions as LabelEntityStyleOptions } from "./LabelEntity";
import { StyleOptions as PolylineEntityStyleOptions } from "./PolylineEntity";

// 面 支持的样式信息
export interface StyleOptions {
  // 是否填充
  fill?: boolean;
  // 填充类型 ,可选项
  materialType?: string;
  // 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖
  material?: Cesium.MaterialProperty | Cesium.Color;
  // 颜色
  color?: string | Cesium.Color;
  // 透明度, 取值范围：0.0-1.0
  opacity?: number;
  // 是否随机颜色
  randomColor?: boolean;
  // 多边形纹理的角度（弧度值），正北为0，逆时针旋转
  stRotation?: number;
  // 多边形纹理的角度（度数值，0-360度），与stRotation二选一
  stRotationDegree?: number;
  // 是否边框
  outline?: boolean;
  // 边框宽度
  outlineWidth?: number;
  // 边框颜色
  outlineColor?: string | Cesium.Color;
  // 边框透明度
  outlineOpacity?: number;
  // 边框的完整自定义样式，会覆盖outlineWidth、outlineColor等参数
  outlineStyle?: PolylineEntityStyleOptions;
  // 是否按视距显示 或 指定此框将显示在与摄像机的多大距离
  distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
  // 最大距离
  distanceDisplayCondition_far?: number;
  // 最小距离
  distanceDisplayCondition_near?: number;
  // 高程，圆相对于椭球面的高度
  heightReference?: Cesium.HeightReference;
  // 高度差（走廊本身的高度），与extrudedHeight二选一
  diffHeight?: number;
  // 指定走廊挤压面相对于椭球面的高度
  extrudedHeight?: number;
  // 指定挤压高度相对于什么的属性
  extrudedHeightReference?: Cesium.HeightReference;
  // 指定每个纬度点和经度点之间的角距离
  granularity?: number;
  // 当为false时，离开一个挤压多边形的顶部打开
  closeTop?: boolean;
  // 当为false时，离开挤压多边形的底部打开
  closeBottom?: boolean;
  // 多边形的边缘必须遵循的线条类型
  arcType?: Cesium.ArcType;
  // 是否阴影
  hasShadows?: boolean;
  // 指定多边形是投射还是接收来自光源的阴影
  shadows?: Cesium.ShadowMode;
  // 是否贴地
  clampToGround?: string;
  // 指定是否使用每个位置的高度。同clampToGround，与clampToGround反之
  perPositionHeight?: boolean;
  // 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时
  classificationType?: Cesium.ClassificationType;
  // 层级顺序，指定用于排序地面几何的zIndex。只有当多边形是常数且没有指定高度或挤压高度时才有效果
  zIndex?: number;
  // 指定坐标高度值，或数组指定每个点的高度（常用于图层中配置）
  setHeight?: number | number[];
  // 在现有坐标基础上增加的高度值，或数组指定每个点增加的高度（常用于图层中配置）
  addHeight?: number | number[];
  // 支持附带文字的显示，额外支持
  label?: LabelEntityStyleOptions & {
    // 文字所在位置，默认是矢量对象本身的center属性值。支持配置 'center'：围合面的内部中心点坐标，'{xxxx}'配置属性字段, 或者直接指定坐标值
    position?: string | LatLngPoint;
    // MultiPolygon和MultiLineString时，是否显示所有注记，默认只在最大坐标数的面或线上显示
    showAll?: boolean;
  };
}
