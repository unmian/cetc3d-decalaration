/*
 * @Author: Quarter
 * @Date: 2022-11-21 14:16:53
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 16:31:45
 * @FilePath: /cetc3d-declaration/map/control/KeyboardRoam.d.ts
 * @Description: 键盘漫游控制类
 */

import { MoveType } from "../../const/MoveType";
import { BaseControl, ConstructorOptions } from "../../control/BaseControl";

export interface KeyboardRoam extends BaseControl {
  // 相机旋转的类型
  readonly MoveType: Pick<
    MoveType,
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
  // 相机原地旋转步长，值越大步长越小
  dirStep: number;
  // 最大仰角 0 - 1
  maxPitch: number;
  // 最低高度（单位：米）
  minHeight: number;
  // 最小仰角 0 - 1
  minPitch: number;
  // 平移步长 (米)
  moveStep: number;
  // 相机围绕目标点旋转速率，0.3 - 2.0
  rotateStep: number;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {KeyboardRoam}
   */
  new (options: ConstructorOptions): KeyboardRoam;

  /**
   * @description: 相对于屏幕中心点 转动
   * @param {MoveType} type 旋转的方向
   * @return
   */
  moveCamera(type: MoveType): void;

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
