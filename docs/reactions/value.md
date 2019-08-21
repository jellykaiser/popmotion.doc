# 数值-Value

这是一个`multicast`的实例，可以订阅一个数字的变化

## 引入

```js
import { value } from 'popmotion';
```

## 使用

```js
value(initialValue, onUpdate);
```

```js
import { tween, value } from 'popmotion';
import styler from 'stylefire';

const div = styler(document.querySelector('div'));
const divX = value(0, div.set('x'));

tween({ to: 500 }).start(divX);

setTimeout(() => console.log(() => {
  physics({
    velocity: divX.getVelocity()
  }).start(divX); // This will automatically `stop` the tween
}), 150);
```

上面的例子分两步：

1. 150ms之前执行`tween`动画，每一帧都会调用`divX.update`，然后`div`的位置会被改变
2. 150ms之后，`tween`动作会被停止，执行`physics`动画，`div`的位置将由`physics`动画来改变

`value`也可以通过数组和对象初始化

```js
const foo = value({ x: 0, y: 0 });
const bar = value([0, 0]);

foo.getVelocity(); // { x: 0, y: 0 }
bar.getVelocity(); // [0, 0]
```

作为一个`multicast`类型的反馈，你可以订阅更多的反馈动作

```js
const foo = value(0);
foo.subscribe(() => console.log('first reaction'));
foo.subscribe(() => console.log('second reaction'));
```

## 方法

- `get():number`：返回当前的值
- `getVelocity():number`：返回当前值的变化速度（变化速度可以理解为，上一帧跟这一帧的时间内，数值变化了多少，变化越快，速度越大）
- `subscribe`：同`multicast`
- `filter`：同`action`
- `pipe`：同`action`
- `while`：同`action`
- `stop`：同`action`

## 实例方法

`unsubscribe`






