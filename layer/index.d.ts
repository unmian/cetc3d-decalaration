/*
 * @Author: Quarter
 * @Date: 2022-11-22 10:40:21
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-01 16:52:53
 * @FilePath: /cetc3d-declaration/layer/index.d.ts
 * @Description: 入口文件
 */

import { BaseGraphicLayer } from "./BaseGraphicLayer";
import { BaseLayer } from "./BaseLayer";
import { GraphicLayer } from "./graphicLayer/GraphicLayer";
import { TilesetLayer } from "./graphicLayer/TilesetLayer";
import { ArcGisLayer } from "./tileLayer/ArcGisLayer";
import { ArcGisCacheLayer } from "./tileLayer/ArcGisCacheLayer";
import { BaseTileLayer } from "./tileLayer/BaseTileLayer";

export interface Layer {
  // AraGIS生成的金字塔瓦片数据
  ArcGisCacheLayer: ArcGisCacheLayer;
  // ArcGIS标准服务图层
  ArcGisLayer: ArcGisLayer;
  // ArcGIS WFS服务图层， 按瓦片网格分块分层加载
  ArcGisWfsLayer: any;
  // ArcGIS WFS服务图层， 一次性请求加载，适合少量数据时使用
  ArcGisWfsSingleLayer: any;
  // 百度地图
  BaiduLayer: any;
  // 矢量数据图层 Base基类
  BaseGraphicLayer: BaseGraphicLayer;
  // 图层对象 的基类
  BaseLayer: BaseLayer;
  // 栅格Tile瓦片图层 基类
  BaseTileLayer: BaseTileLayer;
  // 微软bing地图
  BingLayer: any;
  // Canvas风场图层， 基于Canvas绘制
  CanvasWindLayer: any;
  // GeoJSON数据图层(ceisum原生)，该类中矢量数据是使用ceisum原生方法加载的entity对象
  CzmGeoJsonLayer: any;
  // CZML数据图层
  CzmlLayer: any;
  // DIV图层
  DivLayer: any;
  // Echarts图层
  EchartsLayer: any;
  // 空白图层，目前主要在Lod矢量数据加载作为事件触发使用
  EmptyTileLayer: any;
  // 高德
  GaodeLayer: any;
  // GoogleEarth Enterprise企业版本 影像服务
  GeeLayer: any;
  // 高德在线POI图层
  GeodePoiLayer: any;
  // 加载展示 GeoJSON数据 的图层
  GeoJsonLayer: any;
  // 谷歌
  GoogleLayer: any;
  // 矢量数据图层组，主要用于 多图层的标绘
  GraphicGroupLayer: any;
  // 矢量数据图层
  GraphicLayer: GraphicLayer;
  // 经纬网
  GraticuleLayer: any;
  // 网格线
  GridLayer: any;
  // 图层组，可以用于将多个图层组合起来方便控制（比如将 卫星底图 和 文字注记层 放在一起控制管理），或用于 图层管理 的图层分组节点（虚拟节点）
  GroupLayer: any;
  // 热力图图层，基于heatmap.js库渲染
  HeatLayer: any;
  // 单张图片图层
  ImageLayer: any;
  // cesium ion资源地图
  IonLayer: any;
  // KML数据图层
  KmlLayer: any;
  // 矢量数据LOD分层分块加载类
  LodGraphicLayer: any;
  // Mapbox地图服务
  MapboxLayer: any;
  // MapV图层
  MapVLayer: any;
  // gltf小模型图层
  ModelLayer: any;
  // OSM在线 建筑物模型
  OsmBuildingsLayer: any;
  // OSM开源地图
  OsmLayer: any;
  // 超图S3M三维模型图层
  S3MLayer: any;
  // 超图影像瓦片服务图层
  SmImgLayer: any;
  // 超图MVT矢量瓦片图层
  SmMvtLayer: any;
  // 天地图 三维地名服务图层
  TdtDmLayer: any;
  // 天地图
  TdtLayer: any;
  // 腾讯
  TencentLayer: any;
  // 地形服务图层，一个地图中只会生效一个地形服务图层
  TerrainLayer: any;
  // 瓦片信息，一般用于测试
  TileInfoLayer: any;
  // 3dtiles 三维模型图层
  TilesetLayer: TilesetLayer;
  // TileMapService 提供由MapTiler，GDAL2Tiles等生成的切片图像
  TmsLayer: any;
  // WFS图层
  WfsLayer: any;
  // 风场图层，基于粒子实现
  WindLayer: any;
  // WMS服务
  WmsLayer: any;
  // WMTS服务
  WmtsLayer: any;
  // 标准xyz金字塔
  XyzLayer: any;
}
