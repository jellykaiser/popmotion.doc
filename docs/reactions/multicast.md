# 多点广播-Multicast


## 引入

```js
import { multicast } from 'popmotion';
```

## 使用

订阅广播

```js
const foo = multicast();
foo.subscribe((v) => console.log('first subscriber', v));
foo.subscribe((v) => console.log('second subscriber', v));
```

当这个广播`update`的时候，就会发出广播

```js
foo.update(5);
// first subscriber, 5
// second subscriber, 5
```

### 自动停止前一个动作

如果广播被另外一个`action`所使用，那么就会停止之前一个`action`
```js
tween().start(foo);
spring().start(foo); // This will stop `tween`
```

### 链式操作

```js
const double = (v) => v * 2;
const px = (v) => v + 'px';

const foo = multicast().pipe(double, px);

foo.update(5); // 10px
```

### 取消订阅

```js
const foo = multicast();
const sub = foo.subcribe(console.log);

sub.unsubscribe();
```

## 方法

同`action`

## 实例方法

### unsubscribe

取消订阅