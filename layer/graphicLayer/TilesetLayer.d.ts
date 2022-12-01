/*
 * @Author: Quarter
 * @Date: 2022-11-30 17:18:41
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 16:55:50
 * @FilePath: /cetc3d-declaration/layer/graphicLayer/TilesetLayer.d.ts
 * @Description: 3dtiles 三维模型图层
 */

import Cesium from "cesium";
import {
  BaseGraphicLayer,
  ConstructorOptions as BaseGraphicLayerConstructorOptions,
} from "../BaseGraphicLayer";
import { ChinaCRS } from "../../const/ChinaCRS";
import { LatLngPoint } from "../../core/LatLngPoint";
import { EventType } from "../../const/EventType";

export interface TilesetLayer extends BaseGraphicLayer {
  // 当前类支持的EventType事件类型
  readonly EventType: Pick<
    EventType,
    // 3dtiles模型，模型瓦片初始化完成 该回调只执行一次
    | "initialTilesLoaded"
    // 3dtiles模型
    | "allTilesLoaded"
    // 完成加载，但未做任何其他处理前
    | "loadBefore"
    // 完成加载，执行所有内部处理后
    | "load"
  > &
    BaseGraphicLayer["EventType"];
  // 轴方向
  axis: string | Cesium.Axis;
  // 模型当前中心点坐标
  center: LatLngPoint;
  // 调整修改模型高度
  height: LatLngPoint;
  // 开启或设置建筑物特效样式
  marsJzwStyle: boolean | object;
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
  // 是否鼠标单击高亮显示模型构件
  readonly showClickFeature: boolean;
  // 模型样式
  style: object | Cesium.Cesium3DTileStyle;
  // 模型对应的 Cesium3DTileset对象
  readonly tileset: Cesium.Cesium3DTileset;

  /**
   * @description: 构造函数
   * @param {ConstructorOptions} options 配置项
   * @return {TilesetLayer}
   */
  new (options: ConstructorOptions): TilesetLayer;

  /**
   * @description: 模型自动贴地计算及处理, 因为模型在设计或生产时，模型的视角中心位置不一定在0,0,0点，此方法不是唯一准确的
   * @param {number} addHeight 计算完成的贴地高度基础上增加的高度值
   * @return
   */
  clampToGround(addHeight?: number): void;

  /**
   * @description: 获取构件节点位置，现对于原始矩阵变化后的新位置
   * @param {Cesium.Cartesian3} position 原始位置
   * @return {Cesium.Cartesian3}
   */
  getPositionByOrginMatrix(position: Cesium.Cartesian3): Cesium.Cartesian3;

  /**
   * @description: 设置透明度
   * @param {number} value 值
   * @return
   */
  setOpacity(value: number): void;

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
