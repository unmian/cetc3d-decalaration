/*
 * @Author: Quarter
 * @Date: 2022-11-22 10:59:21
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 14:57:14
 * @FilePath: /cetc3d-declaration/thing/index.d.ts
 * @Description: 记录
 */

export interface Thing {
  // 相机视角记录及处理类，含 上一视图 下一视图 等
  CameraHistory: any;
  // 等高线
  ContourLine: any;
  // 第一人称贴地漫游， 键盘漫游时，先单击地图激活后 按 W前进、 S后退、A左移、D右移
  FirstPersonRoam: any;
  // 淹没分析， 基于polygon矢量面抬高模拟，只支持单个区域
  FloodByGraphic: any;
  // 淹没分析 ， 基于地球材质，可以多个区域
  FloodByMaterial: any;
  // 限高分析
  LimitHeight: any;
  // 图上量算
  Measure: any;
  // 测量面积 控制类， 非直接调用，由 Measure 类统一创建及管理
  MeasureArea: any;
  // 单个测量对象的控制基类， 非直接调用，由 Measure 类统一创建及管理
  MeasureBase: any;
  // 体积测量（方量）控制类
  MeasureVolume: any;
  // Gltf模型剖切， 基于clippingPlanes接口，只支持单个开挖
  ModelPlanClip: any;
  // 相机位置不动，对外四周旋转
  RotateOut: any;
  // 相机绕 固定中心点 旋转
  RotatePoint: any;
  // 日照分析
  Shadows: any;
  // 通视分析
  Sightline: any;
  // 天际线 描边
  Skyline: any;
  // 坡度坡向分析
  Slope: any;
  // 街景视角模式控制
  StreetView: any;
  // 地形开挖， 基于地球材质，可以多个区域开挖
  TerrainClip: any;
  // 地形开挖、淹没等分析 基础类
  TerrainEditBase: any;
  // 地形开挖 ， 基于clippingPlanes接口，只支持单个开挖
  TerrainPlanClip: any;
  // 3dtiles模型裁剪
  TilesetClip: any;
  // 3dtiles模型分析（裁剪、压平、淹没） 基础类
  TilesetEditBase: any;
  // 3dtiles模型压平
  TilesetFlat: any;
  // 3dtiles模型淹没分析
  TilesetFlood: any;
  // 3dtiles模型裁剪， 基于clippingPlanes接口，只支持单个开挖
  TilesetPlanClip: any;
  // 地下模式类
  Underground: any;
  // 可视域分析
  ViewShed3D: any;
}
