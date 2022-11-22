/*
 * @Author: Quarter
 * @Date: 2022-11-21 10:01:04
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 19:53:18
 * @FilePath: /cetc3d-declaration/index.d.ts
 * @Description:
 */

import { BaseClass as BaseClassConstructor } from "./core/BaseClass";
import { BaseThing as BaseThingConstructor } from "./core/BaseThing";
import { KeyboardRoam as KeyboardRoamConstructor } from "./map/control/KeyboardRoam";
import { Map as MapConstructor } from "./map/Map";
import { ChinaCRS } from "./const/ChinaCRS";
import { CRS } from "./const/CRS";
import { EventType } from "./const/EventType";
import { LangType } from "./const/LangType";
import { LayerType } from "./const/LayerType";
import { State } from "./const/State";
import { Control } from "./control";
import { Effect } from "./effect";
import { Graphic } from "./graphic";
import { Layer } from "./layer";
import { Material } from "./material";
import { Query } from "./query";
import { Thing } from "./thing";
import { Widget } from "./widget";

export default interface cetc3d {
  // 基础类，SDK中几乎所有类的基类，都是继承该基类的
  readonly BaseClass: BaseClassConstructor;
  // Thing对象(如特效、分析、管理类等) 的基类
  readonly BaseThing: BaseThingConstructor;
  // 国内偏移坐标系
  readonly ChinaCRS: ChinaCRS;
  // 坐标系
  readonly CRS: CRS;
  // 控制器库
  readonly control: Control;
  // DOM操作 相关静态方法类
  readonly DomUtil: any;
  // 矢量数据标绘编辑相关常量
  readonly DrawUtil: any;
  // 特效库
  readonly effect: Effect;
  // 事件类型 枚举（所有事件统一的入口）
  readonly EventType: EventType;
  // 矢量图形库
  readonly graphic: Graphic;
  // 矢量数据 相关静态方法
  readonly GraphicUtil: any;
  // 近地天空盒, 在场景周围绘制星星等太空背景。 天空盒子是用真正的赤道平均春分点(TEME)轴定义的。仅在3D中支持。当转换为2D或哥伦布视图时，天空盒会淡出
  readonly GroundSkyBox: any;
  // 语言类型
  readonly LangType: LangType;
  // 坐标数组处理类
  readonly LatLngArray: any;
  // 坐标点类（含经度、纬度、高度）
  readonly LatLngPoint: any;
  // 图层库
  readonly layer: Layer;
  // 图层类型
  readonly LayerType: LayerType;
  // 图层相关 静态方法
  readonly LayerUtil: any;
  // SDK内部统一调用console.* 打印日志的控制类，在外部可以按需开启和关闭
  readonly Log: any;
  // 键盘漫游控制类
  readonly KeyboardRoam: KeyboardRoamConstructor;
  // 地图类 ，这是构造三维地球的一切的开始起点
  readonly Map: MapConstructor;
  // 材质库
  readonly material: Material;
  // 材质 类型枚举
  readonly MaterialType: any;
  // 矢量数据材质
  readonly MaterialUtil: any;
  // 图上量算 的 常用静态方法
  readonly MeasureUtil: any;
  // 地图鼠标事件 统一管理类
  readonly MouseEvent: any;
  // 坐标点的转换 相关静态方法
  readonly PointTrans: any;
  // 单个坐标或位置矩阵相关的处理 静态方法
  readonly PointUtil: any;
  // 多个点 或 线面数据 相关处理 静态方法
  readonly PolyUtil: any;
  // 查询库
  readonly query: Query;
  // 状态
  readonly State: State;
  // 天地图 地形服务
  readonly TdtTerrainProvider: any;
  // 记录库
  readonly thing: Thing;
  // 卫星TLE和SGP4相关算法类
  readonly Tle: any;
  // SDK中涉及到的所有第3放地图服务的Token令牌key
  readonly Token: any;
  // 常用静态方法
  readonly Util: any;
  // 网址
  readonly website: string;
  // 组件库
  readonly widget: Widget;
  // 风场相关 静态方法
  readonly WindUtil: any;
}
