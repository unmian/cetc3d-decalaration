/*
 * @Author: Quarter
 * @Date: 2022-11-21 10:48:07
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 11:14:24
 * @FilePath: /cetc3d-declaration/layer/tileLayer/BaseTileLayer.d.ts
 * @Description: 栅格Tile瓦片图层 基类
 */

import Cesium from "cesium";
import { ConstructorOptions as BaseLayerConstructorOptions, FlyToOptions } from "../BaseLayer";
import { ChinaCRS } from "../../const/ChinaCRS";
import { CRS } from "../../const/CRS";
import { EventTypeCollection } from "../../const/EventType";
import { State } from "../../const/State";
import { Map } from "../../map/Map";

// 栅格Tile瓦片图层
export interface BaseTileLayer {
  // 当前栅格瓦片图层支持的EventType事件类型
  readonly EventType: BaseTileLayerEventTypeCollection;
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
  // 对象的id标识
  id: string | number;
  // 瓦片图层对应的内部 ImageryProvider 对象
  readonly imageryProvider: Cesium.ImageryProvider;
  // 是否已添加到地图
  readonly isAdded: boolean;
  // 瓦片图层对应的内部ImageryLayer对象
  readonly layer: Cesium.ImageryLayer;
  // 透明度，取值范围：0.0-1.0
  opacity: number;
  // 瓦片数据范围
  rectangle: Cesium.Rectangle;
  // 饱和度。 1.0使用未修改的图像颜色，小于1.0会降低饱和度，而大于1.0则会增加饱和度
  saturation: number;
  // 显示隐藏状态
  show: boolean;
  // 当前对象的状态
  readonly state: State;
  // 图层类型
  readonly type: string;
  // 内置唯一标识ID
  readonly uuid: string;
  // 图层顺序，数字大的在上面。（当hasZIndex为true时）
  zIndex: number;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {BaseTileLayer}
   */
  new (options?: ConstructorOptions): BaseTileLayer;

  /**
   * @description: 对象添加到地图上的创建钩子方法， 每次add时都会调用
   * @return
   */
  _addedHook(): void;

  /**
   * @description: 创建瓦片图层对应的ImageryProvider对象
   * @param {object} options 参数对象，具体每类瓦片图层都不一样
   * @return {Cesium.UrlTemplateImageryProvider}
   */
  _createImageryProvider(options?: {}): Cesium.UrlTemplateImageryProvider;

  /**
   * @description: 对象添加到地图前创建一些对象的钩子方法， 只会调用一次
   * @return
   */
  _mountedHook(): void;

  /**
   * @description: 对象从地图上移除的创建钩子方法， 每次 remove 时都会调用
   * @return
   */
  _removedHook(): void;

  /**
   * @description: 添加抛出事件到父类，它将接收传播的事件
   * @param {Object} obj 父类对象
   * @return {this}
   */
  addEventParent(obj: object): this;

  /**
   * @description: 添加到地图上，同 map.addThing
   * @param {Map} map 地图对象
   * @return {this}
   */
  addTo(map: Map): this;

  /**
   * @description: 销毁当前对象
   * @param {boolean} noDel 可选false:会自动delete释放所有属性，true：不delete绑定的变量
   * @return
   */
  destroy(noDel?: boolean): void;

  /**
   * @description: 触发指定类型的事件
   * @param {EventType} type 事件类型
   * @param {object} data 传输的数据或对象，可在事件回调方法中event对象中获取进行使用
   * @param {BaseTileLayer} propagate 将事件传播给父类 (用addEventParent设置)
   * @return {this}
   */
  fire(type: EventType, data: any, propagate?: BaseTileLayer): this;

  /**
   * @description: 飞行定位至图层数据所在的视角
   * @param {FlyToOptions} options 配置项
   * @return {this}
   */
  flyTo(options?: FlyToOptions): this;

  /**
   * @description: 入场动画后再执行flyTo，直接调用flyTo可能造成入场动画失败
   * @return {this}
   */
  flyToByAnimationEnd(): this;

  /**
   * @description: 是否绑定了抛出事件到指定父类
   * @param {Object} obj 父类对象
   * @return {this}
   */
  hasEventParent(obj: any): this;

  /**
   * @description: 是否有绑定指定的事件
   * @param {EventType} type 事件类型
   * @param {BaseTileLayer} propagate 是否判断指定的父类 (用addEventParent设置的)
   * @return {boolean}
   */
  listens(type: EventType, propagate?: BaseTileLayer): boolean;

  /**
   * @description: 解除绑定指定类型事件监听器
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  off(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 绑定指定类型事件监听器
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  on(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 绑定一次性执行的指定类型事件监听器 与on类似，监听器只会被触发一次，然后被删除
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  once(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 从地图上移除，同map.removeThing
   * @param {boolean} destroy
   * @return
   */
  remove(destroy: boolean): void;

  /**
   * @description: 移除抛出事件到父类
   * @param {Object} obj 父类对象
   * @return {this}
   */
  removeEventParent(obj: Object): this;

  /**
   * @description: 设置透明度
   * @param {number} value 透明度
   * @return
   */
  setOpacity(value: number): void;

  /**
   * @description: 更新图层参数
   * @param {ConstructorOptions} options 与类的构造方法参数相同
   * @return {this}
   */
  setOptions(options: ConstructorOptions): this;

  /**
   * @description: 显示错误弹窗， 调用cesium的cesiumWidget.showErrorPanel
   * @param {string} title 标题
   * @param {Object} error 错误内容对象
   * @return {this}
   */
  showError(title: string, error: any): this;

  /**
   * @description: 将图层转为Json简单对象，用于存储后再传参加载
   * @return {object}
   */
  toJSON(): object;
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

// 支持事件类型集合
type BaseTileLayerEventTypeCollection = Pick<
  EventTypeCollection,
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

// 支持事件类型
type EventType = BaseTileLayerEventTypeCollection[keyof BaseTileLayerEventTypeCollection];

// 矩形区域配置
export interface Rectangle {
  // 最小经度值, -180 至 180
  xmin: number;
  // 最大纬度值, -180 至 180
  xmax: number;
  // 最小纬度值, -90 至 90
  ymin: number;
  // 最大纬度值, -90 至 90
  ymax: number;
}
