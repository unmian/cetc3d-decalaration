/*
 * @Author: Quarter
 * @Date: 2022-12-01 17:38:13
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 21:54:37
 * @FilePath: /cetc3d-declaration/layer/graphicLayer/LodGraphicLayer.d.ts
 * @Description: 矢量数据LOD分层分块加载类
 */

import {
  BaseGraphicLayer,
  ConstructorOptions as BaseGraphicLayerOptions,
} from "../BaseGraphicLayer";
import { EventType } from "../../const/EventType";
import { StyleOptions as BillboardEntityStyleOptions } from "../../entity/BillboardEntity";
import { StyleOptions as PolygonEntityStyleOptions } from "../../entity/PolygonEntity";
import { StyleOptions as PolylineEntityStyleOptions } from "../../entity/PolylineEntity";
import { BaseGraphic } from "../../graphic/BaseGraphic";

export interface LodGraphicLayer extends BaseGraphicLayer {
  // 当前类支持的EventType事件类型
  readonly EventType: Pick<
    EventType,
    // 添加矢量数据时
    | "addGraphic"
    // 移除矢量数据时
    | "removeGraphic"
  > &
    BaseGraphicLayer["EventType"];

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {GraphicLayer}
   */
  new (options: ConstructorOptions): LodGraphicLayer;

  /**
   * @description: 清除图层内所有矢量数据
   * @param {boolean} hasDestory 是否释放矢量对象
   * @return
   */
  clear(hasDestory?: boolean): void;

  /**
   * @description: 根据 attr属性 创建 矢量对象
   * @param {object} grid 瓦片信息对象
   * @param {object} attr 数据的属性信息
   * @return {BaseGraphic}
   */
  createGraphic(grid: object, attr: object): BaseGraphic;

  /**
   * @description: 根据LOD分块信息去请求对应的Tile瓦块内的数据
   * @param {object} grid 瓦片信息对象
   * @param {Function} callback 数据获取完成后调用该回调方法
   * @return
   */
  queryGridData(grid: object, callback: Function): void;

  /**
   * @description: 重新加载数据
   * @return
   */
  reload(): void;

  /**
   * @description: 更新图层参数
   * @param {ConstructorOptions} options 与类的构造方法参数相同
   * @return {this}
   */
  setOptions(options: ConstructorOptions): this;

  /**
   * @description: 根据 attr属性 更新 矢量对象，主要是属性是动态变化的场景下使用
   * @param {BaseGraphic} graphic 矢量对象
   * @param {object} attr 数据的属性信息
   * @return
   */
  updateGraphic(graphic: BaseGraphic, attr: object): void;
}

// 构造配置项
export interface ConstructorOptions extends BaseGraphicLayerOptions {
  // 数据中唯一标识的属性字段名称
  IdField?: string;
  // 获取网格内对应数据的的外部处理回调方法
  queryGridData?: Function;
  // 根据数据创建矢量对象的外部处理回调方法
  createGraphic?: Function;
  // 根据数据更新矢量对象的外部处理回调方法，一般动态数据时可以用
  updateGraphic?: Function;
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
  // 设置聚合相关参数
  clustering?: {
    // 是否开启聚合
    enabled?: boolean;
    // 多少像素矩形范围内聚合
    pixelRange?: number;
    // 是否贴地
    clampToGround?: boolean;
    // 圆形图标的整体半径大小（单位：像素）
    radius?: number;
    // 圆形图标的内圆半径大小（单位：像素）
    radiusIn?: number;
    // 数字的颜色
    fontColor?: string;
    // 圆形图标的背景颜色，默认自动处理
    color?: string;
    // 圆形图标的内圆背景颜色，默认自动处理
    colorIn?: string;
  };
  // 矢量数据的style样式,为Function时是完全自定义的回调处理 symbol(attr, style, feature)
  symbol?:
    | {
        // 点数据时的Style样式，可以附加 model ModelEntity.StyleOptions 或 point PointEntity.StyleOptions
        // 线数据时的Style样式，可以附加 corridor CorridorEntity.StyleOptions
        // 面数据时的Style样式
        styleOptions:
          | BillboardEntityStyleOptions
          | PolylineEntityStyleOptions
          | PolygonEntityStyleOptions;
        // 按 styleField 属性设置不同样式
        styleField?: string;
        // 按styleField值与对应style样式的键值对象
        styleFieldOptions?: object;
        // 自定义判断处理返回style
        callback?: Function;
      }
    | Function;
}
