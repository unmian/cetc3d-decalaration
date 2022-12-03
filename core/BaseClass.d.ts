/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:26:25
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 10:42:45
 * @FilePath: /cetc3d-declaration/core/BaseClass.d.ts
 * @Description: 基础类，SDK中几乎所有类的基类，都是继承该基类的
 */

import { EventType } from "../const/EventType";

export interface BaseClass {
  new (): BaseClass;

  /**
   * @description: 添加抛出事件到父类，它将接收传播的事件
   * @param {Object} obj 父类对象
   * @return {this}
   */
  addEventParent(obj: object): this;

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
   * @param {BaseClass} propagate 将事件传播给父类 (用addEventParent设置)
   * @return {BaseLayer}
   */
  fire(type: EventType, data: any, propagate?: BaseClass): this;

  /**
   * @description: 是否绑定了抛出事件到指定父类
   * @param {Object} obj 父类对象
   * @return {BaseLayer}
   */
  hasEventParent(obj: any): this;

  /**
   * @description: 是否有绑定指定的事件
   * @param {EventType} type 事件类型
   * @param {BaseClass} propagate 是否判断指定的父类 (用addEventParent设置的)
   * @return {boolean}
   */
  listens(type: EventType, propagate?: BaseClass): boolean;

  /**
   * @description: 解除绑定指定类型事件监听器
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {boolean}
   */
  off(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 绑定指定类型事件监听器
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {boolean}
   */
  on(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 绑定一次性执行的指定类型事件监听器 与on类似，监听器只会被触发一次，然后被删除
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {boolean}
   */
  once(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 移除抛出事件到父类
   * @param {Object} obj 父类对象
   * @return {boolean}
   */
  removeEventParent(obj: Object): this;
}
