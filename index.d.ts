/*
 * @Author: Quarter
 * @Date: 2022-11-21 10:01:04
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 14:10:32
 * @FilePath: /cetc3d-declaration/index.d.ts
 * @Description:
 */

import Cesium from "cesium";
import { ChinaCRSCollection } from "./const/ChinaCRS";
import { CRSCollection } from "./const/CRS";
import { EventTypeCollection } from "./const/EventType";
import { LangTypeCollection } from "./const/LangType";
import { LayerTypeCollection } from "./const/LayerType";
import { StateCollection } from "./const/State";
import { HaoUtil } from "./util/haoutil";
import { CETC3D } from "./namespace";

declare const cetc3d: {
  // 基础类，SDK中几乎所有类的基类，都是继承该基类的
  readonly BaseClass: CETC3D.BaseClass;
  // Thing对象(如特效、分析、管理类等) 的基类
  readonly BaseThing: CETC3D.BaseThing;
  // 国内偏移坐标系
  readonly ChinaCRS: ChinaCRSCollection;
  // Cesium API
  readonly Cesium: typeof Cesium;
  // 坐标系
  readonly CRS: CRSCollection;
  // 控制器库
  readonly control: {
    // 控件 基类
    readonly BaseControl: CETC3D.BaseControl;
    // 导航球控件
    readonly Compass: CETC3D.Compass;
    // 比例尺 控件
    readonly DistanceLegend: CETC3D.DistanceLegend;
    // 鼠标经纬度等信息状态栏, 一般在页面下侧区域
    readonly LocationBar: any;
    // 卷帘对比 控件
    readonly MapSplit: any;
    // 鼠标旋转、放大时的按键效果美化图标
    readonly MouseDownView: any;
    // 工具栏 单个按钮控件
    readonly ToolButton: any;
    // 放大缩小按钮控件
    readonly Zoom: any;
  };
  // DOM操作 相关静态方法类
  readonly DomUtil: CETC3D.DomUtil;
  // 矢量数据标绘编辑相关常量
  readonly DrawUtil: CETC3D.DrawUtil;
  // 特效库
  readonly effect: {
    // 特效 基类
    readonly BaseEffect: CETC3D.BaseEffect;
    // 黑白效果
    readonly BlackAndWhiteEffect: any;
    // 泛光效果, 使明亮的区域更亮，黑暗的区域更暗
    readonly BloomEffect: any;
    // 亮度
    readonly BrightnessEffect: any;
    // 云团 效果
    readonly CloudVolumeEffect: any;
    // 景深
    readonly DepthOfFieldEffect: any;
    // 雾场景效果
    readonly FogEffect: any;
    // 倒影效果
    readonly InvertedEffect: any;
    // 马赛克效果
    readonly MosaicEffect: any;
    // 夜视效果
    readonly NightVisionEffect: any;
    // 线状 OD线效果 材质
    readonly ODLineMaterialProperty: any;
    // 地面积雪 效果
    readonly SnowCoverEffect: any;
    // 下雪效果
    readonly SnowEffect: any;
  };
  // 事件类型 枚举（所有事件统一的入口）
  readonly EventType: EventTypeCollection;
  // 矢量图形库
  readonly graphic: {
    // 攻击箭头 Entity矢量数据
    readonly AttackArrow: any;
    // 攻击箭头(平尾) Entity矢量数据
    readonly AttackArrowPW: any;
    // 攻击箭头（燕尾） Entity矢量数据
    readonly AttackArrowYW: any;
    // 大数据合并渲染Primitive对象基类
    readonly BaseCombine: any;
    // Entity实体 矢量对象 基类
    readonly BaseEntity: any;
    // 矢量数据 基础类
    readonly BaseGraphic: CETC3D.BaseGraphic;
    // 单个坐标的点状Entity矢量数据 基类
    readonly BasePointEntity: any;
    // 单个坐标的点状 Primitive图元 矢量对象 基类
    readonly BasePointPrimitive: any;
    // 多个坐标的线面状 Entity矢量数据 基类
    readonly BasePolyEntity: any;
    // 多个坐标的线面状 Primitive图元 矢量对象 基类
    readonly BasePolyPrimitive: any;
    // Primitive图元 矢量对象 基类
    readonly BasePrimitive: any;
    // 漫游路线管理类 基类
    readonly BaseRoamLine: any;
    // 图标点 Entity对象
    readonly BillboardEntity: any;
    // 图标点 Primitive矢量数据
    readonly BillboardPrimitive: any;
    // 盒子 Entity对象
    readonly BoxEntity: any;
    // 盒子 Primitive图元矢量对象
    readonly BoxPrimitive: any;
    // 双曲面拱形雷达
    readonly CamberRadar: any;
    // 圆、圆柱 Entity对象
    readonly CircleEntity: any;
    // 圆 Primitive图元矢量对象
    readonly CirclePrimitive: any;
    // 闭合曲面(3个点) Entity矢量数据
    readonly CloseVurve: any;
    // 圆锥追踪体
    readonly ConeTrack: any;
    // 圆锥体（单目标雷达）
    readonly ConicSensor: any;
    // 走廊 Entity矢量数据
    readonly CorridorEntity: any;
    // 走廊 Primitive图元 矢量对象
    readonly CorridorPrimitive: any;
    // 曲线
    readonly CurveEntity: any;
    // 圆锥 Entity对象
    readonly CylinderEntity: any;
    // 圆锥 Primitive图元矢量对象
    readonly CylinderPrimitive: any;
    // 立体面(或圆)散射效果 矢量对象
    readonly DiffuseWall: any;
    // HTML转图片后的 图标点Entity， 需要引入html2canvas或domtoimage插件进行DOM转图片
    readonly DivBillboardEntity: any;
    // 动态边框文本 DIV点
    readonly DivBoderLabel: any;
    // DIV点
    readonly DivGraphic: any;
    // 动画的扩散div点
    readonly DivLightPoint: any;
    // 竖立的文本 DIV点
    readonly DivUpLabel: any;
    // 双箭头（钳击） Entity矢量数据
    readonly DoubleArrow: any;
    // 动态河流 矢量对象
    readonly DynamicRiver: any;
    // 动态漫游路线管理类
    readonly DynamicRoamLine: any;
    readonly edit: {
      // 标绘处理对应的编辑基类
      readonly EditBase: any;
      // BoxEntity对象，标绘处理对应的编辑类
      readonly EditBox: any;
    };
    // 椭圆、椭圆柱 Entity对象
    readonly EllipseEntity: any;
    // 球、半球、椭球 Entity对象
    readonly EllipsoidEntity: any;
    // 球体 Primitive图元矢量对象
    readonly EllipsoidPrimitive: any;
    // 直箭头(2个点) Entity矢量数据
    readonly FineArrow: any;
    // 燕尾直箭头(2个点) Entity矢量数据
    readonly FineArrowYW: any;
    // 平放的图标 数据集合 (多个图标一起合并渲染)
    readonly FlatBillboard: any;
    // Font CSS字体点转图片后的图标点 Entity, 需要引入html2canvas或domtoimage插件进行DOM转图片
    readonly FontBillboardEntity: any;
    // 四棱锥体 Primitive图元矢量对象
    readonly FrustumPrimitive: any;
    // 集结地(3个点) Entity矢量数据
    readonly GatheringPlace: any;
    // 等腰三角形(3个点) Entity矢量数据
    readonly IsosTriangle: any;
    // 文字 Entity对象
    readonly LabelEntity: any;
    // 文字 Primitive矢量数据
    readonly LabelPrimitive: any;
    // 光锥体
    readonly LightCone: any;
    // 弓形面(3个点) Entity矢量数据
    readonly Lune: any;
    // 大数据 gltf小模型集合 (合并渲染) Primitive图元 矢量对象
    readonly ModelCombine: any;
    // gltf小模型 Entity对象
    readonly ModelEntity: any;
    // gltf小模型 Primitive图元矢量对象
    readonly ModelPrimitive: any;
    // 粒子效果 对象
    readonly ParticleSystem: any;
    // path路径 Entity矢量数据
    readonly PathEntity: any;
    // 平面 Primitive图元矢量对象
    readonly PlanePrimitive: any;
    // 像素点 Entity对象
    readonly PointEntity: any;
    // 像素点 Primitive矢量数据
    readonly PointPrimitive: any;
    // 大数据面集合 (合并渲染) Primitive图元 矢量对象
    readonly PolygonCombine: any;
    // 面 Entity矢量数据
    readonly PolygonEntity: any;
    // 面 Primitive图元 矢量对象
    readonly PolygonPrimitive: any;
    // 线 Entity矢量数据
    readonly PolylineEntity: any;
    // 线 Primitive图元 矢量对象
    readonly PolylinePrimitive: any;
    // 管道线 Entity矢量数据
    readonly PolylineVolumeEntity: any;
    // 管道线 Primitive图元 矢量对象
    readonly PolylineVolumePrimitive: any;
    // 矩形 Entity矢量数据
    readonly RectangleEntity: any;
    // 矩形 Primitive图元 矢量对象
    readonly RectanglePrimitive: any;
    // 相控阵雷达 Entity对象
    readonly RectangularSensor: any;
    // 四棱锥体
    readonly RectSensor: any;
    // 正多边形 Entity矢量数据
    readonly Regular: any;
    // 道路 矢量对象
    readonly Road: any;
    // 飞行漫游路线管理类
    readonly RoamLine: any;
    // 卫星综合体 对象类
    readonly Satellite: any;
    // 卫星视锥综合体（圆锥或四凌锥）
    readonly SatelliteSensor: any;
    // 走马灯围墙效果 矢量对象
    readonly ScrollWall: any;
    // 扇形(3个点) Entity矢量数据
    readonly Sector: any;
    // 直箭头(3个点) Entity矢量数据
    readonly StraightArrow: any;
    // 视频融合（投射2D平面）, 根据相机位置、方向等参数，在相机前面生成一个PolygonEntity面，然后贴视频纹理
    readonly Video2D: any;
    // 视频融合（投射3D，贴物体表面）
    readonly Video3D: any;
    // 墙 Entity矢量数据
    readonly WallEntity: any;
    // 墙 Primitive图元 矢量对象
    readonly WallPrimitive: any;
    // 水域面 Primitive图元 矢量对象
    readonly Water: any;
  };
  // 矢量数据 相关静态方法
  readonly GraphicUtil: CETC3D.GraphicUtil;
  // 近地天空盒, 在场景周围绘制星星等太空背景。 天空盒子是用真正的赤道平均春分点(TEME)轴定义的。仅在3D中支持。当转换为2D或哥伦布视图时，天空盒会淡出
  readonly GroundSkyBox: CETC3D.GroundSkyBox;
  // 语言类型
  readonly LangType: LangTypeCollection;
  // 坐标数组处理类
  readonly LatLngArray: CETC3D.LatLngArray;
  // 坐标点类（含经度、纬度、高度）
  readonly LatLngPoint: CETC3D.LatLngPoint;
  // 图层库
  readonly layer: {
    // AraGIS生成的金字塔瓦片数据
    readonly ArcGisCacheLayer: CETC3D.ArcGisCacheLayer;
    // ArcGIS标准服务图层
    readonly ArcGisLayer: CETC3D.ArcGisLayer;
    // ArcGIS WFS服务图层， 按瓦片网格分块分层加载
    readonly ArcGisWfsLayer: CETC3D.ArcGisWfsLayer;
    // ArcGIS WFS服务图层， 一次性请求加载，适合少量数据时使用
    readonly ArcGisWfsSingleLayer: any;
    // 百度地图
    readonly BaiduLayer: any;
    // 矢量数据图层 Base基类
    readonly BaseGraphicLayer: CETC3D.BaseGraphicLayer;
    // 图层对象 的基类
    readonly BaseLayer: CETC3D.BaseLayer;
    // 栅格Tile瓦片图层 基类
    readonly BaseTileLayer: CETC3D.BaseTileLayer;
    // 微软bing地图
    readonly BingLayer: any;
    // Canvas风场图层， 基于Canvas绘制
    readonly CanvasWindLayer: any;
    // GeoJSON数据图层(ceisum原生)，该类中矢量数据是使用ceisum原生方法加载的entity对象
    readonly CzmGeoJsonLayer: any;
    // CZML数据图层
    readonly CzmlLayer: any;
    // DIV图层
    readonly DivLayer: any;
    // Echarts图层
    readonly EchartsLayer: any;
    // 空白图层，目前主要在Lod矢量数据加载作为事件触发使用
    readonly EmptyTileLayer: any;
    // 高德
    readonly GaodeLayer: any;
    // GoogleEarth Enterprise企业版本 影像服务
    readonly GeeLayer: any;
    // 高德在线POI图层
    readonly GeodePoiLayer: any;
    // 加载展示 GeoJSON数据 的图层
    readonly GeoJsonLayer: any;
    // 谷歌
    readonly GoogleLayer: any;
    // 矢量数据图层组，主要用于 多图层的标绘
    readonly GraphicGroupLayer: any;
    // 矢量数据图层
    readonly GraphicLayer: CETC3D.GraphicLayer;
    // 经纬网
    readonly GraticuleLayer: any;
    // 网格线
    readonly GridLayer: any;
    // 图层组，可以用于将多个图层组合起来方便控制（比如将 卫星底图 和 文字注记层 放在一起控制管理），或用于 图层管理 的图层分组节点（虚拟节点）
    readonly GroupLayer: any;
    // 热力图图层，基于heatmap.js库渲染
    readonly HeatLayer: any;
    // 单张图片图层
    readonly ImageLayer: any;
    // cesium ion资源地图
    readonly IonLayer: any;
    // KML数据图层
    readonly KmlLayer: any;
    // 矢量数据LOD分层分块加载类
    readonly LodGraphicLayer: any;
    // Mapbox地图服务
    readonly MapboxLayer: any;
    // MapV图层
    readonly MapVLayer: any;
    // gltf小模型图层
    readonly ModelLayer: any;
    // OSM在线 建筑物模型
    readonly OsmBuildingsLayer: any;
    // OSM开源地图
    readonly OsmLayer: any;
    // 超图S3M三维模型图层
    readonly S3MLayer: any;
    // 超图影像瓦片服务图层
    readonly SmImgLayer: any;
    // 超图MVT矢量瓦片图层
    readonly SmMvtLayer: any;
    // 天地图 三维地名服务图层
    readonly TdtDmLayer: any;
    // 天地图
    readonly TdtLayer: any;
    // 腾讯
    readonly TencentLayer: any;
    // 地形服务图层，一个地图中只会生效一个地形服务图层
    readonly TerrainLayer: any;
    // 瓦片信息，一般用于测试
    readonly TileInfoLayer: any;
    // 3dtiles 三维模型图层
    readonly TilesetLayer: CETC3D.TilesetLayer;
    // TileMapService 提供由MapTiler，GDAL2Tiles等生成的切片图像
    readonly TmsLayer: any;
    // WFS图层
    readonly WfsLayer: any;
    // 风场图层，基于粒子实现
    readonly WindLayer: any;
    // WMS服务
    readonly WmsLayer: any;
    // WMTS服务
    readonly WmtsLayer: any;
    // 标准xyz金字塔
    readonly XyzLayer: any;
  };
  // 图层类型
  readonly LayerType: LayerTypeCollection;
  // 图层相关 静态方法
  readonly LayerUtil: CETC3D.LayerUtil;
  // SDK内部统一调用console.* 打印日志的控制类，在外部可以按需开启和关闭
  readonly Log: CETC3D.Log;
  // 键盘漫游控制类
  readonly KeyboardRoam: CETC3D.KeyboardRoam;
  // 地图类 ，这是构造三维地球的一切的开始起点
  readonly Map: CETC3D.Map;
  // 材质库
  readonly material: {
    // 材质属性(Entity使用) 基础类
    readonly BaseMaterialProperty: any;
    // 圆形扫描效果 材质属性
    readonly CircleScanMaterialProperty: any;
    // 圆形扩散波纹效果 材质属性
    readonly CircleWaveMaterialProperty: any;
    // 圆锥 波纹扩散效果 材质
    readonly CylinderWaveMaterial: any;
    // 球体: 电弧球体效果 材质
    readonly EllipsoidElectricMaterialProperty: any;
    // 波纹球体效果 材质
    readonly EllipsoidWaveMaterialProperty: any;
    // 线状: 闪烁线 材质
    readonly LineFlickerMaterialProperty: any;
    // 线状 流动效果 材质
    readonly LineFlowColorMaterialProperty: any;
    // 线状 流动效果 材质
    readonly LineFlowMaterialProperty: any;
    // 线状: 轨迹线 材质
    readonly LineTrailMaterialProperty: any;
    // 面状： 渐变面 材质
    readonly PolyGradientMaterialProperty: any;
    // 圆形: 雷达线(圆+旋转半径线) 材质
    readonly RadarLineMaterialProperty: any;
    // 圆形: 雷达线(圆+旋转半径线) 材质
    readonly RadarWaveMaterialProperty: any;
    // 下雨效果
    readonly RainEffect: any;
    // 矩形面： 轮播图 材质
    readonly RectSlideMaterialProperty: any;
    // 面状: 用于面状对象的 扫描线放大效果 材质属性
    readonly ScanLineMaterialProperty: any;
    // 文字贴图 primitive材质
    readonly TextMaterial: any;
    // 文字贴图 entity材质
    readonly TextMaterialProperty: any;
    // 墙体: 走马灯围墙 材质
    readonly WallScrollMaterialProperty: any;
    // 水面效果材质
    readonly WaterMaterialProperty: any;
  };
  // 材质 类型枚举
  readonly MaterialType: CETC3D.MaterialType;
  // 矢量数据材质
  readonly MaterialUtil: CETC3D.MaterialUtil;
  // 图上量算 的 常用静态方法
  readonly MeasureUtil: CETC3D.MeasureUtil;
  // 地图鼠标事件 统一管理类
  readonly MouseEvent: CETC3D.MouseEvent;
  // 坐标点的转换 相关静态方法
  readonly PointTrans: CETC3D.PointTrans;
  // 单个坐标或位置矩阵相关的处理 静态方法
  readonly PointUtil: CETC3D.PointUtil;
  // 多个点 或 线面数据 相关处理 静态方法
  readonly PolyUtil: CETC3D.PolyUtil;
  // 查询库
  readonly query: {
    // 百度 POI查询 工具类
    readonly BaiduPOI: any;
    // 高德 POI查询 工具类
    readonly GaodePOI: any;
    // 高德 路径规划 工具类
    readonly GaodeRoute: any;
    // ArcGIS WFS矢量服务查询类
    readonly QueryArcServer: any;
    // GeoServer WFS服务查询类
    readonly QueryGeoServer: any;
  };
  // 状态
  readonly State: StateCollection;
  // 天地图 地形服务
  readonly TdtTerrainProvider: CETC3D.TdtTerrainProvider;
  // 记录库
  readonly thing: {
    // 相机视角记录及处理类，含 上一视图 下一视图 等
    readonly CameraHistory: any;
    // 等高线
    readonly ContourLine: any;
    // 第一人称贴地漫游， 键盘漫游时，先单击地图激活后 按 W前进、 S后退、A左移、D右移
    readonly FirstPersonRoam: any;
    // 淹没分析， 基于polygon矢量面抬高模拟，只支持单个区域
    readonly FloodByGraphic: any;
    // 淹没分析 ， 基于地球材质，可以多个区域
    readonly FloodByMaterial: any;
    // 限高分析
    readonly LimitHeight: any;
    // 图上量算
    readonly Measure: any;
    // 测量面积 控制类， 非直接调用，由 Measure 类统一创建及管理
    readonly MeasureArea: any;
    // 单个测量对象的控制基类， 非直接调用，由 Measure 类统一创建及管理
    readonly MeasureBase: any;
    // 体积测量（方量）控制类
    readonly MeasureVolume: any;
    // Gltf模型剖切， 基于clippingPlanes接口，只支持单个开挖
    readonly ModelPlanClip: any;
    // 相机位置不动，对外四周旋转
    readonly RotateOut: any;
    // 相机绕 固定中心点 旋转
    readonly RotatePoint: any;
    // 日照分析
    readonly Shadows: any;
    // 通视分析
    readonly Sightline: any;
    // 天际线 描边
    readonly Skyline: any;
    // 坡度坡向分析
    readonly Slope: any;
    // 街景视角模式控制
    readonly StreetView: any;
    // 地形开挖， 基于地球材质，可以多个区域开挖
    readonly TerrainClip: any;
    // 地形开挖、淹没等分析 基础类
    readonly TerrainEditBase: any;
    // 地形开挖 ， 基于clippingPlanes接口，只支持单个开挖
    readonly TerrainPlanClip: any;
    // 3dtiles模型裁剪
    readonly TilesetClip: any;
    // 3dtiles模型分析（裁剪、压平、淹没） 基础类
    readonly TilesetEditBase: any;
    // 3dtiles模型压平
    readonly TilesetFlat: any;
    // 3dtiles模型淹没分析
    readonly TilesetFlood: any;
    // 3dtiles模型裁剪， 基于clippingPlanes接口，只支持单个开挖
    readonly TilesetPlanClip: any;
    // 地下模式类
    readonly Underground: any;
    // 可视域分析
    readonly ViewShed3D: any;
  };
  // 卫星TLE和SGP4相关算法类
  readonly Tle: CETC3D.Tle;
  // SDK中涉及到的所有第3放地图服务的Token令牌key
  readonly Token: CETC3D.Token;
  // 常用静态方法
  readonly Util: CETC3D.Util;
  // 网址
  readonly website: CETC3D.Website;
  // 组件库
  readonly widget: {
    // widget基础类, 需要继承后使用，不用手动实例化，框架内部自动实例化及相关处理
    readonly BaseWidget: any;
  };
  // 风场相关 静态方法
  readonly WindUtil: CETC3D.WindUtil;
};

declare const haoutil: HaoUtil;

export { cetc3d, haoutil, CETC3D, Cesium };
