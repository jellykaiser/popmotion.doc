# 衰减-Decay

衰减可以理解为物体的速度从预设值`velocity`慢慢衰减到0，这个衰减过程的快慢等受到其他属性的影响，
在`update`输出的值，可以理解为，在衰减过程中，物体移动了多少距离

## 引入

```js
import { decay } from 'popmotion';
```

## 使用

提供一个`velocity` `from`属性，就可以计算出需要最终衰减值和减数向目标

```js
decay({ velocity: 200, from: 50 })
  .start(v => console.log(v))
```

上面的例子可以理解为，一个物体的速度是200，从坐标50开始运动，那么`v`打印出来的就是物体的坐标

## 属性

属性影响了整个衰减的过程以及最终输出值

### velocity

**默认：0**

初始化速度

### from 

**默认：0**

初始化数值，衰减过程的数值都会加上该数值

### power

**默认：0.8**

类似作用在物体上的初始作用力，可以理解为把物体扔出去的力量，力量越大，物体跑的越远

### timeConstant

**默认：350**

衰减的时间，物体在该时间内停下

### restDelta

**默认：0.5**

最后数值调整，既最后数值小于多少时，直接归0。

性能优化，如果动画持续时间很长，可能从0.5 => 0也需要很长一段时间，但是这些距离在肉眼上是看不出的，所以没必要在进行计算，小于一定数值，直接跳到0

### modifyTarget

一个可以修改数据流的方法，你可以对数据进行加工处理再输出。

下面的例子就是将数值都变成整数

```js
decay({
  velocity: 200,
  from: 50,
  modifyTarget: v => parseInt(v)
})
```

## 方法

调用`decay`之后返回的方法（同`action`）

### start

同 `action`

### pipe

同 `action`

### pipe

同 `while`

### filter

过滤数据，只有满足条件的数据才能往后传输

```js
const filtered = decay(props).filter(v => v > 0.5)

// This animation will only output values higher than 0.5:
filtered.start(v => {})
```

## 实例方法

在调用`decay().start()`之后，会返回动画实例，实例包含以下方法。

### stop

停止动画

### 例子

[https://codepen.io/popmotion/pen/Kyewbv](https://codepen.io/popmotion/pen/Kyewbv)