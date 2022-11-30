export const InputTodo = (props) => {
  const inputArea = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  const { todoText, onChange, onClick, disabledInput, disabledButton } = props;
  return (
    <div style={inputArea}>
      <input
        disabled={disabledInput}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabledButton} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
