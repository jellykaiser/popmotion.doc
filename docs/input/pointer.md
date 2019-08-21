# 坐标-Pointer

输出单个鼠标或者触摸的坐标

## 引入

```js
import { pointer } from 'popmotion';
```

## 使用

### 绝对坐标

实时打印鼠标基于左上角在屏幕上的坐标
```js
pointer()
  .start(({ x, y }) => console.log(x, y));
```

### 相对坐标

实时打印鼠标相对于{200,175}的坐标

```js
pointer({ x: 200, y: 175 })
  .start(({ x, y }) => console.log(x, y));
```

### 输入参数

- `preventDefault: boolean = true`
- `x?: number`：初始化的坐标x
- `y?: number`：初始化的坐标y

### 输出值

- `x` `y`，同`clientX` `clientY`
- `clientX` `clientY`：相对可视区域的坐标
- `pageX` `pageY`：相对document的坐标


## 方法

同`action`

## 实例方法

### stop

同`action`

## 例子

[https://codepen.io/popmotion/pen/RjBZoe](https://codepen.io/popmotion/pen/RjBZoe)