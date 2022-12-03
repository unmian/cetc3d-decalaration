/*
 * @Author: Quarter
 * @Date: 2022-12-03 10:31:15
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 10:40:18
 * @FilePath: /cetc3d-declaration/util/haoutil.d.ts
 * @Description: 木遥 通用常用JS方法类库
 */

export interface HaoUtil {
  readonly alert: Function;
  readonly array: {
    readonly indexOf: Function;
    readonly remove: Function;
    readonly insert: Function;
  };
  readonly author: string;
  readonly color: {
    readonly random: Function;
  };
  readonly cookie: {
    readonly isH5Mobile: Function;
    readonly add: Function;
    readonly get: Function;
    readonly del: Function;
  };
  readonly file: {
    readonly download: Function;
    readonly downloadBase64Image: Function;
    readonly downloadFile: Function;
    readonly downloadImage: Function;
  };
  readonly isutil: {
    readonly isArray: Function;
    readonly isDate: Function;
    readonly isFunction: Function;
    readonly isNotNull: Function;
    readonly isNull: Function;
    readonly isNumber: Function;
    readonly isObject: Function;
    readonly isString: Function;
  };
  readonly loading: {
    readonly close: Function;
    readonly hide: Function;
    readonly show: Function;
  };
  readonly math: {
    readonly getArrayRandomOne: Function;
    readonly padLeft0: Function;
    readonly random: Function;
  };
  readonly msg: Function;
  readonly name: string;
  readonly oneMsg: Function;
  readonly storage: {
    readonly add: Function;
    readonly del: Function;
    readonly get: Function;
  };
  readonly str: {
    readonly base64: Function;
    readonly decodeBase64: Function;
    readonly formatArea: Function;
    readonly formatLength: Function;
    readonly formatTime: Function;
    readonly isChinese: Function;
  };
  readonly system: {
    readonly clone: Function;
    readonly getExplorerInfo: Function;
    readonly getHtml: Function;
    readonly getRequest: Function;
    readonly getRequestByName: Function;
    readonly getWindowSize: Function;
    readonly isPCBrowser: Function;
    readonly jsonp: Function;
    readonly loadCss: Function;
    readonly loadJs: Function;
    readonly loadResource: Function;
  };
  readonly tip: Function;
  readonly update: string;
  readonly version: string;
  readonly website: string;
}
