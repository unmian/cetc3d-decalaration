/*
 * @Author: Quarter
 * @Date: 2022-11-21 14:16:53
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 13:56:33
 * @FilePath: /cetc3d-declaration/map/control/KeyboardRoam.d.ts
 * @Description: 键盘漫游控制类
 */

import { MoveType, MoveTypeCollection } from "../../const/MoveType";
import { State } from "../../const/State";
import { BaseControl, ConstructorOptions } from "../../control/BaseControl";
import { Map } from "../Map";

export interface KeyboardRoam {
  // 当前类支持的EventType事件类型
  readonly EventType: KeyboardRoamEventTypeCollection;
  // 相机旋转的类型
  readonly MoveType: KeyboardRoamMoveTypeCollection;
  // 当前控件的DOM对象
  readonly container: HTMLElement;
  // 相机原地旋转步长，值越大步长越小
  dirStep: number;
  // 设置对象的启用和禁用状态
  enabled: boolean;
  // 对象的id标识
  id: string | number;
  // 是否已添加到地图
  readonly isAdded: boolean;
  // 最大仰角 0 - 1
  maxPitch: number;
  // 最低高度（单位：米）
  minHeight: number;
  // 最小仰角 0 - 1
  minPitch: number;
  // 平移步长 (米)
  moveStep: number;
  // 父容器DOM对象
  readonly parentContainer: HTMLElement;
  // 父容器DOM对象的ID
  readonly parentContainerId: string;
  // 相机围绕目标点旋转速率，0.3 - 2.0
  rotateStep: number;
  // 设置DOM容器的显示隐藏
  show: boolean;
  // 当前对象的状态
  readonly state: State;
  // 内置唯一标识ID
  readonly uuid: string;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {KeyboardRoam}
   */
  new (options: ConstructorOptions): KeyboardRoam;

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
   * @param {BaseControl} propagate 将事件传播给父类 (用addEventParent设置)
   * @return {this}
   */
  fire(type: EventType, data: any, propagate?: BaseControl): this;

  /**
   * @description: 是否绑定了抛出事件到指定父类
   * @param {Object} obj 父类对象
   * @return {this}
   */
  hasEventParent(obj: any): this;

  /**
   * @description: 是否有绑定指定的事件
   * @param {EventType} type 事件类型
   * @param {BaseControl} propagate 是否判断指定的父类 (用addEventParent设置的)
   * @return {boolean}
   */
  listens(type: EventType, propagate?: BaseControl): boolean;

  /**
   * @description: 相对于屏幕中心点 转动
   * @param {MoveType} type 旋转的方向
   * @return
   */
  moveCamera(type: MoveType): void;

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

  /**
   * @description: 相对于相机本身 转动
   * @param {MoveType} type 旋转的方向
   * @return
   */
  rotateCamera(type: MoveType): void;

  /**
   * @description: 重新赋值参数，同构造方法参数一致
   * @param {object} options 参数,与类的构造方法参数相同
   * @return
   */
  setOptions(options: object): this;

  /**
   * @description: 开始自动向后平移镜头，不改变相机朝向
   * @return
   */
  startMoveBackward(): void;

  /**
   * @description: 开始自动向前平移镜头，不改变相机朝向
   * @return
   */
  startMoveForward(): void;

  /**
   * @description: 开始自动向左平移镜头，不改变相机朝向
   * @return
   */
  startMoveLeft(): void;

  /**
   * @description: 开始自动向右平移镜头，不改变相机朝向
   * @return
   */
  startMoveRight(): void;

  /**
   * @description: 停止自动向后平移镜头，不改变相机朝向
   * @return
   */
  stopMoveBackward(): void;

  /**
   * @description: 停止自动向前平移镜头，不改变相机朝向
   * @return
   */
  stopMoveForward(): void;

  /**
   * @description: 停止自动向左平移镜头，不改变相机朝向
   * @return
   */
  stopMoveLeft(): void;

  /**
   * @description: 停止自动向右平移镜头，不改变相机朝向
   * @return
   */
  stopMoveRight(): void;
}

// 支持事件类型集合
type KeyboardRoamEventTypeCollection = BaseControl["EventType"];

// 支持事件类型
type EventType = KeyboardRoamEventTypeCollection[keyof KeyboardRoamEventTypeCollection];

// 相机移动类型集合
type KeyboardRoamMoveTypeCollection = Pick<
  MoveTypeCollection,
  // 向屏幕中心靠近
  | "ENLARGE"
  // 向屏幕中心远离
  | "NARROW"
  // 相机原地左旋转
  | "LEFT_ROTATE"
  // 相机原地右旋转
  | "RIGHT_ROTATE"
  // 相机原地上旋转
  | "TOP_ROTATE"
  // 相机原地下旋转
  | "BOTTOM_ROTATE"
>;
