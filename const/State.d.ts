/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:39:12
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 17:23:05
 * @FilePath: /cetc3d-declaration/const/State.d.ts
 * @Description: 常量
 */

// 状态
export interface StateCollection {
  // 初始化
  readonly INITIALIZED: "inited";
  // 已添加到地图上
  readonly ADDED: "added";
  // 已移除地图
  readonly REMOVED: "removed";
  // 已销毁对象
  readonly DESTROY: "destroy";
}

// 状态值
export type State = StateCollection[keyof StateCollection];
