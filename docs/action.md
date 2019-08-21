# 动作-Action

> Action is a simplified Rx-inspired reactive stream focused on animation.

`action`是一个简化的rx风格的专注于动画的数据流

`popmotion`提供的动画其实都是一个封装过的action


## 引入

```bash
import { action } from 'popmotion';
```

## 使用


### 工厂

`action`工厂需要传入一个初始化`init`方法，我们为该方法提供了一个包含了 `update` `complete` `error`方法的对象参数，
你可以自行选择是否使用

```js
action(({ update, complete, error }) => {
  update(1);
});
```

### 初始化

工厂会返回一个`start`方法，该方法同样接受一个包含`update` `complete` `error`的对象。

当调用`start`方法，工厂就会初始化一个实例，多次调用，就会产生多个实例。

`init`方法里面通过`update`输出的内容，都会在`start`里面的`update`里面接受到

所以下面的例子，就会每50ms输出一个不断增长的数字

```js
const foo = action(({ update }) => {
  let i = 0;
  setInterval(() => update(i++), 50);
});

foo.start({
  update: (v) => console.log(v)
});  // 0, 1, 2, ...
```

如果只给`start`传一个方法，那么这个方法就被当成`update`

```js
foo.start((v) => console.log(v)); // 0, 1, 2...
````

`update`可以多次调用，那么在`start`里面的`update`也会多次输出,
`complete` `error`方法只能调用一次，并且不需要传参，这个很好理解

```js
const foo = action(({ update, complete }) => {
  let i = 0;
  setInterval(() => {
    update(i++);
    if (i === 10) complete();
  }, 50);
});

foo.start({
  update: (v) => console.log(v), // ...8, 9, 10
  complete: () => console.log('complete!')
});
```

### 接口

`init`方法可以自定义返回的API

```js
const foo = action(({ update }) => {
  const interval = setInterval(() => update('ping!'), 100);

  return {
    stop: () => clearInterval(interval)
  };
});

const bar = foo.start(console.log);
setTimeout(() => bar.stop(), 1000);
```

### 修改值

`action`是允许基于数据流进行链式调用的，这就说明我们可以对基本动作进行修改和操作。

```js
const foo = action(({ update }) => {
  let i = 0;
  setInterval(() => update(i++), 50);
});

const lessThanTen = (v) => v < 10;
const log = (v) => console.log(v);

foo.start(log); // ...8, 9, 10, 11...
foo.while(lessThanTen).start(log); // ...8, 9
```

## 方法

### pipe

```js
pipe(...funcs: (v: any) => any)
```

可以传入多个方法对`update`输出的数据流进行操作

```js
const init = ({ update }) => update(10);
const double = (v) => v * 2;
const px = (v) => v + 'px';

action(init)
  .pipe(double, px)
  .start((v) => console.log(v)); // '20px'
```

### start

```js
start(update: (v: any) => void)
start({
  complete? () => void,
  error?: (err: any) => void,
  update?: (v: any) => void
})
start(reaction)
```

调用了`start`方法之后，就会运行`init`方法，并返回自定义的API

所有的API至少有一个`stop`方法，你可以在返回的API重写

### while

```js
while(predicate: (v: any) => boolean)
```

过滤数据，只有满足条件的才会往后传，否则就会调用`complete`

```js
let latest = 0;

const init = ({ update }) => {
  let i = latest;
  setInterval(() => update(i++), 50);
};

action(init)
  .while((v) => v < 10)
  .start({
    update: (v) => latest = v,
    complete: () => console.log(v) // 9
  });
```