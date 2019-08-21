# 混合-Merge

将多个动画混合为一个并输出

## 引入

```js
import { merge } from 'popmotion';
```

## 使用

```js
merge(
  tween(),
  action(({ update }) => update(1)),
  physics({ velocity: 1000 })
).start((v) => console.log(v));
```

上面的例子是一个很混乱的输出，三个动画同时执行

`tween`是从0 ~ 1

`action`马上输出 1

`physics`是从0开始匀速运动

但是上面的动画会受到`tween`的`duration`属性的影响，将会在300ms后停止

## 方法

同`action`

## 实例方法

### stop

同`action`