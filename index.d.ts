/*
 * @Author: Quarter
 * @Date: 2022-11-21 10:01:04
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 10:40:41
 * @FilePath: /cetc3d-declaration/index.d.ts
 * @Description:
 */

import Cesium from "cesium";
import { BaseClass as BaseClassConstructor } from "./core/BaseClass";
import { BaseThing as BaseThingConstructor } from "./core/BaseThing";
import { KeyboardRoam as KeyboardRoamConstructor } from "./map/control/KeyboardRoam";
import { Map as MapConstructor } from "./map/Map";
import { ChinaCRS as ChinaCRSDeclaration } from "./const/ChinaCRS";
import { CRS as CRSDeclaration } from "./const/CRS";
import { EventType as EventTypeDeclaration } from "./const/EventType";
import { LangType as LangTypeDeclaration } from "./const/LangType";
import { LayerType as LayerTypeDeclaration } from "./const/LayerType";
import { State as StateDeclaration } from "./const/State";
import { Control } from "./control";
import { Effect as EffectConstructor } from "./effect";
import { Graphic as GraphicConstructor } from "./graphic";
import { Layer as LayerDeclaration } from "./layer";
import { Material as MaterialDeclaration } from "./material";
import { Query as QueryDeclaration } from "./query";
import { Thing as ThingDeclaration } from "./thing";
import { HaoUtil } from "./util/haoutil";
import { Widget as WidgetDeclaration } from "./widget";

declare namespace CETC3D {
  // 基础类，SDK中几乎所有类的基类，都是继承该基类的
  type BaseClass = BaseClassConstructor;
  // Thing对象(如特效、分析、管理类等) 的基类
  type BaseThing = BaseThingConstructor;
  // 国内偏移坐标系
  type ChinaCRS = ChinaCRSDeclaration;
  // 坐标系
  type CRS = CRSDeclaration;
  // 控制器库
  type control = Control;
  // DOM操作 相关静态方法类
  type DomUtil = any;
  // 矢量数据标绘编辑相关常量
  type DrawUtil = any;
  // 特效库
  type Effect = EffectConstructor;
  // 事件类型 枚举（所有事件统一的入口）
  type EventType = EventTypeDeclaration;
  // 矢量图形库
  type Graphic = GraphicConstructor;
  // 矢量数据 相关静态方法
  type GraphicUtil = any;
  // 近地天空盒, 在场景周围绘制星星等太空背景。 天空盒子是用真正的赤道平均春分点(TEME)轴定义的。仅在3D中支持。当转换为2D或哥伦布视图时，天空盒会淡出
  type GroundSkyBox = any;
  // 语言类型
  type LangType = LangTypeDeclaration;
  // 坐标数组处理类
  type LatLngArray = any;
  // 坐标点类（含经度、纬度、高度）
  type LatLngPoint = any;
  // 图层库
  type Layer = LayerDeclaration;
  // 图层类型
  type LayerType = LayerTypeDeclaration;
  // 图层相关 静态方法
  type LayerUtil = any;
  // SDK内部统一调用console.* 打印日志的控制类，在外部可以按需开启和关闭
  type Log = any;
  // 键盘漫游控制类
  type KeyboardRoam = KeyboardRoamConstructor;
  // 地图类 ，这是构造三维地球的一切的开始起点
  type Map = MapConstructor;
  // 材质库
  type Material = MaterialDeclaration;
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
  // 查询库
  type Query = QueryDeclaration;
  // 状态
  type State = StateDeclaration;
  // 天地图 地形服务
  type TdtTerrainProvider = any;
  // 记录库
  type Thing = ThingDeclaration;
  // 卫星TLE和SGP4相关算法类
  type Tle = any;
  // SDK中涉及到的所有第3放地图服务的Token令牌key
  type Token = any;
  // 常用静态方法
  type Util = any;
  // 网址
  type Website = string;
  // 组件库
  type Widget = WidgetDeclaration;
  // 风场相关 静态方法
  type WindUtil = any;
}

declare const cetc3d: {
  // 基础类，SDK中几乎所有类的基类，都是继承该基类的
  readonly BaseClass: CETC3D.BaseClass;
  // Thing对象(如特效、分析、管理类等) 的基类
  readonly BaseThing: CETC3D.BaseThing;
  // 国内偏移坐标系
  readonly ChinaCRS: CETC3D.ChinaCRS;
  // Cesium API
  readonly Cesium: typeof Cesium;
  // 坐标系
  readonly CRS: CETC3D.CRS;
  // 控制器库
  readonly control: CETC3D.control;
  // DOM操作 相关静态方法类
  readonly DomUtil: CETC3D.DomUtil;
  // 矢量数据标绘编辑相关常量
  readonly DrawUtil: CETC3D.DrawUtil;
  // 特效库
  readonly effect: CETC3D.Effect;
  // 事件类型 枚举（所有事件统一的入口）
  readonly EventType: CETC3D.EventType;
  // 矢量图形库
  readonly graphic: CETC3D.Graphic;
  // 矢量数据 相关静态方法
  readonly GraphicUtil: CETC3D.GraphicUtil;
  // 近地天空盒, 在场景周围绘制星星等太空背景。 天空盒子是用真正的赤道平均春分点(TEME)轴定义的。仅在3D中支持。当转换为2D或哥伦布视图时，天空盒会淡出
  readonly GroundSkyBox: CETC3D.GroundSkyBox;
  // 语言类型
  readonly LangType: CETC3D.LangType;
  // 坐标数组处理类
  readonly LatLngArray: CETC3D.LatLngArray;
  // 坐标点类（含经度、纬度、高度）
  readonly LatLngPoint: CETC3D.LatLngPoint;
  // 图层库
  readonly layer: CETC3D.Layer;
  // 图层类型
  readonly LayerType: CETC3D.LayerType;
  // 图层相关 静态方法
  readonly LayerUtil: CETC3D.LayerUtil;
  // SDK内部统一调用console.* 打印日志的控制类，在外部可以按需开启和关闭
  readonly Log: CETC3D.Log;
  // 键盘漫游控制类
  readonly KeyboardRoam: CETC3D.KeyboardRoam;
  // 地图类 ，这是构造三维地球的一切的开始起点
  readonly Map: CETC3D.Map;
  // 材质库
  readonly material: CETC3D.Material;
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
  readonly query: CETC3D.Query;
  // 状态
  readonly State: CETC3D.State;
  // 天地图 地形服务
  readonly TdtTerrainProvider: CETC3D.TdtTerrainProvider;
  // 记录库
  readonly thing: CETC3D.Thing;
  // 卫星TLE和SGP4相关算法类
  readonly Tle: CETC3D.Tle;
  // SDK中涉及到的所有第3放地图服务的Token令牌key
  readonly Token: CETC3D.Token;
  // 常用静态方法
  readonly Util: CETC3D.Util;
  // 网址
  readonly website: CETC3D.Website;
  // 组件库
  readonly widget: CETC3D.Widget;
  // 风场相关 静态方法
  readonly WindUtil: CETC3D.WindUtil;
};

declare const haoutil: HaoUtil;
