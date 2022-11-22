/*
 * @Author: Quarter
 * @Date: 2022-11-21 14:17:40
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 16:28:45
 * @FilePath: /cetc3d-declaration/control/BaseControl.d.ts
 * @Description: 控件 基类
 */

import { BaseThing } from "../core/BaseThing";
import { Map } from "../map/Map";

export interface BaseControl extends BaseThing {
  // 当前控件的DOM对象
  readonly container: HTMLElement;
  // 父容器DOM对象
  readonly parentContainer: HTMLElement;
  // 父容器DOM对象的ID
  readonly parentContainerId: string;
  // 设置DOM容器的显示隐藏
  show: boolean;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {BaseControl}
   */
  new (options: ConstructorOptions): BaseControl;

  /**
   * @description: 添加到地图上，同 map.addControl
   * @param {Map} map 地图对象
   * @return {this}
   */
  addTo(map: Map): this;

  /**
   * @description: 从地图上移除，同map.removeControl
   * @param {boolean} destroy 是否调用destroy释放
   * @return
   */
  remove(destroy: boolean): void;
}

// 构造配置项
interface ConstructorOptions {
  // 对象的id标识
  id?: string | number;
  // 对象的启用状态
  enabled?: boolean;
  // 可以自定义插入到父容器中的index顺序，默认是插入到最后面
  insertIndex?: number;
  // 可以自定义插入到指定兄弟容器的前面，与insertIndex二选一
  insertBefore?: HTMLElement;
}
