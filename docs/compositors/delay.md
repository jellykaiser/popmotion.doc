# 延迟-Delay

延迟一定时间才触发`complete`

## 引入

```js
import { delay } from 'popmotion';
```

## 使用

延迟100ms触发`complete`
```js
delay(100).start({
  complete: () => console.log('complete!')
});
```

运用链式操作就可以延迟执行动画

```js
chain(
  delay(100),
  tween({ to: 400, duration: 500 })
);
```

## 方法

```js
start(update | { update, complete })
```

## 实例方法

### stop