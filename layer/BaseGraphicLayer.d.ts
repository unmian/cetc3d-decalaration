/*
 * @Author: Quarter
 * @Date: 2022-11-21 15:04:51
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 11:01:22
 * @FilePath: /cetc3d-declaration/layer/BaseGraphicLayer.d.ts
 * @Description: 矢量数据图层 Base基类
 */
import Cesium from "cesium";
import { ConstructorOptions as BaseLayerConstructorOptions, FlyToOptions } from "./BaseLayer";
import { EventTypeCollection } from "../const/EventType";
import { State } from "../const/State";
import { BaseGraphic } from "../graphic/BaseGraphic";
import { ContextMenuOptions, FlyToExtentOptions, Map } from "../map/Map";

export interface BaseGraphicLayer {
  // 当前栅格瓦片图层支持的EventType事件类型
  readonly EventType: BaseGraphicLayerEventTypeCollection;
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
   * @return {BaseGraphicLayer}
   */
  new (options: ConstructorOptions): BaseGraphicLayer;

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
   * @description: 销毁当前对象
   * @param {boolean} noDel 可选false:会自动delete释放所有属性，true：不delete绑定的变量
   * @return
   */
  destroy(noDel?: boolean): void;

  /**
   * @description: 触发指定类型的事件
   * @param {EventType} type 事件类型
   * @param {object} data 传输的数据或对象，可在事件回调方法中event对象中获取进行使用
   * @param {BaseGraphicLayer} propagate 将事件传播给父类 (用addEventParent设置)
   * @return {this}
   */
  fire(type: EventType, data: any, propagate?: BaseGraphicLayer): this;

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
   * @param {BaseGraphicLayer} propagate 是否判断指定的父类 (用addEventParent设置的)
   * @return {boolean}
   */
  listens(type: EventType, propagate?: BaseGraphicLayer): boolean;

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
}

// 构造配置项
export interface ConstructorOptions extends BaseLayerConstructorOptions {
  // 图层自定义定位的矩形区域，与center二选一即可
  extent?: FlyToExtentOptions;
  // 加载完成数据后是否自动飞行定位到数据所在的区域
  flyTo?: boolean;
  // 控制图层的叠加层次（部分图层），默认按加载的顺序进行叠加，但也可以自定义叠加顺序，数字大的在上面
  zIndex?: number;
}

// 支持事件类型集合
type BaseGraphicLayerEventTypeCollection = Pick<
  EventTypeCollection,
  // 添加对象
  | "add"
  // 移除对象
  | "remove"
  // 显示了对象
  | "show"
  // 隐藏了对象
  | "hide"
  // 左键单击 鼠标事件
  | "click"
  // 右键单击 鼠标事件
  | "rightClick"
  // 鼠标移入 鼠标事件
  | "mouseOver"
  // 鼠标移出 鼠标事件
  | "mouseOut"
>;

// 支持事件类型
type EventType = BaseGraphicLayerEventTypeCollection[keyof BaseGraphicLayerEventTypeCollection];

// 绑定弹窗配置
export interface BindPopupOption {
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
