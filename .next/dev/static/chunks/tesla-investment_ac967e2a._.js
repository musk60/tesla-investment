(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/tesla-investment/styles/AdminUserEdit.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backLink": "AdminUserEdit-module__S7YNfW__backLink",
  "buttonGroup": "AdminUserEdit-module__S7YNfW__buttonGroup",
  "cancelButton": "AdminUserEdit-module__S7YNfW__cancelButton",
  "container": "AdminUserEdit-module__S7YNfW__container",
  "form": "AdminUserEdit-module__S7YNfW__form",
  "formGroup": "AdminUserEdit-module__S7YNfW__formGroup",
  "header": "AdminUserEdit-module__S7YNfW__header",
  "input": "AdminUserEdit-module__S7YNfW__input",
  "label": "AdminUserEdit-module__S7YNfW__label",
  "message": "AdminUserEdit-module__S7YNfW__message",
  "saveButton": "AdminUserEdit-module__S7YNfW__saveButton",
  "section": "AdminUserEdit-module__S7YNfW__section",
});
}),
"[project]/tesla-investment/app/admin/users/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tesla-investment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tesla-investment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tesla-investment/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tesla-investment/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/tesla-investment/styles/AdminUserEdit.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function EditUser({ params }) {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        totalInvested: 0,
        currentValue: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditUser.useEffect": ()=>{
            const checkAuth = {
                "EditUser.useEffect.checkAuth": ()=>{
                    const isAdmin = localStorage.getItem('adminAuth');
                    if (!isAdmin) {
                        router.push('/admin/login');
                    }
                }
            }["EditUser.useEffect.checkAuth"];
            checkAuth();
            fetchUser();
        }
    }["EditUser.useEffect"], [
        id,
        router
    ]);
    const fetchUser = async ()=>{
        try {
            const res = await fetch(`/api/admin/users/${id}`);
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                setMessage('User not found');
            }
        } catch (error) {
            console.error('Failed to fetch user:', error);
        } finally{
            setLoading(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSaving(true);
        setMessage('');
        try {
            const res = await fetch(`/api/admin/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (res.ok) {
                setMessage('User updated successfully!');
                setTimeout(()=>router.push('/admin/users'), 1500);
            } else {
                setMessage('Failed to update user');
            }
        } catch (error) {
            console.error('Failed to update user:', error);
            setMessage('Error updating user');
        } finally{
            setSaving(false);
        }
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setUser((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleApprove = (index)=>{
        const updatedPlans = [
            ...user.activePlans
        ];
        const plan = updatedPlans[index];
        if (plan.status === 'active') return;
        plan.status = 'active';
        setUser((prev)=>({
                ...prev,
                activePlans: updatedPlans,
                totalInvested: Number(prev.totalInvested) + Number(plan.investedAmount),
                currentValue: Number(prev.currentValue) + Number(plan.currentValue)
            }));
    };
    const handleUpdateInvestment = (index, newAmount)=>{
        const updatedPlans = [
            ...user.activePlans
        ];
        const plan = updatedPlans[index];
        const oldAmount = Number(plan.investedAmount);
        const diff = Number(newAmount) - oldAmount;
        plan.investedAmount = Number(newAmount);
        plan.currentValue = Number(newAmount); // Reset current value to new amount for simplicity
        // Only update totals if the plan is active
        if (plan.status !== 'pending') {
            setUser((prev)=>({
                    ...prev,
                    activePlans: updatedPlans,
                    totalInvested: Number(prev.totalInvested) + diff,
                    currentValue: Number(prev.currentValue) + diff
                }));
        } else {
            setUser((prev)=>({
                    ...prev,
                    activePlans: updatedPlans
                }));
        }
    };
    const handleRemoveInvestment = (index)=>{
        if (!confirm('Are you sure you want to remove this investment?')) return;
        const updatedPlans = [
            ...user.activePlans
        ];
        const plan = updatedPlans[index];
        updatedPlans.splice(index, 1);
        if (plan.status !== 'pending') {
            setUser((prev)=>({
                    ...prev,
                    activePlans: updatedPlans,
                    totalInvested: Number(prev.totalInvested) - Number(plan.investedAmount),
                    currentValue: Number(prev.currentValue) - Number(plan.currentValue)
                }));
        } else {
            setUser((prev)=>({
                    ...prev,
                    activePlans: updatedPlans
                }));
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            color: 'white',
            padding: '2rem'
        },
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
        lineNumber: 145,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Edit User"
                    }, void 0, false, {
                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/users",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backLink,
                        children: "← Back to Users"
                    }, void 0, false, {
                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                lineNumber: 149,
                columnNumber: 13
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                children: message
            }, void 0, false, {
                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                lineNumber: 156,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Account Details"
                            }, void 0, false, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        value: user.name,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 163,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 173,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        value: user.email,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 172,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Portfolio Management"
                            }, void 0, false, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 186,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Total Invested ($)"
                                    }, void 0, false, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 188,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "totalInvested",
                                        value: user.totalInvested,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        min: "0",
                                        step: "0.01"
                                    }, void 0, false, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 187,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Current Value ($)"
                                    }, void 0, false, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 200,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "currentValue",
                                        value: user.currentValue,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        min: "0",
                                        step: "0.01"
                                    }, void 0, false, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 201,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 199,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                        lineNumber: 185,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Investments"
                            }, void 0, false, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 214,
                                columnNumber: 21
                            }, this),
                            user.activePlans && user.activePlans.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                },
                                children: user.activePlans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '1rem',
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            borderRadius: '4px',
                                            border: plan.status === 'pending' ? '1px solid orange' : '1px solid rgba(255,255,255,0.1)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    marginBottom: '0.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 'bold'
                                                        },
                                                        children: plan.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                        lineNumber: 225,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: plan.status === 'pending' ? 'orange' : '#4caf50',
                                                            textTransform: 'uppercase',
                                                            fontSize: '0.8rem'
                                                        },
                                                        children: plan.status || 'Active'
                                                    }, void 0, false, {
                                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                        lineNumber: 226,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                lineNumber: 224,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr 1fr',
                                                    gap: '1rem',
                                                    fontSize: '0.9rem',
                                                    color: '#ccc'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Amount: $",
                                                            plan.investedAmount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Value: $",
                                                            plan.currentValue
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                        lineNumber: 236,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Date: ",
                                                            plan.dateInvested
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                        lineNumber: 237,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                lineNumber: 234,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: '1rem',
                                                    display: 'flex',
                                                    gap: '0.5rem'
                                                },
                                                children: [
                                                    plan.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleApprove(index),
                                                        style: {
                                                            padding: '0.4rem 1rem',
                                                            backgroundColor: '#4caf50',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            cursor: 'pointer'
                                                        },
                                                        children: "Approve"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                        lineNumber: 241,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            const newAmount = prompt('Enter new amount:', plan.investedAmount);
                                                            if (newAmount && !isNaN(newAmount)) {
                                                                handleUpdateInvestment(index, Number(newAmount));
                                                            }
                                                        },
                                                        style: {
                                                            padding: '0.4rem 1rem',
                                                            backgroundColor: 'transparent',
                                                            border: '1px solid #ccc',
                                                            color: 'white',
                                                            borderRadius: '4px',
                                                            cursor: 'pointer'
                                                        },
                                                        children: "Edit Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                        lineNumber: 256,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleRemoveInvestment(index),
                                                        style: {
                                                            padding: '0.4rem 1rem',
                                                            backgroundColor: 'transparent',
                                                            border: '1px solid #f44336',
                                                            color: '#f44336',
                                                            borderRadius: '4px',
                                                            cursor: 'pointer'
                                                        },
                                                        children: "Remove"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                        lineNumber: 275,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                                lineNumber: 239,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                        lineNumber: 218,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 216,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#999'
                                },
                                children: "No investments found."
                            }, void 0, false, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 294,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                        lineNumber: 213,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                disabled: saving,
                                children: saving ? 'Saving...' : 'Save Changes'
                            }, void 0, false, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 299,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/users",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$styles$2f$AdminUserEdit$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                                lineNumber: 302,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                        lineNumber: 298,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
                lineNumber: 158,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/tesla-investment/app/admin/users/[id]/page.js",
        lineNumber: 148,
        columnNumber: 9
    }, this);
}
_s(EditUser, "yh1Yga1yQDPyPj1SwkO0mVWCCOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$tesla$2d$investment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EditUser;
var _c;
__turbopack_context__.k.register(_c, "EditUser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=tesla-investment_ac967e2a._.js.map