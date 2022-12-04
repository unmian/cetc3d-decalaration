/*
 * @Author: Quarter
 * @Date: 2022-11-21 10:48:07
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 15:30:57
 * @FilePath: /cetc3d-declaration/layer/BaseLayer.d.ts
 * @Description: 栅格Tile瓦片图层 基类
 */

import Cesium from "cesium";
import { EventType } from "../const/EventType";
import { State } from "../const/State";
import { CameraViewOptions, Map } from "../map/Map";
import { BaseGraphicLayer } from "./BaseGraphicLayer";
import { ArcGisWfsLayer } from "./graphicLayer/ArcGisWfsLayer";
import { GraphicLayer } from "./graphicLayer/GraphicLayer";
import { LodGraphicLayer } from "./graphicLayer/LodGraphicLayer";
import { TilesetLayer } from "./graphicLayer/TilesetLayer";
import { ArcGisCacheLayer } from "./tileLayer/ArcGisCacheLayer";
import { ArcGisLayer } from "./tileLayer/ArcGisLayer";
import { BaseTileLayer } from "./tileLayer/BaseTileLayer";

export interface BaseLayer {
  // 是否可以调整透明度
  readonly hasOpacity: boolean;
  // 对象的id标识
  id: string | number;
  // 是否已添加到地图
  readonly isAdded: boolean;
  // 透明度，取值范围：0.0-1.0
  opacity: number;
  // 显示隐藏状态
  show: boolean;
  // 当前对象的状态
  readonly state: State;
  // 图层类型
  readonly type: string;
  // 内置唯一标识ID
  readonly uuid: string;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {BaseLayer}
   */
  new (options?: ConstructorOptions): BaseLayer;

  /**
   * @description: 对象添加到地图上的创建钩子方法， 每次add时都会调用
   * @return
   */
  _addedHook(): void;

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
   * @param {BaseLayer} propagate 将事件传播给父类 (用addEventParent设置)
   * @return {this}
   */
  fire(type: EventType, data: any, propagate?: BaseLayer): this;

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
   * @param {BaseLayer} propagate 是否判断指定的父类 (用addEventParent设置的)
   * @return {boolean}
   */
  listens(type: EventType, propagate?: BaseLayer): boolean;

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

// 基础图层配置项
export interface ConstructorOptions {
  // 图层id标识
  id?: string | number;
  // 图层父级的id，一般图层管理中使用
  pid?: string | number;
  // 图层名称
  name?: string;
  // 图层是否显示
  show?: boolean;
  // 透明度，取值范围：0.0-1.0
  opacity?: number;
  // 图层自定义定位视角
  center?: CameraViewOptions;
  // 当图层支持popup弹窗时，绑定的值
  popup?: string | PopupOption[];
  // 当图层支持tooltip弹窗时，绑定的值
  tooltip?: string | PopupOption[];
  // 当图层支持右键菜单时，绑定的值
  contextmenuItems?: object;
  // 当前类中事件是否停止冒泡, false时：事件冒泡到map中
  stopPropagation?: boolean;
}

// 飞行配置项
export interface FlyToOptions {
  // 点状数据时，相机距离目标点的距离（单位：米）
  radius: number;
  // 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好
  scale?: number;
  // 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间
  duration?: number;
  // 飞行完成后要执行的函数
  complete?: Cesium.Camera.FlightCompleteCallback;
  // 飞行取消时要执行的函数
  cancel?: Cesium.Camera.FlightCancelledCallback;
  // 变换矩阵表示飞行结束时相机所处的参照系
  endTransform?: Cesium.Matrix4;
  // 飞行高峰时的最大高度
  maximumHeight?: number;
  // 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口
  pitchAdjustHeight?: number;
  // 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度
  flyOverLongitude?: number;
  // 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间
  flyOverLongitudeWeight?: number;
  // 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）
  convert?: boolean;
  // 控制在飞行过程中如何插值时间
  easingFunction?: Cesium.EasingFunction.Callback;
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

// 图层变种
export type LayerVariant =
  | BaseLayer
  | BaseGraphicLayer
  | ArcGisWfsLayer
  | GraphicLayer
  | LodGraphicLayer
  | TilesetLayer
  | ArcGisCacheLayer
  | ArcGisLayer
  | BaseTileLayer;
