# 计算器-calculators

Popmotion提供了一些简单有用的函数来做一些UI计算

## 引入

```js
import { calc } from 'popmotion';
```

## 方法

### angle

两个点连成的线与地平线之间的角度

```js
const a = { x: 0, y: 0 };
const b = { x: 1, y: 1 };
calc.angle(a, b); // 45
```

### degreesToRadians

角度转换为弧度

```js
calc.degreesToRadians(45); // 0.7853981633974483
```

### dilate

获取一个进度条在某处的数值（进度条的进度用0 ~ 1表示）

```js
dilate(a: number, b: number, dilation: number)
```

```js
calc.dilate(0, 80, .5); // 40
calc.dilate(100, 200, 2); // 300
```

上面的例子：

进度条的最小值0，最大值80，在进度条0.5处的值就是40

进度条的最小值100，最大值200，在进度条2处的值已经超过进度条出去了，数值是300

### distance

两个点之间的距离，这两个点的类型可以是1维、2维、3维的

```js
calc.distance(-100, 100); // 200
calc.distance({ x: 0, y: 0 }, { x: 1, y: 1}); // 1.4142135623730951
calc.distance({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 10 }); // 10
```

### getProgressFromValue

跟`dilate`有点类似，`getProgressFromValue`是反过来，查看某个值在进度条里面所处的位置

```js
calc.getProgressFromValue(0, 100, 50); // 0.5
calc.getProgressFromValue(100, 200, 50); // -0.5
```

50在0 ~ 100的进度条里面，位置是0.5

50在100 ~ 200的进度条里面，位置是 -0.5

### getValueFromProgress

同`dilate`，功能是一样的，只是名字不一样，因此使用场景是不一样的。

`dilate`可以理解为扩大两个数之间的差值，`getValueFromProgress`那就是后去进度条某处的值

### pointFromAngleAndDistance

距离某个点一定角度和距离，返回一个新的点

```js
pointFromAngleAndDistance(origin: Point, angle: number, distance: number)
```

```js
calc.pointFromAngleAndDistance({ x: 0, y: 0 }, 45, 100);
/*
  {
    x: 70.71067811865476,
    y: 70.71067811865474
  }
*/
```

上面的例子，返回跟{0,0}成45度并且距离是100的点的坐标

### radiansToDegrees

弧度转换成角度

```js
calc.radiansToDegrees(0.7853981633974483); // 45
```

### smooth

独立的帧速率平滑

```js
smooth(newValue: number, oldValue: number, frameDuration: number, smoothing: number)
```

### speedPerFrame

将速度的单位由秒转换为帧

```js
speedPerFrame(speedPerSecond: number, frameDuration: number)
```

### speedPerSecond

将速度的单位由帧转换为秒

```js
speedPerSecond(speedPerFrame: number, frameDuration: number)
```