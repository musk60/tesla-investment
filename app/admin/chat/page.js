'use client';
import { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/AdminChat.module.css';

export default function AdminChat() {
    const [chats, setChats] = useState([]);
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    // Poll for active chats
    useEffect(() => {
        fetchChats();
        const interval = setInterval(fetchChats, 5000);
        return () => clearInterval(interval);
    }, []);

    // Poll for messages in selected chat
    useEffect(() => {
        if (selectedChatId) {
            fetchMessages(selectedChatId);
            const interval = setInterval(() => fetchMessages(selectedChatId), 3000);
            return () => clearInterval(interval);
        }
    }, [selectedChatId]);

    const fetchChats = async () => {
        try {
            const res = await fetch('/api/chat');
            if (res.ok) {
                const data = await res.json();
                setChats(data.chats || []);
            }
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    const fetchMessages = async (id) => {
        try {
            const res = await fetch(`/api/chat?chatId=${id}`);
            if (res.ok) {
                const data = await res.json();
                setMessages(data.messages || []);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || !selectedChatId) return;

        const newMessage = {
            text: input,
            sender: 'admin',
            timestamp: new Date().toISOString()
        };

        // Optimistic update
        setMessages([...messages, newMessage]);
        setInput('');

        try {
            await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chatId: selectedChatId, message: newMessage })
            });
            fetchMessages(selectedChatId); // Sync
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.chatList}>
                {chats.map(chat => (
                    <div
                        key={chat.id}
                        className={`${styles.chatItem} ${selectedChatId === chat.id ? styles.activeChat : ''}`}
                        onClick={() => setSelectedChatId(chat.id)}
                    >
                        <div className={styles.chatId}>User: {chat.id.substr(5)}</div>
                        <div className={styles.lastMessage}>
                            {chat.lastMessage?.text || 'No messages'}
                        </div>
                        <div className={styles.timestamp}>
                            {chat.lastMessage?.timestamp ? new Date(chat.lastMessage.timestamp).toLocaleTimeString() : ''}
                        </div>
                    </div>
                ))}
                {chats.length === 0 && (
                    <div style={{ padding: '1rem', color: '#888', textAlign: 'center' }}>
                        No active chats
                    </div>
                )}
            </div>
            <div className={styles.chatArea}>
                {selectedChatId ? (
                    <>
                        <div className={styles.messages}>
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`${styles.message} ${msg.sender === 'admin' ? styles.adminMessage : styles.userMessage}`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSend} className={styles.inputArea}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a reply..."
                                className={styles.input}
                            />
                            <button type="submit" disabled={!input.trim()} className={styles.sendButton}>
                                Send
                            </button>
                        </form>
                    </>
                ) : (
                    <div className={styles.noChatSelected}>
                        Select a chat to view messages
                    </div>
                )}
            </div>
        </div>
    );
}
