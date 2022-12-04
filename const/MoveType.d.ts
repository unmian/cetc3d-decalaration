/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:39:12
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 17:22:57
 * @FilePath: /cetc3d-declaration/const/MoveType.d.ts
 * @Description: 常量
 */

// 摄像机移动类型
export interface MoveTypeCollection {
  // 向屏幕中心靠近
  readonly ENLARGE: number;
  // 向屏幕中心远离
  readonly NARROW: number;
  // 相机原地左旋转
  readonly LEFT_ROTATE: number;
  // 相机原地右旋转
  readonly RIGHT_ROTATE: number;
  // 相机原地上旋转
  readonly TOP_ROTATE: number;
  // 相机原地下旋转
  readonly BOTTOM_ROTATE: number;
}

// 摄像机移动类型值
export type MoveType = MoveTypeCollection[keyof MoveTypeCollection];
