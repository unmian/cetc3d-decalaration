/*
 * @Author: Quarter
 * @Date: 2022-12-01 17:13:01
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 17:33:46
 * @FilePath: /cetc3d-declaration/const/GraphicType.d.ts
 * @Description: 矢量数据类型
 */

export interface GraphicType {
  // 文本点,对应类为：LabelEntity
  readonly label: "label";
  // 文本点（图元）,对应类为：LabelPrimitive
  readonly labelP: "labelP";
  // 像素点,，对应类为：PointEntity
  readonly point: "point";
  // 像素点（图元），对应类为：PointPrimitive
  readonly pointP: "pointP";
  // 图标点，对应类为：BillboardEntity
  readonly billboard: "billboard";
  // HTML转图片后的图标点，对应类为：DivBillboardEntity
  readonly divBillboard: "divBillboard";
  // Font CSS字体点转图片后的图标点，对应类为：FontBillboardEntity
  readonly fontBillboard: "fontBillboard";
  // 图标点（图元），对应类为：BillboardPrimitive
  readonly billboardP: "billboardP";
  // gltf小模型，对应类为：ModelEntity
  readonly model: "model";
  // gltf小模型（图元）对应类为：ModelPrimitive
  readonly modelP: "modelP";
  // gltf小模型（数据集），对应类为：ModelCombine
  readonly modelCombine: "modelCombine";
  // 平面，对应类为：PlaneEntity
  readonly plane: "plane";
  // 平面（图元），对应类为：PlanePrimitive
  readonly planeP: "planeP";
  // 盒子，对应类为：BoxEntity
  readonly box: "box";
  // 盒子（图元），对应类为：BoxPrimitive
  readonly boxP: "boxP";
  // 圆、圆柱，对应类为：CircleEntity
  readonly circle: "circle";
  // 圆、圆柱（图元）对应类为：CirclePrimitive
  readonly circleP: "circleP";
  // 椭圆、椭圆柱，对应类为：EllipseEntity
  readonly ellipse: "ellipse";
  // 圆锥，对应类为：CylinderEntity
  readonly cylinder: "cylinder";
  // 圆锥（图元），对应类为：CylinderPrimitive
  readonly cylinderP: "cylinderP";
  // 圆锥追踪体，对应类为：ConeTrack
  readonly coneTrack: "coneTrack";
  // 球体，对应类为：EllipsoidEntity
  readonly ellipsoid: "ellipsoid";
  // 球体（图元），对应类为：EllipsoidPrimitive
  readonly ellipsoidP: "ellipsoidP";
  // 线，对应类为：PolylineEntity
  readonly polyline: "polyline";
  // 曲线，对应类为：CurveEntity
  readonly curve: "curve";
  // 线（图元），对应类为：PolylinePrimitive
  readonly polylineP: "polylineP";
  // 管道线，对应类为：PolylineVolumeEntity
  readonly polylineVolume: "polylineVolume";
  // 管道线（图元），对应类为：PolylineVolumePrimitive
  readonly polylineVolumeP: "polylineVolumeP";
  // 路径，对应类为：PathEntity
  readonly path: "path";
  // 走廊，对应类为：CorridorEntity
  readonly corridor: "corridor";
  // 走廊（图元），对应类为：CorridorPrimitive
  readonly corridorP: "corridorP";
  // 墙，对应类为：WallEntity
  readonly wall: "wall";
  // 墙（图元），对应类为：WallPrimitive
  readonly wallP: "wallP";
  // 面，对应类为：PolygonEntity
  readonly polygon: "polygon";
  // 面（图元）对应类为：PolygonPrimitive
  readonly polygonP: "polygonP";
  // 大数据面（数据集）对应类为：PolygonCombine
  readonly polygonCombine: "polygonCombine";
  // 矩形，对应类为：RectangleEntity
  readonly rectangle: "rectangle";
  // 矩形（图元），对应类为：RectanglePrimitive
  readonly rectangleP: "rectangleP";
  // 四棱锥体（图元），对应类为：FrustumPrimitive
  readonly frustum: "frustum";
  // 水域面，对应类为：Water
  readonly water: "water";
  // DIV点，对应类为：DivGraphic
  readonly div: "div";
  // 动画的扩散div点，对应类为：DivLightPoint
  readonly divLightPoint: "divLightPoint";
  // 竖立的文本DIV点，对应类为：DivUpLabel
  readonly divUpLabel: "divUpLabel";
  // 动态边框文本DIV点，对应类为：DivBoderLabel
  readonly divBoderLabel: "divBoderLabel";
  // 粒子效果，对应类为：ParticleSystem
  readonly particleSystem: "particleSystem";
  // 视频融合（投射2D平面），对应类为：Video2D
  readonly video2D: "video2D";
  // 视频融合（投射3D，贴物体表面）对应类为：Video3D
  readonly video3D: "video3D";
  // 平放的图标（数据集），对应类为：FlatBillboard
  readonly flatBillboard: "flatBillboard";
  // 光锥体，对应类为：LightCone
  readonly lightCone: "lightCone";
  // 走马灯围墙效果，对应类为：ScrollWall
  readonly scrollWall: "scrollWall";
  // 立体面(或圆)散射效果，对应类为：DiffuseWall
  readonly diffuseWall: "diffuseWall";
  // 动态河流，对应类为：DynamicRiver
  readonly dynamicRiver: "dynamicRiver";
  // 道路，对应类为：Road
  readonly road: "road";
  // 相控阵雷达，对应类为：RectangularSensor
  readonly rectangularSensor: "rectangularSensor";
  // 井，对应类为：Pit
  readonly pit: "pit";
  // 攻击箭头，对应类为：AttackArrow
  readonly attackArrow: "attackArrow";
  // 攻击箭头(平尾)，对应类为：AttackArrowPW
  readonly attackArrowPW: "attackArrowPW";
  // 攻击箭头（燕尾），对应类为：AttackArrowYW
  readonly attackArrowYW: "attackArrowYW";
  // 双箭头（钳击），对应类为：DoubleArrow
  readonly doubleArrow: "doubleArrow";
  // 直箭头(2个点)，对应类为：FineArrow
  readonly fineArrow: "fineArrow";
  // 燕尾直箭头(2个点)，对应类为：FineArrowYW
  readonly fineArrowYW: "fineArrowYW";
  // 直箭头(3个点)，对应类为：StraightArrow
  readonly straightArrow: "straightArrow";
  // 弓形面(3个点)，对应类为：Lune
  readonly lune: "lune";
  // 扇形(3个点)，对应类为：Sector
  readonly sector: "sector";
  // 正多边形，对应类为：Regular
  readonly regular: "regular";
  // 等腰三角形(3个点)，对应类为：IsosTriangle
  readonly isosTriangle: "isosTriangle";
  // 闭合曲面(3个点)，对应类为：CloseVurve
  readonly closeVurve: "closeVurve";
  // 集结地(3个点)，对应类为：GatheringPlace
  readonly gatheringPlace: "gatheringPlace";
  // 双曲面拱形雷达【cetc3d-space插件】，对应类为：CamberRadar
  readonly camberRadar: "camberRadar";
  // 圆锥体（单目标雷达）【cetc3d-space插件】，对应类为：ConicSensor
  readonly conicSensor: "conicSensor";
  // 四棱锥体【cetc3d-space插件】，对应类为：RectSensor
  readonly rectSensor: "rectSensor";
  // 卫星视锥综合体（圆锥或四凌锥）【cetc3d-space插件】，对应类为：SatelliteSensor
  readonly satelliteSensor: "satelliteSensor";
  // 卫星综合体【cetc3d-space插件】，对应类为：Satellite
  readonly satellite: "satellite";
}
