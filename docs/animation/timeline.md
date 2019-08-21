# 时间线-Timeline

时间线用于复杂的动画序列，讲动画分割成独立的轨道

如果设置全部都是一样的，那就等同于`tween`

## 引入

```js
import { timeline } from 'popmotion';
```

## 使用


### 动画

每个动画都是一个对象，看起来有点像简化版`tween`

```js
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 }
])
```

其中有一个必须的属性`track`, 在`start`里面输出的值是一个对象，对象会包含这个`track`所指向的值

上面的例子，`start`会得到 
```js
{
  x: 0.032124
}
```

### 序列

```js
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  { track: 'y', from: 0, to: 300 }
])
```

上面的例子是一个动画列表，在播放完第一个动画之后（1s之后），再执行第二个动画

在`start`里面输出的对象会一直包含`x` `y`属性，只不过前1s，y的值都是0

前一秒输出类似：

```js
{
  x: 102.0232188,
  y: 0
}
```

一秒之后输出类似：

```js
{
  x: 300,
  y: 83.29317
}
```

### 时间指针

在动画序列中间插入数值，可以让其后面一个动画在指定时间开始行动

```js
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  500,
  { track: 'y', from: 0, to: 300 }
])
```

上面的例子，插入500，表示在第二个动画在500毫秒开始运动，而不是等第一个动作完成之后（1s之后）

如果你传入的是一个字符串，我们可以相对的调整时间指针，改字符串的格式是`/[-|+]\d/`，既前面必须是一个正号或者负号，后面是一个数字

```js
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  '-200',
  { track: 'y', from: 0, to: 300 }
])
```
上面的例子表示：第二个动画在第一个动画结束前200毫秒（既800ms时候）开始行动，`+`同理往后推

### 并行

如果动画是一个数组，那么数组里面的动画可以并行

```js
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  [
    { track: 'x', to: 0 },
    { track: 'y', from: 0, to: 300 }
  ]
])
```

上面的例子就是，第一个动画完成之后，`x`又继续运动到0，并同时`y`从运动0到300

在并列的动画最后插入一个数值，那么就可以使这些并列的动画错开

```js
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  [
    { track: 'x', to: 0 },
    { track: 'y', from: 0, to: 300 },
    50
  ]
])
```
上面的例子：`x`从0=>300之后，`x`马上从300=>0，但是`y`会在50ms的延迟之后再做动画

### 数值类型

#### 数字

```js
timeline([
  { track: 'x', from: 0, to: 100 }
])
```

#### 带单位的

支持：`px` `%` `deg` `vh` `vw`
```js
timeline([
  { track: 'x', from: '0%', to: '100%' }
])
```

#### 颜色

支持：RGB(A), HSL(A) Hex

```js
timeline([
  { track: 'backgroundColor', from: '#fff', to: '#f00' }
])
```

#### 复杂的

```js
timeline([
  {
    track: 'boxShadow',
    from: '0px 0px 0px inset rgba(0, 0, 0, 0.2)',
    to: '3px 3px 10px inset rgba(0, 0, 0, 0.5)'
  }
])
```

#### 对象

```js
timeline([
  {
    track: 'ball',
    from: {
      backgroundColor: '#f00',
      x: 0
    },
    to: {
      backgroundColor: '#fff',
      x: 100
    }
  }
])
```

#### 数组

```js
timeline([
  {
    track: 'ball',
    from: [0, '10vh'],
    to: [0, '0vh']
  }
])
```

## 属性

可以通过第二个参数来设置动画

```js
timeline(playlist, props)
```

### durantion

**默认：300**

整个动画持续时间

### elapsed

**默认：0**

已经运行的时间，类似把进度条拉到某处

### ease

**默认：easeOut**

动画特效函数，用来设置整个动画的播放动画特效，方法提供了一个0 ~ 1的播放进度，你需要返回一个新的进度

如果你的`from` 和 `to` 是对象或者数组类型，那么`ease`也用对应的类型，就可以为每个属性设置单独的动画特效

具体可以查看`tween`

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

同`keyFrame`

## 实例方法

`getElapsed` `getProgress` `seek` `pause` `resume` `reverse` `stop`

同`keyFrame`
