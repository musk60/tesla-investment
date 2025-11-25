'use client';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/ChatWidget.module.css';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [chatId, setChatId] = useState(null);
    const [user, setUser] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Check auth state
        const checkAuth = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        };

        checkAuth();
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    useEffect(() => {
        if (!user) return;

        // Load chat ID from local storage or create new one based on user ID
        let storedChatId = localStorage.getItem(`chatId_${user.id}`);
        if (!storedChatId) {
            storedChatId = `chat_user_${user.id}`;
            localStorage.setItem(`chatId_${user.id}`, storedChatId);
        }
        setChatId(storedChatId);

        // Poll for new messages
        const interval = setInterval(() => {
            if (isOpen && storedChatId) {
                fetchMessages(storedChatId);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isOpen, user]);

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
        if (!input.trim()) return;

        const newMessage = {
            text: input,
            sender: 'user',
            timestamp: new Date().toISOString()
        };

        // Optimistic update
        setMessages([...messages, newMessage]);
        setInput('');

        try {
            await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chatId, message: newMessage })
            });
            fetchMessages(chatId); // Sync with server
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    if (!user) return null;

    return (
        <div className={styles.chatWidget}>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <h3>Tesla Support</h3>
                        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>×</button>
                    </div>
                    <div className={styles.messages}>
                        {messages.length === 0 && (
                            <div style={{ textAlign: 'center', color: '#888', marginTop: '2rem' }}>
                                How can we help you today, {user.name}?
                            </div>
                        )}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.adminMessage}`}
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
                            placeholder="Type a message..."
                            className={styles.input}
                        />
                        <button type="submit" disabled={!input.trim()} className={styles.sendButton}>
                            Send
                        </button>
                    </form>
                </div>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleButton}>
                {isOpen ? '✕' : '💬'}
            </button>
        </div>
    );
}
