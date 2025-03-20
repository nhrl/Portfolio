import { LuSend } from "react-icons/lu";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { SyncLoader } from "react-spinners";  
import { LiaRobotSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey there! 😊 How can I help you today?", sender: "bot", timestamp: new Date().toLocaleTimeString() }
    ]);

    const [input, setInput] = useState("");
    const [typingMessage, setTypingMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [apiStatus, setApiStatus] = useState("Checking...");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const checkAPIStatus = async () => {
        try {
            const response = await axios.get('https://ai-assistant-e2qv.onrender.com/api/status');
            if (response.data.status === 'online') {
                setApiStatus("Online");
            }
        } catch (error) {
            setApiStatus("Offline");
        }
    };

    useEffect(() => {
        checkAPIStatus();
        const interval = setInterval(checkAPIStatus, 10000); 
        return () => clearInterval(interval); 
    }, []);

    const handleSend = async () => {
        if (input.trim() === "" || apiStatus !== "Online") return;

        setMessages((prev) => [
            ...prev,
            { id: messages.length + 1, text: input, sender: "user", timestamp: new Date().toLocaleTimeString() }
        ]);

        setTypingMessage("");
        setIsLoading(true);

        try {
            const response = await axios.post('https://ai-assistant-e2qv.onrender.com/api/chat', { message: input });

            const botResponseText = response.data.answer;
            setIsLoading(false);

            let index = -1;
            setTimeout(() => {
                const typingInterval = setInterval(() => {
                    if (index < botResponseText.length) {
                        setTypingMessage((prev) => prev + botResponseText[index]);
                        index++;
                    } else {
                        clearInterval(typingInterval);

                        setMessages((prev) => [
                            ...prev,
                            { id: messages.length + 2, text: botResponseText, sender: "bot", timestamp: new Date().toLocaleTimeString() }
                        ]);

                        setTypingMessage("");
                    }
                }, 20);
            }, 500);
        } catch (error) {
            console.error("Error sending message:", error);
            setIsLoading(false);
            setMessages((prev) => [
                ...prev,
                { id: messages.length + 2, text: "❌ Failed to connect to the AI API.", sender: "bot", timestamp: new Date().toLocaleTimeString() }
            ]);
        }

        setInput("");
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typingMessage, isLoading]);

    return (
        <div className="border-[1px] dark:border-[#232323] h-full w-6/6 md:w-[28rem] rounded-xl bg-white dark:bg-[#131312]">
            <div className="border-b-[1px] dark:border-[#232323] rounded-t-xl flex flex-col pl-5 py-2">
                <div className="flex">
                    <LiaRobotSolid size={25}/>
                    <h1 className="text-md ml-2">BuddyBot</h1>
                </div>
                <div className="flex items-center pl-7">
                    <GoDotFill color={apiStatus === "Online" ? "#4CAF50" : "#EF5350"} />
                    <p className="text-sm">{apiStatus}</p>
                </div>
            </div>

            <div className="h-[23rem] md:h-[27rem] p-4 overflow-y-scroll no-scrollbar scrollbar-hidden">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`mb-2 p-2 rounded-lg w-fit max-w-[75%] ${
                            msg.sender === "user"
                                ? "bg-blue-500 text-white ml-auto"
                                : "bg-gray-200 dark:bg-[#171717] dark:text-[#c7c3c3]"
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}

                {typingMessage && (
                    <div className="bg-gray-200 dark:bg-[#171717] dark:text-[#c7c3c3] p-2 rounded-lg w-fit max-w-[75%]">
                        {typingMessage}
                        <span className="animate-pulse">|</span>
                    </div>
                )}

                {isLoading && (
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-[#171717] dark:text-[#c7c3c3] w-fit max-w-[75%]">
                        <SyncLoader size={5} color="#848585"/>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="border-t-[1px] dark:border-[#232323] flex items-center px-2 py-2">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                    className="placeholder:text-gray-800 dark:placeholder:text-gray-400 no-scrollbar resize-none border-[1px] dark:border-[#232323] rounded-md flex-1 mr-4 h-13 px-2 py-2 focus:outline-none"
                    placeholder="Type a message..."
                ></textarea>
                <LuSend
                    size={22}
                    className="mr-2 cursor-pointer text-blue-500 hover:text-blue-400"
                    onClick={handleSend}
                />
            </div>
        </div>
    );
};

export default Chat;