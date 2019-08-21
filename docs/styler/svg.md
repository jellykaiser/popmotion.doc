# SVG

SVG样式器用CSS模型替换了令人困惑的SVG转换模型，并为路径绘制提供了一个简单的API

```js
const pathStyler = styler(document.getElementByTag('path'))

pathStyler.set({ pathLength: 50 })
```

### 路径绘制

Stylefire支持`stoke-dasharray` `stroke-dashorigin` `pathLength` `pathSpacing` `pathOffset`

你可以顶一个路径长度从0到100的的动画：

```js
import { tween } from 'popmotion';
import styler from 'stylefire';

const path = document.querySelector('path');
const pathStyler = styler(polygon);

tween({ to: 100 }).start(
  v => pathStyler.set('pathLength', v)
);
```

## 属性

全部SVG的属性都支持

## 属性类型

- `fill`: `color`
- `stroke`: `color`
- `scale`: `scale`
- `scaleX`: `scale`
- `scaleY`: `scale`
- `opacity`: `alpha`
- `fillOpacity`: `alpha`
- `strokeOpacity`: `alpha`