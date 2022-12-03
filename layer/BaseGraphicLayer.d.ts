/*
 * @Author: Quarter
 * @Date: 2022-11-21 15:04:51
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 16:44:30
 * @FilePath: /cetc3d-declaration/layer/BaseGraphicLayer.d.ts
 * @Description: 矢量数据图层 Base基类
 */
import Cesium from "cesium";
import { BaseLayer, ConstructorOptions as BaseLayerConstructorOptions } from "./BaseLayer";
import { EventType } from "../const/EventType";
import { BaseGraphic } from "../graphic/BaseGraphic";
import { ContextMenuOptions, FlyToExtentOptions } from "../map/Map";

export interface BaseGraphicLayer extends BaseLayer {
  // 当前栅格瓦片图层支持的EventType事件类型
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
    // 左键单击 鼠标事件
    | "click"
    // 右键单击 鼠标事件
    | "rightClick"
    // 鼠标移入 鼠标事件
    | "mouseOver"
    // 鼠标移出 鼠标事件
    | "mouseOut"
  >;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {BaseGraphicLayer}
   */
  new (options: ConstructorOptions): BaseGraphicLayer;

  /**
   * @description: 更新图层参数
   * @param {ConstructorOptions} options 与类的构造方法参数相同
   * @return {this}
   */
  setOptions(options: ConstructorOptions): this;

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
   * @description: 外部指定显示的单体化对象
   * @param {BaseGraphic} graphic 本图层内的指定矢量对象
   * @return
   */
  showDth(graphic: BaseGraphic): void;

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
