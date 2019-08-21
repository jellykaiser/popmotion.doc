# 帧 Every Frame

我们可以理解页面渲染时候是有一个帧速率FPS的，`everyFrame`会在每一帧的时候`update`以下，输出的内容是从`everyFrame().start()`开始到现在的时间间隔。


## 引入

```js
import { everyFrame } from 'popmotion';
```

## 使用

```js
everyFrame()
  .start((timeSinceStart) => console.log(timeSinceStart));
```

## 方法

调用`everyFrame()`会返回： `start` `filter` `while` `pipe`

具体方法使用可参考衰减`decay`

## 实例方法

`stop`

具体方法使用可参考衰减`decay`
