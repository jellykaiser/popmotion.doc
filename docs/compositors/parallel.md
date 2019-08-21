# 并行-Parallel

将多个动画放到数组里面，并行运行，数值也是按照数组形式输出

## 引入

```js
import { parallel } from 'popmotion';
```

## 使用

```js
parallel(
  tween({ from: 40, to: 50 }),
  spring({ to: 500 })
).start(([ tweenOutput, springOutput ]) => {});
```
`tweenOutput`就是`tween`输出的值

`springOutput`就是`spring`输出的值

## 方法

同`action`

## 实例方法

### stop

同`action`