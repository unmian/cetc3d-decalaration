/*
 * @Author: Quarter
 * @Date: 2022-11-22 10:43:10
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 14:35:28
 * @FilePath: /cetc3d-declaration/graphic/index.d.ts
 * @Description: 矢量类入口
 */

import { BaseGraphic } from "./BaseGraphic";

export interface Graphic {
  // 攻击箭头 Entity矢量数据
  AttackArrow: any;
  // 攻击箭头(平尾) Entity矢量数据
  AttackArrowPW: any;
  // 攻击箭头（燕尾） Entity矢量数据
  AttackArrowYW: any;
  // 大数据合并渲染Primitive对象基类
  BaseCombine: any;
  // Entity实体 矢量对象 基类
  BaseEntity: any;
  // 矢量数据 基础类
  BaseGraphic: BaseGraphic;
  // 单个坐标的点状Entity矢量数据 基类
  BasePointEntity: any;
  // 单个坐标的点状 Primitive图元 矢量对象 基类
  BasePointPrimitive: any;
  // 多个坐标的线面状 Entity矢量数据 基类
  BasePolyEntity: any;
  // 多个坐标的线面状 Primitive图元 矢量对象 基类
  BasePolyPrimitive: any;
  // Primitive图元 矢量对象 基类
  BasePrimitive: any;
  // 漫游路线管理类 基类
  BaseRoamLine: any;
  // 图标点 Entity对象
  BillboardEntity: any;
  // 图标点 Primitive矢量数据
  BillboardPrimitive: any;
  // 盒子 Entity对象
  BoxEntity: any;
  // 盒子 Primitive图元矢量对象
  BoxPrimitive: any;
  // 双曲面拱形雷达
  CamberRadar: any;
  // 圆、圆柱 Entity对象
  CircleEntity: any;
  // 圆 Primitive图元矢量对象
  CirclePrimitive: any;
  // 闭合曲面(3个点) Entity矢量数据
  CloseVurve: any;
  // 圆锥追踪体
  ConeTrack: any;
  // 圆锥体（单目标雷达）
  ConicSensor: any;
  // 走廊 Entity矢量数据
  CorridorEntity: any;
  // 走廊 Primitive图元 矢量对象
  CorridorPrimitive: any;
  // 曲线
  CurveEntity: any;
  // 圆锥 Entity对象
  CylinderEntity: any;
  // 圆锥 Primitive图元矢量对象
  CylinderPrimitive: any;
  // 立体面(或圆)散射效果 矢量对象
  DiffuseWall: any;
  // HTML转图片后的 图标点Entity， 需要引入html2canvas或domtoimage插件进行DOM转图片
  DivBillboardEntity: any;
  // 动态边框文本 DIV点
  DivBoderLabel: any;
  // DIV点
  DivGraphic: any;
  // 动画的扩散div点
  DivLightPoint: any;
  // 竖立的文本 DIV点
  DivUpLabel: any;
  // 双箭头（钳击） Entity矢量数据
  DoubleArrow: any;
  // 动态河流 矢量对象
  DynamicRiver: any;
  // 动态漫游路线管理类
  DynamicRoamLine: any;
  edit: {
    // 标绘处理对应的编辑基类
    EditBase: any;
    // BoxEntity对象，标绘处理对应的编辑类
    EditBox: any;
  };
  // 椭圆、椭圆柱 Entity对象
  EllipseEntity: any;
  // 球、半球、椭球 Entity对象
  EllipsoidEntity: any;
  // 球体 Primitive图元矢量对象
  EllipsoidPrimitive: any;
  // 直箭头(2个点) Entity矢量数据
  FineArrow: any;
  // 燕尾直箭头(2个点) Entity矢量数据
  FineArrowYW: any;
  // 平放的图标 数据集合 (多个图标一起合并渲染)
  FlatBillboard: any;
  // Font CSS字体点转图片后的图标点 Entity, 需要引入html2canvas或domtoimage插件进行DOM转图片
  FontBillboardEntity: any;
  // 四棱锥体 Primitive图元矢量对象
  FrustumPrimitive: any;
  // 集结地(3个点) Entity矢量数据
  GatheringPlace: any;
  // 等腰三角形(3个点) Entity矢量数据
  IsosTriangle: any;
  // 文字 Entity对象
  LabelEntity: any;
  // 文字 Primitive矢量数据
  LabelPrimitive: any;
  // 光锥体
  LightCone: any;
  // 弓形面(3个点) Entity矢量数据
  Lune: any;
  // 大数据 gltf小模型集合 (合并渲染) Primitive图元 矢量对象
  ModelCombine: any;
  // gltf小模型 Entity对象
  ModelEntity: any;
  // gltf小模型 Primitive图元矢量对象
  ModelPrimitive: any;
  // 粒子效果 对象
  ParticleSystem: any;
  // path路径 Entity矢量数据
  PathEntity: any;
  // 平面 Primitive图元矢量对象
  PlanePrimitive: any;
  // 像素点 Entity对象
  PointEntity: any;
  // 像素点 Primitive矢量数据
  PointPrimitive: any;
  // 大数据面集合 (合并渲染) Primitive图元 矢量对象
  PolygonCombine: any;
  // 面 Entity矢量数据
  PolygonEntity: any;
  // 面 Primitive图元 矢量对象
  PolygonPrimitive: any;
  // 线 Entity矢量数据
  PolylineEntity: any;
  // 线 Primitive图元 矢量对象
  PolylinePrimitive: any;
  // 管道线 Entity矢量数据
  PolylineVolumeEntity: any;
  // 管道线 Primitive图元 矢量对象
  PolylineVolumePrimitive: any;
  // 矩形 Entity矢量数据
  RectangleEntity: any;
  // 矩形 Primitive图元 矢量对象
  RectanglePrimitive: any;
  // 相控阵雷达 Entity对象
  RectangularSensor: any;
  // 四棱锥体
  RectSensor: any;
  // 正多边形 Entity矢量数据
  Regular: any;
  // 道路 矢量对象
  Road: any;
  // 飞行漫游路线管理类
  RoamLine: any;
  // 卫星综合体 对象类
  Satellite: any;
  // 卫星视锥综合体（圆锥或四凌锥）
  SatelliteSensor: any;
  // 走马灯围墙效果 矢量对象
  ScrollWall: any;
  // 扇形(3个点) Entity矢量数据
  Sector: any;
  // 直箭头(3个点) Entity矢量数据
  StraightArrow: any;
  // 视频融合（投射2D平面）, 根据相机位置、方向等参数，在相机前面生成一个PolygonEntity面，然后贴视频纹理
  Video2D: any;
  // 视频融合（投射3D，贴物体表面）
  Video3D: any;
  // 墙 Entity矢量数据
  WallEntity: any;
  // 墙 Primitive图元 矢量对象
  WallPrimitive: any;
  // 水域面 Primitive图元 矢量对象
  Water: any;
}
