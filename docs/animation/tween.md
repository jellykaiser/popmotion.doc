# 补间动画-Tween

通过设置不同的`easing`方法，让数值从a到b呈现不同的动画轨迹

## 引入

```js
import { tween } from 'popmotion';
```

## 使用

```js
tween()
  .start(v => console.log(v))
```

默认情况下，`tween`是从0 运动到 1，时间300ms，特效函数是`easeOut`

### 数值类型

#### 数字

```js
tween({ from: 0, to: 1 })
```

#### 带单位的

支持：`px` `%` `deg` `vh` `vw`
```js
tween({ from: '0px', to: '100px' })
```

#### 颜色

支持：RGB(A), HSL(A) Hex

```js
tween({ from: '#fff', to: '#000' })
tween({ from: 'rgba(0, 200, 100, 1)', to: 'rgba(60, 100, 80, 0.5)' })
tween({ from: 'hsl(0, 50%, 50%)', to: 'hsl(180, 80%, 50%)' })
```

#### 复杂的

```js
tween({
  from: '0px 0px 0px inset rgba(0, 0, 0, 0.2)',
  to: '3px 3px 10px inset rgba(0, 0, 0, 0.5)'
})

tween({
  from: 'linear-gradient(to right, #fff, #000)',
  to: 'linear-gradient(to right, #333, #666)'
})
```

#### 对象

可以通过`ease`来分别设置每个属性的动画特效，格式必须跟`from`和`to`对应

```js
tween({
  from: {
    x: 0,
    background: 'hsla(125, 100, 50, 1)'
  },
  to: {
    x: 100,
    background: 'hsla(20, 100, 60, 1)'
  },
  ease: {
    x: easeOut,
    background: linear
  }
})
```

#### 数组

可以通过`ease`来分别设置每个属性的动画特效，格式必须跟`from`和`to`对应

```js
tween({
  from: [0, '10vh', 'hsla(125, 100, 50, 1)'],
  to: [1, '20vh', 'hsla(20, 100, 60, 1)'],
  ease: [easeOut, backOut, linear]
})
````

## 属性

### from

**默认：0**

初始值

### to

**默认：1**

目标值

### durantion

**默认：300**

整个动画持续时间

### elapsed

**默认：0**

已经运行的时间

### ease

**默认：easeOut**

动画特效

### loop

**默认：0**

同`keyFrame`

### flip

**默认：0**

同`keyFrame`

### yoyo

**默认：0**

同`keyFrame`

## 方法

`start` `filter` `pipe` `while`

同[keyFrame](/animation/key-frames.html#方法)

## 实例方法

`getElapsed` `getProgress` `seek` `pause` `resume` `reverse` `stop`

同[keyFrame](/animation/key-frames.html#实例方法)


