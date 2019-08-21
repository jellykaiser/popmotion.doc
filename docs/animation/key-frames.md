# 关键帧-Keyframes

关键帧接受一个数组，然后接下来在数组各个数值之间做动画

## 引用

```js
import { keyframes } from 'popmotion';
```

## 使用

```js
keyframes({ values: [0, 100, 10] })
  .start(v => console.log(v))
```

动画先从0=>100，然后从100=>10

你可以`duration`来设置整个动画的总时长，如果设置`duration: 1000`，则上面的例子的两个动画分别是500ms

你也可以通过`times`来分别设置每个动画的时长，`times`接受一个数组，数组的数值必须都介于0 ~ 1之间，表示的是每个关键帧出现在总时长上的节点

```js
keyframes({
  values: [0, 100, 200],
  times: [0, 0.2, 1],
  duration: 6000
})
```

类似于视频进度条，总时长6s，0~1.2s的过程是0=>100的动画，1.2s~6s是100=>200的动画

**提示**

`times`的长度必须跟`values`一致，否则会以`times`的长度为准，如果`values`的长度超过`times`，那么超过的节点动画不执行，如果`values`长度小于`times`，则会报错

还可以通过`easings`设置每段动画的效果

```js
keyframes({
  values: [0, 100, 200],
  times: [0, 0.2, 1],
  duration: 1000,
  easings: [ease.linear, ease.cubicBezier(.17,.67,.83,.67)]
})
```

### 可接受的value类型

#### 数字

```js
keyframes({
  values: [10, 40, 100, -100]
})
```

#### 带单位的

支持的单位： `px` `%` `deg` `vh` `vw`

```js
keyframes({
  values: ['10%', '40%', '100%', '-100%']
})
```

#### 颜色

支持的颜色格式：RGB(A), HSL(A) and Hex

```js
keyframes({
  values: ['#fff', '#000', '#f00']
})
keyframes({
  values: [
    'rgba(0, 200, 100, 1)',
    'rgba(60, 100, 80, 0.5)',
    'rgba(60, 100, 80, 1)'
  ]
})
keyframes({
  values: [
    'hsl(0, 50%, 50%)',
    'hsl(180, 80%, 50%)',
    'hsl(45, 60%, 60%)'
  ]
})
```

#### 复杂

负责的数组序列，比如SVG路径，CSS阴影，背景渐变

这些数组序列里面的格式必须保持一致

```js
keyframes({
  values: [
    '0px 0px 0px inset rgba(0, 0, 0, 0.2)',
    '3px 3px 10px inset rgba(0, 0, 0, 0.5)',
    '10px 10px 20px inset rgba(0, 0, 0, 0.8)'
  ]
})

keyframes({
  values: [
    'linear-gradient(to right, #f00, #0f0)',
    'linear-gradient(to right, #00f, #f00)',
    'linear-gradient(to right, #f00, #0f0)'
  ]
})
```

#### 对象

对象的里面的值，如果符合以上类型要求，都可以做动画

```js
keyframes({
  values: [
    { x: 0, background: 'hsla(125, 100, 50, 1)' },
    { x: 0, background: 'hsla(20, 100, 60, 1)' },
    { x: 100, background: 'hsla(20, 100, 60, 1)' }
  ]
})
```

### 数组

数组的里面的值，如果符合以上类型要求，都可以做动画

```js
keyframes({
  values: [
    [0, '10vh', 'hsla(125, 100, 50, 1)'],
    [1, '20vh', 'hsla(20, 100, 60, 1)'],
    [0, '40vh', 'hsla(125, 100, 50, 1)']
  ]
})
```

## 属性

### values

一个设置动画关键正数值的数组

### duration

**默认：300**

动画总时长

### easings

**默认：`[...easeOut]`**

设置动画的函数，可以是一个对应每段动画，也可以一个函数，应用于全部动画。这个数组对应的是动画，不是关键帧，所以长度是`values.length - 1`

### times

一个时间节点数组，可以分别设置每个关键帧出现的时间点。数值0 ~ 1之间

### elapsed

**默认： 0**

设置已经运行的时间，单位毫秒，类似拖动进度条


### ease

**默认：easeOut**

动画特效函数，用来设置整个动画的播放动画特效，方法提供了一个0 ~ 1的播放进度，你需要返回一个新的进度

如果你的`from` 和 `to` 是对象或者数组类型，那么`ease`也用对应的类型，就可以为每个属性设置单独的动画特效

具体可以查看`tween`


### loop

**默认：0**

动画循环次数，设置`Infinity`无限循环

### flip

**默认：0**

翻转次数，设置`Infinity`无限翻转

### yoyo

反向次数，设置`Infinity`无限翻转


## 方法

`start` `filter` `pipe` `while`

## 实例方法

### getElapsed

返回动画已经运行的时间

### getProgress

返回一个0 ~ 1的值，表示总动画进度

### seek

设置进度条，数值0 ~ 1

### pause

暂停

### resume

恢复动画

### reverse

反向播放动画

### stop

停止动画

## 例子

[https://codepen.io/popmotion/pen/JOZGdp](https://codepen.io/popmotion/pen/JOZGdp)