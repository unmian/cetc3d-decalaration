/*
 * @Author: Quarter
 * @Date: 2022-11-21 15:02:17
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 16:45:35
 * @FilePath: /cetc3d-declaration/layer/graphicLayer/GraphicLayer.d.ts
 * @Description: 矢量数据图层
 */

import Cesium from "cesium";
import {
  BaseGraphicLayer,
  ConstructorOptions as BaseGraphicLayerOptions,
} from "../BaseGraphicLayer";
import { EventType } from "../../const/EventType";
import { BaseGraphic } from "../../graphic/BaseGraphic";
import { Map } from "../../map/Map";

export interface GraphicLayer extends BaseGraphicLayer {
  // 当前类支持的EventType事件类型
  readonly EventType: Pick<
    EventType,
    // 添加矢量数据时
    | "addGraphic"
    // 移除矢量数据时
    | "removeGraphic"
    // 开始绘制 标绘事件
    | "drawStart"
    // 正在移动鼠标中，绘制过程中鼠标移动了点 标绘事件
    | "drawMouseMove"
    // 绘制过程中增加了点 标绘事件
    | "drawAddPoint"
    // 创建完成 标绘事件
    | "drawCreated"
    // 开始编辑 标绘事件
    | "editStart"
    // 移动鼠标按下左键（LEFT_DOWN）标绘事件
    | "editMouseDown"
    // 正在移动鼠标中，正在编辑拖拽修改点中（MOUSE_MOVE） 标绘事件
    | "editMouseMove"
    // 编辑修改了点（LEFT_UP）标绘事件
    | "editMovePoint"
    // 编辑删除了点 标绘事件
    | "editRemovePoint"
    // 图上编辑修改了相关style属性 标绘事件
    | "editStyle"
    // 停止编辑 标绘事件
    | "editStop"
  > &
    BaseGraphicLayer["EventType"];
  // 是否聚合(点数据时)
  clustering: boolean;
  // 加载 DivGraphic 数据的内部DOM容器
  readonly container: Element;
  // 当加载Entity类型数据的内部Cesium容器
  readonly dataSource: Cesium.CustomDataSource;
  // 图层内的Graphic集合对象
  readonly graphics: BaseGraphic[];
  // 是否可以编辑
  readonly hasEdit: boolean;
  // 是否可以调整图层顺序（在同类型图层间）
  readonly hasZIndex: boolean;
  // 图层内的Graphic矢量数据个数
  readonly length: number;
  // 当加载 DivGraphic 数据的DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件
  pointerEvents: boolean;
  // 当加载普通 primitive类型数据的内部Cesium容器
  primitiveCollection: Cesium.PrimitiveCollection;
  // 图层顺序，数字大的在上面
  zIndex: number;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {GraphicLayer}
   */
  new (options: ConstructorOptions): GraphicLayer;

  /**
   * @description: 更新图层参数
   * @param {ConstructorOptions} options 与类的构造方法参数相同
   * @return {this}
   */
  setOptions(options: ConstructorOptions): this;

  /**
   * @description: 激活编辑，绑定相关处理，同 hasEdit=true
   * @return {this}
   */
  activateEdit(): this;

  /**
   * @description: 添加Graphic矢量数据
   * @param {BaseGraphic|Array<BaseGraphic>} graphic 矢量数据
   * @return {BaseGraphic|Array<BaseGraphic>}
   */
  addGraphic(graphic: BaseGraphic | BaseGraphic[]): BaseGraphic | BaseGraphic[];

  /**
   * @description: 添加到地图上，同 map.addThing
   * @param {Map} map 地图对象
   * @return {this}
   */
  addTo(map: Map): this;

  /**
   * @description: 异步计算更新坐标进行贴地(或贴模型)
   * @param {ClampToGroundOption} options 配置项
   * @return {this}
   */
  clampToGround(options?: ClampToGroundOption): this;

  /**
   * @description: 清除图层内所有矢量数据
   * @param {boolean} hasDestory 是否释放矢量对象
   * @return
   */
  clear(hasDestory?: boolean): void;

  /**
   * @description: 释放编辑，解除绑定相关事件，同 hasEdit=false
   * @return {this}
   */
  disableEdit(): this;

  /**
   * @description: 遍历所有矢量数据并将其作为参数传递给回调函数
   * @param {Function} method 回调方法
   * @param {object} content 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  eachGraphic(method: Function, content: object): this;

  /**
   * @description: 完成绘制和编辑，如有未完成的绘制会自动完成。 在移动端需要调用此方法来类似PC端双击结束
   * @return {this}
   */
  endDraw(): this;

  /**
   * @description: 根据 指定属性 获取 单个矢量数据对象（多个匹配时取首个）
   * @param {object|string|number} attrName 属性名称值（如id、name等）
   * @param {string} attrVal 属性值
   * @return {BaseGraphic}
   */
  getGraphicByAttr(attrName: object | string | number, attrVal: string): BaseGraphic;

  /**
   * @description: 根据id或uuid取矢量数据对象
   * @param {string|number} id 矢量数据id或uuid
   * @return {BaseGraphic}
   */
  getGraphicById(id: string | number): BaseGraphic;

  /**
   * @description: 获取图层内 所有矢量数据
   * @return {Array<BaseGraphic>}
   */
  getGraphics(): BaseGraphic[];

  /**
   * @description: 根据 指定属性 获取 单个矢量数据对象（多个匹配时取首个）
   * @param {object|string|number} attrName 属性名称值（如id、name等）
   * @param {string} attrVal 属性值
   * @return {Array<BaseGraphic>}
   */
  getGraphicsByAttr(attrName: object | string | number, attrVal: string): BaseGraphic[];

  /**
   * @description: 加载转换GeoJSON格式规范数据为Graphic后加载到图层中
   * @param {string|object} geojson GeoJSON格式规范数据
   * @param {LoadGeoJSONOption} options 配置项
   * @return {Array<BaseGraphic>}
   */
  loadGeoJSON(geojson: string | object, options?: LoadGeoJSONOption): BaseGraphic[];

  /**
   * @description: 移除Graphic矢量数据
   * @param {BaseGraphic} graphic 矢量数据
   * @param {boolean} hasDestory 是否释放矢量对象
   * @return {this}
   */
  removeGraphic(graphic: BaseGraphic, hasDestory?: boolean): this;

  /**
   * @description: 开始绘制矢量数据，绘制的数据会加载在当前图层。
   * @param {object} options Graphic构造参数
   * @return {BaseGraphic}
   */
  startDraw(options: object): BaseGraphic;

  /**
   * @description: 激活编辑指定的矢量数据
   * @param {BaseGraphic} graphic 需要激活编辑的矢量数据
   * @param {object} event 内部使用，传递事件
   * @return {this}
   */
  startEditing(graphic: BaseGraphic, event?: object): this;

  /**
   * @description: 停止绘制，如有未完成的绘制会自动删除
   * @return {this}
   */
  stopDraw(): this;

  /**
   * @description: 停止编辑，释放正在编辑的对象
   * @return {this}
   */
  stopEditing(): this;

  /**
   * @description: 将图层数据导出为GeoJSON格式规范对象
   * @return {object}
   */
  toGeoJSON(): object;

  /**
   * @description: 对象从地图上移除的创建钩子方法， 每次remove时都会调用
   * @return
   */
  _removedHook(): void;
}

// 构造配置项
export interface ConstructorOptions extends BaseGraphicLayerOptions {
  // 是否可编辑
  hasEdit?: boolean;
  // 完成标绘时是否自动启动编辑(需要hasEdit:true时)
  isAutoEditing?: boolean;
  // 是否连续标绘
  isContinued?: boolean;
  // 在标绘和编辑结束时，是否将坐标还原为普通值，true: 停止编辑时会有闪烁，但效率要好些
  isRestorePositions?: boolean;
  // 需要自动加载的数据，内部自动生成Graphic对象
  data?: object | object[];
  clustering?: {
    // 是否开启聚合
    enabled?: boolean;
    // 多少像素矩形范围内聚合
    pixelRange?: number;
    // 是否贴地
    clampToGround?: boolean;
    // 内置样式时，圆形图标的半径大小（单位：像素）
    radius?: number;
    // 内置样式时，数字的颜色
    fontColor?: string;
    // 内置样式时，圆形图标的背景颜色
    color?: string;
    // 内置样式时，圆形图标的透明度
    opacity?: number;
    // 圆形图标的边框宽度（单位：像素），0不显示
    borderWidth?: number;
    // 内置样式时，圆形图标的边框颜色
    borderColor?: string;
    // 内置样式时，圆形图标边框的透明度
    borderOpacity?: number;
    // 自定义聚合的图标样式
    getImage?: Function;
  };
  // 当前类中事件是否停止冒泡, false时：事件冒泡到map中
  stopPropagation?: boolean;
}

// 异步计算更新坐标进行贴地(或贴模型)配置项
interface ClampToGroundOption {
  // 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
  has3dtiles?: boolean;
  // 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
  objectsToExclude?: object[];
  // 异步计算高度完成后 的回调方法
  callback: Function;
  // 异步计算高度完成后 的回调方法
  endItem: Function;
}

// 加载GeoJSON配置项
interface LoadGeoJSONOption {
  // 是否清除图层已有数据
  clear?: boolean;
  // 是否加载完成后进行飞行到数据区域
  flyTo?: boolean;
  // 可以设置指定style样式
  style?: object;
}
