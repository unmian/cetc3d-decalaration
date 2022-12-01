/*
 * @Author: Quarter
 * @Date: 2022-11-21 10:36:58
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 16:44:03
 * @FilePath: /cetc3d-declaration/layer/tileLayer/ArcGisCacheLayer.d.ts
 * @Description: 金字塔瓦片图层
 */

import Cesiusm from "cesium";
import {
  BaseTileLayer,
  ConstructorOptions as BaseTileLayerConstructorOptions,
} from "./BaseTileLayer";

export interface ArcGisCacheLayer extends BaseTileLayer {
  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {ArcGisCacheLayer}
   */
  new (options: ConstructorOptions): ArcGisCacheLayer;

  /**
   * @description: 创建用于图层的 ImageryProvider对象
   * @param {object} options 配置项
   * @return {Cesiusm.ImageryProvider}
   */
  createImageryProvider(options: object): Cesiusm.ImageryProvider;
}

// 构造配置项
interface ConstructorOptions extends BaseTileLayerConstructorOptions {
  // url请求的瓦片图片名称是否大写
  upperCase?: boolean;
}
