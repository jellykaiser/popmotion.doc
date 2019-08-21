# 缓动函数-Easing

缓动函数提供了各种不同的过渡效果

## 引入

```js
import { easing } from 'popmotion';
```

也可以在其他的动画库里面使用Popmotion的`easing`函数

`npm install @popmotion/easing`

```js
import { linear } from '@popmotion/easing';
```

## 使用

```js
import { tween, easing } from 'popmotion';

tween({
  ease: easing.easeOut
}).start();
```

### 内置方法

- `cubicBezier`
- `linear`
- `easeIn` `easeOut` `easeInOut`
- `circIn` `circOut` `circInOut`
- `backIn` `backOut` `backInOut`
- `anticipate`

## 自定义缓动

### cubicBezier

贝塞尔曲线

```js
const { cubicBezier } = easing;
const longTail = cubicBezier(0, .42, 0, 1);
```

### reversed

翻转缓动特效，例如`easeIn`翻转就变成了`easeOut`

```js
const { anticipate, reversed } = easing;
const anticipateOut = reversed(anticipate);
```

### mirrored

镜像。将你输入的缓动函数镜像处理，例如`easeIn`镜像之后就变成了`easeInOut`，现在动画的开始和结束都是镜像的动效了

```js
const { anticipate, mirrored } = easing;
const anticipateInOut = mirrored(anticipate);
```

### createExpoIn

自定义一个类似`easeIn`的动效。`easeIn`是`createExpoIn(2)`

```js
const { createExpoIn } = easing;
const strongerEaseIn = createExpoIn(3);
```

### createBackIn

自定义一个类似`backIn`的动效。`backIn`是`createBackIn(1.525)`

```js
const { createBackIn, reversed } = easing;
const strongerBackOut = reversed(createBackIn(3));
```

### createAnticipateEasing

自定义一个类似`anticipate`的动效。`anticipate`是`createAnticipateEasing(1.525)`

```js
const { createAnticipateEasing } = easing;
const strongerAnticipate = createAnticipateEasing(3);
```