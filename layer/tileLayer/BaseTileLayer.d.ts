/*
 * @Author: Quarter
 * @Date: 2022-11-21 10:48:07
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 16:56:10
 * @FilePath: /cetc3d-declaration/layer/tileLayer/BaseTileLayer.d.ts
 * @Description: 栅格Tile瓦片图层 基类
 */

import Cesium from "cesium";
import { BaseLayer, ConstructorOptions as BaseLayerConstructorOptions } from "../BaseLayer";
import { ChinaCRS } from "../../const/ChinaCRS";
import { CRS } from "../../const/CRS";
import { EventType } from "../../const/EventType";

// 栅格Tile瓦片图层
export interface BaseTileLayer extends BaseLayer {
  // 当前栅格瓦片图层支持的EventType事件类型
  readonly EventType: Pick<
    EventType,
    // 添加对象
    | "add"
    // 移除对象
    | "remove"
    // 显示了对象
    | "show"
    // 隐藏了对象
    | "hide"
    // 瓦片图层初始化完成
    | "load"
    // 栅格瓦片图层，开始加载瓦片
    | "addTile"
    // 栅格瓦片图层，加载瓦片完成
    | "addTileSuccess"
    // 栅格瓦片图层，加载瓦片出错了
    | "addTileError"
    // 鼠标单击事件【WMS等动态服务enablePickFeatures:true时,支持单击获取对应的矢量对象】
    | "click"
  >;
  // 透明度，同opacity，从 0.0 到 1.0
  alpha: number;
  // 亮度，取值范围：0.0-1.0
  brightness: number;
  // 对比度，1.0 使用未修改的图像颜色，小于 1.0 会降低对比度，而大于 1.0 则会提高对比度
  contrast: number;
  // 伽马校正值, 1.0 使用未修改的图像颜色
  gamma: number;
  // 是否可以调整透明度
  readonly hasOpacity: boolean;
  // 是否可以调整图层顺序（在同类型图层间）
  readonly hasZIndex: boolean;
  // 色调, 0.0 时未修改的图像颜色
  hue: number;
  // 瓦片图层对应的内部 ImageryProvider 对象
  readonly imageryProvider: Cesium.ImageryProvider;
  // 瓦片图层对应的内部ImageryLayer对象
  readonly layer: Cesium.ImageryLayer;
  // 瓦片数据范围
  rectangle: Cesium.Rectangle;
  // 饱和度。 1.0使用未修改的图像颜色，小于1.0会降低饱和度，而大于1.0则会增加饱和度
  saturation: number;
  // 图层顺序，数字大的在上面。（当hasZIndex为true时）
  zIndex: number;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {BaseTileLayer}
   */
  new (options: ConstructorOptions): BaseTileLayer;

  /**
   * @description: 设置透明度
   * @param {number} value 透明度
   * @return
   */
  setOpacity(value: number): void;

  /**
   * @description: 创建瓦片图层对应的ImageryProvider对象
   * @param {object} options 参数对象，具体每类瓦片图层都不一样
   * @return {Cesium.UrlTemplateImageryProvider}
   */
  _createImageryProvider(options?: {}): Cesium.UrlTemplateImageryProvider;
}

// 构造选项
export interface ConstructorOptions extends BaseLayerConstructorOptions {
  // 加载完成数据后是否自动飞行定位到数据所在的区域
  flyTo?: boolean;
  // 瓦片所支持的最低层级，如果数据没有第0层，该参数必须配置,当地图小于该级别时，平台不去请求服务数据
  minimumLevel?: number;
  // 瓦片所支持的最大层级,大于该层级时会显示上一层拉伸后的瓦片，当地图大于该级别时，平台不去请求服务数据
  maximumLevel?: number;
  // 展示影像图层的最小地形细节级别，小于该级别时，平台不显示影像数据
  minimumTerrainLevel?: number;
  // 展示影像图层的最大地形细节级别，大于该级别时，平台不显示影像数据
  maximumTerrainLevel?: number;
  // 瓦片数据的矩形区域范围
  rectangle: Rectangle;
  // bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可
  bbox?: number[];
  // 瓦片数据的坐标系信息，默认为墨卡托投影
  crs?: CRS;
  // 标识瓦片的国内坐标系（用于自动纠偏或加偏），自动将瓦片转为map对应的chinaCRS类型坐标系
  chinaCRS?: ChinaCRS;
  // URL模板中用于 {s} 占位符的子域。 如果此参数是单个字符串，则字符串中的每个字符都是一个子域。如果是 一个数组，数组中的每个元素都是一个子域
  subdomains?: string | string[];
  // 允许替换网址模板中的自定义关键字。该对象必须具有字符串作为键，并且必须具有值
  customTags?: object;
  // 图像图块的像素宽度
  tileWidth?: number;
  // 图像图块的像素高度
  tileHeight?: number;
  // 如果此图像提供者提供的图像为真 包括一个Alpha通道；否则为假
  hasAlphaChannel?: boolean;
  // 如果为true，则 UrlTemplateImageryProvider#pickFeatures 请求 pickFeaturesUrl 并尝试解释响应中包含的功能
  enablePickFeatures?: boolean;
  // 在某处获取功能信息的格式 调用 UrlTemplateImageryProvider#pickFeatures 的特定位置。如果这 参数未指定，功能选择已禁用
  getFeatureInfoFormats?: Cesium.GetFeatureInfoFormat[];
  // 同opacity
  alpha?: number | Function;
  // 当 enableLighting 为 true 时 ，在地球的夜晚区域的透明度，取值范围：0.0-1.0
  nightAlpha?: number | Function;
  // 当 enableLighting 为 true 时，在地球的白天区域的透明度，取值范围：0.0-1.0
  dayAlpha?: number | Function;
  // 亮度，取值范围：0.0-1.0
  brightness?: number | Function;
  // 对比度。 1.0使用未修改的图像颜色，小于1.0会降低对比度，而大于1.0则会提高对比度
  contrast?: number | Function;
  // 色调。 0.0 时未修改的图像颜色
  hue?: number | Function;
  // 饱和度。 1.0使用未修改的图像颜色，小于1.0会降低饱和度，而大于1.0则会增加饱和度
  saturation?: number | Function;
  // 伽马校正值。 1.0使用未修改的图像颜色
  gamma?: number | Function;
  // 使用的最大各向异性水平 用于纹理过滤。如果未指定此参数，则支持最大各向异性 将使用WebGL堆栈。较大的值可使影像在水平方向上看起来更好 视图
  maximumAnisotropy?: number;
  // 制图矩形，用于裁剪此ImageryLayer的一部分
  cutoutRectangle?: Cesium.Rectangle;
  // 用作Alpha的颜色
  colorToAlpha?: Cesium.Color;
  // 颜色到Alpha的阈值
  colorToAlphaThreshold?: number;
  // 加载资源时要使用的代理服务url
  proxy?: string;
  // 一个对象，用于替换Url中的模板值的键/值对
  templateValues?: object;
  // 一个对象，其中包含在检索资源时将发送的查询参数
  queryParameters?: object;
  // 一个对象，将发送的其他HTTP标头
  headers?: object;
  // 控制图层的叠加层次，默认按加载的顺序进行叠加，但也可以自定义叠加顺序，数字大的在上面
  zIndex?: number;
}

// 矩形区域配置
interface Rectangle {
  // 最小经度值, -180 至 180
  xmin: number;
  // 最大纬度值, -180 至 180
  xmax: number;
  // 最小纬度值, -90 至 90
  ymin: number;
  // 最大纬度值, -90 至 90
  ymax: number;
}

// 弹出层配置
export interface PopupOption {
  // 字段名称
  field: string;
  // 显示的对应自定义名称
  name: string;
  // 默认为label文本，也可以支持：'button'按钮，'html' html内容
  type?: "label" | "button" | "html";
  // 当type为'button'按钮时，单击后触发的事件
  callback?: Function;
  // 当type为'html'时，对于拼接的html内容
  html?: string;
  // 使用window的外部格式化js方法，格式化字符串值
  format?: string;
  // 追加的计量单位值
  unit?: string;
}
