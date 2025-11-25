(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/tesla-investment/styles/AdminChat.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeChat": "AdminChat-module__iRfAKa__activeChat",
  "adminMessage": "AdminChat-module__iRfAKa__adminMessage",
  "chatArea": "AdminChat-module__iRfAKa__chatArea",
  "chatId": "AdminChat-module__iRfAKa__chatId",
  "chatItem": "AdminChat-module__iRfAKa__chatItem",
  "chatList": "AdminChat-module__iRfAKa__chatList",
  "container": "AdminChat-module__iRfAKa__container",
  "input": "AdminChat-module__iRfAKa__input",
  "inputArea": "AdminChat-module__iRfAKa__inputArea",
  "lastMessage": "AdminChat-module__iRfAKa__lastMessage",
  "message": "AdminChat-module__iRfAKa__message",
  "messages": "AdminChat-module__iRfAKa__messages",
  "noChatSelected": "AdminChat-module__iRfAKa__noChatSelected",
  "sendButton": "AdminChat-module__iRfAKa__sendButton",
  "timestamp": "AdminChat-module__iRfAKa__timestamp",
  "userMessage": "AdminChat-module__iRfAKa__userMessage",
});
}),
"[project]/tesla-investment/app/admin/chat/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tesla-investment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tesla-investment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/tesla-investment/styles/AdminChat.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AdminChat() {
    _s();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedChatId, setSelectedChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Poll for active chats
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminChat.useEffect": ()=>{
            fetchChats();
            const interval = setInterval(fetchChats, 5000);
            return ({
                "AdminChat.useEffect": ()=>clearInterval(interval)
            })["AdminChat.useEffect"];
        }
    }["AdminChat.useEffect"], []);
    // Poll for messages in selected chat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminChat.useEffect": ()=>{
            if (selectedChatId) {
                fetchMessages(selectedChatId);
                const interval = setInterval({
                    "AdminChat.useEffect.interval": ()=>fetchMessages(selectedChatId)
                }["AdminChat.useEffect.interval"], 3000);
                return ({
                    "AdminChat.useEffect": ()=>clearInterval(interval)
                })["AdminChat.useEffect"];
            }
        }
    }["AdminChat.useEffect"], [
        selectedChatId
    ]);
    const fetchChats = async ()=>{
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
    const fetchMessages = async (id)=>{
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
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminChat.useEffect": ()=>{
            scrollToBottom();
        }
    }["AdminChat.useEffect"], [
        messages
    ]);
    const handleSend = async (e)=>{
        e.preventDefault();
        if (!input.trim() || !selectedChatId) return;
        const newMessage = {
            text: input,
            sender: 'admin',
            timestamp: new Date().toISOString()
        };
        // Optimistic update
        setMessages([
            ...messages,
            newMessage
        ]);
        setInput('');
        try {
            await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chatId: selectedChatId,
                    message: newMessage
                })
            });
            fetchMessages(selectedChatId); // Sync
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatList,
                children: [
                    chats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatItem} ${selectedChatId === chat.id ? __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeChat : ''}`,
                            onClick: ()=>setSelectedChatId(chat.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatId,
                                    children: [
                                        "User: ",
                                        chat.id.substr(5)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lastMessage,
                                    children: chat.lastMessage?.text || 'No messages'
                                }, void 0, false, {
                                    fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timestamp,
                                    children: chat.lastMessage?.timestamp ? new Date(chat.lastMessage.timestamp).toLocaleTimeString() : ''
                                }, void 0, false, {
                                    fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, chat.id, true, {
                            fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this)),
                    chats.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '1rem',
                            color: '#888',
                            textAlign: 'center'
                        },
                        children: "No active chats"
                    }, void 0, false, {
                        fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatArea,
                children: selectedChatId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messages,
                            children: [
                                messages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message} ${msg.sender === 'admin' ? __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminMessage : __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userMessage}`,
                                        children: msg.text
                                    }, index, false, {
                                        fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                                    lineNumber: 122,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSend,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputArea,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Type a reply...",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                                }, void 0, false, {
                                    fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                                    lineNumber: 125,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !input.trim(),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendButton,
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                            lineNumber: 124,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noChatSelected,
                    children: "Select a chat to view messages"
                }, void 0, false, {
                    fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                    lineNumber: 138,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/tesla-investment/app/admin/chat/page.js",
                lineNumber: 110,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/tesla-investment/app/admin/chat/page.js",
        lineNumber: 87,
        columnNumber: 9
    }, this);
}
_s(AdminChat, "KMJw7Nxiprysyd3UhpXJYoMHMjs=");
_c = AdminChat;
var _c;
__turbopack_context__.k.register(_c, "AdminChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=tesla-investment_3124fe59._.js.map