# 淡入淡出-Crossfade

混合两个动画

## 引入

```js
import { crossfade } from 'popmotion';
```

## 使用

混合两个`tween`动画

```js
const blendTweens = crossfade(
  tween({ from: 0, to: 500, elapsed: 200 }),
  tween({ from: 500, to: 0 })
).start((v) => console.log(v));

tween({ duration: 100 }).start(blendTweens.setBalance);
```

## 方法

同`action`

## 实例方法

### stop

同`action`

### setBalance

设置两个动画之间的平衡，参数0 ~ 1

可以理解为让输出的动画更偏向哪一个动画，数值越大，越偏向第二个动画

## 例子

[https://codepen.io/popmotion/pen/ooPjxj](https://codepen.io/popmotion/pen/ooPjxj)