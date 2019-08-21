# 介绍

Styler是HTML和SVG元素的高性能样式设置器，经过优化后可用于动画库。

## 安装及引入

```bash
npm install stylefire -D
```

```js
import styler from 'stylefire';
```

## 使用

创建一个样式修改器

```js
const div = document.querySelector('div');
const divStyler = styler(div);
```

### 设置属性

```js
divStyler.set({ x: 100 });
```
上面的div会被设置`transform: translateX(100px)`

### 强制更新

因为`Styler`是在循环里面才进行更新，如果你想在修改了属性之后马上更新UI，可以手动调用`render`

```js
divStyler.set({ width: 'auto' });
divStyler.render();
```

### 获取属性

```js
const div = document.querySelector('div');
const pathStyler = styler(div);
pathStyler.get('x');
```

只提供`set`过的属性，原生的css属性不提供

## 方法

### set

```js
set(props: {}): this
set(key: string, prop: any): this
```

### get

```js
get(key: string): any
```

### render

```js
render():this
```