# m-button

---

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。


## API

- 通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `size` -> `disabled` -> `block`

- 按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `primary` `secondary`  `warn` 或者不设 | Enum | -
size | 设置按钮大小，可选值为 `small` `large` 或者不设 | Enum | -
href | 设置按钮的链接,如果设置了该值,则返回一个`<a>`标签的dom | string | -
onClick | `click` 事件的 handler | Function | `function() {}`

- `<Button>Hello world!</Button>` 最终会被渲染为 `<button>Hello world!</button>`，并且除了上表中的属性，其它属性都会直接传到 `<button></button>`


