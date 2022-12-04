/*
 * @Author: Quarter
 * @Date: 2022-11-30 17:18:41
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 11:37:05
 * @FilePath: /cetc3d-declaration/layer/graphicLayer/TilesetLayer.d.ts
 * @Description: 3dtiles 三维模型图层
 */

import Cesium from "cesium";
import {
  BaseGraphicLayer,
  BindPopupOption,
  BindTooltipOption,
  ConstructorOptions as BaseGraphicLayerConstructorOptions,
} from "../BaseGraphicLayer";
import { FlyToOptions } from "../BaseLayer";
import { ChinaCRS } from "../../const/ChinaCRS";
import { EventTypeCollection } from "../../const/EventType";
import { State } from "../../const/State";
import { LatLngPoint } from "../../core/LatLngPoint";
import { BaseGraphic } from "../../graphic/BaseGraphic";
import { Map, ContextMenuOptions } from "../../map/Map";

export interface TilesetLayer {
  // 当前栅格瓦片图层支持的EventType事件类型
  readonly EventType: TilesetLayerEventTypeCollection;
  // 轴方向
  axis: string | Cesium.Axis;
  // 模型当前中心点坐标
  center: LatLngPoint;
  // 是否可以调整透明度
  readonly hasOpacity: boolean;
  // 调整修改模型高度
  height: LatLngPoint;
  // 对象的id标识
  id: string | number;
  // 开启或设置建筑物特效样式
  marsJzwStyle: boolean | object;
  // 是否已添加到地图
  readonly isAdded: boolean;
  // 透明度，取值范围：0.0-1.0
  opacity: number;
  // 模型原始的中心点坐标
  readonly orginCenterPoint: LatLngPoint;
  // 模型原始的中心点坐标 （笛卡尔坐标）
  readonly orginCenterPosition: Cesium.Cartesian3;
  // 原始的旋转角度，示例：{ x: 0, y: 0, z: 0 }
  readonly orginRotation: object;
  // 模型当前中心点坐标 （笛卡尔坐标）
  readonly position: Cesium.Cartesian3;
  // 旋转方向
  rotation: object;
  // X轴上的旋转方向
  rotation_x: number;
  // Y轴上的旋转方向
  rotation_y: number;
  // Z轴上的旋转方向
  rotation_z: number;
  // 缩放比例
  scale: number;
  // 显示隐藏状态
  show: boolean;
  // 是否鼠标单击高亮显示模型构件
  readonly showClickFeature: boolean;
  // 当前对象的状态
  readonly state: State;
  // 模型样式
  style: object | Cesium.Cesium3DTileStyle;
  // 模型对应的 Cesium3DTileset对象
  readonly tileset: Cesium.Cesium3DTileset;
  // 图层类型
  readonly type: string;
  // 内置唯一标识ID
  readonly uuid: string;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {TilesetLayer}
   */
  new (options: ConstructorOptions): TilesetLayer;

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
   * @description: 模型自动贴地计算及处理, 因为模型在设计或生产时，模型的视角中心位置不一定在0,0,0点，此方法不是唯一准确的
   * @param {number} addHeight 计算完成的贴地高度基础上增加的高度值
   * @return
   */
  clampToGround(addHeight?: number): void;

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
   * @param {TilesetLayer} propagate 将事件传播给父类 (用addEventParent设置)
   * @return {this}
   */
  fire(type: EventType, data: any, propagate?: TilesetLayer): this;

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
   * @description: 获取构件节点位置，现对于原始矩阵变化后的新位置
   * @param {Cesium.Cartesian3} position 原始位置
   * @return {Cesium.Cartesian3}
   */
  getPositionByOrginMatrix(position: Cesium.Cartesian3): Cesium.Cartesian3;

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
   * @param {TilesetLayer} propagate 是否判断指定的父类 (用addEventParent设置的)
   * @return {boolean}
   */
  listens(type: EventType, propagate?: TilesetLayer): boolean;

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
   * @description: 设置透明度
   * @param {number} value 值
   * @return
   */
  setOpacity(value: number): void;

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
   * @description: 重新计算当前矩阵（需要是否存在世界矩阵时）
   * @return {Cesium.Matrix4|undefined}
   */
  updateMatrix(): Cesium.Matrix4 | undefined;

  /**
   * @description: 重新计算当前矩阵，普通方式, 此种方式[x，y不能多次更改]
   * @return {Cesium.Matrix4}
   */
  updateMatrix2(): Cesium.Matrix4;

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

// 构造函数配置项
export interface ConstructorOptions extends BaseGraphicLayerConstructorOptions {
  // tileset的主JSON文件的 url
  url: Cesium.Resource | string;
  // 用于驱动细化细节级别的最大屏幕空间错误。数值加大，能让最终成像变模糊
  maximumScreenSpaceError?: number;
  // 数据集可以使用的最大内存量(以MB计)
  maximumMemoryUsage?: number;
  // 确定tileset是否投射或接收来自光源的阴影
  shadows?: Cesium.ShadowMode;
  // 优化选择。是否使用子绑定卷的并集来筛选贴图
  cullWithChildrenBounds?: boolean;
  // 优化选择。不要要求贴图
  cullRequestsWhileMoving?: boolean;
  // 优化选择。在移动时选择请求时使用的倍增器
  cullRequestsWhileMovingMultiplier?: number;
  // 当true时，tileset.show是false，也去预加载数据
  preloadWhenHidden?: boolean;
  // 优化选择。当摄像机在飞行时，在摄像机的飞行目的地预加载贴图
  preloadFlightDestinations?: boolean;
  // 优化选择。最好先加载上叶子节点数据
  preferLeaves?: boolean;
  // 优化选择。减少远离摄像头的贴图的屏幕空间误差
  dynamicScreenSpaceError?: boolean;
  // 密度用来调整动态画面空间误差，类似于雾密度
  dynamicScreenSpaceErrorDensity?: number;
  // 用于增加计算的动态屏幕空间误差的因素
  dynamicScreenSpaceErrorFactor?: number;
  // 瓷砖密度开始下降时的高度之比
  dynamicScreenSpaceErrorHeightFalloff?: number;
  // 优化选择。如果在(0.0,0.5)之间，在屏幕空间或以上的瓷砖错误降低屏幕分辨率 progressiveResolutionHeightFraction*screenHeight 将优先
  progressiveResolutionHeightFraction?: number;
  // 优化选择。通过暂时提高屏幕边缘的贴图的屏幕空间误差，优先加载屏幕中央的贴图
  foveatedScreenSpaceError?: boolean;
  // 优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制决定哪些贴图被延迟的锥大小
  foveatedConeSize?: boolean;
  // 优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛
  foveatedMinimumScreenSpaceErrorRelaxation?: number;
  // 优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛
  foveatedInterpolationCallback?: Cesium.Cesium3DTileset["foveatedInterpolationCallback"];
  // 优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛
  foveatedTimeDelay?: number;
  // 优化选择。确定在遍历过程中是否应应用跳过详细信息的级别
  skipLevelOfDetail?: boolean;
  // 当skipLevelOfDetail为true时，跳过详细级别之前必须达到的屏幕空间错误
  baseScreenSpaceError?: number;
  // 当skipLevelOfDetail = true时，一个定义要跳过的最小屏幕空间错误的乘法器
  skipScreenSpaceErrorFactor?: number;
  // 当skipLevelOfDetail是true，一个常量定义了加载tiles时要跳过的最小级别数
  skipLevels?: number;
  // 当skipLevelOfDetail为true时，只有满足最大屏幕空间错误的tiles才会被下载。跳过因素将被忽略，并且只加载所需的块
  immediatelyLoadDesiredLevelOfDetail?: boolean;
  // 可选当skipLevelOfDetail = true时，判断遍历过程中是否总是下载可见块的兄弟块
  loadSiblings?: boolean;
  // ClippingPlaneCollection用于选择性地禁用tile集的渲染
  clippingPlanes?: Cesium.ClippingPlaneCollection;
  // 确定地形、3D贴图或两者都将被这个贴图集分类
  classificationType?: Cesium.ClassificationType;
  // 基于几何误差和光照构造一个PointCloudShading对象来控制点衰减的选项
  pointCloudShading?: object;
  // 缩放来自地球、天空、大气和星星天空盒的漫反射和高光图像照明
  imageBasedLightingFactor?: Cesium.Cartesian2;
  // 光的颜色当遮光模型。当undefined场景的浅色被使用代替
  lightColor?: Cesium.Cartesian3;
  // 太阳在天顶的亮度，单位是千坎德拉每平方米，用于这个模型的程序环境地图
  luminanceAtZenith?: number;
  // 三阶球面调和系数用于基于图像的漫射色彩照明
  sphericalHarmonicCoefficients?: Cesium.Cartesian3[];
  // 一个KTX文件的URL，该文件包含高光照明的立方体映射和复杂的高光mipmaps
  specularEnvironmentMaps?: string;
  // 是否剔除面向背面的几何图形。当为真时，背面剔除由glTF材质的双面属性决定;当为false时，禁用背面剔除
  backFaceCulling?: boolean;
  // 是否剔除面向背面的几何图形。当为真时，背面剔除由glTF材质的双面属性决定;作为热图着色的tile变量。所有渲染的贴图都将相对于其他指定的变量值着色
  debugHeatmapTilePropertyName?: string;
  // 可选要在拾取过程中呈现的原语，而不是tile集合
  pickPrimitive?: object;
  // 模型新的中心点位置（移动模型）
  position?: {
    // 经度值, 180 - 180
    lng: number;
    // 纬度值, -90 - 90
    lat: number;
    // 高度值（单位：米）
    alt: number;
  };
  // 模型的旋转方向
  rotation?: {
    // X方向，角度值0-360
    x: number;
    // Y方向，角度值0-360
    y: number;
    // 四周方向，角度值0-360
    z: number;
  };
  // 缩放比例
  scale?: number;
  // 轴方向
  axis?: string | Cesium.Axis;
  // 模型的矩阵位置，内部无坐标位置的模型使用，此时position和rotation等参数均无效
  modelMatrix?: Cesium.Matrix4;
  // 外部自定义修复模型矩阵位置
  updateMatrix?: Function;
  // 标识模型的国内坐标系（用于自动纠偏或加偏）
  chinaCRS?: ChinaCRS;
  // 模型样式
  style?: object | Cesium.Cesium3DTileStyle;
  // 开启或设置建筑物特效样式
  marsJzwStyle?: boolean | string;
  // 是否鼠标单击高亮显示模型构件
  showClickFeature?: boolean;
  // 是否鼠标移入高亮显示模型构件
  showMoveFeature?: boolean;
  // 鼠标单击或移入高亮构件的style样式
  pickFeatureStyle?: {
    // 颜色
    color?: string;
    // 透明度
    opacity?: number;
  };
}

// 支持事件类型集合
type TilesetLayerEventTypeCollection = BaseGraphicLayer["EventType"] &
  Pick<
    EventTypeCollection,
    // 3dtiles模型，模型瓦片初始化完成 该回调只执行一次
    | "initialTilesLoaded"
    // 3dtiles模型
    | "allTilesLoaded"
    // 完成加载，但未做任何其他处理前
    | "loadBefore"
    // 完成加载，执行所有内部处理后
    | "load"
  >;

// 支持事件类型
type EventType = TilesetLayerEventTypeCollection[keyof TilesetLayerEventTypeCollection];
