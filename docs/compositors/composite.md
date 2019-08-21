# 混合-Composite

命名动画，然后`update`的时候回输出对应的数值

## 引入

```js
import { composite } from 'popmotion';
```

## 使用

```js
composite({
  x: tween({ from: 60, to: 400 }),
  y: physics({ from: 60, velocity: 300 })
}).start(({ x, y }) => {});
```

两个动画同时运行，你会在`update`里面同时拿到两个数值

## 方法

同`action`

## 实例方法

同`action`