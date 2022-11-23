/*
 * @Author: Quarter
 * @Date: 2022-11-21 12:57:05
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 20:33:04
 * @FilePath: /cetc3d-declaration/map/Map.d.ts
 * @Description: 地图类 ，这是构造三维地球的一切的开始起点
 */

import Cesium from "cesium";
import { ChinaCRS } from "../const/ChinaCRS";
import { LangType } from "../const/LangType";
import { LayerType } from "../const/LayerType";
import { TerrainType } from "../const/TerrainType";
import { BaseControl } from "../control/BaseControl";
import { ConstructorOptions as CompassConstructorOptions } from "../control/Compass";
import { ConstructorOptions as DistanceLegendConstructorOptions } from "../control/DistanceLegend";
import { BaseClass } from "../core/BaseClass";
import { BaseThing } from "../core/BaseThing";
import { LatLngPoint } from "../core/LatLngPoint";
import { BaseEffect } from "../effect/BaseEffect";
import { BaseGraphic } from "../graphic/BaseGraphic";
import { BaseLayer } from "../layer/BaseLayer";
import { BaseGraphicLayer } from "../layer/BaseGraphicLayer";
import { GraphicLayer } from "../layer/graphicLayer/GraphicLayer";
import { BaseTileLayer } from "../layer/tileLayer/BaseTileLayer";
import { KeyboardRoam } from "./control/KeyboardRoam";

export interface Map extends BaseClass {
  // Map支持的EventType事件类型
  readonly EventType: {
    // 添加图层
    addLayer: "addLayer";
    // 移除图层
    removeLayer: "removeLayer";
    // 相机开启移动前 场景事件
    cameraMoveStart: "cameraMoveStart";
    // 相机移动完成后 场景事件
    cameraMoveEnd: "cameraMoveEnd";
    // 相机位置完成 场景事件
    cameraChanged: "cameraChanged";
    // 场景更新前 场景事件
    preUpdate: "preUpdate";
    // 场景更新后 场景事件
    postUpdate: "postUpdate";
    // 场景渲染前 场景事件
    preRender: "preRender";
    // 场景渲染后 场景事件
    postRender: "postRender";
    // 场景模式(2D/3D/哥伦布)变换前 场景事件
    morphStart: "morphStart";
    // 完成场景模式(2D/3D/哥伦布)变换 场景事件
    morphComplete: "morphComplete";
    // 时钟跳动 场景事件
    clockTick: "clockTick";
    // 左键单击 鼠标事件
    click: "click";
    // 左键单击到矢量或模型数据时 鼠标事件
    clickGraphic: "clickGraphic";
    // 左键单击到wms或arcgis瓦片服务的对应矢量数据时
    clickTileGraphic: "clickTileGraphic";
    // 左键单击地图空白（未单击到矢量或模型数据）时 鼠标事件
    clickMap: "clickMap";
    // 左键双击 鼠标事件
    dblClick: "dblClick";
    // 左键鼠标按下 鼠标事件
    leftDown: "leftDown";
    // 左键鼠标按下后释放 鼠标事件
    leftUp: "leftUp";
    // 鼠标移动 鼠标事件
    mouseMove: "mouseMove";
    // 鼠标移动（拾取目标，并延迟处理） 鼠标事件
    mouseMoveTarget: "mouseMoveTarget";
    // 鼠标滚轮滚动 鼠标事件
    wheel: "wheel";
    // 右键单击 鼠标事件
    rightClick: "rightClick";
    // 右键鼠标按下 鼠标事件
    rightDown: "rightDown";
    // 右键鼠标按下后释放 鼠标事件
    rightUp: "rightUp";
    // 中键单击 鼠标事件
    middleClick: "middleClick";
    // 中键鼠标按下 鼠标事件
    middleDown: "middleDown";
    // 中键鼠标按下后释放 鼠标事件
    middleUp: "middleUp";
    // 在触摸屏上两指缩放开始 鼠标事件
    pinchStart: "pinchStart";
    // 在触摸屏上两指缩放结束 鼠标事件
    pinchEnd: "pinchEnd";
    // 在触摸屏上两指移动 鼠标事件
    pinchMove: "pinchMove";
    // 鼠标按下 [左中右3键都触发] 鼠标事件
    mouseDown: "mouseDown";
    // 鼠标按下后释放 [左中右3键都触发] 鼠标事件
    mouseUp: "mouseUp";
    // 鼠标移入 鼠标事件
    mouseOver: "mouseOver";
    // 鼠标移出 鼠标事件
    mouseOut: "mouseOut";
    // 按键按下 键盘事件
    keydown: "keydown";
    // 按键按下后释放 键盘事件
    keyup: "keyup";
  };

  // 获取或设置当前显示的底图，设置时可以传入图层id或name
  basemap: string | number | BaseTileLayer;
  // 获取相机
  readonly camera: Cesium.Camera;
  // 获取Canvas画布
  readonly canvas: HTMLCanvasElement;
  // 获取 CesiumWidget
  readonly cesiumWidget: Cesium.CesiumWidget;
  // 获取时钟
  readonly clock: Cesium.Clock;
  // 获取地图 DOM 容器
  readonly container: Element;
  // 获取config.json预先传入的构造完成的控件对象
  readonly controls: KeyboardRoam;
  // 获取要可视化的 DataSource 实例集
  readonly entities: Cesium.EntityCollection;
  // 是否固定光照， true：可避免gltf、3dtiles模型随时间存在亮度不一致
  fixedLight: boolean;
  // 默认绑定的图层，简单场景时快捷方便使用
  readonly graphicLayer: GraphicLayer;
  // 是否开启地形
  hasTerrain: boolean;
  // 获取将在地球上渲染的ImageryLayer图像图层的集合
  readonly imageryLayers: Cesium.ImageryLayerCollection;
  // 获取键盘漫游控制器
  readonly keyboardRoam: KeyboardRoam;
  // 使用的语言（如中文、英文等）
  readonly lang: LangType;
  // 获取当前地图层级（概略），一般为0-21层
  readonly level: number;
  // 获取鼠标事件控制器
  readonly mouseEvent: MouseEvent;
  // 是否只拾取模型上的点
  onlyPickModelPosition: boolean;
  // 获取场景
  readonly scene: Cesium.Scene;
  // 获取或设置当前的地形服务
  trackedEntity: Cesium.Entity;
  // 地图对应的Cesium原生的Viewer对象
  readonly viewer: Cesium.Viewer;

  /**
   * @description: 构造函数
   * @param {string|Cesium.Viewer} id 地图div容器的id 或 已构造好的Viewer对象
   * @param {ConstructorOptions} options 地图构造选项
   * @return {Map}
   */
  new (id: string | Cesium.Viewer, options?: ConstructorOptions): Map;

  /**
   * @description: 添加控件到地图上
   * @param {BaseControl} control 控件对象
   * @param {boolean} enabledVal 如果传值，覆盖控件的enabled属性
   * @return {this}
   */
  addControl(control: BaseControl, enabledVal: boolean): this;

  /**
   * @description: 添加特效对象到地图上
   * @param {BaseEffect} item 特效对象
   * @return {this}
   */
  addEffect(item: BaseEffect): this;

  /**
   * @description: 添加图层到地图上
   * @param {BaseLayer} layer 图层对象
   * @param {boolean} showVal 如果传值，覆盖图层的show属性
   * @return {this}
   */
  addLayer(layer: BaseLayer, showVal: boolean): this;

  /**
   * @description: 添加Thing对象到地图上
   * @param {BaseThing} item Thing对象
   * @return {this}
   */
  addThing(item: BaseThing): this;

  /**
   * @description: 绑定地图的默认右键菜单
   * @param {Array<ContextMenuOptions>} content 右键菜单配置数组
   * @param {object} options 参数对象(预留，目前未用)
   * @return {this}
   */
  bindContextMenu(content: ContextMenuOptions[], options?: object): this;

  /**
   * @description: 停止视角定位等操作
   * @return {this}
   */
  cancelFlight(): this;

  /**
   * @description: 将相机本身定位至指定位置，同 setCameraView 方法 为了兼容老版本用户习惯和center参数名称一致而用的别名方法
   * @param {CameraViewOptions} cameraView 飞行参数，同 setCameraView 方法
   * @param {} options 参数对象，同 setCameraView 方法
   * @return
   */
  centerAt(cameraView: CameraViewOptions, options?: SetCameraViewOptions): void;

  /**
   * @description: 设置鼠标操作习惯方式。 默认为中键旋转，右键拉伸远近。传rightTilt:true可以设置为右键旋转，中键拉伸远近
   * @param {boolean} rightTilt 是否右键旋转
   * @return
   */
  changeMouseModel(rightTilt?: boolean): void;

  /**
   * @description: 清除鼠标操作限定的Pitch范围
   * @return
   */
  clearPitchRange(): void;

  /**
   * @description: 关闭右键菜单
   * @return {this}
   */
  closeContextMenu(): this;

  /**
   * @description: 关闭Popup弹窗
   * @param {object} target 可以只关闭指定对象上的Popup
   * @return {this}
   */
  closePopup(target?: object): void;

  /**
   * @description: 关闭小提示窗
   * @return {this}
   */
  closeSmallTooltip(): this;

  /**
   * @description: 关闭Tooltip弹窗
   * @return {this}
   */
  closeTooltip(): this;

  /**
   * @description: 销毁地图
   * @return
   */
  destroy(): void;

  /**
   * @description: 遍历每一个控件并将其作为参数传递给回调函数
   * @param {Function} method 回调方法
   * @param {object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  eachControl(method: Function, context: object): this;

  /**
   * @description: 遍历每一个图层并将其作为参数传递给回调函数
   * @param {Function} method 回调方法
   * @param {object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  eachLayer(method: Function, context: object): this;

  /**
   * @description: 遍历每一个Thing对象并将其作为参数传递给回调函数
   * @param {Function} method 回调方法
   * @param {object} context 侦听器的上下文(this关键字将指向的对象)
   * @return {this}
   */
  eachThing(method: Function, context: object): this;

  /**
   * @description: 截图，导出地图场景图片
   * @param {ExportImageOptions} options 配置项
   * @return
   */
  expImage(options: ExportImageOptions): void;

  /**
   * @description: 飞行到默认视角， 一般为config.json中的center参数配置的视角
   * @param {FlyHomeOptions} options 配置项
   * @return
   */
  flyHome(options?: FlyHomeOptions): void;

  /**
   * @description: 飞行至Cesium相关矢量对象处
   * @param {Cesium.Entity|Cesium.Entity[]|Cesium.EntityCollection|Cesium.DataSource|Cesium.ImageryLayer|Cesium.Cesium3DTileset|Cesium.TimeDynamicPointCloud|Promise<Cesium.Entity|Cesium.Entity[]|Cesium.EntityCollection|Cesium.DataSource|Cesium.ImageryLayer|Cesium.Cesium3DTileset|Cesium.TimeDynamicPointCloud>} target 需要定位的Cesium内部对象
   * @param {FlyToOptions} options 配置项
   * @return {Promise<boolean>}
   */
  flyTo(
    target:
      | Cesium.Entity
      | Cesium.Entity[]
      | Cesium.EntityCollection
      | Cesium.DataSource
      | Cesium.ImageryLayer
      | Cesium.Cesium3DTileset
      | Cesium.TimeDynamicPointCloud
      | Promise<
          | Cesium.Entity
          | Cesium.Entity[]
          | Cesium.EntityCollection
          | Cesium.DataSource
          | Cesium.ImageryLayer
          | Cesium.Cesium3DTileset
          | Cesium.TimeDynamicPointCloud
        >,
    options?: FlyToOptions,
  ): Promise<boolean>;

  /**
   * @description: 相机飞行定位至矩形区域
   * @param {Rectangle|Cesium.Rectangle} extent 飞行参数
   * @param {FlyToExtentOptions} options 配置项
   * @return
   */
  flyToExtent(extent: Rectangle | Cesium.Rectangle, options?: FlyToExtentOptions): void;

  /**
   * @description: 飞行定位到 Graphic矢量对象处
   * @param {BaseGraphic} graphic 矢量对象
   * @param {FlyToGraphicOptions} options 配置项
   * @return
   */
  flyToGraphic(graphic: BaseGraphic, options: FlyToGraphicOptions): void;

  /**
   * @description: 定位至目标点(非相机位置)
   * @param {LatLngPoint|Cesium.Cartesian3} point 目标点位置（视角中心点）
   * @param {FlyToPointOptions} options 配置项
   * @return
   */
  flyToPoint(point: LatLngPoint | Cesium.Cartesian3, options: FlyToPointOptions): void;

  /**
   * @description: 定位至坐标数组
   * @param {Array<Cesium.Cartesian3>} positions 坐标数组
   * @param {FlyToPositionsOptions} options 配置项
   * @return
   */
  flyToPositions(positions: Cesium.Cartesian3[], options: FlyToPositionsOptions): void;

  /**
   * @description: 获取所有basemps底图图层
   * @param {boolean} removeEmptyGroup 是否移除 空图层组
   * @return {Array<BaseLayer>}
   */
  getBasemaps(removeEmptyGroup?: boolean): BaseLayer[];

  /**
   * @description: 获取当前相机视角参数
   * @param {object} options 配置项
   * @param {boolean} options.simplify 是否简化，false时保留角度1位小数位
   * @return {object}
   */
  getCameraView(options?: { simplify?: boolean }): object;

  /**
   * @description: 取地图屏幕中心点坐标
   * @return {LatLngPoint}
   */
  getCenter(): LatLngPoint;

  /**
   * @description: 获取绑定的右键菜单数组
   * @return {Array<ContextMenuOptions>}
   */
  getContextMenu(): ContextMenuOptions[];

  /**
   * @description: 根据指定属性获取控件
   * @param {object|string|number} key 属性值（如id、name值）
   * @param {string} attrName 属性名称
   * @return {BaseControl}
   */
  getControl(key: object | string | number, attrName?: string): BaseControl;

  /**
   * @description: 获取平台内置的右键菜单
   * @return {Array<ContextMenuOptions>}
   */
  getDefaultContextMenu(): ContextMenuOptions[];

  /**
   * @description: 根据指定属性获取Thing对象
   * @param {string} key 属性值（如id、name值）
   * @param {string} attrName 属性名称
   * @return {BaseEffect}
   */
  getEffect(key: string, attrName?: string): BaseEffect;

  /**
   * @description: 提取地球当前视域边界
   * @param {object} options 配置项
   * @param {boolean} options.formatNum 是否格式化小数位，只保留6位小数
   * @return {object}
   */
  getExtent(options?: { formatNum?: boolean }): object;

  /**
   * @description: 根据设置的lang参数，获取当前key对应语言的文本内容
   * @param {string} key 文本key
   * @return
   */
  getLangText(key: string): void;

  /**
   * @description: 根据指定属性获取图层
   * @param {object|string|number} key 属性值（如id、name值）
   * @param {string} attrName 属性名称
   * @return {BaseLayer}
   */
  getLayer(key: object | string | number, attrName?: string): BaseLayer;

  /**
   * @description: 根据ID或取图层
   * @param {string|number} id 图层id或uuid
   * @return {BaseLayer}
   */
  getLayerById(id: string | number): BaseLayer;

  /**
   * @description: 获取所有图层
   * @param {GetLayersOptions} options 配置项
   * @return {Array<BaseLayer>}
   */
  getLayers(options: GetLayersOptions): BaseLayer[];

  /**
   * @description: 获取图层ID值，按顺序取值。 没有id的图层，会自动使用本方法进行id赋值处理
   * @return {number}
   */
  getNextLayerId(): number;

  /**
   * @description: 获取地图的配置参数，即new Map传入的参数
   * @return {ConstructorOptions}
   */
  getOptions(): ConstructorOptions;

  /**
   * @description: 根据指定属性获取Thing对象
   * @param {string} key 属性值（如id、name值）
   * @param {string} attrName 属性名称
   * @return {BaseThing}
   */
  getThing(key: string, attrName?: string): BaseThing;

  /**
   * @description: 获取所有瓦片图层，可以用于卷帘对比
   * @return {Array<BaseLayer>}
   */
  getTileLayers(): BaseLayer[];

  /**
   * @description: 是否有指定的控件存在（就是已经addControl的控件）
   * @param {BaseLayer|string} control 指定的控件或控件ID
   * @return {boolean}
   */
  hasControl(control: BaseLayer | string): boolean;

  /**
   * @description: 是否绑定了抛出事件到指定父类
   * @param {object} obj 父类对象
   * @return {this}
   */
  hasEventParent(obj: object): this;

  /**
   * @description: 是否有指定的图层存在（就是已经addLayer的图层）
   * @param {BaseLayer|string} layer 指定的图层或图层ID
   * @return {boolean}
   */
  hasLayer(layer: BaseLayer | string): boolean;

  /**
   * @description: 是否有指定的图层存在（就是已经addLayer的图层）
   * @param {BaseThing|string} thing 指定的Thing对象或Thing对象ID
   * @return {boolean}
   */
  hasThing(thing: BaseThing | string): boolean;

  /**
   * @description: 是否在调用了openFlyAnimation正在进行开场动画
   * @return {boolean}
   */
  isFlyAnimation(): boolean;

  /**
   * @description: 打开右键菜单
   * @param {Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {Array<ContextMenuOptions>|BaseGraphic|BaseGraphicLayer} content 右键菜单配置数组 或 矢量数据/图层
   * @param {object} options 配置项
   * @return {this}
   */
  openContextMenu(
    position?: Cesium.Cartesian3,
    content?: ContextMenuOptions[] | BaseGraphic | BaseGraphicLayer,
    options?: object,
  ): this;

  /**
   * @description: 执行开场动画，动画播放地球飞行定位到指定区域
   * @param {object} options 配置项
   * @param {CameraViewOptions} options.center 飞行到的指定区域视角参数
   * @param {Function} options.callback 飞行结束的回调方法
   * @return
   */
  openFlyAnimation(options?: { center?: CameraViewOptions; callback?: Function }): void;

  /**
   * @description: 打开Popup弹窗
   * @param {Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {string|Function|BaseGraphic|BaseGraphicLayer} content 弹窗内容html字符串，或者 回调方法 或者矢量对象/图层
   * @param {object} options 配置项
   * @param {Array<number>} options.anchor 窗口的XY轴偏移的像素位置
   * @param {boolean} options.timeRender 是否实时更新面板，此时需要绑定content回调方法处理
   * @param {Function} options.onAdd popup的DOM添加到页面的回调方法,特殊需要操作dom的场景下使用
   * @param {Function} options.onRemove popup的DOM从页面移除的回调方法
   * @return {this}
   */
  openPopup(
    position: Cesium.Cartesian3,
    content: string | Function | BaseGraphic | BaseGraphicLayer,
    options: { anchor?: number[]; timeRender?: boolean; onAdd?: Function; onRemove?: Function },
  ): this;

  /**
   * @description: 显示小提示窗，一般用于鼠标操作的提示
   * @param {Cesium.Cartesian2|Cesium.Cartesian3} position 显示的屏幕坐标位置 或 笛卡尔坐标位置
   * @param {string} message 显示的内容
   * @return {this}
   */
  openSmallTooltip(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: string): this;

  /**
   * @description: 打开Tooltip弹窗
   * @param {Cesium.Cartesian3} position 矢量对象 或 显示的位置
   * @param {string|Function|BaseGraphic|BaseGraphicLayer} content 弹窗内容html字符串，或者 回调方法 或者矢量对象/图层
   * @param {object} options 配置项
   * @param {Array<number>} options.anchor 窗口的XY轴偏移的像素位置
   * @param {Function} options.onAdd popup的DOM添加到页面的回调方法,特殊需要操作dom的场景下使用（如视频video、echarts等）
   * @param {Function} options.onRemove popup的DOM从页面移除的回调方法
   * @return {this}
   */
  openTooltip(
    position: Cesium.Cartesian3,
    content: string | Function | BaseGraphic | BaseGraphicLayer,
    options?: { anchor?: number[]; onAdd?: Function; onRemove?: Function },
  ): this;

  /**
   * @description: 获取坐标位置的3dtiles模型对象
   * @param {Cesium.Cartesian3|Array<Cesium.Cartesian3>} positions 坐标 或 坐标数组
   * @return {Cesium.Cesium3DTileset}
   */
  pick3DTileset(positions: Cesium.Cartesian3 | Cesium.Cartesian3[]): Cesium.Cesium3DTileset;

  /**
   * @description: 移除控件
   * @param {BaseControl} control 需要移除的控件
   * @param {boolean} hasDestory 是否释放
   * @return {this}
   */
  removeControl(control: BaseControl, hasDestory: boolean): this;

  /**
   * @description: 移除特效对象
   * @param {BaseEffect} item 需要移除的特效对象
   * @param {boolean} hasDestory 是否释放
   * @return {this}
   */
  removeEffect(item: BaseEffect, hasDestory: boolean): this;

  /**
   * @description: 移除图层
   * @param {BaseLayer} layer 需要移除的图层
   * @param {boolean} hasDestory 是否释放
   * @return {this}
   */
  removeLayer(layer: BaseLayer, hasDestory: boolean): this;

  /**
   * @description: 移除Thing对象
   * @param {BaseThing} item 需要移除的Thing对象
   * @param {boolean} hasDestory 是否释放
   * @return {this}
   */
  removeThing(item: BaseThing, hasDestory: boolean): this;

  /**
   * @description: 执行旋转地球动画
   * @param {RotateAnimationOptions} options 配置项
   * @return
   */
  rotateAnimation(options?: RotateAnimationOptions): void;

  /**
   * @description: 重新设置basemps底图图层，对options.basemaps重新赋值
   * @param {Array<BasemapOptions>} arr 底图图层配置
   * @return {Array<BaseLayer>}
   */
  setBasemapsOptions(arr: BasemapOptions[]): BaseLayer[];

  /**
   * @description: 将相机本身定位至指定位置
   * @param {CameraViewOptions} cameraView 飞行参数
   * @param {SetCameraViewOptions} options 配置项
   * @return
   */
  setCameraView(cameraView: CameraViewOptions, options?: SetCameraViewOptions): void;

  /**
   * @description:
   * @param {Array<CameraViewListOptions>} arr 视角参数数组
   * @param {Function} enfun 执行完成的回调方法
   * @return
   */
  setCameraViewList(arr: CameraViewListOptions[], enfun: Function): void;

  /**
   * @description: 设置鼠标状态为“+”号效果，比如标绘时切换
   * @param {boolean} val 是否“+”号效果
   * @return
   */
  setCursor(val: boolean): void;

  /**
   * @description: 重新设置layers图层，对options.layers重新赋值
   * @param {Array<LayerOptions>} arr 可以叠加显示的图层配置
   * @return {Array<BaseLayer>}
   */
  setLayersOptions(arr: LayerOptions[]): BaseLayer[];

  /**
   * @description: 设置鼠标操作限定的Pitch范围
   * @param {number} max 最大值（角度值）
   * @param {number} min 最小值（角度值
   * @return
   */
  setPitchRange(max: number, min?: number): void;

  /**
   * @description: 设置Scene场景参数
   * @param {SceneOptions} options 参数
   * @return {this}
   */
  setSceneOptions(options: SceneOptions): this;

  /**
   * @description: 解除绑定的右键菜单
   * @return {this}
   */
  unbindContextMenu(): this;

  /**
   * @description: 放大地图
   * @param {number} relativeAmount 相对量
   * @return {this}
   */
  zoomIn(relativeAmount?: number): this;

  /**
   * @description: 缩小地图
   * @param {number} relativeAmount 相对量
   * @return {this}
   */
  zoomOut(relativeAmount?: number): this;
}

// 地图构造选项
export interface ConstructorOptions {
  // 场景参数
  scene?: SceneOptions;
  // 控件参数
  control?: ControlOptions;
  // 地形服务配置
  terrain?: TerrainOptions;
  // 底图图层配置
  basemaps?: BasemapOptions;
  // 可以叠加显示的图层配置
  layers?: LayerOptions;
  // 图层中统一的url模版，。比如可以将服务url前缀统一使用模板，方便修改或动态配置
  templateValues?: object;
  // 标识当前三维场景的国内坐标系（用于部分图层内对比判断来自动纠偏或加偏）
  chinaCRS?: ChinaCRS;
  // 使用的语言（如中文、英文等）
  lang?: LangType;
}

// 底图图层配置
export type BasemapOptions = {
  // 图层类型
  type: string | LayerType;
} & any;

// 控件参数
export interface ControlOptions {
  // 是否绑定默认的地图右键菜单
  defaultContextMenu?: boolean;
  // 鼠标滚轮缩放美化样式
  mouseDownView?: boolean;
  // 鼠标提示控件
  locationBar?: {
    // 是否显示实时FPS帧率
    fps?: boolean;
    // 显示内容的格式化html展示的内容格式化字符串
    // 支持以下模版配置：【鼠标所在位置】 经度:{lng}， 纬度:{lat}， 海拔：{alt}米， 【相机的】 方向角度：{heading}， 俯仰角度：{pitch}， 视高：{cameraHeight}米， 【地图的】 层级：{level}
    format?: string | Function;
  };
  // 导航球控件
  compass?: CompassConstructorOptions;
  // 比例尺控件
  distanceLegend?: DistanceLegendConstructorOptions;
  // 是否显示 点击要素之后显示的信息
  infoBox?: boolean;
  // 选择模型时，是否显示绿色框
  selectionIndicator?: boolean;
  // 是否创建 左下角仪表动画面板
  animation?: number;
  // 是否创建 下侧时间线控件面板
  timeline?: number;
  // 是否显示 basemaps底图切换按钮
  baseLayerPicker?: boolean;
  // 是否显示 全屏按钮
  fullscreenButton?: boolean;
  // 是否显示 右下角vr虚拟现实按钮
  vrButton?: boolean;
  // 是否显示 地名查找控件按钮
  geocoder?: boolean | Cesium.GeocoderService[];
  // 是否显示 视角复位按钮
  homeButton?: boolean;
  // 是否显示 二三维视图切换按钮
  sceneModePicker?: boolean;
  // 是否显示 用于在透视和正投影之间进行切换按钮
  projectionPicker?: boolean;
  // 是否显示 帮助按钮
  navigationHelpButton?: boolean;
  // 在用户明确单击按钮之前是否自动显示navigationHelpButton
  navigationInstructionsInitiallyVisible?: boolean;
  // 如果为true，则在发生渲染循环错误时，此小部件将自动向包含错误的用户显示HTML面板
  showRenderLoopErrors?: boolean;
}

// 可以叠加显示的图层配置
export interface LayerOptions {
  // 图层类型
  type: string;
  // 图层id标识
  id?: string | number;
  // 图层父级的id，一般图层管理中使用
  pid?: string | number;
  // 图层名称
  name?: string;
  // 图层是否显示
  show?: boolean;
  // 图层自定义定位视角，默认根据数据情况自动定位
  center?: CameraViewOptions;
  // 当图层支持popup弹窗时，绑定的值
  popup?: object;
  // 当图层支持tooltip弹窗时，绑定的值
  tooltip?: object;
}

// 场景参数
export interface SceneOptions {
  // 默认相机视角
  center?: CameraViewOptions;
  // 矩形范围 相机视角
  extent?: {
    // 最小经度值
    xmin: number;
    // 最大经度值
    xmax: number;
    // 最小纬度值
    ymin: number;
    // 最大纬度值
    ymax: number;
  };
  // 是否移除Cesium默认的双击事件
  removeDblClick?: boolean;
  // Cesium Ion服务的 Token令牌
  ionToken?: string;
  // 获取或设置渲染分辨率的缩放比例
  resolutionScale?: number;
  // 是否显示太阳
  showSun?: boolean;
  // 是否显示月亮
  showMoon?: boolean;
  // 是否显示天空盒
  showSkyBox?: boolean;
  // 是否显示地球大气层外光圈
  showSkyAtmosphere?: boolean;
  // 是否启用雾化效果
  fog?: boolean;
  // 是否开启快速抗锯齿
  fxaa?: boolean;
  // 是否关闭高动态范围渲染(不关闭时地图会变暗)
  highDynamicRange?: boolean;
  // 空间背景色 ，css颜色值
  backgroundColor?: string;
  // 初始场景模式
  sceneMode?: Cesium.SceneMode;
  // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存
  scene3DOnly?: boolean;
  // 在二维模式下时，地图的呈现坐标系
  mapProjection?: Cesium.MapProjection;
  // 在二维模式下时，地图是可旋转的还是可以在水平方向无限滚动
  mapMode2D?: Cesium.MapMode2D;
  // 是否开启时钟动画
  shouldAnimate?: boolean;
  // 是否启用日照阴影
  shadows?: boolean;
  // 如果此小部件应控制渲染循环，则为true，否则为false
  useDefaultRenderLoop?: boolean;
  // 使用默认渲染循环时的目标帧速率
  targetFrameRate?: number;
  // 如果为true，则以浏览器建议的分辨率渲染，并忽略 window.devicePixelRatio
  useBrowserRecommendedResolution?: boolean;
  // 如果为true，则此小部件将自动跟踪新添加的数据源的时钟设置，并在数据源的时钟发生更改时进行更新。如果要独立配置时钟，请将其设置为false
  automaticallyTrackDataSourceClocks?: boolean;
  // WebGL创建属性 传递给 Cesium.Scene 的 options
  contextOptions?: {
    // 允许纹理过滤各向异性
    allowTextureFilterAnisotropic?: boolean;
    // 是否启用webgl2
    requestWebgl2?: boolean;
    // WebGL画布
    webgl?: {
      // 是否包含alpha缓冲区，如果需要DIV透明时，需要改为true
      alpha?: boolean;
      // 是否执行抗锯齿
      antialias?: boolean;
      // 如果系统性能较低，是否创建上下文
      failIfMajorPerformanceCaveat?: boolean;
      // 绘图缓冲区的深度缓冲区至少为16位
      depth?: boolean;
      // 绘图缓冲区具有至少8位的模板缓冲区
      stencil?: boolean;
      // 对用户代理的提示，指示GPU的哪种配置适合WebGL上下文
      powerPreference?: string;
    };
  };
  // 如果为true，并且配置支持它，则使用顺序无关的半透明性
  orderIndependentTranslucency?: boolean;
  // 确定地形是否投射或接收来自光源的阴影
  terrainShadows?: Cesium.ShadowMode;
  // 如果为真，渲染帧只会在需要时发生，这是由场景中的变化决定的
  requestRenderMode?: boolean;
  // 如果requestRenderMode为true，这个值定义了在请求渲染之前允许的模拟时间的最大变化
  maximumRenderTimeChange?: number;
  // globe地球相关参数
  globe?: {
    // 是否显示地球
    show?: boolean;
    // 地球背景色 ，css颜色值
    baseColor?: string;
    // 是否启用深度监测,可以开启来测试矢量对象是否在地形下面或被遮挡
    depthTestAgainstTerrain?: boolean;
    // 是否在地球上绘制的地面大气
    showGroundAtmosphere?: boolean;
    // 是否显示昼夜区域
    enableLighting?: boolean;
    // 地形图块缓存的大小，表示为图块数。任何其他只要不需要渲染，就会释放超出此数目的图块这个框架。较大的数字将消耗更多的内存，但显示细节更快例如，当缩小然后再放大时
    tileCacheSize?: number;
    // 地形夸张倍率，用于放大地形的标量。请注意，地形夸张不会修改其他相对于椭球的图元
    terrainExaggeration?: number;
    // 地形夸张倍率，在测量高度和下侧提示的高度信息中是否转换为实际真实高度值
    realAlt?: number;
    // 形被夸大的高度。默认为0.0（相对于椭球表面缩放）。高于此高度的地形将向上缩放，低于此高度的地形将向下缩放。请注意，地形夸大不会修改任何其他图元，因为它们是相对于椭球体定位的
    terrainExaggerationRelativeHeight?: number;
  };
  // 相机操作相关参数
  cameraController?: {
    // 变焦时相机位置的最小量级（以米为单位）。默认为1
    minimumZoomDistance?: number;
    // 变焦时相机位置的最大值（以米为单位
    maximumZoomDistance?: number;
    // 鼠标滚轮放大的步长参数
    zoomFactor?: number;
    // 低于此高度时绕鼠标键绕圈，大于时绕视图中心点绕圈
    minimumCollisionTerrainHeight?: number;
    // 为false时 解除在南北极区域鼠标操作限制
    constrainedAxis?: boolean;
    // 2D和3D视图下，是否允许用户旋转相机
    enableRotate?: boolean;
    // 2D和哥伦布视图下，是否允许用户平移地图
    enableTranslate?: boolean;
    // 3D和哥伦布视图下，是否允许用户倾斜相机
    enableTilt?: boolean;
    // 是否允许 用户放大和缩小视图
    enableZoom?: boolean;
    // 是否允许 地形相机的碰撞检测
    enableCollisionDetection?: boolean;
  };
  // 时钟相关参数
  clock?: {
    // 当前的时间
    currentTime?: string | Cesium.JulianDate;
    // 当前的速度
    multiplier?: number;
  };
}

// 右键菜单配置
export interface ContextMenuOptions {
  text?: string; // 菜单文字
  iconCls?: string; // 小图标css
  show?: Function | boolean; // 菜单项是否显示的回调方法
  callback?: Function; // 菜单项单击后的回调方法
  children?: ContextMenuOptions[]; // 当有二级子菜单时，配置数组
}

// 地形服务配置
export interface TerrainOptions {
  type?: TerrainType; // 地形类型
  url: string | Cesium.Resource; // 地形服务地址
  show?: boolean; // 是否启用显示地形
  requestVertexNormals?: boolean; // 是否应该从服务器请求额外的光照信息，如果可用，以每个顶点法线的形式
  requestWaterMask?: boolean; // 是否应该向服务器请求每个瓦的水掩膜(如果有的话)
  requestMetadata?: boolean; // 是否应该从服务器请求每个块元数据(如果可用)
}

// 导出图片配置
export interface ExportImageOptions {
  download?: boolean; // 是否自动下载图片
  filename?: string; // 图片名称
  width?: number; // 图片的高度像素值
  height?: number; // 图片的高度像素值
  type?: string; // 图片格式
  encoderOptions?: number; // 可选在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略
  callback?: Function; // 截图完成后的回调方法
}

// 飞行到默认视角配置
export interface FlyHomeOptions {
  duration?: number; // 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间
}

// 矩形区域配置
export interface Rectangle {
  xmin: number; // 最小经度值, -180 至 180
  xmax: number; // 最大纬度值, -180 至 180
  ymin: number; // 最小纬度值, -90 至 90
  ymax: number; // 最大纬度值, -90 至 90
  height?: number; // 矩形高度值
}

// 摄像机视角配置
export interface CameraViewOptions {
  lng: number; // 经度值, 180 - 180
  lat: number; // 纬度值, -90 - 90
  alt: number; // 高度值
  heading?: number; // 方向角度值，绕垂直于地心的轴旋转角度, 0-360
  pitch?: number; // 俯仰角度值，绕纬度线旋转角度, 0-360
  roll?: number; // 翻滚角度值，绕经度线旋转角度, 0-360
}

// 摄像机视角配置
export interface CameraViewListOptions extends CameraViewOptions {
  duration?: number; // 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间
  stop?: number; // 该步骤飞行结束的停留时间（单位：秒）
  onStart?: Function; // 该步骤飞行开始前的回调方法
  onEnd?: Function; // 该步骤飞行开始结束后的回调方法
}

// 飞行配置
export interface FlyToOptions {
  duration?: number; // 飞行持续时间（秒）
  maximumHeight?: number; // 飞行高峰时的最大高度
  offset?: Cesium.HeadingPitchRange; // 在局部东北朝上的参考框中，距目标的偏移量为中心
}

// 飞行到矩形区域配置
export interface FlyToExtentOptions {
  scale?: number; // 缩放比例，可以控制视角比矩形略大一些，这样效果更友好
  minHeight?: number; // 定位时相机的最小高度值，用于控制避免异常数据
  maxHeight?: number; // 定位时相机的最大高度值，用于控制避免异常数据
  heading: number; // 方向角度值，绕垂直于地心的轴旋转角度, 0至360
  pitch: number; // 俯仰角度值，绕纬度线旋转角度, 0至360
  roll: number; // 翻滚角度值，绕经度线旋转角度, 0至360
  duration?: number; // 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间
  complete?: Cesium.Camera.FlightCompleteCallback; // 飞行完成后要执行的函数
  cancel?: Cesium.Camera.FlightCancelledCallback; // 飞行取消时要执行的函数
  endTransform?: Cesium.Matrix4; // 变换矩阵表示飞行结束时相机所处的参照系
  maximumHeight?: number; // 飞行高峰时的最大高度
  pitchAdjustHeight?: number; // 可选如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口
  flyOverLongitude?: number; // 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度
  flyOverLongitudeWeight?: number; // 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间
  convert?: boolean; // 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）
  easingFunction?: Cesium.EasingFunction.Callback; // 控制在飞行过程中如何插值时间
}

// 飞行到矢量对象处配置
export interface FlyToGraphicOptions extends FlyToExtentOptions {
  radius: number; // 点状数据时，相机距离目标点的距离（单位：米）
}

// 飞行到目标点配置
export interface FlyToPointOptions {
  radius: number; // 点状数据时，相机距离目标点的距离（单位：米）
  heading: number; // 方向角度值，绕垂直于地心的轴旋转角度, 0至360
  pitch: number; // 俯仰角度值，绕纬度线旋转角度, 0至360
  roll: number; // 翻滚角度值，绕经度线旋转角度, 0至360
  duration?: number; // 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间
  clampToGround?: boolean; // 是否贴地对象,true时异步计算实际高度值后进行定位
  complete?: Cesium.Camera.FlightCompleteCallback; // 飞行完成后要执行的函数
  cancel?: Cesium.Camera.FlightCancelledCallback; // 飞行取消时要执行的函数
  endTransform?: Cesium.Matrix4; // 变换矩阵表示飞行结束时相机所处的参照系
  maximumHeight?: number; // 飞行高峰时的最大高度
  pitchAdjustHeight?: number; // 可选如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口
  flyOverLongitude?: number; // 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度
  flyOverLongitudeWeight?: number; // 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间
  easingFunction?: Cesium.EasingFunction.Callback; // 控制在飞行过程中如何插值时间
}

// 飞行到坐标数组配置
export type FlyToPositionsOptions = FlyToGraphicOptions;

// 获取图层配置
export interface GetLayersOptions {
  basemaps?: boolean; // 是否包含basemps中配置的所有图层
  layers?: boolean; // 是否包含layers中配置的所有图层
  filter?: boolean; // 是否排除layers和baseps的图层
}

// 设置摄像机视角配置
export interface SetCameraViewOptions {
  duration?: number; // 行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间
  complete?: Cesium.Camera.FlightCompleteCallback; // 飞行完成后要执行的函数
  cancel?: Cesium.Camera.FlightCancelledCallback; // 飞行取消时要执行的函数
  endTransform?: Cesium.Matrix4; // 变换矩阵表示飞行结束时相机所处的参照系
  maximumHeight: number; // 飞行高峰时的最大高度
  pitchAdjustHeight: number; // 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口
  flyOverLongitude?: number; // 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度
  flyOverLongitudeWeight?: number; // 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间
  convert?: boolean; // 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）
  easingFunction?: Cesium.EasingFunction.Callback; // 控制在飞行过程中如何插值时间
}

// 旋转地球配置
export interface RotateAnimationOptions {
  duration?: number; // 动画时长（单位：秒）
  center?: CameraViewOptions; // 飞行到的指定区域视角参数
  callback?: Function; // 飞行结束的回调方法
}
