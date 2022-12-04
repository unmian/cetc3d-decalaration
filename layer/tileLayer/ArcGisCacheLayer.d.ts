/*
 * @Author: Quarter
 * @Date: 2022-11-21 10:36:58
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 11:23:52
 * @FilePath: /cetc3d-declaration/layer/tileLayer/ArcGisCacheLayer.d.ts
 * @Description: 金字塔瓦片图层
 */

import Cesium from "cesium";
import {
  BaseTileLayer,
  ConstructorOptions as BaseTileLayerConstructorOptions,
} from "./BaseTileLayer";
import { State } from "../../const/State";
import { Map } from "../../map/Map";
import { FlyToOptions } from "../BaseLayer";

export interface ArcGisCacheLayer {
  // 当前栅格瓦片图层支持的EventType事件类型
  readonly EventType: ArcGisCacheLayerEventTypeCollection;
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
   * @return {ArcGisCacheLayer}
   */
  new (options: ConstructorOptions): ArcGisCacheLayer;

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
   * @description: 创建用于图层的 ImageryProvider对象
   * @param {object} options 配置项
   * @return {Cesiusm.ImageryProvider}
   */
  createImageryProvider(options: object): Cesium.ImageryProvider;

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

// 构造配置项
export interface ConstructorOptions extends BaseTileLayerConstructorOptions {
  // url请求的瓦片图片名称是否大写
  upperCase?: boolean;
}

// 支持事件类型集合
type ArcGisCacheLayerEventTypeCollection = BaseTileLayer["EventType"];

// 支持事件类型
type EventType = ArcGisCacheLayerEventTypeCollection[keyof ArcGisCacheLayerEventTypeCollection];
