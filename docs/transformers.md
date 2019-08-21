# 变换-Transformers

把一个数值通过一定方式变换为另一个数值

## 引入

```js
import { transform } from "popmotion";
```

## 使用

`transform`是一个纯净的方法，你可以在任何地方使用

`transform`跟`action`的`pipe`方法配合起来非常好用

比如下面的例子，你可以轻松的输出一个合法的RGB颜色值：

```js
import { tween, transform } from "popmotion";
const { pipe, clamp } = transform;

tween({ to: 255 })
  .pipe(clamp(0, 255), Math.round)
  .start(v => console.log(v));
```

## 内置方法

### appendUnit

工厂函数，先初始化一个单位，会返回一个新的方法，新的方法每次调用，传入一个数值，那么就会返回一个带了单位的数值

```js
const convertToPx = appendUnit("px");
convertToPx(5); // '5px'
```

### applyOffset

计算跟`from`的偏移量，然后加到`to`上面

```js
applyOffset(from: number, to: number)

applyOffset(to: number)
```

```js
// With two arguments
applyOffset(0, 10)(20); // 30

// With one argument
const offsetFromFirst = applyOffset(10);
offsetFromFirst(20); // 10
offsetFromFirst(21); // 11
```

### bezier

贝塞尔曲线。返回一个函数，这个函数提供了一个0 ~ 1的进度值，你可以输入0 ~ 1的数值来获取对应进度的值

可以解析3或者4个点，如果你想解析更多，可以使用[original implementation](https://github.com/hughsk/bezier)

```js
const resolveBezier = bezier(0, 1, 2, 3);

resolveBezier(0); // 0
resolveBezier(0.5); // 1.5
resolveBezier(1); // 3
```

### blendColor

生成一个颜色过渡，输入两个颜色，会返回一个颜色进度，输入0 ~ 1的数值来回去对应进度的色值。

```js
const blendRedToBlue = blendColor("#f00", "#00f");
blendRedToBlue(0.5);
```
在需要颜色变幻的时候很好用，你只需要控制变幻进度，就可以拿到具体色值

### clamp

设置一个最大最小值，返回一个函数，这个函数会使输入的数值不会超过设定的范围

```js
const rgbRange = clamp(0, 255);
rgbRange(256); // 255
rgbRange(100); // 100
```

### conditional

条件判断，如果前一个判断返回`true`，则执行第二个参数的方法，否则不执行

```js
const constrainWithSpring = conditional(v => v < 0, console.log);

constrainWithSpring(1); // nothing happend

constrainWithSpring(-1); // -1
````

### interpolate

`interpolate`需要先初始化两个数组表示的区域范围`inputRange` `outputRange`

`inputRange`里面的内容必须是线性增加或者减少的，类似`[10, 30, 100]`，不可以是`[100, 50, 300]`

`outputRange`的长度必须跟`inputRange`一直

初始化之后就会返回一个函数，调用该函数并输入数值`v`，会进行一下动作：

1. 检测数值`v`在`inputRange`里面所属位置
2. 找到`outputRange`对应位置，然后返回该处的值

```js
const invert = interpolate([0, 100], [100, 0]);
invert(75); // 25

const foo = interpolate([0, 50, 100], [0, 0.5, 0]);
foo(75); // 0.25
```

### pipe

可以输入多个方法来变幻数值，从左到右对数值进行操作变幻，并最后输出

```js
const rgbType = pipe(clamp(0, 255), Math.round);

rgbType(12.25); // 12
```

### smooth

随着时间推移，会是一个值变得平滑

```js
smooth(strength: number)
```
### snap

给定一个数值或者一个包含多个数值的数组，会返回一个函数，调用该函数并输入一个值，就会把该值吸附到一个最接近的初始化的值，或者其整数倍的值

```js
const snapToIntervals = snap(45);
snapToIntervals(89); // 90

const snapToArbitraryDegrees = snap([0, 90, 270, 360]);
snapToArbitraryDegrees(75); // 90
```

### steps

设置步长和范围，返回一个函数，调用函数并传入数值`v`，返回该数值最接近的步长点的值
```js
steps(steps: number, min: number, max: number)
```
`min`默认：0，`max`默认：1

```js
const threeStep = steps(11, 0, 100);

threeStep(14); // 10
threeStep(15); // 10
threeStep(16); // 20
threeStep(18); // 20
```

上面的例子将0-100分割成11份，(注意是11份，不是10份)，输入的数值会吸附到最相邻的一份的数值

### linearSpring

生成一个弹性函数，初始化一个弹性系数（小于1）和一个圆点。调用返回的函数并输入表示位移的数值

```js
linearSpring(elasticity: number, origin: number)
```

### nonlinearSpring

创建对位移具有非线性影响的弹簧——位移越大，对提供的值的影响越大。

```js
nonlinearSpring(elasticity: number, origin: number)
```

### generateStaticSpring

一个用来生成新的弹簧的方法，`linearSpring` `nonlinearSpring`就是用这个方法生成的

```js
const linearSpring = generateStaticSpring();
const nonlinearSpring = generateStaticSpring(Math.sqrt);
```
```js
generateStaticSpring(alterDisplacement: (displacement: number) => number)
  => (elasticity: number, origin: number)
```

### transformMap

通过对象映射的方式来改变值

```js
transformMap(map: { [key: string]: (v: any) => any })
```

```js
const foo = transformMap({
  x: v => v + "px",
  y: v => v + "%"
});

foo({ x: 5, y: 10 }); // { x: '5px', y: '10%' }
```

### wrap

初始化最大最小值，放回一个方法，可以包装一个数值

```js
wrap(min: number, max: number)
```

```js
let wrapNumber = wrap(10, 30)

wrapNumber(11); //11
wrapNumber(9): // 29
wrapNumber(33); // 13
```

上面的例子：
1. 如果数值在范围内，则返回数值
2. 如果数值超出范围最小值-1，那么久从`max`往回找一个位置，既29
3. 如果超出最大值3，就从`min`往后3个位置，既13

跟`clamp`有点不同，如果超过边界，`clamp`直接返回边界，但是`wrap`会从检测超出范围，然后从给点区域内重新查找合适的值