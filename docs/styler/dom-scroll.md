# 元素滚动-DOM Scroll

如果传入`window`，就可以设置屏幕的滚动属性

```js
const viewportStyler = styler(window);

viewportStyler.set('scrollTop', 20);
```

支持`scrollTop` `scrollLeft`