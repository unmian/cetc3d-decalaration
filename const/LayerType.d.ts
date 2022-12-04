/*
 * @Author: Quarter
 * @Date: 2022-11-22 19:31:45
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 17:22:19
 * @FilePath: /cetc3d-declaration/const/LayerType.d.ts
 * @Description: 图层类型
 */

// 图层类型
export interface LayerTypeCollection {
  // 3dtiles三维模型图层
  "3dtiles": "3dtiles";
  // ArcGIS服务
  arcgis: "arcgis";
  // AraGIS生成的金字塔瓦片数据
  arcgis_cache: "arcgis_cache";
  // ArcGIS Feature Server服务（分块分层加载）
  arcgis_wfs: "arcgis_wfs";
  // ArcGIS Feature Server服务（一次性加载，适合小数据）
  arcgis_wfs_single: "arcgis_wfs_single";
  // 百度在线地图
  baidu: "baidu";
  // 微软Bing地图
  bing: "bing";
  // canvas风场图层【cetc3d-wind插件】
  canvasWind: "canvasWind";
  // GeoJson数据图层(Cesium原生加载渲染)
  czmGeojson: "czmGeojson";
  // czml数据图层(Cesium原生加载渲染)
  czml: "czml";
  // DIV图层
  div: "div";
  // Echarts图层【cetc3d-echarts插件】
  echarts: "echarts";
  // 高德在线地图
  gaode: "gaode";
  // 高德POI服务
  gaodePOI: "gaodePOI";
  // GoogleEarth Enterprise 地图服务
  gee: "gee";
  // GeoJson格式数据（使用Graphic渲染）
  geojson: "geojson";
  gltf: "gltf";
  // 谷歌在线地图
  google: "google";
  // 矢量数据图层
  graphic: "graphic";
  // 矢量数据图层组
  graphicGroup: "graphicGroup";
  // 经纬网
  graticule: "graticule";
  // 网格线（一般用于无地图模式）
  grid: "grid";
  // 图层组
  group: "group";
  // 热力图图层【cetc3d-heat插件】
  heat: "heat";
  // 单张图片
  image: "image";
  // Cesium Ion在线地图
  ion: "ion";
  // kml数据图层(Cesium原生加载渲染)
  kml: "kml";
  // LOD分层分块加载矢量数据
  lodGraphic: "lodGraphic";
  // Mapbox在线地图
  mapbox: "mapbox";
  // MapV图层【cetc3d-mapv插件】
  mapv: "mapv";
  // gltf小模型图层
  model: "model";
  // OSM在线地图
  osm: "osm";
  // OSM在线三维白膜服务
  osmBuildings: "osmBuildings";
  // 超图影像切片图层【cetc3d-supermap插件】
  supermap_img: "supermap_img";
  // 超图MVT矢量瓦片图层【cetc3d-supermap插件】
  supermap_mvt: "supermap_mvt";
  // 超图S3M图层【cetc3d-supermap插件】
  supermap_s3m: "supermap_s3m";
  // 天地图在线地图
  tdt: "tdt";
  // 天地图三维地名【cetc3d-tdt插件】
  tdt_dm: "tdt_dm";
  // 腾讯在线地图
  tencent: "tencent";
  // 地形服务
  terrain: "terrain";
  // 瓦片信息（一般用于测试）
  tileinfo: "tileinfo";
  tileset: "tileset";
  // 由MapTiler、GDAL2Tiles等生成的瓦片数据图层
  tms: "tms";
  // OGC标准的WFS服务
  wfs: "wfs";
  // 风场图层【cetc3d-wind插件】
  wind: "wind";
  // OGC标准的WMS服务
  wms: "wms";
  // OGC标准的WMTS服务
  wmts: "wmts";
  // 标准XYZ金字塔
  xyz: "xyz";
}

// 图层类型值
export type LayerType = LayerTypeCollection[keyof LayerTypeCollection];
