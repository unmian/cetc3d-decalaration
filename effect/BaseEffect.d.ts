/*
 * @Author: Quarter
 * @Date: 2022-11-22 09:24:44
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 16:25:31
 * @FilePath: /cetc3d-declaration/effect/BaseEffect.d.ts
 * @Description: 特效 基类
 */

import { BaseThing, ConstructorOptions as BaseThingConstructorOptions } from "../core/BaseThing";

export interface BaseEffect extends BaseThing {
  // 特效对象的uniforms 一个对象，它的属性被用来设置片段着色器shader
  readonly uniforms: object;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {this}
   */
  new (options: ConstructorOptions): BaseEffect;
}

// 构造配置项
type ConstructorOptions = BaseThingConstructorOptions;
