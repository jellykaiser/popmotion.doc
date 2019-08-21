# 错开-Stagger

错开执行一些动作

## 引入

```js
import { stagger } from 'popmotion';
```

## 使用

```js
stagger(actions: Action[], interval: number | (i: number) => number): Action
```

接受两个参数，第一个是一个动作数组，第二个是时间间隔

```js
stagger([
  tween(),
  spring()
], 100)
```

```js
stagger([
  tween(),
  spring()
], 100).start((values) => values.forEach((v = 0, i) => {
  console.log(v);
}))
```

上面的例子，先执行`tween`动画，100ms后再执行`spring`动画，

输出的内容是一个长度为2的数组，分别是`tween`和`spring`输出的值

## 方法

同`action`

## 实例方法

### stop

同`action`