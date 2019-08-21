# 链式操作-chain

将多个动画放到一个队列里面，完成一个动画才会执行下一个动画

## 引入

```js
import { chain } from 'popmotion';
```

## 使用

```js
chain(
  tween({ to: 300 }),
  spring({ from: 100, to: 200 })
).start({
  update: (v) => console.log(v),
  complete: () => console.log('All actions complete')
})
```

先执行0 => 300的`tween`动画，然后执行100 => 200的`spring`动画，最后出发`complete`

## 方法

`chain()`跟`action`是一样的，同样提供了`filter` `pipe` `start` `while`方法

## 实例方法

`stop`