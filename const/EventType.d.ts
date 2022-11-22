/*
 * @Author: Quarter
 * @Date: 2022-11-21 11:39:12
 * @LastEditors: Quarter
 * @LastEditTime: 2022-11-22 19:26:14
 * @FilePath: /cetc3d-declaration/const/EventType.d.ts
 * @Description: 常量
 */

// 事件类型 枚举（所有事件统一的入口）
export interface EventType {
  // 添加对象
  add: "add";
  // 移除对象
  readonly remove: "remove";
  // 添加矢量数据时[图层上监听时使用]
  readonly addGraphic: "addGraphic";
  // 移除矢量数据时[图层上监听时使用]
  readonly removeGraphic: "removeGraphic";
  // 添加图层[map上监听时使用]
  readonly addLayer: "addLayer";
  // 移除图层[map上监听时使用]
  readonly removeLayer: "removeLayer";
  // 更新了对象
  readonly update: "update";
  // 更新了style对象
  readonly updateStyle: "updateStyle";
  // 更新了attr对象
  readonly updateAttr: "updateAttr";
  // 显示了对象
  readonly show: "show";
  // 隐藏了对象
  readonly hide: "hide";
  // 开始
  readonly start: "start";
  // 变化了
  readonly change: "change";
  // 多个数据异步分析时，完成其中一个时的回调事件
  readonly endItem: "endItem";
  // 多个数据异步分析时，完成所有的回调事件
  readonly end: "end";
  // 完成
  readonly stop: "stop";
  // 完成加载，但未做任何其他处理前
  readonly loadBefore: "loadBefore";
  // 完成加载，执行所有内部处理后
  readonly load: "load";
  // 出错了
  readonly error: "error";
  // 完成加载配置信息
  readonly loadConfig: "loadConfig";
  // 左键单击 鼠标事件
  readonly click: "click";
  // 左键单击到矢量或模型数据时 鼠标事件
  readonly clickGraphic: "clickGraphic";
  // 左键单击到wms或arcgis瓦片服务的对应矢量数据时
  readonly clickTileGraphic: "clickTileGraphic";
  // 左键单击地图空白（未单击到矢量或模型数据）时 鼠标事件
  readonly clickMap: "clickMap";
  // 左键双击 鼠标事件
  readonly dblClick: "dblClick";
  // 左键鼠标按下 鼠标事件
  readonly leftDown: "leftDown";
  // 左键鼠标按下后释放 鼠标事件
  readonly leftUp: "leftUp";
  // 鼠标移动 鼠标事件
  readonly mouseMove: "mouseMove";
  // 鼠标移动（拾取目标，并延迟处理） 鼠标事件
  readonly mouseMoveTarget: "mouseMoveTarget";
  // 鼠标滚轮滚动 鼠标事件
  readonly wheel: "wheel";
  // 右键单击 鼠标事件
  readonly rightClick: "rightClick";
  // 右键鼠标按下 鼠标事件
  readonly rightDown: "rightDown";
  // 右键鼠标按下后释放 鼠标事件
  readonly rightUp: "rightUp";
  // 中键单击 鼠标事件
  readonly middleClick: "middleClick";
  // 中键鼠标按下 鼠标事件
  readonly middleDown: "middleDown";
  // 中键鼠标按下后释放 鼠标事件
  readonly middleUp: "middleUp";
  // 在触摸屏上两指缩放开始 鼠标事件
  readonly pinchStart: "pinchStart";
  // 在触摸屏上两指缩放结束 鼠标事件
  readonly pinchEnd: "pinchEnd";
  // 在触摸屏上两指移动 鼠标事件
  readonly pinchMove: "pinchMove";
  // 鼠标按下 [左中右3键都触发] 鼠标事件
  readonly mouseDown: "mouseDown";
  // 鼠标按下后释放 [左中右3键都触发] 鼠标事件
  readonly mouseUp: "mouseUp";
  // 鼠标移入 鼠标事件
  readonly mouseOver: "mouseOver";
  // 鼠标移出 鼠标事件
  readonly mouseOut: "mouseOut";
  // 按键按下 键盘事件
  readonly keydown: "keydown";
  // 按键按下后释放 键盘事件
  readonly keyup: "keyup";
  // 开始绘制 标绘事件
  readonly drawStart: "drawStart";
  // 正在移动鼠标中，绘制过程中鼠标移动了点 标绘事件
  readonly drawMouseMove: "drawMouseMove";
  // 绘制过程中增加了点 标绘事件
  readonly drawAddPoint: "drawAddPoint";
  // 绘制过程中删除了最后一个点 标绘事件
  readonly drawRemovePoint: "drawRemovePoint";
  // 创建完成 标绘事件
  readonly drawCreated: "drawCreated";
  // 开始编辑 标绘事件
  readonly editStart: "editStart";
  // 移动鼠标按下左键（LEFT_DOWN）标绘事件
  readonly editMouseDown: "editMouseDown";
  // 正在移动鼠标中，正在编辑拖拽修改点中（MOUSE_MOVE） 标绘事件
  readonly editMouseMove: "editMouseMove";
  // 编辑修改了点（LEFT_UP）标绘事件
  readonly editMovePoint: "editMovePoint";
  // 编辑删除了点 标绘事件
  readonly editRemovePoint: "editRemovePoint";
  // 图上编辑修改了相关style属性 标绘事件
  readonly editStyle: "editStyle";
  // 停止编辑 标绘事件
  readonly editStop: "editStop";
  // 标绘事件
  readonly move: "move";
  // 3dtiles模型，模型瓦片初始化完成 该回调只执行一次
  readonly initialTilesLoaded: "initialTilesLoaded";
  // 3dtiles模型,当前批次模型加载完成 该回调会执行多次，视角变化后重新加载一次完成后都会回调
  readonly allTilesLoaded: "allTilesLoaded";
  // 栅格瓦片图层，添加单个瓦片，开始加载瓦片（请求前）
  readonly addTile: "addTile";
  // 栅格瓦片图层，添加单个瓦片 加载瓦片完成
  readonly addTileSuccess: "addTileSuccess";
  // 栅格瓦片图层，添加单个瓦片 加载瓦片出错了
  readonly addTileError: "addTileError";
  // 栅格瓦片图层，移除单个瓦片
  readonly removeTile: "removeTile";
  // 相机开启移动前 场景事件
  readonly cameraMoveStart: "cameraMoveStart";
  // 相机移动完成后 场景事件
  readonly cameraMoveEnd: "cameraMoveEnd";
  // 相机位置完成 场景事件
  readonly cameraChanged: "cameraChanged";
  // 场景更新前 场景事件
  readonly preUpdate: "preUpdate";
  // 场景更新后 场景事件
  readonly postUpdate: "postUpdate";
  // 场景渲染前 场景事件
  readonly preRender: "preRender";
  // 场景渲染后 场景事件
  readonly postRender: "postRender";
  // 场景模式(2D/3D/哥伦布)变换前 场景事件
  readonly morphStart: "morphStart";
  // 完成场景模式(2D/3D/哥伦布)变换 场景事件
  readonly morphComplete: "morphComplete";
  // 时钟跳动 场景事件
  readonly clockTick: "clockTick";
}
