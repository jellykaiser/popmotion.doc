# 多点触控-Multitouch

监听多点触控的输入和输出，包括缩放和旋转增量

## 引入

```js
import { multitouch } from 'popmotion';
```

## 使用

### 监听配置

- `preventDefault`：是否阻止系统默认的行为，默认：true
- `scale`：默认缩放比例，默认：1
- `rotate`：默认旋转角度，默认：1

```js
multitouch({
  preventDefault?: boolean = true,
  scale?: number,
  rotate?: number
})

multitouch().start(({ touches, scale, rotate }) => {
  touches.forEach(({ x, y }) => console.log(x, y))
});
```

输出内容包括：

- `touches: { x: number, y: number }[]`：一个包含手指触点坐标的数组
- `scale: number`：实时监听两个手指缩放的比例，默认是1.0，或者是配置的默认缩放比例
- `rotate:number`：实时监听手指的旋转角度，默认是0，或者配置的默认旋转角度

### 常用属性

如果你需要经常监听一个数值，比如`rotate`，那你可以自顶一个新的动作，专门监听这个值

```js
const touchRotation = (initialRotate = 0) => multitouch({ rotate: initialRotate })
  .pipe(({ rotate }) => rotate);

touchRotation(45).start((rotate) => console.log(rotate));
```

## 方法

同`action`

## 实例方法

### stop

同`action`

## 例子

[https://codepen.io/popmotion/pen/LOBjxQ](https://codepen.io/popmotion/pen/LOBjxQ)