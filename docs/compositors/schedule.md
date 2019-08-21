# 时间表-Schedule

`schedule`允许你用一个动作来控制另一个动作的输出值

## 引入

```js
import { schedule } from 'popmotion';
```

## 使用

```js
schedule(scheduler: Action, subject: Action): Action
```

```js
schedule(
  everyFrame(),
  pointer()
).start(({ x, y }) => {});
```

上面的例子，每一帧都会打印鼠标位置


## 方法

同`action`

## 实例方法

### stop

同`action`