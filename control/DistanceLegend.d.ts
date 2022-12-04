/*
 * @Author: Quarter
 * @Date: 2022-11-22 09:33:08
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 10:37:28
 * @FilePath: /cetc3d-declaration/control/DistanceLegend.d.ts
 * @Description: 比例尺 控件
 */

import { BaseControl, ConstructorOptions as BaseControlConstructorOptions } from "./BaseControl";
import { EventTypeCollection } from "../const/EventType";
import { State } from "../const/State";
import { Map } from "../map/Map";

export interface DistanceLegend {
  // 当前类支持的EventType事件类型
  readonly EventType: DistanceLegendEventTypeCollection;
  // 当前控件的DOM对象
  readonly container: HTMLElement;
  // 当前比例尺值（单位：米）
  readonly distance?: number;
  // 设置对象的启用和禁用状态
  enabled: boolean;
  // 对象的id标识
  id: string | number;
  // 是否已添加到地图
  readonly isAdded: boolean;
  // 父容器DOM对象
  readonly parentContainer: HTMLElement;
  // 父容器DOM对象的ID
  readonly parentContainerId: string;
  // 设置DOM容器的显示隐藏
  show: boolean;
  // 当前对象的状态
  readonly state: State;
  // 内置唯一标识ID
  readonly uuid: string;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return
   */
  new (options: ConstructorOptions): DistanceLegend;

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
   * @description: 对象从地图上移除的创建钩子方法， 每次remove时都会调用
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
   * @description: 添加到地图上，同 map.addControl
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
   * @param {DistanceLegend} propagate 将事件传播给父类 (用addEventParent设置)
   * @return {this}
   */
  fire(type: EventType, data: any, propagate?: DistanceLegend): this;

  /**
   * @description: 是否绑定了抛出事件到指定父类
   * @param {Object} obj 父类对象
   * @return {this}
   */
  hasEventParent(obj: any): this;

  /**
   * @description: 是否有绑定指定的事件
   * @param {EventType} type 事件类型
   * @param {DistanceLegend} propagate 是否判断指定的父类 (用addEventParent设置的)
   * @return {boolean}
   */
  listens(type: EventType, propagate?: DistanceLegend): boolean;

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
   * @description: 从地图上移除，同map.removeControl
   * @param {boolean} destroy 是否调用destroy释放
   * @return
   */
  remove(destroy: boolean): void;

  /**
   * @description: 移除抛出事件到父类
   * @param {Object} obj 父类对象
   * @return {this}
   */
  removeEventParent(obj: Object): this;
}

// 构造配置项
interface ConstructorOptions extends BaseControlConstructorOptions {
  // 可选css定位top位置
  top?: string;
  // css定位bottom位置
  bottom?: string;
  // css定位left位置
  left?: string;
  // css定位right位置
  right?: string;
}

// // 支持事件类型集合
type DistanceLegendEventTypeCollection = BaseControl["EventType"] &
  Pick<EventTypeCollection, "change">;

// 支持事件类型
type EventType = DistanceLegendEventTypeCollection[keyof DistanceLegendEventTypeCollection];
