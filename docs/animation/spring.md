# 弹性-Spring

弹性动画受质量`mass` 阻尼`damping` 刚度`stiffness`影响

它比物理效果里面的弹性提供了更平滑的运动和多样的效果

## 引入

```js
import { spring } from 'popmotion';
```

## 使用

```js
spring({ from: 0, to: 100 })
  .start(v => console.log(v))
```

从`from`到`to`的一个弹性动画

### 值的类型

数字、带单位的数字、颜色、复杂的情况、对象、数组


## 属性

### from

**默认：0**

初始值

### to

**默认：0**

目标值

### stiffness

**默认：100**

刚度，数值越大，越Q弹

### damping

**默认：10**

阻尼，数值越大，挺的越快

### mass

**默认：1**

质量，质量越大，回弹的距离越大


### velocity

**默认：0**

初始化速度，速度越大，物体跑的越快


### restDelta

**默认：0.01**

当数值小于`restDelta`**并且**速度`velocity`小于`restDelta`时，动画立即停止，数值直接变成`to`

### restDelta

**默认：0.01**

当数值小于`restDelta`**并且**速度`velocity`小于`restDelta`时，动画立即停止，数值直接变成`to`

## 方法

`start` `filter` `pipe` `while`

## 实例方法

`stop`

## 例子

[https://codepen.io/popmotion/pen/mqKyjd](https://codepen.io/popmotion/pen/mqKyjd)