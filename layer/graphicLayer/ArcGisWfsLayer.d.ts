/*
 * @Author: Quarter
 * @Date: 2022-12-01 16:54:43
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 21:51:58
 * @FilePath: /cetc3d-declaration/layer/graphicLayer/ArcGisWfsLayer.d.ts
 * @Description: ArcGIS WFS服务图层， 按瓦片网格分块分层加载
 */

import Cesium from "cesium";
import { ConstructorOptions as BaseGraphicLayerOptions } from "../BaseGraphicLayer";
import { GraphicType } from "../../const/GraphicType";
import { LodGraphicLayer } from "./LodGraphicLayer";

export interface ArcGisWfsLayer extends LodGraphicLayer {
  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {GraphicLayer}
   */
  new (options: ConstructorOptions): ArcGisWfsLayer;

  /**
   * @description: 更新where条件后 刷新数据
   * @param {string} where 筛选条件
   * @return
   */
  setWhere(where: string): void;
}

// 构造配置项
export interface ConstructorOptions extends BaseGraphicLayerOptions {
  // ArcGIS服务地址
  url: string;
  // 用于通过ArcGIS MapServer服务进行身份验证的ArcGIS令牌
  token?: string;
  // 用于筛选数据的where查询条件
  where?: string;
  // 当非标准EPSG标号时，可以指定wkid值
  wkid?: number;
  // 要在URL中 传递给WFS服务GetFeature请求的其他参数
  parameters?: object;
  // 将被添加到HTTP请求头
  headers?: object;
  // 加载资源时使用的代理
  proxy?: Cesium.Proxy;
  // 数据中唯一标识的属性字段名称,默认读取 id或objectid或OBJECTID
  IdField?: string;
  // 是否开启测试显示瓦片信息
  debuggerTileInfo?: boolean;
  // 图层所支持的最低层级，当地图小于该级别时，平台不去请求服务数据
  minimumLevel?: number;
  // 图层所支持的最大层级,当地图大于该级别时，平台不去请求服务数据
  maximumLevel?: number;
  // 瓦片数据的矩形区域范围
  rectangle?: {
    // 最小经度值, -180 至 180
    xmin: number;
    // 最大纬度值, -180 至 180
    xmax: number;
    // 最小纬度值, -90 至 90
    ymin: number;
    // 最大纬度值, -90 至 90
    ymax: number;
  };
  // bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可
  bbox?: number[];
  // 标识当前图层为单体化类型数据
  dth?: {
    // 标识是鼠标移入还是单击进行展示单体化面 , 可选值： 'click'、'mouseMove'
    type?: string;
    // 单体化面的颜色
    color?: string;
    // 单体化面的透明度
    opacity?: number;
    // 缓冲扩大面的范围（单位：米）
    buffer?: number;
  };
  // 标识当前图层为建筑物白膜类型数据
  buildings?: {
    // 建筑物底部高度（如:0） 属性字段名称
    bottomHeight?: string;
    // 层数
    cloumn?: string;
    // 层高的 固定层高数值（如:10） 或 属性字段名称
    height?: string | number;
  };
  // 设置聚合相关参数
  clustering?: {
    // 是否开启聚合
    enabled?: boolean;
    // 多少像素矩形范围内聚合
    pixelRange?: number;
    // 是否贴地
    clampToGround?: boolean;
    // 圆形图标的整体半径大小
    radius?: number;
    // 圆形图标的内圆半径大小
    radiusIn?: number;
    // 数字的颜色
    color?: string;
    // 圆形图标的内圆背景颜色，默认自动处理
    colorIn?: string;
  };
  // 矢量数据的style样式,为Function时是完全自定义的回调处理 symbol(attr, style, feature)
  symbol?:
    | {
        // 标识数据类型，默认是根据数据生成 point、polyline、polygon
        type?: GraphicType;
        // Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数
        styleOptions: any;
        // 按 styleField 属性设置不同样式
        styleField?: string;
        // 按styleField值与对应style样式的键值对象
        styleFieldOptions?: object;
        // 自定义判断处理返回style
        callback?: Function;
      }
    | Function;
}
