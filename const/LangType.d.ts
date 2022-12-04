/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:39:12
 * @LastEditors: Quarter
 * @LastEditTime: 2022-12-03 17:21:55
 * @FilePath: /cetc3d-declaration/const/LangType.d.ts
 * @Description: 常量
 */

// 语言类型
export interface LangTypeCollection {
  // 简体中文
  readonly ZH: 0;
  // 繁体中文(香港、台湾等地区)
  readonly ZHHK: 1;
  // English英文 en
  readonly EN: 2;
}

// 语言类型值
export type LangType = LangTypeCollection[keyof LangTypeCollection];
