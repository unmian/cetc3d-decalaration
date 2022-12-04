/*
 * @Author: Quarter
 * @Date: 2022-12-03 17:30:44
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-04 15:24:42
 * @FilePath: /cetc3d-declaration/namespace/index.d.ts
 * @Description: 命名空间
 */

import { KeyboardRoam as KeyboardRoamConstructor } from "../map/control/KeyboardRoam";
import { Map as MapConstructor } from "../map/Map";
import { ChinaCRS as ChinaCRSValue } from "../const/ChinaCRS";
import { CRS as CRSValue } from "../const/CRS";
import { EventType as EventTypeValue } from "../const/EventType";
import { LangType as LangTypeValue } from "../const/LangType";
import { LayerType as LayerTypeValue } from "../const/LayerType";
import { State as StateValue } from "../const/State";
import { BaseControl as BaseControlConstructor } from "../control/BaseControl";
import { DistanceLegend as DistanceLegendConstructor } from "../control/DistanceLegend";
import { Compass as CompassConstructor } from "../control/Compass";
import { BaseClass as BaseClassConstructor } from "../core/BaseClass";
import { BaseThing as BaseThingConstructor } from "../core/BaseThing";
import { LatLngPoint as LatLngPointConstructor } from "../core/LatLngPoint";
import { BaseEffect as BaseEffectConstructor } from "../effect/BaseEffect";
import { BaseGraphic as BaseGraphicConstructor } from "../graphic/BaseGraphic";
import { BaseGraphicLayer as BaseGraphicLayerConstructor } from "../layer/BaseGraphicLayer";
import { BaseLayer as BaseLayerConstructor } from "../layer/BaseLayer";
import { ArcGisWfsLayer as ArcGisWfsLayerConstructor } from "../layer/graphicLayer/ArcGisWfsLayer";
import { GraphicLayer as GraphicLayerConstructor } from "../layer/graphicLayer/GraphicLayer";
import { LodGraphicLayer as LodGraphicLayerConstructor } from "../layer/graphicLayer/LodGraphicLayer";
import { TilesetLayer as TilesetLayerConstructor } from "../layer/graphicLayer/TilesetLayer";
import { ArcGisCacheLayer as ArcGisCacheLayerConstructor } from "../layer/tileLayer/ArcGisCacheLayer";
import { ArcGisLayer as ArcGisLayerConstructor } from "../layer/tileLayer/ArcGisLayer";
import { BaseTileLayer as BaseTileLayerConstructor } from "../layer/tileLayer/BaseTileLayer";

export namespace CETC3D {
  // 金字塔瓦片图层
  type ArcGisCacheLayer = ArcGisCacheLayerConstructor;
  // ArcGIS标准服务图层
  type ArcGisLayer = ArcGisLayerConstructor;
  // ArcGIS WFS服务图层， 按瓦片网格分块分层加载
  type ArcGisWfsLayer = ArcGisWfsLayerConstructor;
  // 基础类，SDK中几乎所有类的基类，都是继承该基类的
  type BaseClass = BaseClassConstructor;
  // 控件 基类
  type BaseControl = BaseControlConstructor;
  // 特效 基类
  type BaseEffect = BaseEffectConstructor;
  // // 矢量数据 基础类
  type BaseGraphic = BaseGraphicConstructor;
  // 矢量数据图层 Base基类
  type BaseGraphicLayer = BaseGraphicLayerConstructor;
  // Thing对象(如特效、分析、管理类等) 的基类
  type BaseThing = BaseThingConstructor;
  // 栅格Tile瓦片图层 基类
  type BaseTileLayer = BaseTileLayerConstructor;
  // 栅格Tile瓦片图层 基类
  type BaseLayer = BaseLayerConstructor;
  // 国内偏移坐标系
  type ChinaCRS = ChinaCRSValue;
  // 导航球控件
  type Compass = CompassConstructor;
  // 坐标系
  type CRS = CRSValue;
  // 比例尺 控件
  type DistanceLegend = DistanceLegendConstructor;
  // DOM操作 相关静态方法类
  type DomUtil = any;
  // 矢量数据标绘编辑相关常量
  type DrawUtil = any;
  // 事件类型 枚举（所有事件统一的入口）
  type EventType = EventTypeValue;
  // 矢量数据图层
  type GraphicLayer = GraphicLayerConstructor;
  // 矢量数据 相关静态方法
  type GraphicUtil = any;
  // 近地天空盒, 在场景周围绘制星星等太空背景。 天空盒子是用真正的赤道平均春分点(TEME)轴定义的。仅在3D中支持。当转换为2D或哥伦布视图时，天空盒会淡出
  type GroundSkyBox = any;
  // 语言类型
  type LangType = LangTypeValue;
  // 坐标数组处理类
  type LatLngArray = any;
  // 坐标点类（含经度、纬度、高度）
  type LatLngPoint = LatLngPointConstructor;
  // 图层类型
  type LayerType = LayerTypeValue;
  // 图层相关 静态方法
  type LayerUtil = any;
  // 矢量数据LOD分层分块加载类
  type LodGraphicLayer = LodGraphicLayerConstructor;
  // SDK内部统一调用console.* 打印日志的控制类，在外部可以按需开启和关闭
  type Log = any;
  // 键盘漫游控制类
  type KeyboardRoam = KeyboardRoamConstructor;
  // 地图类 ，这是构造三维地球的一切的开始起点
  type Map = MapConstructor;
  // 材质 类型枚举
  type MaterialType = any;
  // 矢量数据材质
  type MaterialUtil = any;
  // 图上量算 的 常用静态方法
  type MeasureUtil = any;
  // 地图鼠标事件 统一管理类
  type MouseEvent = any;
  // 坐标点的转换 相关静态方法
  type PointTrans = any;
  // 单个坐标或位置矩阵相关的处理 静态方法
  type PointUtil = any;
  // 多个点 或 线面数据 相关处理 静态方法
  type PolyUtil = any;
  // 状态
  type State = StateValue;
  // 天地图 地形服务
  type TdtTerrainProvider = any;
  // 3dtiles 三维模型图层
  type TilesetLayer = TilesetLayerConstructor;
  // 卫星TLE和SGP4相关算法类
  type Tle = any;
  // SDK中涉及到的所有第3放地图服务的Token令牌key
  type Token = any;
  // 常用静态方法
  type Util = any;
  // 网址
  type Website = string;
  // 风场相关 静态方法
  type WindUtil = any;
}
