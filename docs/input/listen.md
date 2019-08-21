# 监听-Listen

监听DOM事件

## 引入

```js
import { listen } from 'popmotion';
```

## 使用

```js
listen(document, 'mousemove')
  .start((e) => console.log(e));
```

### 监听多个事件

```js
listen(document, 'touchstart touchend')
```

### 链式操作

```js
const onMultitouch = listen(document, 'touchstart')
  .filter(({ touches }) => touches.length > 1);

onMultitouch.start((e) => ...);
```
上面的例子只有触摸点超过两个的时候才会触发

### 配置选项

`listen`的第三个参数允许做一些配置，具体参数说明可以参考HTML的原生监听事件

```js
type EventOpts = boolean | {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
};

listen(element: Element, eventNames: string, opts?: EventOpts): Action
```

## 方法

同`action`

## 实例方法

### stop

同`action`