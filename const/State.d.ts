/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:39:12
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 19:26:40
 * @FilePath: /cetc3d-declaration/const/State.d.ts
 * @Description: 常量
 */

// 状态
export interface State {
  // 初始化
  readonly INITIALIZED: "inited";
  // 已添加到地图上
  readonly ADDED: "added";
  // 已移除地图
  readonly REMOVED: "removed";
  // 已销毁对象
  readonly DESTROY: "destroy";
}
