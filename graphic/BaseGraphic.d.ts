/*
 * @Author: Quarter
 * @Date: 2022-11-21 19:40:27
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 16:30:35
 * @FilePath: /cetc3d-declaration/graphic/BaseGraphic.d.ts
 * @Description: 矢量数据 基础类
 */

import Cesium from "cesium";
import { ContextMenuOption } from "../map/Map";
import { State } from "../const/State";
import { BaseClass } from "../core/BaseClass";
import { EventType } from "../const/EventType";
import { LatLngPoint } from "../core/LatLngPoint";

export interface BaseGraphic extends BaseClass {
  // 当前类支持的EventType事件类型
  readonly EventType: Pick<
    EventType,
    // 添加对象
    | "add"
    // 移除对象
    | "remove"
    // 显示了对象
    | "show"
    // 隐藏了对象
    | "hide"
  >;
  // 属性信息
  attr: object;
  // 中心点坐标（笛卡尔坐标）
  readonly center: Cesium.Cartesian3;
  // 中心点坐标
  readonly centerPoint: LatLngPoint;
  // 对象的id标识
  id: string | number;
  // 是否已添加到图层
  readonly isAdded: boolean;
  // 名称
  name: string;
  // 显示隐藏状态
  show: boolean;
  // 当前对象的状态
  readonly state: State;
  // 矢量数据类型
  readonly type: string;
  // 内置唯一标识ID
  readonly uuid: string;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {BaseGraphic}
   */
  new (options: ConstructorOptions): BaseGraphic;

  /**
   * @description: 绑定右键菜单
   * @param {Array<ContextMenuOption>} content 右键菜单配置数组
   * @param {object} options 参数对象(预留，目前未用)
   * @return {this}
   */
  bindContextMenu(content: ContextMenuOption[], options?: object): this;

  /**
   * @description: 绑定Cesium内部对象进行相关管理
   * @param {object} item Cesium对象
   * @return {this}
   */
  bindPickId(item: object): this;

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
   * @description: 飞行定位至图层数据所在的视角
   * @param {FlyToOptions} options 配置项
   * @return {this}
   */
  flyTo(options?: FlyToOptions): this;

  /**
   * @description: 获取绑定的右键菜单数组
   * @return {Array<ContextMenuOption>}
   */
  getContextMenu(): ContextMenuOption[];

  /**
   * @description: 获取矢量数据位置的 矩形边界值
   * @param {boolean} isFormat 是否格式化
   * @return {Cesium.Rectangle|object}
   */
  getExtent(isFormat?: boolean): Cesium.Rectangle | object;

  /**
   * @description: 是否有绑定的右键菜单
   * @return {boolean}
   */
  hasContextMenu(): boolean;

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
   * @description: 打开右键菜单
   * @param {Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {object} options 配置项
   * @return {this}
   */
  openContextMenu(position: Cesium.Cartesian3, options?: object): this;

  /**
   * @description: 打开绑定的弹窗
   * @param {Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {BindPopupOption} options 配置项
   * @return {this}
   */
  openPopup(position: Cesium.Cartesian3, options?: BindPopupOption): this;

  /**
   * @description: 显示小提示窗，一般用于鼠标操作的提示
   * @param {Cesium.Cartesian2|Cesium.Cartesian3} position 显示的屏幕坐标位置 或 笛卡尔坐标位置
   * @param {string} message 显示的内容
   * @return {this}
   */
  openSmallTooltip(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: string): this;

  /**
   * @description: 打开绑定的弹窗
   * @param {Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {BindTooltipOption} options 配置项
   * @return {this}
   */
  openTooltip(position: Cesium.Cartesian3, options?: BindTooltipOption): this;

  /**
   * @description: 从图层上移除，同 layer.removeGraphic
   * @param {boolean} hasDestory 是否调用destroy释放
   * @return
   */
  remove(hasDestory: boolean): void;

  /**
   * @description: 重新赋值参数，同构造方法参数一致
   * @param {ConstructorOptions} options 配置项
   * @return {this}
   */
  setOptions(options: ConstructorOptions): this;

  /**
   * @description: 设置 样式信息 的钩子方法
   * @param {object} newStyle 本次更新的部分样式信息,内部会合并属性
   * @return {this}
   */
  setStyle(newStyle: object): this;

  /**
   * @description: 将矢量数据导出为GeoJSON格式规范对象
   * @return {object}
   */
  toGeoJSON(): object;

  /**
   * @description: 将矢量数据的坐标、样式及属性等信息导出为对象，可以用于存储
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
   * @description: 对象添加到图层上的创建钩子方法， 每次add时都会调用
   * @return
   */
  _addedHook(): void;

  /**
   * @description: 对象添加到图层前创建一些对象的钩子方法， 只会调用一次
   * @return
   */
  _mountedHook(): void;

  /**
   * @description: 对象从图层上移除的创建钩子方法， 每次remove时都会调用
   * @return
   */
  _removedHook(): void;
}

// 构造配置项
interface ConstructorOptions {
  // 矢量数据id标识
  id?: string | number;
  // 矢量数据名称
  name?: string;
  // 矢量数据是否显示
  show?: boolean;
  // 【点状】矢量数据时的坐标位置，具体看子类实现
  position?: LatLngPoint | Cesium.Cartesian3;
  // 【线面状（多点）】矢量数据时的坐标位置，具体看子类实现
  positions?: LatLngPoint[] | Cesium.Cartesian3[];
  // 矢量数据的 样式信息，具体见各类数据的说明
  style: object;
  // 矢量数据的 属性信息，可以任意附加属性
  attr?: object;
  // 允许直接传入geojson格式规范数据，内部自动解析
  geojson?: object;
  // 当矢量数据支持popup弹窗时，绑定的值
  popup?: object;
  // 当矢量数据支持tooltip弹窗时，绑定的值
  tooltip?: object;
  // 当矢量数据支持右键菜单时，绑定的值
  contextmenuItems?: object;
  // 当前类中事件是否停止冒泡, false时：事件冒泡到layer种
  stopPropagation?: boolean;
}

// 绑定弹窗配置
interface BindPopupOption {
  // 窗口的XY轴偏移的像素位置
  anchor?: number[];
  // 是否使用内置的Html模版，false时全部使用外部指定的html
  template?: boolean;
  // 是否实时更新面板，此时需要绑定content回调方法处理
  timeRender?: boolean;
  // popup的DOM添加到页面的回调方法,特殊需要操作dom的场景下使用（如视频video、echarts等）
  onAdd?: Function;
  // popup的DOM从页面移除的回调方法
  onRemove?: Function;
}

// 绑定鼠标移入的弹窗配置
interface BindTooltipOption {
  // 窗口的XY轴偏移的像素位置
  anchor?: number[];
  // 是否使用内置的Html模版，false时全部使用外部指定的html
  template?: boolean;
  // popup的DOM添加到页面的回调方法,特殊需要操作dom的场景下使用（如视频video、echarts等）
  onAdd?: Function;
  // popup的DOM从页面移除的回调方法
  onRemove?: Function;
}

// 飞行配置项
interface FlyToOptions {
  // 点状数据时，相机距离目标点的距离（单位：米）
  radius: number;
  // 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好
  scale?: number;
  // 定位时相机的最小高度值，用于控制避免异常数据
  minHeight?: number;
  // 可选定位时相机的最大高度值，用于控制避免异常数据
  maxHeight?: number;
  // 方向角度值，绕垂直于地心的轴旋转角度, 0至360
  heading: number;
  // 俯仰角度值，绕纬度线旋转角度, 0至360
  pitch: number;
  // 翻滚角度值，绕经度线旋转角度, 0至360
  roll: number;
  // 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间
  duration?: number;
  // 飞行完成后要执行的函数
  complete?: Cesium.Camera.FlightCompleteCallback;
  // 飞行取消时要执行的函数
  cancel?: Cesium.Camera.FlightCancelledCallback;
  // 变换矩阵表示飞行结束时相机所处的参照系
  endTransform?: Cesium.Matrix4;
  // 飞行高峰时的最大高度
  maximumHeight?: number;
  // 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口
  pitchAdjustHeight?: number;
  // 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度
  flyOverLongitude?: number;
  // 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间
  flyOverLongitudeWeight?: number;
  // 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）
  convert?: boolean;
  // 控制在飞行过程中如何插值时间
  easingFunction?: Cesium.EasingFunction.Callback;
}
