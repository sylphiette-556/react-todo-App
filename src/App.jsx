import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "弐ノ型　水車",
    "拾壱ノ型　凪"
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    "壱ノ型　水面斬り",
    "参ノ型　流流舞い"
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 未完了タスクの追加処理
  const onClickAdd = () => {
    // 何も入力されなかったとき
    if (todoText === "") return alert("なにか入力してちょ");
    //追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // タスク削除
  const onClickDelete = (index) => {
    console.log(incompleteTodos[index]);
    const newTodos = [...incompleteTodos];
    // 配列のindex番目の要素から1つ削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了タスク
  const onClickComplete = (index) => {
    // 完了エリアに追加
    const newTodos = [...completeTodos, incompleteTodos[index]];
    console.log(newTodos);
    setCompleteTodos(newTodos);
    // 未完了エリアから削除
    const newDeleteTodos = [...incompleteTodos];
    newDeleteTodos.splice(index, 1);
    setIncompleteTodos(newDeleteTodos);
  };

  // タスクを戻す
  const onClickReturn = (index) => {
    // 未完了タスクに追加
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);
    // 完了タスクから削除
    const newCompletes = [...completeTodos];
    newCompletes.splice(index, 1);
    setCompleteTodos(newCompletes);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabledInput={incompleteTodos.length >= 5}
        disabledButton={incompleteTodos.length >= 5 || todoText.length > 10}
      />
      {todoText.length > 10 && (
        <p style={{ color: "red" }}>10文字までにしてにょ～</p>
      )}
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodo件数は5個までだにょ～</p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
