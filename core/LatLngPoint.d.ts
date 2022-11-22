/*
 * @Author: Quarter
 * @Date: 2022-11-21 19:59:52
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 16:28:26
 * @FilePath: /cetc3d-declaration/core/LatLngPoint.d.ts
 * @Description: 坐标点类（含经度、纬度、高度）
 */

import Cesium from "cesium";

export interface LatLngPoint {
  // 高度（单位：米）
  alt: number;
  // 纬度值, -180 至 180
  lat: number;
  // 经度值, -180 至 180
  lng: number;

  /**
   * @description: 构造函数
   * @param {number} lng 经度值, -180 至 180
   * @param {number} lat 纬度值, -90 至 90
   * @param {number} alt 高度（单位：米）
   * @return {LatLngPoint}
   */
  new (lng: number, lat: number, alt: number): LatLngPoint;

  /**
   * @description: 根据数组数据，转换返回LatLngPoint对象
   * @return {LatLngPoint}
   */
  fromArray(arr: number[]): LatLngPoint;

  /**
   * @description: 根据传入的笛卡尔坐标，转换返回LatLngPoint对象
   * @param {Cesium.Cartesian3} cartesian 坐标位置
   * @param {Cesium.JulianDate} time Cesium坐标时，getValue传入的时间值
   * @return {LatLngPoint}
   */
  fromCartesian(cartesian: Cesium.Cartesian3, time?: Cesium.JulianDate): LatLngPoint;

  /**
   * @description: 根据传入字符串，转换返回LatLngPoint对象
   * @param {string} str 坐标位置字符串，逗号分割
   * @return {LatLngPoint}
   */
  fromString(str: string): LatLngPoint;

  /**
   * @description: 根据传入的各种对象数据，转换返回LatLngPoint对象
   * @param {string|Array<number>|object|Cesium.Cartesian3} position 坐标位置
   * @param {Cesium.JulianDate} time Cesium坐标时，getValue传入的时间值
   * @return {LatLngPoint}
   */
  parse(
    position: string | number[] | object | Cesium.Cartesian3,
    time?: Cesium.JulianDate,
  ): LatLngPoint;

  /**
   * @description: 复制一份对象
   * @return
   */
  clone(): void;

  /**
   * @description: 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
   * @return {boolean}
   */
  equals(other?: LatLngPoint): boolean;

  /**
   * @description: 格式化对象内的经纬度的小数位为6位，高度小数位为1位
   * @return {this}
   */
  format(): this;

  /**
   * @description: 转换为数组对象
   * @return {Array<number>}
   */
  toArray(): number[];

  /**
   * @description: 转换为笛卡尔坐标
   * @param {boolean} clone 是否复制
   * @return {Cesium.Cartesian3}
   */
  toCartesian(clone: boolean): Cesium.Cartesian3;

  /**
   * @description: 转换为Cartographic坐标
   * @return {Cesium.Cartographic}
   */
  toCartographic(): Cesium.Cartographic;

  /**
   * @description: 转换为字符串对象
   * @return {string}
   */
  toString(): string;
}
