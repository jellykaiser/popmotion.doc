# HTML

只要给`styler`传入一个HTML元素，就可以返回一个方法，来修改和设置该元素

```js
const divStyler = styler(document.getElementByTag('div'))

divStyler.set({ x: 0, scale: 1.2 })
```

## 配置

```js
const divStyler = styler(div, {});
```

你可以传入第二个参数来进行一些配置，可配置参数：

- `enableHardwareAcceleration:Boolean`：是否启用GPU加速

## 属性

### 别名

- `x`: `translateX`
- `y`: `translateY`
- `z`: `translateZ`
- `originX`: `transformOriginX`
- `originY`: `transformOriginY`
- `originZ`: `transformOriginZ`

### CSS变量

```js
const htmlStyler = css(document.documentElement);

htmlRenderer.set('--bg-color', '#000');
```

### 支持的属性

所有的css属性都可以设置，如果`styler`传入的是`window`，那么只有下面两个属性可以设置
`scrollX` `scrollY`

##### 颜色

- `color`: `color`
- `backgroundColor`: `color`
- `outlineColor`: `color`
- `fill`: `color`
- `stroke`: `color`

##### 边框

- `borderColor`: `color`
- `borderTopColor`: `color`
- `borderRightColor`: `color`
- `borderBottomColor`: `color`
- `borderLeftColor`: `color`
- `borderWidth`: `px`
- `borderTopWidth`: `px`
- `borderRightWidth`: `px`
- `borderBottomWidth`: `px`
- `borderLeftWidth`: `px`
- `borderRadius`: `px`
- `borderTopLeftRadius`: `px`
- `borderTopRightRadius`: `px`
- `borderBottomRightRadius`: `px`
- `borderBottomLeftRadius`: `px`

##### 位置

- `width`: `px`
- `maxWidth`: `px`
- `height`: `px`
- `maxHeight`: `px`
- `top`: `px`
- `left`: `px`
- `bottom`: `px`
- `right`: `px`


##### 变形

- `rotate`: `degrees`
- `rotateX`: `degrees`
- `rotateY`: `degrees`
- `rotateZ`: `degrees`
- `scale`: `scale`
- `scaleX`: `scale`
- `scaleY`: `scale`
- `scaleZ`: `scale`
- `skewX`: `degrees`
- `skewY`: `degrees`
- `distance`: `px`
- `translateX`: `px`
- `translateY`: `px`
- `translateZ`: `px`
- `perspective`: `px`
- `opacity`: `alpha`

##### 边距

- `padding`: `px`
- `paddingTop`: `px`
- `paddingRight`: `px`
- `paddingBottom`: `px`
- `paddingLeft`: `px`
- `margin`: `px`
- `marginTop`: `px`
- `marginRight`: `px`
- `marginBottom`: `px`
- `marginLeft`: `px`