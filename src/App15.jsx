// useState 與事件處理 + 展開運算子...
import { useState } from "react"

function App() {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    const handleInputChange = (e) => {
        // e.target.value 是 input 欄位的內容
        console.log(e.target.value)
        setInputMessage(e.target.value);
    }

    const handleKeyDown = (e) => {
        // 若使用者輸入的是 enter 則自動呼叫 handleAddMessage()
        if(e.key === 'Enter') {
            handleAddMessage();
        }
    }

    const handleAddMessage = () => {
        //setMessages(messages.concat(inputMessage));
        setMessages([...messages, inputMessage]);
        setInputMessage('');
    }

    return(
    <>
        <input type='text' value={inputMessage} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        <button onClick={handleAddMessage}>Send</button>
        <button onClick={() => setMessages([])}>Clear</button>
        <button onClick={() => setMessages(messages.slice(0, -1))}>Delete Last</button><p />
        <p />
        <ul>
            {
                messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))
            }
        </ul>
    </>)

}

export default App;