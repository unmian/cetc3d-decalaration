/*
 * @Author: Quarter
 * @Date: 2022-12-01 16:42:44
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 16:44:50
 * @FilePath: /cetc3d-declaration/layer/tileLayer/ArcGisLayer.d.ts
 * @Description: ArcGIS标准服务图层
 */

import Cesiusm from "cesium";
import { EventType } from "../../const/EventType";
import { BindPopupOption } from "../BaseGraphicLayer";
import {
  BaseTileLayer,
  ConstructorOptions as BaseTileLayerConstructorOptions,
} from "./BaseTileLayer";

export interface ArcGisLayer extends BaseTileLayer {
  // 当前类支持的EventType事件类型
  readonly EventType: Pick<
    EventType,
    // 加载metadata配置信息完成事件
    | "loadConfig"
    // 鼠标单击事件【enablePickFeatures:true时,支持单击获取对应的矢量对象】
    | "click"
  > &
    BaseTileLayer["EventType"];

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {ArcGisCacheLayer}
   */
  new (options: ConstructorOptions): ArcGisLayer;

  /**
   * @description: 更新图层参数
   * @param {ConstructorOptions} options 与类的构造方法参数相同
   * @return {this}
   */
  setOptions(options: ConstructorOptions): this;

  /**
   * @description: 创建用于图层的 ImageryProvider对象
   * @param {object} options 配置项
   * @return {Cesiusm.ImageryProvider}
   */
  createImageryProvider(options: object): Cesiusm.ImageryProvider;

  /**
   * @description: 绑定鼠标单击对象后的弹窗
   * @param {string|Function} content 弹窗内容html字符串，或者回调方法
   * @param {BindPopupOption} options 配置项
   * @return {this}
   */
  bindPopup(content: string | Function, options?: BindPopupOption): this;
}

// 构造配置项
export interface ConstructorOptions extends BaseTileLayerConstructorOptions {
  // ArcGIS MapServer服务的网址
  url: Cesiusm.Resource | string;
  // 要显示的图层的逗号分隔列表，如果应显示所有图层，则未定义
  layers?: string;
  // 可以对动态服务加条件筛选数据，示例："{"0":"用地编号 = 'R'"}"
  layerDefs?: string;
  // 指定在小于此层级时用瓦片加载，大于该层级用动态服务.可以在瓦片服务类型时，同时使用瓦片和动态服务
  maxTileLevel?: number;
  // 当非标准EPSG标号时，可以指定wkid值
  wkid?: number;
  // 用于通过ArcGIS MapServer服务进行身份验证的ArcGIS令牌
  token?: string;
  // 于确定图块是否为 无效，应将其丢弃
  tileDiscardPolicy?: Cesiusm.TileDiscardPolicy;
  // 如果为true，则表示服务器已预先缓存 如果可用，则使用图块。如果为false，则将忽略所有预缓存的图块，并且 使用了'导出'服务
  usePreCachedTilesIfAvailable?: boolean;
  // 是否鼠标单击高亮显示对应的矢量数据
  showClickFeature?: boolean;
  // 鼠标单击高亮矢量数据的样式，支持对应数据类型（点/线/面）对应的style
  pickFeatureStyle?: {
    // 颜色
    color?: string;
    // 透明度
    opacity?: number;
  };
}
