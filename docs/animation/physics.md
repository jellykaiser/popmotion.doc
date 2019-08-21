# 物理-Physics

模拟了速度、加速度、摩擦力和弹性

它跟`decay` `spring`是有区别的，物理效果是可以实时改变数值来调整动画的

## 引入

```js
import { physics } from 'popmotion';
```

## 使用

```js
physics({ from: 0, velocity: 1000 })
  .start(v => console.log(v))
```

上面的例子表示，从0开始以速度1000无休止运行下去

为了让物体停下来，我们可以设置摩擦力`friction`，摩擦力接受0 ~ 1之间的数值，0表示没有摩擦力，物体不会停下，
1表示死亡翻车(dead stop)，瞬间停止

还可以设置加速度，单位是s

```js
physics({
  from: 0,
  velocity: 1000,
  acceleration: 200
})
```

### 支持的数值类型

#### 数字

```js
physics({ from: 0, velocity: 100 })
```

#### 带单位的

支持的单位：`px` `%` `deg` `vh` `vw`

```js
physics({ from: '0px', velocity: 100 })
```

#### 对象

对象的值符合以上规则的，都可以做成动画。

`friction` `acceleration` `velocity` `springStrength`都可以是对象类型，表示每个属性上的动画属性
```js
physics({
  from: { x: '0px', y: '0px' },
  velocity: { x: 200, y: 1000 }
})
```

以上表示x方向速度200，y方向速度1000

#### 数组

数组的内容符合以上规则的，都可以做成动画。
```js
physics({
  from: ['10vh', 0],
  velocity: [100, 100]
})
```

## 属性

### velocity

**默认：0**

同`decay`

### from 

**默认：0**

同`decay`

### acceleration

**默认：0**

加速度，`velocity`每秒都会增加这个数值

### restSpeed

**默认：0.001**

释放速度，当速度小于该值的时候，直接变成0，并触发`complete`

### friction

**默认：0**

摩擦力，接受0 ~ 1之间的数值


### springStrength

**默认：0**

弹性系数，类似设置物体的弹性，只有设置了`to`属性才生效，在物体到达目的地时候回根据该属性进行回弹动画，类似小球掉到桌面上，只有设置了一个`to`的边界值，才会回弹

### to

目标值

## 方法

`start` `filter` `pipe` `while`

## 实例方法

### set 

设置数据流，物体的速度摩擦力等均按照时间线走，不会重置

### setAcceleration

设置加速度，通过实时设置加速度，可以模拟物体的实际情况，既加速度受摩擦力影响会越来越小

### setFriction

实时设置摩擦力

### setSpringStrength

实时设置弹性系数

### setSpringTarget

设置回弹目的地

### setVelocity

实时设置速度

### stop

停止动画

## 例子

[https://codepen.io/popmotion/pen/ooybYP](https://codepen.io/popmotion/pen/ooybYP)
