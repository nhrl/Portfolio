import { LuSend } from "react-icons/lu";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { ClipLoader } from "react-spinners";  // Loader Component

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey there! 😊 How can I help you today?", sender: "bot", timestamp: new Date().toLocaleTimeString() }
    ]);

    const [input, setInput] = useState("");
    const [typingMessage, setTypingMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Typing Loader
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSend = async () => {
        if (input.trim() === "") return;

        setMessages((prev) => [
            ...prev,
            { id: messages.length + 1, text: input, sender: "user", timestamp: new Date().toLocaleTimeString() }
        ]);

        setTypingMessage("");
        setIsLoading(true); // Show loader

        try {
            const response = await axios.post('https://ai-assistant-e2qv.onrender.com/api/chat', { message: input });

            const botResponseText = response.data.answer;
            setIsLoading(false); // Hide loader when response arrives

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
            setIsLoading(false); // Hide loader on error
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
        <div className="border-[1px] dark:border-[#232323] h-full w-6/6 md:w-[28rem] rounded-xl dark:bg-[#131312]">
            <div className="border-b-[1px] dark:border-[#232323] rounded-t-xl flex items-center pl-2 h-15">
                <h1 className="text-lg">BuddyBot</h1>
            </div>

            <div className="h-[27rem] p-4 overflow-y-scroll no-scrollbar">
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

                {/* Typing Animation */}
                {typingMessage && (
                    <div className="bg-gray-200 dark:bg-[#171717] dark:text-[#c7c3c3] p-2 rounded-lg w-fit max-w-[75%]">
                        {typingMessage}
                        <span className="animate-pulse">|</span>
                    </div>
                )}

                {/* Typing Loader */}
                {isLoading && (
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-[#171717] dark:text-[#c7c3c3] w-fit max-w-[75%]">
                        <ClipLoader size={15} color="#36d7b7" />
                        <span>BuddyBot is typing...</span>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="border-t-[1px] dark:border-[#232323] flex items-center px-2 pt-2">
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
