/*
 * @Author: Quarter
 * @Date: 2022-12-01 16:54:43
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 11:52:34
 * @FilePath: /cetc3d-declaration/layer/graphicLayer/ArcGisWfsLayer.d.ts
 * @Description: ArcGIS WFS服务图层， 按瓦片网格分块分层加载
 */

import Cesium from "cesium";
import {
  BindPopupOption,
  BindTooltipOption,
  ConstructorOptions as BaseGraphicLayerOptions,
} from "../BaseGraphicLayer";
import { FlyToOptions } from "../BaseLayer";
import { GraphicType } from "../../const/GraphicType";
import { State } from "../../const/State";
import { LodGraphicLayer } from "./LodGraphicLayer";
import { BaseGraphic } from "../../graphic/BaseGraphic";
import { ContextMenuOptions, Map } from "../../map/Map";

export interface ArcGisWfsLayer {
  // 当前类支持的EventType事件类型
  readonly EventType: ArcGosWfsLayerEventTypeCollection;
  // 是否可以调整透明度
  readonly hasOpacity: boolean;
  // 对象的id标识
  id: string | number;
  // 是否已添加到地图
  readonly isAdded: boolean;
  // 透明度，取值范围：0.0-1.0
  opacity: number;
  // 显示隐藏状态
  show: boolean;
  // 当前对象的状态
  readonly state: State;
  // 图层类型
  readonly type: string;
  // 内置唯一标识ID
  readonly uuid: string;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {GraphicLayer}
   */
  new (options: ConstructorOptions): ArcGisWfsLayer;

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
   * @description: 对象从地图上移除的创建钩子方法， 每次 remove 时都会调用
   * @return
   */
  _removedHook(): void;

  /**
   * @description: 添加抛出事件到父类，它将接收传播的事件
   * @param {Object} obj 父类对象
   * @return {this}
   */
  addEventParent(obj: object): this;

  /**
   * @description: 添加到地图上，同 map.addThing
   * @param {Map} map 地图对象
   * @return {this}
   */
  addTo(map: Map): this;

  /**
   * @description: 绑定右键菜单
   * @param {Array<ContextMenuOption>} content 右键菜单配置数组
   * @param {object} options 参数对象(预留，目前未用)
   * @return {this}
   */
  bindContextMenu(content: ContextMenuOptions[], options?: object): this;

  /**
   * @description: 绑定鼠标单击对象后的弹窗
   * @param {string|Function} content 弹窗内容html字符串，或者回调方法
   * @param {BindPopupOption} options 配置项
   * @return {this}
   */
  bindPopup(content: string | Function, options?: BindPopupOption): this;

  /**
   * @description: 绑定鼠标移入的弹窗
   * @param {string|Function} content 弹窗内容html字符串，或者回调方法
   * @param {BindTooltipOption} options 配置项
   * @return {this}
   */
  bindTooltip(content: string | Function, options?: BindTooltipOption): this;

  /**
   * @description: 清除图层内所有矢量数据
   * @param {boolean} hasDestory 是否释放矢量对象
   * @return
   */
  clear(hasDestory?: boolean): void;

  /**
   * @description: 清除已选中的单体化高亮
   * @return
   */
  clearLastDth(): void;

  /**
   * @description: 关闭右键菜单
   * @return {this}
   */
  closeContextMenu(): this;

  /**
   * @description: 关闭弹窗
   * @return {this}
   */
  closePopup(): this;

  /**
   * @description: 关闭小提示窗
   * @return {this}
   */
  closeSmallTooltip(): this;

  /**
   * @description: 关闭弹窗
   * @return {this}
   */
  closeTooltip(): this;

  /**
   * @description: 根据 attr属性 创建 矢量对象
   * @param {object} grid 瓦片信息对象
   * @param {object} attr 数据的属性信息
   * @return {BaseGraphic}
   */
  createGraphic(grid: object, attr: object): BaseGraphic;

  /**
   * @description: 销毁当前对象
   * @param {boolean} noDel 可选false:会自动delete释放所有属性，true：不delete绑定的变量
   * @return
   */
  destroy(noDel?: boolean): void;

  /**
   * @description: 触发指定类型的事件
   * @param {EventType} type 事件类型
   * @param {object} data 传输的数据或对象，可在事件回调方法中event对象中获取进行使用
   * @param {ArcGisWfsLayer} propagate 将事件传播给父类 (用addEventParent设置)
   * @return {this}
   */
  fire(type: EventType, data: any, propagate?: ArcGisWfsLayer): this;

  /**
   * @description: 飞行定位至图层数据所在的视角
   * @param {FlyToOptions} options 配置项
   * @return {this}
   */
  flyTo(options?: FlyToOptions): this;

  /**
   * @description: 入场动画后再执行flyTo，直接调用flyTo可能造成入场动画失败
   * @return {this}
   */
  flyToByAnimationEnd(): this;

  /**
   * @description: 获取绑定的右键菜单数组
   * @return {Array<ContextMenuOption>}
   */
  getContextMenu(): ContextMenuOptions[];

  /**
   * @description: 是否有绑定的右键菜单
   * @return {boolean}
   */
  hasContextMenu(): boolean;

  /**
   * @description: 是否绑定了抛出事件到指定父类
   * @param {Object} obj 父类对象
   * @return {this}
   */
  hasEventParent(obj: any): this;

  /**
   * @description: 是否存在Popup绑定
   * @return {boolean}
   */
  hasPopup(): boolean;

  /**
   * @description: 是否绑定了tooltip
   * @return {boolean}
   */
  hasTooltip(): boolean;

  /**
   * @description: 是否有绑定指定的事件
   * @param {EventType} type 事件类型
   * @param {ArcGisWfsLayer} propagate 是否判断指定的父类 (用addEventParent设置的)
   * @return {boolean}
   */
  listens(type: EventType, propagate?: ArcGisWfsLayer): boolean;

  /**
   * @description: 解除绑定指定类型事件监听器
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  off(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 绑定指定类型事件监听器
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  on(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 绑定一次性执行的指定类型事件监听器 与on类似，监听器只会被触发一次，然后被删除
   * @param {EventType|Array<EventType>} types 事件类型
   * @param {Function} fn 绑定的监听器回调方法
   * @param {Object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  once(types: EventType | EventType[], fn: Function, context?: Object): this;

  /**
   * @description: 打开右键菜单
   * @param {BaseGraphic|Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {object} options 配置项
   * @return {this}
   */
  openContextMenu(position: BaseGraphic | Cesium.Cartesian3, options?: object): this;

  /**
   * @description: 打开绑定的弹窗
   * @param {BaseGraphic|Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {BindPopupOption} options 配置项
   * @return {this}
   */
  openPopup(position: BaseGraphic | Cesium.Cartesian3, options?: BindPopupOption): this;

  /**
   * @description: 显示小提示窗，一般用于鼠标操作的提示
   * @param {Cesium.Cartesian2|Cesium.Cartesian3} position 显示的屏幕坐标位置 或 笛卡尔坐标位置
   * @param {string} message 显示的内容
   * @return {this}
   */
  openSmallTooltip(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: string): this;

  /**
   * @description: 打开绑定的弹窗
   * @param {BaseGraphic|Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {BindTooltipOption} options 配置项
   * @return {this}
   */
  openTooltip(position: BaseGraphic | Cesium.Cartesian3, options?: BindTooltipOption): this;

  /**
   * @description: 根据LOD分块信息去请求对应的Tile瓦块内的数据
   * @param {object} grid 瓦片信息对象
   * @param {Function} callback 数据获取完成后调用该回调方法
   * @return
   */
  queryGridData(grid: object, callback: Function): void;

  /**
   * @description: 重新加载数据
   * @return
   */
  reload(): void;

  /**
   * @description: 从地图上移除，同map.removeThing
   * @param {boolean} destroy
   * @return
   */
  remove(destroy: boolean): void;

  /**
   * @description: 移除抛出事件到父类
   * @param {Object} obj 父类对象
   * @return {this}
   */
  removeEventParent(obj: Object): this;

  /**
   * @description: 更新图层参数
   * @param {ConstructorOptions} options 与类的构造方法参数相同
   * @return {this}
   */
  setOptions(options: ConstructorOptions): this;

  /**
   * @description: 更新where条件后 刷新数据
   * @param {string} where 筛选条件
   * @return
   */
  setWhere(where: string): void;

  /**
   * @description: 外部指定显示的单体化对象
   * @param {BaseGraphic} graphic 本图层内的指定矢量对象
   * @return
   */
  showDth(graphic: BaseGraphic): void;

  /**
   * @description: 显示错误弹窗， 调用cesium的cesiumWidget.showErrorPanel
   * @param {string} title 标题
   * @param {Object} error 错误内容对象
   * @return {this}
   */
  showError(title: string, error: any): this;

  /**
   * @description: 将图层转为Json简单对象，用于存储后再传参加载
   * @return {object}
   */
  toJSON(): object;

  /**
   * @description: 解除绑定的右键菜单
   * @param {boolean} stopPropagation 单击事件中是否继续冒泡查找
   * @return {this}
   */
  unbindContextMenu(stopPropagation?: boolean): this;

  /**
   * @description: 解除绑定的鼠标单击对象后的弹窗
   * @param {boolean} stopPropagation 单击事件中是否继续冒泡查找
   * @return {this}
   */
  unbindPopup(stopPropagation?: boolean): this;

  /**
   * @description: 解除绑定的鼠标移入对象后的弹窗
   * @param {boolean} stopPropagation 单击事件中是否继续冒泡查找
   * @return {this}
   */
  unbindTooltip(stopPropagation?: boolean): this;

  /**
   * @description: 根据 attr属性 更新 矢量对象，主要是属性是动态变化的场景下使用
   * @param {BaseGraphic} graphic 矢量对象
   * @param {object} attr 数据的属性信息
   * @return
   */
  updateGraphic(graphic: BaseGraphic, attr: object): void;
}

// 构造配置项
export interface ConstructorOptions extends BaseGraphicLayerOptions {
  // ArcGIS服务地址
  url: string;
  // 用于通过ArcGIS MapServer服务进行身份验证的ArcGIS令牌
  token?: string;
  // 用于筛选数据的where查询条件
  where?: string;
  // 当非标准EPSG标号时，可以指定wkid值
  wkid?: number;
  // 要在URL中 传递给WFS服务GetFeature请求的其他参数
  parameters?: object;
  // 将被添加到HTTP请求头
  headers?: object;
  // 加载资源时使用的代理
  proxy?: Cesium.Proxy;
  // 数据中唯一标识的属性字段名称,默认读取 id或objectid或OBJECTID
  IdField?: string;
  // 是否开启测试显示瓦片信息
  debuggerTileInfo?: boolean;
  // 图层所支持的最低层级，当地图小于该级别时，平台不去请求服务数据
  minimumLevel?: number;
  // 图层所支持的最大层级,当地图大于该级别时，平台不去请求服务数据
  maximumLevel?: number;
  // 瓦片数据的矩形区域范围
  rectangle?: {
    // 最小经度值, -180 至 180
    xmin: number;
    // 最大纬度值, -180 至 180
    xmax: number;
    // 最小纬度值, -90 至 90
    ymin: number;
    // 最大纬度值, -90 至 90
    ymax: number;
  };
  // bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可
  bbox?: number[];
  // 标识当前图层为单体化类型数据
  dth?: {
    // 标识是鼠标移入还是单击进行展示单体化面 , 可选值： 'click'、'mouseMove'
    type?: string;
    // 单体化面的颜色
    color?: string;
    // 单体化面的透明度
    opacity?: number;
    // 缓冲扩大面的范围（单位：米）
    buffer?: number;
  };
  // 标识当前图层为建筑物白膜类型数据
  buildings?: {
    // 建筑物底部高度（如:0） 属性字段名称
    bottomHeight?: string;
    // 层数
    cloumn?: string;
    // 层高的 固定层高数值（如:10） 或 属性字段名称
    height?: string | number;
  };
  // 设置聚合相关参数
  clustering?: {
    // 是否开启聚合
    enabled?: boolean;
    // 多少像素矩形范围内聚合
    pixelRange?: number;
    // 是否贴地
    clampToGround?: boolean;
    // 圆形图标的整体半径大小
    radius?: number;
    // 圆形图标的内圆半径大小
    radiusIn?: number;
    // 数字的颜色
    color?: string;
    // 圆形图标的内圆背景颜色，默认自动处理
    colorIn?: string;
  };
  // 矢量数据的style样式,为Function时是完全自定义的回调处理 symbol(attr, style, feature)
  symbol?:
    | {
        // 标识数据类型，默认是根据数据生成 point、polyline、polygon
        type?: GraphicType;
        // Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数
        styleOptions: any;
        // 按 styleField 属性设置不同样式
        styleField?: string;
        // 按styleField值与对应style样式的键值对象
        styleFieldOptions?: object;
        // 自定义判断处理返回style
        callback?: Function;
      }
    | Function;
}

// 支持事件类型集合
type ArcGosWfsLayerEventTypeCollection = LodGraphicLayer["EventType"];

// 支持事件类型
type EventType = ArcGosWfsLayerEventTypeCollection[keyof ArcGosWfsLayerEventTypeCollection];
