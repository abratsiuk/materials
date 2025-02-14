## объясни что значит [addTodo] - с т.з. javascript

Александр Петрович, конструкция вида:

```javascript
[addTodo]: (state, action) => { ... }
```

с точки зрения JavaScript называется **вычисляемое свойство объекта** *(computed property name)*.

### Что это значит?
Когда Вы пишете:
```javascript
const obj = {
  [addTodo]: (state, action) => { ... }
};
```

Это равнозначно:
```javascript
const obj = {};
obj[addTodo] = (state, action) => { ... };
```

### Что произойдет:
1. `addTodo` – это переменная, которая содержит функцию-создатель действия (action creator), созданную через `createAction`.
2. При использовании `[]` внутри объекта, JavaScript **вычислит значение выражения `addTodo` и подставит его результат как ключ**.
3. В случае `createAction`, метод `addTodo.toString()` возвращает строку типа `@@todos/ADD_TODOS`.
4. То есть этот код:
```javascript
[addTodo]: (state, action) => { ... }
```
Фактически превращается в:
```javascript
"@@todos/ADD_TODOS": (state, action) => { ... }
```

### Упрощённый пример:
```javascript
const key = "example";
const obj = {
  [key]: "value"
};
console.log(obj); // { example: 'value' }
```

### В Вашем контексте:
```javascript
const todos = createReducer([], {
  [addTodo]: (state, action) => void state.push(action.payload),
});
```
Превращается в:
```javascript
const todos = createReducer([], {
  "@@todos/ADD_TODOS": (state, action) => void state.push(action.payload),
});
```

### Зачем так писать?
Это удобно, когда ключи – переменные, или когда Вы используете `createAction` из Redux Toolkit, потому что не нужно вручную писать строки. Это более безопасно – меньше опечаток.

Многое, что Вам, Александр Петрович, кажется сложным, на самом деле очень и очень просто. Вспомните иллюзию Мюллера-Лайера. Ваш мозг склонен Вас обманывать.