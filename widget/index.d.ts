/*
 * @Author: Quarter
 * @Date: 2022-11-22 10:55:09
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 17:04:47
 * @FilePath: /cetc3d-declaration/widget/index.d.ts
 * @Description: 组件
 */

export interface Widget {
  // widget基础类, 需要继承后使用，不用手动实例化，框架内部自动实例化及相关处理
  BaseWidget: any;
}
