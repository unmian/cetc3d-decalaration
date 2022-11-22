/*
 * @Author: Quarter
 * @Date: 2022-11-21 14:18:41
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 16:27:21
 * @FilePath: /cetc3d-declaration/core/BaseThing.d.ts
 * @Description: Thing对象(如特效、分析、管理类等) 的基类
 */

import { BaseClass } from "./BaseClass";
import { EventType } from "../const/EventType";
import { State } from "../const/State";
import { Map } from "../map/Map";

export interface BaseThing extends BaseClass {
  // 当前类支持的EventType事件类型
  readonly EventTypecore: Pick<
    EventType,
    | "add" // 添加对象
    | "remove" // 移除对象
  >;
  // 设置对象的启用和禁用状态
  enabled: boolean;
  // 对象的id标识
  id: string | number;
  // 是否已添加到地图
  readonly isAdded: boolean;
  // 当前对象的状态
  readonly state: State;
  // 内置唯一标识ID
  readonly uuid: string;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {BaseThing}
   */
  new (options: ConstructorOptions): BaseThing;

  /**
   * @description: 添加到地图上，同 map.addThing
   * @param {Map} map 地图对象
   * @return {this}
   */
  addTo(map: Map): this;

  /**
   * @description: 添加到地图上，同 map.addThing
   * @param {boolean} destroy 是否调用destroy释放
   * @return
   */
  remove(destroy: boolean): void;

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
}

// 构造配置项
interface ConstructorOptions {
  // 对象的id标识
  id?: number | string;
  // 对象的启用状态
  enabled?: boolean;
  // 当前类中事件是否停止冒泡, false时：事件冒泡到map中
  stopPropagation?: boolean;
}
