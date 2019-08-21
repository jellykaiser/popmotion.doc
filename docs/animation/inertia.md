# 惯性 Inertia

物理的惯性，惯性越大，数值衰减越慢

## 引入

```js
import { inertia } from 'popmotion';
```

## 使用

提供一个`velocity` `from`属性，就可以计算出需要最终值和减数向目标

```js
inertia({ velocity: 200, from: 50 })
  .start(v => console.log(v))
```

可以设置`max` 或者 `min` 作为边界：

```js
inertia({
  velocity: 500,
  from: 50,
  max: 1000
})
```

如果最终的数值超过了`max`，或者小于`min`，就会调用`spring`做一个回弹动画

## 属性

### velocity

**默认：0**

同`decay`

### from 

**默认：0**

同`decay`

### modifyTarget

**默认：v => v**

同`decay`

### power

**默认：0.8**

同`decay`

### timeConstant

**默认：700**

同`decay`

### max

数据最大值，超过则触发回弹效果

### min

数据最小值，超出则触发回弹效果

### bounceStiffness

**默认：500**

回弹刚度，设置超过`max` `min`的变价值的时候的回弹动画系数，数值越大，越Q弹

### bounceDamping

**默认：10**

回弹阻尼，数值越大，回弹越快停止，设置0，无线回弹

## 方法

同`decay`

## 实例方法

同`decay`

## 与`decay`的区别

`interita`一般可用来做滚动效果

效果跟衰减`decay`非常类似，可以理解为`decay`的封装版，添加了数值的边界控制，并且设置了超出边界之后的回弹动画。
如果只是一个简单的衰减动画，直接使用`decay`即可。如果需要做一些减速回弹动画，可以使用`intertia`

## 例子

[https://codepen.io/popmotion/pen/BMNvqj](https://codepen.io/popmotion/pen/BMNvqj)