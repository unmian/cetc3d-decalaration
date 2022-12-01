/*
 * @Author: Quarter
 * @Date: 2022-12-01 21:20:46
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 21:32:53
 * @FilePath: /cetc3d-declaration/entity/PolylineEntity.d.ts
 * @Description: 线 支持的样式信息
 */

import Cesium from "cesium";
import { LatLngPoint } from "../core/LatLngPoint";
import { StyleOptions as LabelEntityStyleOptions } from "./LabelEntity";

export interface StyleOptions {
  // 线型
  materialType?: string;
  // material材质参数
  // 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖
  material?: Cesium.MaterialProperty | Cesium.Color;
  // 线宽
  width?: number;
  // 颜色
  color?: string | Cesium.Color;
  // 透明度，取值范围：0.0-1.0
  opacity?: number;
  // 是否随机颜色
  randomColor?: boolean;
  // 指定当折线位于地形之下时用于绘制折线的材质
  depthFailMaterial?: Cesium.MaterialProperty | Cesium.Color;
  // 是否闭合
  closure?: boolean;
  // 是否衬色
  outline?: boolean;
  // 衬色颜色
  outlineColor?: string | Cesium.Color;
  // 衬色宽度
  outlineWidth?: number;
  // 是否显示遮挡
  depthFail?: boolean;
  // 遮挡处颜色
  depthFailColor?: string;
  // 遮挡处透明度
  depthFailOpacity?: number;
  // 是否按视距显示 或 指定此框将显示在与摄像机的多大距离
  distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
  // 最大距离
  distanceDisplayCondition_far?: number;
  // 最小距离
  distanceDisplayCondition_near?: number;
  // 折线段必须遵循的线的类型
  arcType?: Cesium.ArcType;
  // 如果arcType不是arcType.none，则指定每个纬度和经度之间的角距离的数字属性
  granularity?: number;
  // 是否阴影
  hasShadows?: boolean;
  // 指定对象是投射还是接收来自光源的阴影
  shadows?: Cesium.ShadowMode;
  // 是否贴地
  clampToGround?: Boolean;
  // 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时
  classificationType?: Cesium.ClassificationType;
  // 层级顺序,指定用于排序地面几何的zIndex。只有当' clampToGround '为真且支持地形上的折线时才会有效果
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
