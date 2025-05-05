// TodoList 練習
// import "./App.css";
import { useRef, useState } from "react";

function TodoList() {
  const inputRef = useRef();
  const [messages, setMessages] = useState([]);

  const handleKeyDown = (e) => {
    // 若使用者輸入的是 enter 則自動呼叫 handleAddMessage()
    if (e.key === "Enter") {
      handleAddMessage();
    }
  };

  const handleAddMessage = () => {
    //setMessages(messages.concat(inputMessage));
    const input=inputRef.current.value;
    if (input === "") return alert('please input value!'); // 如果輸入為空則不執行
    setMessages([...messages, { text: input, done: false }]);
    inputRef.current.value = "";
  };

  const toggleDone = (index) => {
    const updated = messages.map((msg, i,aaa) =>
      i === index ? { ...msg, done: !msg.done } : msg
    );

    setMessages(updated);
    
  };

  const handleDelete = (index) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
  };

  return (
    <>
      <h1>My TodoList</h1>
      <div>
        <input type="text" ref={inputRef} onKeyDown={handleKeyDown} />
        <button onClick={handleAddMessage}>加入</button>
      </div>
      {/* <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <input type="checkbox"/>
            {message.text}</li>
        ))}
      </ul> */}
       <ul>
        {messages.map((message, index) => (
          <li
            key={index}
            style={{
              textDecoration: message.done ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={message.done}
              onChange={() => toggleDone(index)}
            />
            {index + 1}.
            {message.text}
            <button onClick={() => handleDelete(index)}>刪除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
