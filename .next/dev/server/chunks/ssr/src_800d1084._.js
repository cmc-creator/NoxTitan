module.exports = [
"[project]/src/components/InteractiveCalendar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteractiveCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-big-calendar/dist/react-big-calendar.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$lib$2f$addons$2f$dragAndDrop$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-big-calendar/lib/addons/dragAndDrop/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const locales = {
    "en-US": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"]
};
const localizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateFnsLocalizer"])({
    format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"],
    parse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"],
    startOfWeek: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"],
    getDay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDay"],
    locales
});
const DnDCalendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$lib$2f$addons$2f$dragAndDrop$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar"]);
function InteractiveCalendar({ showSettings: externalShowSettings, setShowSettings: externalSetShowSettings } = {}) {
    const [draggedShift, setDraggedShift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Helper to create dates for this week
    const getThisWeekDate = (dayOffset, hour)=>{
        const date = new Date();
        const currentDay = date.getDay(); // 0 = Sunday
        const monday = new Date(date);
        monday.setDate(date.getDate() - currentDay + (currentDay === 0 ? -6 : 1)); // Get Monday
        const targetDate = new Date(monday);
        targetDate.setDate(monday.getDate() + dayOffset);
        targetDate.setHours(hour, 0, 0, 0);
        return targetDate;
    };
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        // Monday - Nursing Day Shift
        {
            id: 1,
            title: "Day Shift - Nursing",
            start: getThisWeekDate(0, 7),
            end: getThisWeekDate(0, 15),
            employeeName: "Sarah Martinez",
            employeeId: "1",
            location: "Floor 3",
            color: "#3b82f6",
            isOvertime: false
        },
        {
            id: 2,
            title: "Day Shift - Nursing",
            start: getThisWeekDate(0, 7),
            end: getThisWeekDate(0, 15),
            employeeName: "Daniel Garcia",
            employeeId: "12",
            location: "Floor 2",
            color: "#3b82f6",
            isOvertime: false
        },
        {
            id: 3,
            title: "Evening Shift - Nursing",
            start: getThisWeekDate(0, 15),
            end: getThisWeekDate(0, 23),
            employeeName: "Angela Rodriguez",
            employeeId: "7",
            location: "Floor 3",
            color: "#8b5cf6",
            isOvertime: false
        },
        {
            id: 4,
            title: "Night Shift - Nursing",
            start: getThisWeekDate(0, 23),
            end: getThisWeekDate(1, 7),
            employeeName: "Marcus Chen",
            employeeId: "2",
            location: "Floor 2",
            color: "#6366f1",
            isOvertime: false
        },
        // Monday - Emergency
        {
            id: 5,
            title: "Day Shift - Emergency",
            start: getThisWeekDate(0, 6),
            end: getThisWeekDate(0, 18),
            employeeName: "Jennifer Thompson",
            employeeId: "3",
            location: "ER",
            color: "#ef4444",
            isOvertime: false
        },
        {
            id: 6,
            title: "Day Shift - Emergency",
            start: getThisWeekDate(0, 8),
            end: getThisWeekDate(0, 16),
            employeeName: "Michelle Brooks",
            employeeId: "11",
            location: "ER",
            color: "#ef4444",
            isOvertime: false
        },
        {
            id: 7,
            title: "Night Shift - Emergency",
            start: getThisWeekDate(0, 18),
            end: getThisWeekDate(1, 6),
            employeeName: "James Wilson",
            employeeId: "6",
            location: "ER",
            color: "#dc2626",
            isOvertime: false
        },
        // Tuesday - Radiology
        {
            id: 8,
            title: "Day Shift - Radiology",
            start: getThisWeekDate(1, 8),
            end: getThisWeekDate(1, 16),
            employeeName: "David Kim",
            employeeId: "4",
            location: "Imaging",
            color: "#10b981",
            isOvertime: false
        },
        {
            id: 9,
            title: "Evening Shift - Radiology",
            start: getThisWeekDate(1, 16),
            end: getThisWeekDate(2, 0),
            employeeName: "Lisa Anderson",
            employeeId: "9",
            location: "Imaging",
            color: "#059669",
            isOvertime: false,
            isCallout: true
        },
        {
            id: 10,
            title: "Night Shift - Radiology",
            start: getThisWeekDate(1, 23),
            end: getThisWeekDate(2, 7),
            employeeName: "Kevin Martinez",
            employeeId: "14",
            location: "Imaging",
            color: "#047857",
            isOvertime: false
        },
        // Wednesday - Laboratory
        {
            id: 11,
            title: "Day Shift - Lab",
            start: getThisWeekDate(2, 7),
            end: getThisWeekDate(2, 15),
            employeeName: "Nicole Johnson",
            employeeId: "15",
            location: "Lab A",
            color: "#f59e0b",
            isOvertime: false
        },
        {
            id: 12,
            title: "Evening Shift - Lab",
            start: getThisWeekDate(2, 15),
            end: getThisWeekDate(2, 23),
            employeeName: "Rachel Foster",
            employeeId: "5",
            location: "Lab A",
            color: "#d97706",
            isOvertime: false
        },
        {
            id: 13,
            title: "Night Shift - Lab",
            start: getThisWeekDate(2, 23),
            end: getThisWeekDate(3, 7),
            employeeName: "Christopher Lee",
            employeeId: "10",
            location: "Lab B",
            color: "#b45309",
            isOvertime: false
        },
        // Thursday - Pharmacy
        {
            id: 14,
            title: "Day Shift - Pharmacy",
            start: getThisWeekDate(3, 8),
            end: getThisWeekDate(3, 16),
            employeeName: "Robert Taylor",
            employeeId: "8",
            location: "Main Pharmacy",
            color: "#8b5cf6",
            isOvertime: false
        },
        {
            id: 15,
            title: "Evening Shift - Pharmacy",
            start: getThisWeekDate(3, 16),
            end: getThisWeekDate(4, 0),
            employeeName: "Amanda White",
            employeeId: "13",
            location: "Main Pharmacy",
            color: "#7c3aed",
            isOvertime: false
        },
        // Friday - Full Coverage
        {
            id: 16,
            title: "Day Shift - Nursing",
            start: getThisWeekDate(4, 7),
            end: getThisWeekDate(4, 15),
            employeeName: "Sarah Martinez",
            employeeId: "1",
            location: "Floor 3",
            color: "#3b82f6",
            isOvertime: false
        },
        {
            id: 17,
            title: "Day Shift - Emergency",
            start: getThisWeekDate(4, 6),
            end: getThisWeekDate(4, 18),
            employeeName: "Jennifer Thompson",
            employeeId: "3",
            location: "ER",
            color: "#ef4444",
            isOvertime: false
        },
        {
            id: 18,
            title: "Day Shift - Lab",
            start: getThisWeekDate(4, 7),
            end: getThisWeekDate(4, 15),
            employeeName: "Nicole Johnson",
            employeeId: "15",
            location: "Lab A",
            color: "#f59e0b",
            isOvertime: false
        },
        {
            id: 19,
            title: "Evening Shift - Nursing",
            start: getThisWeekDate(4, 15),
            end: getThisWeekDate(4, 23),
            employeeName: "Angela Rodriguez",
            employeeId: "7",
            location: "Floor 2",
            color: "#8b5cf6",
            isOvertime: false
        },
        {
            id: 20,
            title: "Night Shift - Emergency",
            start: getThisWeekDate(4, 18),
            end: getThisWeekDate(5, 6),
            employeeName: "James Wilson",
            employeeId: "6",
            location: "ER",
            color: "#dc2626",
            isOvertime: false
        },
        // Saturday - Weekend Coverage
        {
            id: 21,
            title: "Day Shift - Nursing",
            start: getThisWeekDate(5, 7),
            end: getThisWeekDate(5, 15),
            employeeName: "Daniel Garcia",
            employeeId: "12",
            location: "Floor 3",
            color: "#3b82f6",
            isOvertime: false
        },
        {
            id: 22,
            title: "Day Shift - Emergency",
            start: getThisWeekDate(5, 8),
            end: getThisWeekDate(5, 16),
            employeeName: "Michelle Brooks",
            employeeId: "11",
            location: "ER",
            color: "#ef4444",
            isOvertime: false
        },
        {
            id: 23,
            title: "Night Shift - Nursing",
            start: getThisWeekDate(5, 23),
            end: getThisWeekDate(6, 7),
            employeeName: "Marcus Chen",
            employeeId: "2",
            location: "Floor 2",
            color: "#6366f1",
            isOvertime: false
        },
        // Sunday - Weekend Coverage
        {
            id: 24,
            title: "Day Shift - Lab",
            start: getThisWeekDate(6, 7),
            end: getThisWeekDate(6, 15),
            employeeName: "Nicole Johnson",
            employeeId: "15",
            location: "Lab A",
            color: "#f59e0b",
            isOvertime: false
        },
        {
            id: 25,
            title: "Evening Shift - Lab",
            start: getThisWeekDate(6, 15),
            end: getThisWeekDate(6, 23),
            employeeName: "Rachel Foster",
            employeeId: "5",
            location: "Lab B",
            color: "#d97706",
            isOvertime: false
        },
        {
            id: 26,
            title: "Night Shift - Emergency",
            start: getThisWeekDate(6, 18),
            end: getThisWeekDate(0, 6),
            employeeName: "James Wilson",
            employeeId: "6",
            location: "ER",
            color: "#dc2626",
            isOvertime: false
        },
        // VARIED SHIFT LENGTHS - Demonstrating Flexibility
        // 14-hour shift (Double shift coverage)
        {
            id: 27,
            title: "Extended Shift - Nursing",
            start: getThisWeekDate(1, 6),
            end: getThisWeekDate(1, 20),
            employeeName: "Sarah Martinez",
            employeeId: "1",
            location: "Floor 3",
            color: "#3b82f6",
            isOvertime: true,
            notes: "14hr double shift"
        },
        // 12-hour shifts (Standard ER/ICU)
        {
            id: 28,
            title: "12hr Day - Emergency",
            start: getThisWeekDate(2, 7),
            end: getThisWeekDate(2, 19),
            employeeName: "Jennifer Thompson",
            employeeId: "3",
            location: "ER",
            color: "#ef4444",
            isOvertime: false
        },
        {
            id: 29,
            title: "12hr Night - Emergency",
            start: getThisWeekDate(3, 19),
            end: getThisWeekDate(4, 7),
            employeeName: "James Wilson",
            employeeId: "6",
            location: "ER",
            color: "#dc2626",
            isOvertime: false
        },
        // 10-hour shifts (Four-day workweek model)
        {
            id: 30,
            title: "10hr Shift - Radiology",
            start: getThisWeekDate(3, 8),
            end: getThisWeekDate(3, 18),
            employeeName: "David Kim",
            employeeId: "4",
            location: "Imaging",
            color: "#10b981",
            isOvertime: false
        },
        {
            id: 31,
            title: "10hr Shift - Lab",
            start: getThisWeekDate(4, 8),
            end: getThisWeekDate(4, 18),
            employeeName: "Christopher Lee",
            employeeId: "10",
            location: "Lab B",
            color: "#b45309",
            isOvertime: false
        },
        // 4-hour part-time shifts (Students, PRN, relief coverage)
        {
            id: 32,
            title: "Part-Time - Pharmacy",
            start: getThisWeekDate(1, 14),
            end: getThisWeekDate(1, 18),
            employeeName: "Amanda White",
            employeeId: "13",
            location: "Main Pharmacy",
            color: "#7c3aed",
            isOvertime: false,
            notes: "PRN coverage"
        },
        {
            id: 33,
            title: "Part-Time - Nursing",
            start: getThisWeekDate(2, 10),
            end: getThisWeekDate(2, 14),
            employeeName: "Daniel Garcia",
            employeeId: "12",
            location: "Floor 2",
            color: "#3b82f6",
            isOvertime: false,
            notes: "Relief staff"
        },
        {
            id: 34,
            title: "Part-Time - Lab",
            start: getThisWeekDate(5, 16),
            end: getThisWeekDate(5, 20),
            employeeName: "Nicole Johnson",
            employeeId: "15",
            location: "Lab A",
            color: "#f59e0b",
            isOvertime: false,
            notes: "Evening relief"
        }
    ]);
    const [employeeSearch, setEmployeeSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDepartment, setSelectedDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedShift, setSelectedShift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [employeesPerPage, setEmployeesPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('grid'); // Default to grid view
    const [showStarAnimation, setShowStarAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true); // Star employee animation toggle
    const [tracerColor, setTracerColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('#ffffff'); // Tracer color customization
    const [localShowSettings, setLocalShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Settings modal toggle (local)
    const showSettings = externalShowSettings !== undefined ? externalShowSettings : localShowSettings;
    const setShowSettings = externalSetShowSettings || setLocalShowSettings;
    const [showAIScheduler, setShowAIScheduler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMarketplace, setShowMarketplace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTemplates, setShowTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBonusOffer, setShowBonusOffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedShiftForBonus, setSelectedShiftForBonus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [marketplacePostedShifts, setMarketplacePostedShifts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMarketplaceConfirmation, setShowMarketplaceConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOraclePanel, setShowOraclePanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showHRAlerts, setShowHRAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showIntegrationDashboard, setShowIntegrationDashboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Oracle insights always visible
    const [conflicts, setConflicts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [laborCost, setLaborCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        projected: 0,
        budget: 15000,
        savings: 0
    });
    // New Scheduler Features
    const [shiftSwapRequests, setShiftSwapRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [timeOffRequests, setTimeOffRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [copiedWeek, setCopiedWeek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showConflictPanel, setShowConflictPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [detectedConflicts, setDetectedConflicts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSkillsFilter, setShowSkillsFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [weatherData, setWeatherData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        temp: 72,
        condition: 'Sunny',
        icon: '☀️'
    });
    const [overtimeWarnings, setOvertimeWarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [budgetBurnRate, setBudgetBurnRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        spent: 8250,
        budget: 15000,
        percentage: 55
    });
    const [shiftBids, setShiftBids] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [undoStack, setUndoStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [redoStack, setRedoStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        x: 0,
        y: 0,
        shift: null
    });
    const [coverageHeatmap, setCoverageHeatmap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [shiftNotes, setShiftNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [recurringTemplates, setRecurringTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recentPunchNotifications, setRecentPunchNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSwapRequests, setShowSwapRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTimeOffApproval, setShowTimeOffApproval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBudgetTracker, setShowBudgetTracker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showShiftBids, setShowShiftBids] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCoverageHeatmap, setShowCoverageHeatmap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRecurringTemplates, setShowRecurringTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPTODonations, setShowPTODonations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ptoDonationRequests, setPTODonationRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ptoDonationHistory, setPTODonationHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employeePTOBalances, setEmployeePTOBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Mock guild/gamification data
    const guildLevels = {
        "1": {
            level: 42,
            levelName: "Expert",
            xp: 8450,
            rank: 3
        },
        "2": {
            level: 38,
            levelName: "Journeyman",
            xp: 7200,
            rank: 7
        },
        "3": {
            level: 55,
            levelName: "Master",
            xp: 12500,
            rank: 1
        },
        "4": {
            level: 29,
            levelName: "Journeyman",
            xp: 5100,
            rank: 12
        },
        "5": {
            level: 47,
            levelName: "Expert",
            xp: 9800,
            rank: 5
        },
        "6": {
            level: 51,
            levelName: "Master",
            xp: 11200,
            rank: 2
        },
        "7": {
            level: 34,
            levelName: "Journeyman",
            xp: 6400,
            rank: 9
        },
        "8": {
            level: 41,
            levelName: "Expert",
            xp: 8200,
            rank: 4
        },
        "9": {
            level: 22,
            levelName: "Apprentice",
            xp: 3500,
            rank: 14
        },
        "10": {
            level: 45,
            levelName: "Expert",
            xp: 9200,
            rank: 6
        },
        "11": {
            level: 31,
            levelName: "Journeyman",
            xp: 5800,
            rank: 11
        },
        "12": {
            level: 36,
            levelName: "Journeyman",
            xp: 6900,
            rank: 8
        },
        "13": {
            level: 18,
            levelName: "Apprentice",
            xp: 2400,
            rank: 15
        },
        "14": {
            level: 33,
            levelName: "Journeyman",
            xp: 6200,
            rank: 10
        },
        "15": {
            level: 25,
            levelName: "Apprentice",
            xp: 4100,
            rank: 13
        }
    };
    const getLevelColor = (levelName)=>{
        switch(levelName){
            case "Grandmaster":
                return "text-purple-300 bg-purple-950";
            case "Master":
                return "text-yellow-300 bg-yellow-900/50";
            case "Expert":
                return "text-blue-300 bg-blue-900/50";
            case "Journeyman":
                return "text-green-300 bg-green-900/50";
            case "Apprentice":
                return "text-gray-300 bg-gray-700/50";
            default:
                return "text-slate-300 bg-slate-700/50";
        }
    };
    const isStarEmployee = (guildData)=>{
        if (!guildData) return false;
        // Top 3 ranked employees are stars
        return guildData.rank <= 3;
    };
    const hexToRgba = (hex, alpha)=>{
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    // Detect HR-related alerts
    const detectHRAlerts = ()=>{
        const alerts = [];
        const today = new Date();
        mockEmployees.forEach((employee)=>{
            // Check certifications expiring soon (within 60 days)
            employee.certifications.forEach((cert)=>{
                const expiryDate = new Date(cert.expires);
                const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                if (daysUntilExpiry < 0) {
                    alerts.push({
                        type: 'certification-expired',
                        severity: 'high',
                        employee: employee.name,
                        message: `${cert.name} expired ${Math.abs(daysUntilExpiry)} days ago - cannot schedule`,
                        action: 'Block scheduling'
                    });
                } else if (daysUntilExpiry <= 30) {
                    alerts.push({
                        type: 'certification-expiring',
                        severity: 'medium',
                        employee: employee.name,
                        message: `${cert.name} expires in ${daysUntilExpiry} days`,
                        action: 'Renew certification'
                    });
                }
            });
            // Check time-off requests
            employee.timeOffRequests.forEach((request)=>{
                alerts.push({
                    type: 'time-off',
                    severity: 'info',
                    employee: employee.name,
                    message: `Approved time-off on ${request.date} (${request.reason})`,
                    action: 'Block scheduling'
                });
            });
        });
        return alerts;
    };
    // Smart Conflict Detection
    const detectConflicts = ()=>{
        const foundConflicts = [];
        // Check for double bookings
        events.forEach((shift, idx)=>{
            events.slice(idx + 1).forEach((otherShift)=>{
                if (shift.employeeId === otherShift.employeeId) {
                    const overlap = shift.start < otherShift.end && shift.end > otherShift.start;
                    if (overlap) {
                        foundConflicts.push({
                            type: 'double-booking',
                            message: `${shift.employeeName} has overlapping shifts`,
                            severity: 'error'
                        });
                    }
                }
            });
        });
        // Check for overtime violations (>40 hours/week)
        const employeeHours = {};
        events.forEach((shift)=>{
            if (shift.employeeId) {
                const hours = (shift.end.getTime() - shift.start.getTime()) / (1000 * 60 * 60);
                employeeHours[shift.employeeId] = (employeeHours[shift.employeeId] || 0) + hours;
            }
        });
        Object.entries(employeeHours).forEach(([empId, hours])=>{
            if (hours > 40) {
                const emp = mockEmployees.find((e)=>e.id === empId);
                foundConflicts.push({
                    type: 'overtime',
                    message: `${emp?.name} scheduled for ${hours.toFixed(1)} hours (${(hours - 40).toFixed(1)}h overtime)`,
                    severity: 'warning'
                });
            }
        });
        // Check for understaffing
        const dayShiftCounts = {};
        events.forEach((shift)=>{
            const dayKey = shift.start.toDateString();
            dayShiftCounts[dayKey] = (dayShiftCounts[dayKey] || 0) + 1;
        });
        Object.entries(dayShiftCounts).forEach(([day, count])=>{
            if (count < 3) {
                foundConflicts.push({
                    type: 'understaffing',
                    message: `${day}: Only ${count} staff scheduled (minimum 3 recommended)`,
                    severity: 'warning'
                });
            }
        });
        setConflicts(foundConflicts);
    };
    // Calculate Labor Costs
    const calculateLaborCost = ()=>{
        const baseRate = 25; // $25/hour base rate
        let totalCost = 0;
        events.forEach((shift)=>{
            const hours = (shift.end.getTime() - shift.start.getTime()) / (1000 * 60 * 60);
            let rate = baseRate;
            // Night differential (10pm-6am)
            const hour = shift.start.getHours();
            if (hour >= 22 || hour < 6) rate *= 1.5;
            // Weekend differential
            const day = shift.start.getDay();
            if (day === 0 || day === 6) rate *= 1.25;
            // Overtime
            if (shift.isOvertime) rate *= 1.5;
            totalCost += hours * rate;
        });
        setLaborCost({
            current: totalCost,
            projected: totalCost * 4.33,
            budget: 15000,
            savings: 15000 - totalCost
        });
    };
    // Oracle AI Predictions
    const oracleInsights = [
        {
            type: 'prediction',
            severity: 'high',
            title: 'Understaffing Risk Detected',
            message: 'Wednesday 2-4pm predicted to have 40% higher patient volume. Recommend adding 2 nurses.',
            action: 'Auto-schedule',
            confidence: 92,
            impact: 'High patient wait times, staff burnout risk'
        },
        {
            type: 'optimization',
            severity: 'medium',
            title: 'Cost Optimization Available',
            message: 'Swapping Marcus Chen to night shift Monday would save $180 (higher efficiency rating for nights).',
            action: 'Apply suggestion',
            confidence: 87,
            impact: '$180 savings, 15% efficiency gain'
        },
        {
            type: 'performance',
            severity: 'info',
            title: 'Top Performer Alert',
            message: 'Jennifer Thompson maintained 98% on-time rate this month. Consider for opening shift lead role.',
            action: 'View profile',
            confidence: 95,
            impact: 'Leadership development opportunity'
        },
        {
            type: 'risk',
            severity: 'high',
            title: 'Burnout Risk - David Kim',
            message: 'Working 6 consecutive days. Recommend 2-day break to prevent performance decline.',
            action: 'Adjust schedule',
            confidence: 89,
            impact: 'Prevent 23% productivity drop'
        }
    ];
    // Auto-run conflict detection and cost calculation
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        detectConflicts();
        calculateLaborCost();
    }, [
        events
    ]);
    // Mock employee data with avatars
    const defaultAvatars = [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Ava',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Oscar',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily'
    ];
    const mockEmployees = [
        {
            id: "1",
            name: "Sarah Martinez",
            employmentType: "full-time",
            weeklyHourLimit: 40,
            overtimeThreshold: 40,
            isActive: true,
            department: "Nursing",
            shift: "Day",
            avatar: defaultAvatars[0],
            timeOffRequests: [],
            certifications: [
                {
                    name: "RN License",
                    expires: "2027-03-15"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri"
            ]
        },
        {
            id: "2",
            name: "Marcus Chen",
            employmentType: "part-time",
            weeklyHourLimit: 28,
            overtimeThreshold: 28,
            isActive: true,
            department: "Nursing",
            shift: "Night",
            avatar: defaultAvatars[1],
            timeOffRequests: [],
            certifications: [
                {
                    name: "RN License",
                    expires: "2026-08-20"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ]
        },
        {
            id: "3",
            name: "Jennifer Thompson",
            employmentType: "prn",
            weeklyHourLimit: 20,
            overtimeThreshold: 20,
            isActive: true,
            department: "Emergency",
            shift: "Day",
            avatar: defaultAvatars[2],
            timeOffRequests: [],
            certifications: [
                {
                    name: "RN License",
                    expires: "2028-01-10"
                },
                {
                    name: "ACLS",
                    expires: "2026-06-15"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri"
            ]
        },
        {
            id: "4",
            name: "David Kim",
            employmentType: "full-time",
            weeklyHourLimit: 40,
            overtimeThreshold: 40,
            isActive: true,
            department: "Radiology",
            shift: "Day",
            avatar: defaultAvatars[3],
            timeOffRequests: [
                {
                    date: "2026-01-08",
                    reason: "Personal"
                }
            ],
            certifications: [
                {
                    name: "Radiology Tech",
                    expires: "2027-12-01"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu"
            ]
        },
        {
            id: "5",
            name: "Rachel Foster",
            employmentType: "full-time",
            weeklyHourLimit: 40,
            overtimeThreshold: 40,
            isActive: true,
            department: "Laboratory",
            shift: "Evening",
            avatar: defaultAvatars[4],
            timeOffRequests: [],
            certifications: [
                {
                    name: "Lab Tech",
                    expires: "2026-02-01"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ]
        },
        {
            id: "6",
            name: "James Wilson",
            employmentType: "full-time",
            weeklyHourLimit: 40,
            overtimeThreshold: 40,
            isActive: true,
            department: "Emergency",
            shift: "Night",
            avatar: defaultAvatars[5],
            timeOffRequests: [],
            certifications: [
                {
                    name: "RN License",
                    expires: "2027-05-30"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ]
        },
        {
            id: "7",
            name: "Angela Rodriguez",
            employmentType: "part-time",
            weeklyHourLimit: 28,
            overtimeThreshold: 28,
            isActive: true,
            department: "Nursing",
            shift: "Evening",
            avatar: defaultAvatars[6],
            timeOffRequests: [
                {
                    date: "2026-01-10",
                    reason: "Vacation"
                }
            ],
            certifications: [
                {
                    name: "RN License",
                    expires: "2026-11-20"
                }
            ],
            availability: [
                "Mon",
                "Wed",
                "Fri",
                "Sat",
                "Sun"
            ]
        },
        {
            id: "8",
            name: "Robert Taylor",
            employmentType: "full-time",
            weeklyHourLimit: 40,
            overtimeThreshold: 40,
            isActive: true,
            department: "Pharmacy",
            shift: "Day",
            avatar: defaultAvatars[7],
            timeOffRequests: [],
            certifications: [
                {
                    name: "Pharmacist License",
                    expires: "2028-03-15"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri"
            ]
        },
        {
            id: "9",
            name: "Lisa Anderson",
            employmentType: "prn",
            weeklyHourLimit: 20,
            overtimeThreshold: 20,
            isActive: true,
            department: "Radiology",
            shift: "Evening",
            avatar: defaultAvatars[8],
            timeOffRequests: [],
            certifications: [
                {
                    name: "Radiology Tech",
                    expires: "2027-07-01"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed"
            ]
        },
        {
            id: "10",
            name: "Christopher Lee",
            employmentType: "full-time",
            weeklyHourLimit: 40,
            overtimeThreshold: 40,
            isActive: true,
            department: "Laboratory",
            shift: "Night",
            avatar: defaultAvatars[9],
            timeOffRequests: [],
            certifications: [
                {
                    name: "Lab Tech",
                    expires: "2026-04-15"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ]
        },
        {
            id: "11",
            name: "Michelle Brooks",
            employmentType: "part-time",
            weeklyHourLimit: 28,
            overtimeThreshold: 28,
            isActive: true,
            department: "Emergency",
            shift: "Day",
            avatar: defaultAvatars[10],
            timeOffRequests: [],
            certifications: [
                {
                    name: "RN License",
                    expires: "2027-09-01"
                }
            ],
            availability: [
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ]
        },
        {
            id: "12",
            name: "Daniel Garcia",
            employmentType: "full-time",
            weeklyHourLimit: 40,
            overtimeThreshold: 40,
            isActive: true,
            department: "Nursing",
            shift: "Day",
            avatar: defaultAvatars[11],
            timeOffRequests: [],
            certifications: [
                {
                    name: "RN License",
                    expires: "2028-06-01"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri"
            ]
        },
        {
            id: "13",
            name: "Amanda White",
            employmentType: "prn",
            weeklyHourLimit: 20,
            overtimeThreshold: 20,
            isActive: true,
            department: "Pharmacy",
            shift: "Evening",
            avatar: defaultAvatars[12],
            timeOffRequests: [],
            certifications: [
                {
                    name: "Pharmacist License",
                    expires: "2027-10-15"
                }
            ],
            availability: [
                "Mon",
                "Wed",
                "Fri",
                "Sat"
            ]
        },
        {
            id: "14",
            name: "Kevin Martinez",
            employmentType: "full-time",
            weeklyHourLimit: 40,
            overtimeThreshold: 40,
            isActive: true,
            department: "Radiology",
            shift: "Night",
            avatar: defaultAvatars[13],
            timeOffRequests: [],
            certifications: [
                {
                    name: "Radiology Tech",
                    expires: "2026-12-01"
                }
            ],
            availability: [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu"
            ]
        },
        {
            id: "15",
            name: "Nicole Johnson",
            employmentType: "part-time",
            weeklyHourLimit: 28,
            overtimeThreshold: 28,
            isActive: true,
            department: "Laboratory",
            shift: "Day",
            avatar: defaultAvatars[14],
            timeOffRequests: [],
            certifications: [
                {
                    name: "Lab Tech",
                    expires: "2027-02-20"
                }
            ],
            availability: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ]
        }
    ];
    // Initialize PTO balances on mount
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const initialBalances = {};
        mockEmployees.forEach((emp)=>{
            initialBalances[emp.id] = {
                pto: emp.employmentType === 'full-time' ? 120 : emp.employmentType === 'part-time' ? 60 : 0,
                sick: emp.employmentType === 'full-time' ? 80 : emp.employmentType === 'part-time' ? 40 : 0
            };
        });
        setEmployeePTOBalances(initialBalances);
        // Mock donation requests
        setPTODonationRequests([
            {
                id: 1,
                recipientId: "4",
                recipientName: "David Kim",
                reason: "Extended medical leave for family member",
                hoursNeeded: 80,
                hoursReceived: 32,
                status: 'active',
                timestamp: new Date(Date.now() - 86400000 * 2)
            },
            {
                id: 2,
                recipientId: "7",
                recipientName: "Angela Rodriguez",
                reason: "Personal family emergency",
                hoursNeeded: 40,
                hoursReceived: 16,
                status: 'active',
                timestamp: new Date(Date.now() - 86400000)
            }
        ]);
        // Mock donation history
        setPTODonationHistory([
            {
                id: 1,
                donorId: "1",
                donorName: "Sarah Martinez",
                recipientId: "4",
                recipientName: "David Kim",
                hours: 16,
                type: 'PTO',
                timestamp: new Date(Date.now() - 86400000)
            },
            {
                id: 2,
                donorId: "3",
                donorName: "Jennifer Thompson",
                recipientId: "4",
                recipientName: "David Kim",
                hours: 8,
                type: 'Sick',
                timestamp: new Date(Date.now() - 43200000)
            }
        ]);
    }, []);
    // Compute HR alerts after mockEmployees is defined
    const hrAlerts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>detectHRAlerts(), []);
    // Timeclock integration data
    const timeclockData = {
        "1": {
            clockIn: "06:58",
            status: 'on-time'
        },
        "2": {
            clockIn: "23:15",
            status: 'late'
        },
        "3": {
            clockIn: "05:55",
            status: 'on-time'
        },
        "6": {
            status: 'no-show'
        },
        "12": {
            clockIn: "07:00",
            status: 'on-time'
        }
    };
    // Payroll integration - calculate per-shift earnings
    const calculateShiftEarnings = (shift, employeeId)=>{
        const baseRate = 25;
        const hours = (shift.end.getTime() - shift.start.getTime()) / (1000 * 60 * 60);
        let rate = baseRate;
        const employee = mockEmployees.find((e)=>e.id === employeeId);
        const guildData = employeeId ? guildLevels[employeeId] : null;
        // Night differential
        const hour = shift.start.getHours();
        if (hour >= 22 || hour < 6) rate *= 1.5;
        // Weekend differential
        const day = shift.start.getDay();
        if (day === 0 || day === 6) rate *= 1.25;
        // Overtime
        if (shift.isOvertime) rate *= 1.5;
        // Guild performance bonus (higher levels earn more)
        let performanceBonus = 0;
        if (guildData) {
            if (guildData.level >= 50) performanceBonus = 50; // Master
            else if (guildData.level >= 40) performanceBonus = 25; // Expert
            else if (guildData.level >= 30) performanceBonus = 10; // Journeyman
        }
        const baseEarnings = hours * rate;
        return {
            base: baseEarnings,
            performanceBonus,
            total: baseEarnings + performanceBonus,
            hours,
            rate
        };
    };
    const departments = [
        "all",
        ...Array.from(new Set(mockEmployees.map((e)=>e.department)))
    ];
    const shifts = [
        "all",
        ...Array.from(new Set(mockEmployees.map((e)=>e.shift)))
    ];
    // Filters and pagination
    const filteredEmployees = mockEmployees.filter((emp)=>{
        const matchesName = emp.name.toLowerCase().includes(employeeSearch.toLowerCase());
        const matchesDept = selectedDepartment === "all" || emp.department === selectedDepartment;
        const matchesShift = selectedShift === "all" || emp.shift === selectedShift;
        return matchesName && matchesDept && matchesShift && emp.isActive;
    });
    // Calendar shows ALL filtered employees (not paginated)
    const filteredEmployeeIds = new Set(filteredEmployees.map((e)=>e.id));
    const filteredEvents = events.filter((ev)=>ev.employeeId && filteredEmployeeIds.has(ev.employeeId));
    // Pagination is just for reference/stats
    const totalPages = employeesPerPage === -1 ? 1 : Math.ceil(filteredEmployees.length / employeesPerPage);
    const paginatedEmployees = employeesPerPage === -1 ? filteredEmployees : filteredEmployees.slice((currentPage - 1) * employeesPerPage, currentPage * employeesPerPage);
    const handleDragStart = (e, shift)=>{
        setDraggedShift(shift);
        e.dataTransfer.effectAllowed = 'move';
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    const handleDrop = (e, dayOffset, timeBlock)=>{
        e.preventDefault();
        if (!draggedShift) return;
        const newStart = getThisWeekDate(dayOffset, timeBlock.start);
        const duration = draggedShift.end.getTime() - draggedShift.start.getTime();
        const newEnd = new Date(newStart.getTime() + duration);
        setEvents(events.map((event)=>event.id === draggedShift.id ? {
                ...event,
                start: newStart,
                end: newEnd
            } : event));
        setDraggedShift(null);
    };
    const eventStyleGetter = (event)=>{
        return {
            style: {
                backgroundColor: event.isOvertime ? "#ef4444" : event.color || "#3b82f6",
                borderRadius: "6px",
                border: "none",
                color: "white",
                fontSize: "13px",
                fontWeight: "600"
            }
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl p-4 border-2 border-purple-500/30 shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAIScheduler(true),
                            className: "px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg flex items-center gap-2 border-2 border-purple-400 text-pop-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 625,
                                    columnNumber: 13
                                }, this),
                                "AI Auto-Schedule"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 621,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowMarketplace(true),
                            className: "px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg flex items-center gap-2 text-pop-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this),
                                "Shift Marketplace"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowTemplates(true),
                            className: "px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-500 hover:to-amber-500 transition-all shadow-lg flex items-center gap-2 text-pop-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 639,
                                    columnNumber: 13
                                }, this),
                                "Templates"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowIntegrationDashboard(!showIntegrationDashboard),
                            className: "px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg flex items-center gap-2 border-2 border-purple-400 text-pop-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 646,
                                    columnNumber: 13
                                }, this),
                                "System Integration"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg flex items-center gap-2 text-pop-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 652,
                                    columnNumber: 13
                                }, this),
                                "Auto-Breaks"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowSwapRequests(true),
                            className: "px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg flex items-center gap-2 text-pop-light relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 659,
                                    columnNumber: 13
                                }, this),
                                "Swap Requests",
                                shiftSwapRequests.filter((r)=>r.status === 'pending').length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse",
                                    children: shiftSwapRequests.filter((r)=>r.status === 'pending').length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 662,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 655,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowTimeOffApproval(true),
                            className: "px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-500 hover:to-orange-500 transition-all shadow-lg flex items-center gap-2 text-pop-light relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 671,
                                    columnNumber: 13
                                }, this),
                                "Time Off",
                                timeOffRequests.filter((r)=>r.status === 'pending').length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse",
                                    children: timeOffRequests.filter((r)=>r.status === 'pending').length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 674,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 667,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowPTODonations(true),
                            className: "px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg flex items-center gap-2 text-pop-light relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 684,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 683,
                                    columnNumber: 13
                                }, this),
                                "PTO Donations",
                                ptoDonationRequests.filter((r)=>r.status === 'active').length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse",
                                    children: ptoDonationRequests.filter((r)=>r.status === 'active').length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 688,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                const weekStart = new Date();
                                weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                                const weekShifts = shifts.filter((s)=>s.start >= weekStart);
                                setCopiedWeek(weekShifts);
                                alert('Week copied! Click "Paste Week" to apply to another week.');
                            },
                            className: "px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-500 hover:to-slate-600 transition-all shadow-lg flex items-center gap-2 text-pop-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 703,
                                    columnNumber: 13
                                }, this),
                                "Copy Week"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 693,
                            columnNumber: 11
                        }, this),
                        copiedWeek && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                alert('Paste functionality would duplicate shifts to selected week');
                            },
                            className: "px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg flex items-center gap-2 text-pop-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 713,
                                    columnNumber: 15
                                }, this),
                                "Paste Week (",
                                copiedWeek.length,
                                " shifts)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 707,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowConflictPanel(!showConflictPanel),
                            className: "px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-500 hover:to-rose-500 transition-all shadow-lg flex items-center gap-2 text-pop-light relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 721,
                                    columnNumber: 13
                                }, this),
                                "Conflicts",
                                detectedConflicts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce",
                                    children: detectedConflicts.length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 724,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 717,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (undoStack.length > 0) {
                                    const previous = undoStack[undoStack.length - 1];
                                    setRedoStack([
                                        ...redoStack,
                                        shifts
                                    ]);
                                    setShifts(previous);
                                    setUndoStack(undoStack.slice(0, -1));
                                }
                            },
                            disabled: undoStack.length === 0,
                            className: "px-3 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                            title: "Undo",
                            children: "↶"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 729,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (redoStack.length > 0) {
                                    const next = redoStack[redoStack.length - 1];
                                    setUndoStack([
                                        ...undoStack,
                                        shifts
                                    ]);
                                    setShifts(next);
                                    setRedoStack(redoStack.slice(0, -1));
                                }
                            },
                            disabled: redoStack.length === 0,
                            className: "px-3 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                            title: "Redo",
                            children: "↷"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 744,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg border border-purple-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                    className: "w-5 h-5 text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 761,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400",
                                            children: "Weekly Cost"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 763,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-bold text-white",
                                            children: [
                                                "$",
                                                laborCost.current.toFixed(0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 764,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 762,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-8 bg-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 766,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400",
                                            children: "vs Budget"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 768,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-sm font-bold ${laborCost.savings >= 0 ? 'text-emerald-400' : 'text-red-400'}`,
                                            children: [
                                                laborCost.savings >= 0 ? '+' : '',
                                                laborCost.savings.toFixed(0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 769,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 767,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 760,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 620,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 619,
                columnNumber: 7
            }, this),
            conflicts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-red-900/20 border-2 border-red-500 rounded-xl p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 781,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-red-300 mb-2",
                                    children: [
                                        conflicts.length,
                                        " Schedule Conflict",
                                        conflicts.length > 1 ? 's' : '',
                                        " Detected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 783,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        conflicts.slice(0, 3).map((conflict, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-red-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-2 h-2 rounded-full ${conflict.severity === 'error' ? 'bg-red-500' : 'bg-yellow-500'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 21
                                                    }, this),
                                                    conflict.message
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 786,
                                                columnNumber: 19
                                            }, this)),
                                        conflicts.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-red-300 mt-2",
                                            children: [
                                                "+ ",
                                                conflicts.length - 3,
                                                " more conflicts"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 792,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 784,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-3 px-3 py-1 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-lg transition",
                                    children: "Fix All Issues"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 795,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 782,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 780,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 779,
                columnNumber: 9
            }, this),
            showHRAlerts && hrAlerts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 border border-blue-500/30 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "w-5 h-5 text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 808,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-blue-200",
                                        children: "HR Integration • Active Alerts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 809,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 810,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 807,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowHRAlerts(false),
                                className: "text-blue-400 hover:text-blue-300 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 816,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 812,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 806,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2",
                        children: hrAlerts.map((alert1, idx)=>{
                            const severityColors = {
                                high: 'border-red-500/50 bg-red-950/30',
                                medium: 'border-yellow-500/50 bg-yellow-950/30',
                                info: 'border-blue-500/50 bg-blue-950/30'
                            };
                            const severityIcons = {
                                high: '🛑',
                                medium: '⚠️',
                                info: '🛡️'
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-lg border-l-4 ${severityColors[alert1.severity]}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: severityIcons[alert1.severity]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-white text-sm",
                                                        children: alert1.employee
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded text-[10px] font-bold uppercase ${alert1.type === 'certification-expired' ? 'bg-red-600 text-white' : alert1.type === 'certification-expiring' ? 'bg-yellow-600 text-black' : 'bg-blue-600 text-white'}`,
                                                        children: alert1.type.replace('-', ' ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 838,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-300 mb-2",
                                                children: alert1.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 849,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 851,
                                                        columnNumber: 25
                                                    }, this),
                                                    alert1.action
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 850,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 837,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 836,
                                    columnNumber: 19
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 835,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 820,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 pt-3 border-t border-blue-500/20 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 863,
                                        columnNumber: 15
                                    }, this),
                                    "View All HR Data"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 862,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 867,
                                        columnNumber: 15
                                    }, this),
                                    "HR Settings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 866,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 861,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 805,
                columnNumber: 9
            }, this),
            showIntegrationDashboard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-gradient-to-r from-purple-950 via-indigo-950 to-purple-950 border border-purple-500/30 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "w-5 h-5 text-purple-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 879,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-purple-200",
                                        children: "System Integration Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 880,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 878,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowIntegrationDashboard(false),
                                className: "text-purple-400 hover:text-purple-300 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 886,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 882,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 877,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 894,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-emerald-300",
                                                children: "Scheduler → Payroll"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 895,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 893,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-300 mb-2",
                                        children: "Shift hours, differentials, bonuses flowing to payroll in real-time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 897,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-emerald-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-emerald-400 font-semibold",
                                                        children: "This Week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 900,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: [
                                                            "$",
                                                            laborCost.current.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 901,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 899,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-emerald-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-emerald-400 font-semibold",
                                                        children: "Next Pay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: [
                                                            "$",
                                                            laborCost.projected.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 905,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 903,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 898,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 892,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-950/40 border border-blue-500/30 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 913,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-blue-300",
                                                children: "Timeclock → Scheduler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 914,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 912,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-300 mb-2",
                                        children: "Live attendance tracking with late/no-show alerts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 916,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-blue-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-green-400 font-semibold",
                                                        children: "✓ On Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 919,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 918,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-blue-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-yellow-400 font-semibold",
                                                        children: "⚠ Late"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 922,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-blue-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-red-400 font-semibold",
                                                        children: "✕ No Show"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 927,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 926,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 917,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 911,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-indigo-950/40 border border-indigo-500/30 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-indigo-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 936,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-indigo-300",
                                                children: "HR → Scheduler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 937,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 935,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-300 mb-2",
                                        children: "Certifications, time-off, availability blocking shifts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 939,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-indigo-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-indigo-400 font-semibold",
                                                        children: "Alerts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 942,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: hrAlerts.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 941,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-indigo-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-red-400 font-semibold",
                                                        children: "Expired"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 946,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: hrAlerts.filter((a)=>a.type === 'certification-expired').length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 947,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 945,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 940,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 934,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-purple-950/40 border border-purple-500/30 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 955,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-purple-300",
                                                children: "Guild → Payroll"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 956,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 954,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-300 mb-2",
                                        children: "Performance bonuses and achievement rewards"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 958,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-purple-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-purple-400 font-semibold",
                                                        children: "Bonuses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: "$425"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 962,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 960,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-purple-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-purple-400 font-semibold",
                                                        children: "Top 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: "+$150"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 966,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 964,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 959,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 953,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/40 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 974,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-purple-300",
                                                children: "Oracle → All Systems"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 975,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 973,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-300 mb-2",
                                        children: "AI predictions influencing every decision"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 977,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-purple-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-purple-400 font-semibold",
                                                        children: "Confidence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 980,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: "92%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 981,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 979,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-purple-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-blue-400 font-semibold",
                                                        children: "Insights"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 984,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: oracleInsights.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 985,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 983,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 978,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 972,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-rose-950/40 border border-rose-500/30 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-rose-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 993,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-rose-300",
                                                children: "Marketplace → Scheduler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 994,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 992,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-300 mb-2",
                                        children: "Open shifts filled via gamified bonus system"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 996,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-rose-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-rose-400 font-semibold",
                                                        children: "Open"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 999,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1000,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 998,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-rose-900/30 rounded px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-green-400 font-semibold",
                                                        children: "Filled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-white font-bold",
                                                        children: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1004,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1002,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 997,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 991,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 890,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 pt-3 border-t border-purple-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-center text-purple-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-3 h-3 inline mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1012,
                                    columnNumber: 15
                                }, this),
                                "All systems connected • Real-time data flow • AI-powered predictions"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1011,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1010,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 876,
                columnNumber: 9
            }, this),
            showOraclePanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-purple-900/40 border-2 border-purple-500/50 rounded-xl p-4 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-6 h-6 text-purple-300 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1025,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1026,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1024,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-white text-lg",
                                                children: "Oracle AI • Live Insights"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-200 text-xs",
                                                children: "Predictive analytics monitoring your schedule"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1030,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1023,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowOraclePanel(false),
                                className: "text-purple-300 hover:text-white transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1038,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1033,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1022,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: oracleInsights.map((insight, idx)=>{
                            const severityColors = {
                                'high': 'border-red-500/50 bg-red-900/20',
                                'medium': 'border-yellow-500/50 bg-yellow-900/20',
                                'info': 'border-blue-500/50 bg-blue-900/20'
                            };
                            const severityIcons = {
                                'high': '🔴',
                                'medium': '🟡',
                                'info': '🔵'
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-lg border-2 p-3 ${severityColors[insight.severity]} hover:scale-[1.02] transition`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: severityIcons[insight.severity]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1059,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-white text-sm",
                                                        children: insight.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 bg-purple-900/50 px-2 py-0.5 rounded-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "w-3 h-3 text-purple-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1063,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-purple-200 text-xs font-bold",
                                                        children: [
                                                            insight.confidence,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1064,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1062,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1057,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-purple-100 text-xs mb-2",
                                        children: insight.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1067,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-purple-300 italic",
                                                children: insight.impact
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1069,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded transition",
                                                children: insight.action
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1070,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1068,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1056,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1043,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1021,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex gap-2 items-center flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode('grid'),
                        className: `px-4 py-2 rounded-lg font-semibold transition-all border-2 ${viewMode === 'grid' ? 'bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border-purple-500' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-600'}`,
                        children: "📋 Staff Grid View"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1083,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode('calendar'),
                        className: `px-4 py-2 rounded-lg font-semibold transition-all border-2 ${viewMode === 'calendar' ? 'bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border-purple-500' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-600'}`,
                        children: "📅 Calendar View"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1093,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1082,
                columnNumber: 7
            }, this),
            showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowSettings(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-purple-500/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-gradient-to-r from-purple-900 via-purple-700 to-black p-6 border-b-2 border-purple-500 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white text-pop-strong",
                                            children: "Scheduler Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowSettings(false),
                                    className: "text-white hover:text-purple-200 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1120,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 rounded-xl p-5 border border-purple-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-purple-200 mb-4 flex items-center gap-2",
                                            children: "⭐ Star Employee Animations"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-semibold text-purple-100",
                                                                    children: "Enable Light Tracer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1136,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 mt-1",
                                                                    children: "Highlight top 3 performers with animated border"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1137,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1135,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowStarAnimation(!showStarAnimation),
                                                            className: `relative w-14 h-7 rounded-full transition-colors ${showStarAnimation ? 'bg-purple-600' : 'bg-slate-600'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${showStarAnimation ? 'translate-x-7' : 'translate-x-0'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1139,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-semibold text-purple-100",
                                                                    children: "Tracer Color"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1154,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 mt-1",
                                                                    children: "Customize the animation glow color"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1155,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1153,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "color",
                                                                    value: tracerColor,
                                                                    onChange: (e)=>setTracerColor(e.target.value),
                                                                    className: "w-16 h-10 rounded-lg cursor-pointer border-2 border-purple-400 shadow-lg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1158,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-mono text-slate-300 bg-slate-700 px-2 py-1 rounded",
                                                                    children: tracerColor
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1164,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1157,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 p-3 bg-slate-900 rounded-lg border border-slate-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400 mb-2",
                                                            children: "Preview:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1170,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-3 rounded-lg bg-slate-800 text-white text-sm font-semibold relative ${showStarAnimation ? 'star-employee-card' : ''}`,
                                                            style: {
                                                                ...showStarAnimation ? {
                                                                    '--tracer-color-light': hexToRgba(tracerColor, 0.8),
                                                                    '--tracer-color-medium': hexToRgba(tracerColor, 0.4),
                                                                    '--tracer-color-soft': hexToRgba(tracerColor, 0.3),
                                                                    '--tracer-color-faint': hexToRgba(tracerColor, 0.1)
                                                                } : {}
                                                            },
                                                            children: "⭐ Jennifer Thompson - Rank #1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1171,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 rounded-xl p-5 border border-purple-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-purple-200 mb-4 flex items-center gap-2",
                                            children: "🎨 Display Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-semibold text-purple-100",
                                                                    children: "Show Avatars"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1196,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 mt-1",
                                                                    children: "Display employee profile pictures"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1197,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1195,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "relative w-14 h-7 rounded-full bg-purple-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full translate-x-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1200,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1199,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-semibold text-purple-100",
                                                                    children: "Compact View"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1205,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 mt-1",
                                                                    children: "Reduce spacing between shifts"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1206,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1204,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "relative w-14 h-7 rounded-full bg-slate-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1209,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1208,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-semibold text-purple-100",
                                                                    children: "Show Guild Ranks"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1214,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 mt-1",
                                                                    children: "Display level badges and rankings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1215,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1213,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "relative w-14 h-7 rounded-full bg-purple-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full translate-x-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1218,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1217,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1212,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 rounded-xl p-5 border border-purple-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-purple-200 mb-4 flex items-center gap-2",
                                            children: "🔔 Notifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-semibold text-purple-100",
                                                                    children: "Shift Conflicts"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1232,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 mt-1",
                                                                    children: "Alert when schedules overlap"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1233,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1231,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "relative w-14 h-7 rounded-full bg-purple-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full translate-x-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1236,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1235,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-semibold text-purple-100",
                                                                    children: "Overtime Warnings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1241,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 mt-1",
                                                                    children: "Notify when approaching hour limits"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1242,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1240,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "relative w-14 h-7 rounded-full bg-purple-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full translate-x-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1245,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1244,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1229,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1225,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky bottom-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 border-t-2 border-purple-500/30 flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowSettings(false),
                                    className: "px-6 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-colors",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1254,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowSettings(false),
                                    className: "px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg",
                                    children: "Save Settings"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1260,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1253,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 1108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1107,
                columnNumber: 9
            }, this),
            showConflictPanel && detectedConflicts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-gradient-to-r from-red-900/40 to-rose-900/40 border-2 border-red-500/50 rounded-xl p-4 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-5 h-5 text-red-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-red-200",
                                        children: "Schedule Conflicts Detected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1277,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowConflictPanel(false),
                                className: "text-red-300 hover:text-white",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1279,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1274,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: detectedConflicts.map((conflict, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-lg border ${conflict.severity === 'high' ? 'bg-red-900/30 border-red-500/50' : conflict.severity === 'medium' ? 'bg-yellow-900/30 border-yellow-500/50' : 'bg-blue-900/30 border-blue-500/50'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-2 h-2 rounded-full mt-1.5 ${conflict.severity === 'high' ? 'bg-red-500 animate-pulse' : conflict.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1289,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold text-white",
                                                    children: conflict.type.toUpperCase().replace('-', ' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1295,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-300 mt-1",
                                                    children: conflict.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1296,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1294,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs text-white",
                                            children: "Fix"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1298,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1288,
                                    columnNumber: 17
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1283,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1281,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1273,
                columnNumber: 9
            }, this),
            overtimeWarnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-2 border-yellow-500/50 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-5 h-5 text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1312,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-yellow-200",
                                children: "Overtime Warnings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1311,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: overtimeWarnings.map((warning, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-2 bg-yellow-900/30 rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-white",
                                        children: warning.employeeName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1318,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-yellow-400",
                                        children: [
                                            warning.hours,
                                            " hrs"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1319,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1317,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1315,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1310,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-gradient-to-r from-sky-900/40 to-blue-900/40 border-2 border-sky-500/50 rounded-xl p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl",
                                    children: weatherData.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: [
                                                weatherData.temp,
                                                "°F"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-sky-200",
                                            children: weatherData.condition
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1333,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-sky-300",
                            children: "Next 3 days: Sunny"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1336,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 1328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 bg-gradient-to-r from-slate-900 to-slate-800 border-2 border-slate-600 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-white mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "w-5 h-5 text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1343,
                                columnNumber: 11
                            }, this),
                            "Weekly Coverage Status"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-2",
                        children: Object.entries(coverageHeatmap).map(([day, data])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-lg text-center ${data.percentage < 75 ? 'bg-red-900/40 border border-red-500/50' : data.percentage < 90 ? 'bg-yellow-900/40 border border-yellow-500/50' : data.percentage < 105 ? 'bg-green-900/40 border border-green-500/50' : 'bg-blue-900/40 border border-blue-500/50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-300",
                                        children: day
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1354,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-white",
                                        children: [
                                            data.percentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-400",
                                        children: [
                                            data.staffed,
                                            "/",
                                            data.required
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, day, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1348,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1341,
                columnNumber: 7
            }, this),
            recentPunchNotifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 right-4 z-50 space-y-2 max-w-sm",
                children: recentPunchNotifications.slice(0, 3).map((notification, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-xl p-3 animate-in slide-in-from-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1368,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold",
                                        children: [
                                            notification.employeeName,
                                            " clocked ",
                                            notification.action
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1369,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1367,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-green-100 mt-1",
                                children: [
                                    Math.floor((Date.now() - notification.timestamp.getTime()) / 60000),
                                    " min ago"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1373,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1366,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1364,
                columnNumber: 9
            }, this),
            showAIScheduler && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowAIScheduler(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-purple-500/50 max-w-3xl w-full",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 p-6 border-b-2 border-purple-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-7 h-7 text-yellow-300 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1388,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white text-pop-strong",
                                                        children: "Oracle AI Auto-Scheduler"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-purple-200 text-sm",
                                                        children: "Intelligent scheduling powered by predictive analytics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1391,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1389,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1387,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowAIScheduler(false),
                                        className: "text-white hover:text-purple-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1396,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1395,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1394,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1386,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1385,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800/50 rounded-lg p-4 border border-purple-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "w-5 h-5 text-yellow-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1405,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-purple-200",
                                                            children: "Optimization Goals"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1406,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1404,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm text-purple-100 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    defaultChecked: true,
                                                                    className: "rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1410,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Minimize labor costs"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1409,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm text-purple-100 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    defaultChecked: true,
                                                                    className: "rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1414,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Balance workload fairly"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1413,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm text-purple-100 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    defaultChecked: true,
                                                                    className: "rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1418,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Respect availability preferences"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1417,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm text-purple-100 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    defaultChecked: true,
                                                                    className: "rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1422,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Prioritize top performers"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1421,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1408,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800/50 rounded-lg p-4 border border-purple-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-5 h-5 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1429,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-purple-200",
                                                            children: "AI Insights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1430,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1428,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 text-sm text-purple-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "w-4 h-4 text-emerald-400 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1434,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Jennifer Thompson has 98% on-time rate - ideal for opening shifts"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1435,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1433,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "w-4 h-4 text-emerald-400 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1438,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Marcus Chen performs best on night shifts (data shows 15% higher efficiency)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1439,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1437,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                    className: "w-4 h-4 text-yellow-400 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1442,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Wednesday understaffed - suggest adding 2 more employees"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1443,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1441,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1432,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1427,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-purple-200 mb-3",
                                            children: "Predicted Outcomes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-emerald-400",
                                                            children: "-23%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1452,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Labor Cost Reduction"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1453,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1451,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-blue-400",
                                                            children: "94%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1456,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Coverage Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1457,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1455,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-purple-400",
                                                            children: "$3,450"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1460,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Projected Savings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1461,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1459,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1450,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1448,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowAIScheduler(false),
                                            className: "px-6 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1466,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition shadow-lg flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1470,
                                                    columnNumber: 19
                                                }, this),
                                                "Generate Schedule"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1469,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1465,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1401,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 1384,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1383,
                columnNumber: 9
            }, this),
            showMarketplace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowMarketplace(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-emerald-500/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 p-6 border-b-2 border-emerald-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "w-7 h-7 text-emerald-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1486,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white text-pop-strong",
                                                        children: "Shift Marketplace 🎮"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1488,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-emerald-200 text-sm",
                                                        children: "Claim shifts, earn bonuses, and climb the leaderboard!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1489,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1487,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1485,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowMarketplace(false),
                                        className: "text-white hover:text-emerald-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1494,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1493,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1492,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1484,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1483,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                marketplacePostedShifts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-4 mb-6 border-2 border-green-500/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-5 h-5 text-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1504,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-green-200",
                                                    children: "Your Posted Bonus Shifts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1505,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-xs text-green-300",
                                                    children: [
                                                        marketplacePostedShifts.length,
                                                        " active"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1506,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1503,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: marketplacePostedShifts.map((posting, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800/60 rounded-lg p-3 border border-green-500/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-white",
                                                                        children: posting.shift.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1513,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-slate-300 mt-1",
                                                                        children: [
                                                                            "📍 ",
                                                                            posting.shift.location,
                                                                            " • 👤 ",
                                                                            posting.shift.employeeName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1514,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-400 mt-1",
                                                                        children: [
                                                                            "Posted ",
                                                                            Math.floor((new Date().getTime() - posting.timestamp.getTime()) / 60000),
                                                                            " min ago"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1517,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1512,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-green-400 text-lg",
                                                                        children: [
                                                                            "$",
                                                                            posting.bonus
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1522,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-green-300",
                                                                        children: "bonus"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1523,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1521,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1511,
                                                        columnNumber: 25
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1510,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1508,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1502,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-xl p-4 mb-6 border-2 border-yellow-500/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                            className: "w-5 h-5 text-yellow-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1536,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-yellow-200",
                                                            children: "This Week's Bonus Leaders"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1537,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1535,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-yellow-300",
                                                    children: "Resets Monday 12:00 AM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1539,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1534,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800/50 rounded-lg p-3 border-2 border-yellow-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl mb-1",
                                                                children: "🥇"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1544,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-white text-sm",
                                                                children: "Jennifer T."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1545,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-yellow-400 font-bold",
                                                                children: "$450"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1546,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400",
                                                                children: "7 shifts claimed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1547,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1543,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1542,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800/50 rounded-lg p-3 border border-slate-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl mb-1",
                                                                children: "🥈"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1552,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-white text-sm",
                                                                children: "Marcus C."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1553,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-slate-300 font-bold",
                                                                children: "$320"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1554,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400",
                                                                children: "5 shifts claimed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1555,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1551,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1550,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800/50 rounded-lg p-3 border border-slate-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl mb-1",
                                                                children: "🥉"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1560,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-white text-sm",
                                                                children: "David K."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1561,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-slate-300 font-bold",
                                                                children: "$280"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1562,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400",
                                                                children: "4 shifts claimed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1563,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1558,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1541,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1533,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-lg transition",
                                            children: "Available Shifts (12)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1570,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition",
                                            children: "Trade Requests (5)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1573,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition",
                                            children: "My Posts (2)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1576,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1569,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            shift: 'Emergency Night Shift',
                                            date: 'Tonight',
                                            time: '11:00 PM - 7:00 AM',
                                            hours: 8,
                                            bonus: 150,
                                            urgency: 'URGENT',
                                            xp: 200,
                                            posted: 'Sarah Martinez',
                                            timeAgo: '2 min ago',
                                            claims: 3
                                        },
                                        {
                                            shift: 'Day Shift - ICU',
                                            date: 'Tomorrow',
                                            time: '7:00 AM - 3:00 PM',
                                            hours: 8,
                                            bonus: 75,
                                            urgency: 'HIGH',
                                            xp: 150,
                                            posted: 'David Kim',
                                            timeAgo: '45 min ago',
                                            claims: 5
                                        },
                                        {
                                            shift: 'Evening Shift - Radiology',
                                            date: 'Monday',
                                            time: '3:00 PM - 11:00 PM',
                                            hours: 8,
                                            bonus: 100,
                                            urgency: 'MEDIUM',
                                            xp: 120,
                                            posted: 'Lisa Anderson',
                                            timeAgo: '2 hours ago',
                                            claims: 2
                                        },
                                        {
                                            shift: 'Weekend Day - Lab',
                                            date: 'Saturday',
                                            time: '8:00 AM - 4:00 PM',
                                            hours: 8,
                                            bonus: 125,
                                            urgency: 'HIGH',
                                            xp: 175,
                                            posted: 'Christopher Lee',
                                            timeAgo: '4 hours ago',
                                            claims: 4
                                        },
                                        {
                                            shift: 'Holiday Coverage - Nursing',
                                            date: 'Jan 20 (MLK Day)',
                                            time: '7:00 AM - 7:00 PM',
                                            hours: 12,
                                            bonus: 250,
                                            urgency: 'PREMIUM',
                                            xp: 300,
                                            posted: 'Management',
                                            timeAgo: '1 day ago',
                                            claims: 8
                                        }
                                    ].map((item, i)=>{
                                        const urgencyColors = {
                                            'URGENT': 'bg-red-600 animate-pulse',
                                            'HIGH': 'bg-orange-600',
                                            'MEDIUM': 'bg-yellow-600',
                                            'PREMIUM': 'bg-purple-600 animate-pulse'
                                        };
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800/50 rounded-lg p-4 border-2 border-emerald-500/30 hover:border-emerald-500 transition hover:scale-[1.02]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `px-2 py-1 ${urgencyColors[item.urgency]} text-white text-xs font-bold rounded`,
                                                                            children: item.urgency
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1599,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-white text-lg",
                                                                            children: item.shift
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1602,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1598,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4 text-sm text-slate-300 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "📅 ",
                                                                                item.date
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1605,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "🕐 ",
                                                                                item.time
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1606,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "⏱️ ",
                                                                                item.hours,
                                                                                " hours"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1607,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1604,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 bg-green-900/50 px-3 py-1 rounded-full border border-green-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                                    className: "w-4 h-4 text-green-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 1611,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-300 font-bold text-lg",
                                                                                    children: [
                                                                                        "$",
                                                                                        item.bonus
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 1612,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400 text-xs font-semibold",
                                                                                    children: "BONUS"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 1613,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1610,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                                    className: "w-4 h-4 text-purple-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 1616,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-300 font-bold",
                                                                                    children: [
                                                                                        "+",
                                                                                        item.xp,
                                                                                        " XP"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 1617,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1615,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 text-slate-400 text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 1620,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        item.claims,
                                                                                        " interested"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 1621,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1619,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1609,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-400",
                                                                    children: [
                                                                        "Posted by ",
                                                                        item.posted,
                                                                        " • ",
                                                                        item.timeAgo
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1624,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1597,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-2 ml-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 1628,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Claim Now"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1627,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "px-6 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-semibold rounded-lg transition",
                                                                    children: "Details"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 1631,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1626,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1596,
                                                    columnNumber: 23
                                                }, this),
                                                item.urgency === 'URGENT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 bg-red-900/30 border border-red-500 rounded p-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-4 h-4 text-red-400 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1638,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-300 text-xs font-bold",
                                                            children: "⚡ STARTS IN 3 HOURS - Double XP if claimed within 1 hour!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1639,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1637,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1595,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1580,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1499,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 1482,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1481,
                columnNumber: 9
            }, this),
            showBonusOffer && selectedShiftForBonus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowBonusOffer(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-green-500/50 max-w-md w-full",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 p-6 border-b-2 border-green-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                className: "w-7 h-7 text-green-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1658,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-white",
                                                        children: "Offer Shift Bonus"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1660,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-green-200 text-sm",
                                                        children: "Post to marketplace with bonus"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1661,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1659,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1657,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowBonusOffer(false),
                                        className: "text-white hover:text-green-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1666,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1665,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1664,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1656,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1655,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 rounded-lg p-4 border border-green-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-white mb-2",
                                            children: selectedShiftForBonus.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1674,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 text-sm text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "👤 ",
                                                        selectedShiftForBonus.employeeName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1676,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "📍 ",
                                                        selectedShiftForBonus.location
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1677,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "📅 ",
                                                        selectedShiftForBonus.start.toLocaleDateString(),
                                                        " • ",
                                                        selectedShiftForBonus.start.toLocaleTimeString([], {
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        }),
                                                        " - ",
                                                        selectedShiftForBonus.end.toLocaleTimeString([], {
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1678,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "⏱️ ",
                                                        ((selectedShiftForBonus.end.getTime() - selectedShiftForBonus.start.getTime()) / (1000 * 60 * 60)).toFixed(1),
                                                        " hours"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1679,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1675,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1673,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-green-200 mb-2",
                                            children: "Select Bonus Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1685,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                {
                                                    amount: 50,
                                                    label: 'Standard',
                                                    urgency: 'MEDIUM'
                                                },
                                                {
                                                    amount: 75,
                                                    label: 'Elevated',
                                                    urgency: 'HIGH'
                                                },
                                                {
                                                    amount: 100,
                                                    label: 'Priority',
                                                    urgency: 'HIGH'
                                                },
                                                {
                                                    amount: 150,
                                                    label: 'URGENT',
                                                    urgency: 'URGENT'
                                                }
                                            ].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-slate-700 hover:bg-slate-600 border-2 border-green-500/30 hover:border-green-500 rounded-lg p-3 transition group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-green-400",
                                                            children: [
                                                                "$",
                                                                preset.amount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1697,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: preset.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1698,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, preset.amount, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1693,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1686,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-slate-400",
                                                    children: "Custom Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1703,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-400 text-xl font-bold",
                                                            children: "$"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1705,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            placeholder: "Enter amount",
                                                            className: "flex-1 bg-slate-700 border border-green-500/30 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-500 outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1706,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1704,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1702,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-purple-900/30 border border-purple-500/30 rounded-lg p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-purple-200",
                                                children: "XP Reward"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1718,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-4 h-4 text-purple-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1720,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-purple-300 font-bold",
                                                        children: "+150 XP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1721,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1719,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1717,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1716,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-green-200 mb-1",
                                            children: "Notes (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1728,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Add details about why this shift is available...",
                                            className: "w-full bg-slate-700 border border-green-500/30 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-green-500 outline-none h-20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1729,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1727,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowBonusOffer(false),
                                            className: "flex-1 px-4 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1737,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (selectedShiftForBonus) {
                                                    // Get bonus amount from input
                                                    const bonusInput = document.querySelector('input[placeholder="Enter bonus amount..."]');
                                                    const bonusAmount = bonusInput ? parseFloat(bonusInput.value) || 50 : 50;
                                                    // Add to marketplace posted shifts
                                                    setMarketplacePostedShifts((prev)=>[
                                                            ...prev,
                                                            {
                                                                shift: selectedShiftForBonus,
                                                                bonus: bonusAmount,
                                                                timestamp: new Date()
                                                            }
                                                        ]);
                                                    setShowBonusOffer(false);
                                                    setShowMarketplaceConfirmation(true);
                                                    // Auto-hide confirmation after 4 seconds
                                                    setTimeout(()=>setShowMarketplaceConfirmation(false), 4000);
                                                }
                                            },
                                            className: "flex-1 px-4 py-3 rounded-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 transition shadow-lg flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1766,
                                                    columnNumber: 19
                                                }, this),
                                                "Post to Marketplace"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1743,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1736,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1671,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 1654,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1653,
                columnNumber: 9
            }, this),
            showTemplates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowTemplates(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-orange-500/50 max-w-3xl w-full",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-orange-900 via-amber-900 to-orange-900 p-6 border-b-2 border-orange-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "w-7 h-7 text-orange-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1782,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white text-pop-strong",
                                                        children: "Schedule Templates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1784,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-orange-200 text-sm",
                                                        children: "Save and reuse recurring schedules"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1785,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1783,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1781,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowTemplates(false),
                                        className: "text-white hover:text-orange-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1790,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1789,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1788,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1780,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1779,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1797,
                                            columnNumber: 17
                                        }, this),
                                        "Save Current Schedule as Template"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1796,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        {
                                            name: 'Standard Week',
                                            shifts: 45,
                                            used: 23
                                        },
                                        {
                                            name: 'Holiday Coverage',
                                            shifts: 38,
                                            used: 12
                                        },
                                        {
                                            name: 'Summer Staffing',
                                            shifts: 52,
                                            used: 8
                                        },
                                        {
                                            name: 'Weekend Only',
                                            shifts: 24,
                                            used: 15
                                        }
                                    ].map((template, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800/50 rounded-lg p-4 border border-orange-500/30 hover:border-orange-500 transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-white",
                                                            children: template.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1809,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs bg-orange-600 text-white px-2 py-1 rounded",
                                                            children: "SAVED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1810,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1808,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-300",
                                                    children: [
                                                        template.shifts,
                                                        " shifts • Used ",
                                                        template.used,
                                                        " times"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1812,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "flex-1 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold py-2 rounded transition",
                                                            children: "Apply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1814,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "px-3 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded transition",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1817,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 1813,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1807,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1800,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1795,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 1778,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1777,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-purple-200 mb-1",
                                        children: "Department"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1833,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "border border-purple-500/50 rounded px-3 py-2 bg-slate-800 text-white focus:ring-2 focus:ring-purple-500 outline-none",
                                        value: selectedDepartment,
                                        onChange: (e)=>{
                                            setSelectedDepartment(e.target.value);
                                            setCurrentPage(1);
                                        },
                                        children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: dept,
                                                children: dept === "all" ? "All Departments" : dept
                                            }, dept, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1840,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1834,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1832,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-purple-200 mb-1",
                                        children: "Shift"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1845,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "border border-purple-500/50 rounded px-3 py-2 bg-slate-800 text-white focus:ring-2 focus:ring-purple-500 outline-none",
                                        value: selectedShift,
                                        onChange: (e)=>{
                                            setSelectedShift(e.target.value);
                                            setCurrentPage(1);
                                        },
                                        children: shifts.map((shift)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: shift,
                                                children: shift === "all" ? "All Shifts" : `${shift} Shift`
                                            }, shift, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1852,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1846,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1844,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-purple-200 mb-1",
                                        children: "Search Employee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1857,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "border border-purple-500/50 rounded px-3 py-2 bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none",
                                        placeholder: "Type a name...",
                                        value: employeeSearch,
                                        onChange: (e)=>{
                                            setEmployeeSearch(e.target.value);
                                            setCurrentPage(1);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1858,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1856,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-purple-200 mb-1",
                                        children: "Show Per Page"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1867,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "border border-purple-500/50 rounded px-3 py-2 bg-slate-800 text-white focus:ring-2 focus:ring-purple-500 outline-none",
                                        value: employeesPerPage,
                                        onChange: (e)=>{
                                            setEmployeesPerPage(Number(e.target.value));
                                            setCurrentPage(1);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "20",
                                                children: "20 employees"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1873,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "50",
                                                children: "50 employees"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1874,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "100",
                                                children: "100 employees"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1875,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "-1",
                                                children: "View All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 1876,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1868,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1866,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-1 rounded bg-purple-700 text-white font-semibold hover:bg-purple-600 transition",
                                onClick: ()=>{
                                    setSelectedDepartment("all");
                                    setSelectedShift("all");
                                    setEmployeeSearch("");
                                    setCurrentPage(1);
                                },
                                children: "Reset Filters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1881,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-200 text-sm",
                                children: employeesPerPage === -1 ? 'Viewing All' : `Page ${currentPage} of ${totalPages}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1887,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded bg-slate-700 text-white font-semibold hover:bg-slate-600 disabled:opacity-50 transition",
                                onClick: ()=>setCurrentPage(Math.max(1, currentPage - 1)),
                                disabled: currentPage === 1 || employeesPerPage === -1,
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1888,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded bg-slate-700 text-white font-semibold hover:bg-slate-600 disabled:opacity-50 transition",
                                onClick: ()=>setCurrentPage(Math.min(totalPages, currentPage + 1)),
                                disabled: currentPage === totalPages || employeesPerPage === -1,
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1893,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1880,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1830,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-purple-200",
                    children: [
                        "Viewing ",
                        filteredEmployees.length,
                        " employee",
                        filteredEmployees.length !== 1 ? 's' : '',
                        " • ",
                        filteredEvents.length,
                        " shift",
                        filteredEvents.length !== 1 ? 's' : '',
                        " scheduled"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 1902,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1901,
                columnNumber: 7
            }, this),
            viewMode === 'grid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-8 bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white font-bold border-b-2 border-purple-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border-r border-white/20",
                                children: "Time"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 1910,
                                columnNumber: 13
                            }, this),
                            [
                                'Monday',
                                'Tuesday',
                                'Wednesday',
                                'Thursday',
                                'Friday',
                                'Saturday',
                                'Sunday'
                            ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 border-r border-white/20 last:border-r-0 text-center",
                                    children: day
                                }, day, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1912,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 1909,
                        columnNumber: 11
                    }, this),
                    [
                        {
                            label: 'Day Shift (6am-4pm)',
                            start: 6,
                            end: 16
                        },
                        {
                            label: 'Evening Shift (2pm-12am)',
                            start: 14,
                            end: 24
                        },
                        {
                            label: 'Night Shift (10pm-8am)',
                            start: 22,
                            end: 32
                        }
                    ].map((timeBlock, blockIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-8 border-b border-slate-700 hover:bg-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-slate-800 border-r border-slate-700 font-semibold text-slate-100",
                                    children: timeBlock.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 1923,
                                    columnNumber: 15
                                }, this),
                                [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ].map((dayOffset)=>{
                                    const dayShifts = filteredEvents.filter((event)=>{
                                        const eventDay = new Date(event.start).getDay();
                                        const targetDay = (dayOffset + 1) % 7;
                                        const eventHour = new Date(event.start).getHours();
                                        return (eventDay === targetDay || targetDay === 0 && eventDay === 0) && eventHour >= timeBlock.start && eventHour < timeBlock.end;
                                    });
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 border-r border-slate-700 last:border-r-0 min-h-[120px] bg-slate-900 transition-colors",
                                        onDragOver: handleDragOver,
                                        onDrop: (e)=>handleDrop(e, dayOffset, timeBlock),
                                        children: dayShifts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: dayShifts.map((shift, idx)=>{
                                                const employee = mockEmployees.find((emp)=>emp.id === shift.employeeId);
                                                const guildData = shift.employeeId ? guildLevels[shift.employeeId] : null;
                                                const isStar = isStarEmployee(guildData);
                                                // Check if already posted to marketplace
                                                const marketplacePosting = marketplacePostedShifts.find((posting)=>posting.shift.id === shift.id);
                                                // If this is a callout/open shift
                                                if (shift.isCallout) {
                                                    // If posted to marketplace, show awaiting status
                                                    if (marketplacePosting) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-orange-500 text-white font-bold shadow-lg animate-pulse",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1 text-orange-300",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                                className: "w-4 h-4 animate-bounce"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 1965,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs uppercase",
                                                                                children: "BONUS POSTED"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 1966,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1964,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1 text-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 1969,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "$",
                                                                                    marketplacePosting.bonus,
                                                                                    " BONUS"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 1970,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1968,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[8px] text-orange-200",
                                                                        children: "🕐 Awaiting Pickup"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1972,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            // Simulate someone claiming the shift
                                                                            const claimedShift = {
                                                                                ...shift,
                                                                                employeeName: "Marcus Chen",
                                                                                employeeId: "8",
                                                                                isCallout: false,
                                                                                claimedViaMarketplace: true,
                                                                                marketplaceBonus: marketplacePosting.bonus
                                                                            };
                                                                            setShifts(shifts.map((s)=>s.id === shift.id ? claimedShift : s));
                                                                            // Remove from marketplace postings
                                                                            setMarketplacePostedShifts((prev)=>prev.filter((p)=>p.shift.id !== shift.id));
                                                                        },
                                                                        className: "mt-2 px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-xs transition-all",
                                                                        children: "✓ Simulate Claim"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 1973,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 1963,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, idx, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 1959,
                                                            columnNumber: 33
                                                        }, this);
                                                    }
                                                    // Not posted yet, show offer button
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setSelectedShiftForBonus(shift);
                                                            setShowBonusOffer(true);
                                                        },
                                                        className: "w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-red-500 text-white font-bold shadow-lg hover:from-red-800 hover:to-rose-800 transition-all hover:scale-105 cursor-pointer animate-pulse",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1 text-yellow-300",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2009,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs uppercase",
                                                                            children: "NEEDS COVERAGE"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2010,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2008,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1 text-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2013,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "OFFER BONUS?"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2014,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2012,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[8px] text-red-200 opacity-75",
                                                                    children: "(Optional)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2016,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2007,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 1999,
                                                        columnNumber: 31
                                                    }, this);
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group relative",
                                                    onContextMenu: (e)=>{
                                                        e.preventDefault();
                                                        setContextMenu({
                                                            show: true,
                                                            x: e.clientX,
                                                            y: e.clientY,
                                                            shift: shift
                                                        });
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        draggable: true,
                                                        onDragStart: (e)=>handleDragStart(e, shift),
                                                        className: `flex items-center gap-2 p-2 rounded-lg bg-slate-800 text-slate-100 text-xs font-semibold shadow-sm border-l-4 cursor-move hover:bg-slate-700 hover:scale-105 transition-all active:opacity-50 relative ${isStar && showStarAnimation ? 'star-employee-card' : ''}`,
                                                        style: {
                                                            borderLeftColor: shift.color,
                                                            ...isStar && showStarAnimation ? {
                                                                '--tracer-color-light': hexToRgba(tracerColor, 0.8),
                                                                '--tracer-color-medium': hexToRgba(tracerColor, 0.4),
                                                                '--tracer-color-soft': hexToRgba(tracerColor, 0.3),
                                                                '--tracer-color-faint': hexToRgba(tracerColor, 0.1)
                                                            } : {}
                                                        },
                                                        children: [
                                                            shift.employeeId && timeclockData[shift.employeeId] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -top-1 -right-1 z-10",
                                                                children: [
                                                                    timeclockData[shift.employeeId].status === 'on-time' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800",
                                                                        title: "Clocked in on time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2054,
                                                                        columnNumber: 39
                                                                    }, this),
                                                                    timeclockData[shift.employeeId].status === 'late' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 bg-yellow-500 rounded-full border-2 border-slate-800 animate-pulse",
                                                                        title: "Clocked in late"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2057,
                                                                        columnNumber: 39
                                                                    }, this),
                                                                    timeclockData[shift.employeeId].status === 'no-show' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 bg-red-500 rounded-full border-2 border-slate-800 animate-pulse",
                                                                        title: "No show - not clocked in"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2060,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 2052,
                                                                columnNumber: 35
                                                            }, this),
                                                            employee?.avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: employee.avatar,
                                                                alt: employee.name,
                                                                className: "w-6 h-6 rounded-full border-2 border-slate-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 2065,
                                                                columnNumber: 35
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 overflow-hidden",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1",
                                                                        children: [
                                                                            isStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-yellow-300 animate-pulse",
                                                                                children: "⭐"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2073,
                                                                                columnNumber: 48
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "truncate font-bold",
                                                                                children: shift.employeeName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2074,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            guildData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `px-1.5 py-0.5 rounded text-[9px] font-black border ${getLevelColor(guildData.levelName)}`,
                                                                                title: `Rank #${guildData.rank} • ${guildData.xp} XP`,
                                                                                children: [
                                                                                    "Lv",
                                                                                    guildData.level
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2076,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2072,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "truncate text-[10px] opacity-90",
                                                                        children: shift.location
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2082,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    guildData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[9px] opacity-75 truncate",
                                                                        children: [
                                                                            "🏆 Rank #",
                                                                            guildData.rank,
                                                                            " • ",
                                                                            guildData.levelName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2084,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    shift.claimedViaMarketplace && shift.marketplaceBonus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[9px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold inline-flex items-center gap-1 mt-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                                className: "w-2.5 h-2.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2091,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            "Picked up shift (+$",
                                                                            shift.marketplaceBonus,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2090,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    shift.employeeId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[8px] text-green-400 opacity-90 truncate",
                                                                        title: "Shift earnings with performance bonus",
                                                                        children: [
                                                                            "💵 $",
                                                                            (calculateShiftEarnings(shift, shift.employeeId).total + (shift.marketplaceBonus || 0)).toFixed(0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2097,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    marketplacePostedShifts.find((posting)=>posting.shift.id === shift.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[9px] bg-green-500 text-white px-1.5 py-0.5 rounded-full font-bold inline-flex items-center gap-1 mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                                className: "w-2.5 h-2.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2104,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            "$",
                                                                            marketplacePostedShifts.find((posting)=>posting.shift.id === shift.id)?.bonus,
                                                                            " Market Bonus"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2103,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 2071,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 2036,
                                                        columnNumber: 31
                                                    }, this)
                                                }, idx, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2023,
                                                    columnNumber: 29
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 1943,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-slate-500 text-xs italic text-center mt-4",
                                            children: "No staff"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2115,
                                            columnNumber: 23
                                        }, this)
                                    }, dayOffset, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 1936,
                                        columnNumber: 19
                                    }, this);
                                })
                            ]
                        }, blockIdx, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 1922,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 1907,
                columnNumber: 9
            }, this),
            viewMode === 'calendar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DnDCalendar, {
                localizer: localizer,
                events: filteredEvents,
                startAccessor: "start",
                endAccessor: "end",
                style: {
                    height: 700,
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 2px 16px #0001"
                },
                draggableAccessor: ()=>true,
                resizable: true,
                onEventDrop: ()=>{},
                onEventResize: ()=>{},
                eventPropGetter: eventStyleGetter,
                components: {
                    event: ({ event })=>{
                        const shiftEvent = event;
                        const employee = mockEmployees.find((emp)=>emp.id === shiftEvent.employeeId);
                        // Check if this shift has been posted to marketplace
                        const marketplacePosting = marketplacePostedShifts.find((posting)=>posting.shift.id === shiftEvent.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-white relative",
                            style: {
                                fontSize: '12px'
                            },
                            children: [
                                employee?.avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: employee.avatar,
                                    alt: employee.name,
                                    className: "w-5 h-5 rounded-full border border-white/50"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2151,
                                    columnNumber: 21
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold truncate",
                                            children: shiftEvent.employeeName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2158,
                                            columnNumber: 21
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs opacity-90 truncate",
                                            children: shiftEvent.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2159,
                                            columnNumber: 21
                                        }, void 0),
                                        shiftEvent.claimedViaMarketplace && shiftEvent.marketplaceBonus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] bg-emerald-600 text-white px-1 py-0.5 rounded font-bold inline-flex items-center gap-0.5 mt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    className: "w-2.5 h-2.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2163,
                                                    columnNumber: 25
                                                }, void 0),
                                                "Picked up (+$",
                                                shiftEvent.marketplaceBonus,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2162,
                                            columnNumber: 23
                                        }, void 0),
                                        marketplacePosting && !shiftEvent.claimedViaMarketplace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] bg-orange-500 text-white px-1 py-0.5 rounded font-bold inline-flex items-center gap-0.5 mt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    className: "w-2.5 h-2.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2170,
                                                    columnNumber: 25
                                                }, void 0),
                                                "$",
                                                marketplacePosting.bonus,
                                                " - Awaiting"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2169,
                                            columnNumber: 23
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2157,
                                    columnNumber: 19
                                }, void 0),
                                shiftEvent.isOvertime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    size: 12,
                                    className: "text-red-300 animate-bounce"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2175,
                                    columnNumber: 45
                                }, void 0),
                                shiftEvent.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 12,
                                    className: "text-yellow-300 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2176,
                                    columnNumber: 40
                                }, void 0),
                                marketplacePosting && !shiftEvent.claimedViaMarketplace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-1 -right-1 bg-orange-500 rounded-full p-0.5 animate-pulse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "w-3 h-3 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2180,
                                        columnNumber: 23
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2179,
                                    columnNumber: 21
                                }, void 0),
                                shiftEvent.claimedViaMarketplace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-3 h-3 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2186,
                                        columnNumber: 23
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2185,
                                    columnNumber: 21
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 2149,
                            columnNumber: 17
                        }, void 0);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 2127,
                columnNumber: 9
            }, this),
            showSwapRequests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowSwapRequests(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-blue-500/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 p-6 border-b-2 border-blue-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-7 h-7 text-blue-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2203,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Shift Swap Requests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 2205,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-blue-200 text-sm",
                                                        children: "Review and approve employee swap requests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 2206,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2204,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSwapRequests(false),
                                        className: "text-white hover:text-blue-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2211,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2210,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2209,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2201,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 2200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                shiftSwapRequests.filter((r)=>r.status === 'pending').map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-800/50 rounded-lg p-4 border border-blue-500/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-white",
                                                                    children: request.fromEmployee
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2222,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-400",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2223,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-blue-400",
                                                                    children: request.toEmployee
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2224,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2221,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-slate-300 mb-1",
                                                            children: request.shift.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2226,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: [
                                                                request.shift.start.toLocaleDateString(),
                                                                " • ",
                                                                request.shift.location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2227,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-500 mt-2",
                                                            children: [
                                                                "Requested ",
                                                                Math.floor((Date.now() - request.timestamp.getTime()) / 60000),
                                                                " min ago"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2230,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2220,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setShiftSwapRequests(shiftSwapRequests.map((r)=>r.id === request.id ? {
                                                                        ...r,
                                                                        status: 'approved'
                                                                    } : r));
                                                            },
                                                            className: "px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded font-semibold text-sm",
                                                            children: "✓ Approve"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2235,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setShiftSwapRequests(shiftSwapRequests.map((r)=>r.id === request.id ? {
                                                                        ...r,
                                                                        status: 'denied'
                                                                    } : r));
                                                            },
                                                            className: "px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded font-semibold text-sm",
                                                            children: "✗ Deny"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2245,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2234,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2219,
                                            columnNumber: 19
                                        }, this)
                                    }, request.id, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2218,
                                        columnNumber: 17
                                    }, this)),
                                shiftSwapRequests.filter((r)=>r.status === 'pending').length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-slate-400 py-8",
                                    children: "No pending swap requests"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2260,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 2216,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 2199,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 2198,
                columnNumber: 9
            }, this),
            showTimeOffApproval && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowTimeOffApproval(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-yellow-500/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-gradient-to-r from-yellow-900 via-orange-900 to-yellow-900 p-6 border-b-2 border-yellow-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-7 h-7 text-yellow-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Time-Off Requests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 2276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-yellow-200 text-sm",
                                                        children: "Approve or deny employee time-off requests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 2277,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2275,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2273,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowTimeOffApproval(false),
                                        className: "text-white hover:text-yellow-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2282,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2281,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2280,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2272,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 2271,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                timeOffRequests.filter((r)=>r.status === 'pending').map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-800/50 rounded-lg p-4 border border-yellow-500/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-white mb-2",
                                                            children: request.employeeName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2292,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-slate-300 mb-1",
                                                            children: [
                                                                request.startDate.toLocaleDateString(),
                                                                " - ",
                                                                request.endDate.toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2293,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-yellow-300 italic",
                                                            children: request.reason
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2296,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400 mt-2",
                                                            children: [
                                                                Math.ceil((request.endDate.getTime() - request.startDate.getTime()) / (1000 * 60 * 60 * 24)),
                                                                " days requested"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2297,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2291,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setTimeOffRequests(timeOffRequests.map((r)=>r.id === request.id ? {
                                                                        ...r,
                                                                        status: 'approved'
                                                                    } : r));
                                                            },
                                                            className: "px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded font-semibold text-sm",
                                                            children: "✓ Approve"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2302,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setTimeOffRequests(timeOffRequests.map((r)=>r.id === request.id ? {
                                                                        ...r,
                                                                        status: 'denied'
                                                                    } : r));
                                                            },
                                                            className: "px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded font-semibold text-sm",
                                                            children: "✗ Deny"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2312,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2301,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2290,
                                            columnNumber: 19
                                        }, this)
                                    }, request.id, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2289,
                                        columnNumber: 17
                                    }, this)),
                                timeOffRequests.filter((r)=>r.status === 'pending').length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-slate-400 py-8",
                                    children: "No pending time-off requests"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2327,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 2287,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 2270,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 2269,
                columnNumber: 9
            }, this),
            showPTODonations && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowPTODonations(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-pink-500/50 max-w-5xl w-full max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-gradient-to-r from-pink-900 via-purple-900 to-pink-900 p-6 border-b-2 border-pink-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-7 h-7 text-pink-300",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2342,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2341,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "PTO/Sick Time Donations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 2345,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-pink-200 text-sm",
                                                        children: "Support colleagues in need by sharing your time off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 2346,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2344,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2340,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPTODonations(false),
                                        className: "text-white hover:text-pink-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2351,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2350,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2349,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2339,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 2338,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-pink-200 mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2360,
                                                    columnNumber: 19
                                                }, this),
                                                "Active Donation Requests"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2359,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                ptoDonationRequests.filter((r)=>r.status === 'active').map((request)=>{
                                                    const percentFunded = request.hoursReceived / request.hoursNeeded * 100;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg p-5 border-2 border-pink-500/30",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: mockEmployees.find((e)=>e.id === request.recipientId)?.avatar,
                                                                                    alt: request.recipientName,
                                                                                    className: "w-10 h-10 rounded-full border-2 border-pink-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 2371,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "font-bold text-white text-lg",
                                                                                            children: request.recipientName
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                            lineNumber: 2377,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-sm text-pink-200",
                                                                                            children: mockEmployees.find((e)=>e.id === request.recipientId)?.department
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                            lineNumber: 2378,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 2376,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2370,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-slate-300 italic mb-3 pl-12",
                                                                            children: [
                                                                                '"',
                                                                                request.reason,
                                                                                '"'
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2381,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-between mb-1 text-sm",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-pink-300 font-semibold",
                                                                                            children: [
                                                                                                request.hoursReceived,
                                                                                                " hrs donated"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                            lineNumber: 2386,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-slate-400",
                                                                                            children: [
                                                                                                request.hoursNeeded,
                                                                                                " hrs needed"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                            lineNumber: 2387,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 2385,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-full bg-slate-700 rounded-full h-3 overflow-hidden",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 relative",
                                                                                        style: {
                                                                                            width: `${Math.min(percentFunded, 100)}%`
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "absolute inset-0 bg-white/20 animate-pulse"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                            lineNumber: 2394,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                        lineNumber: 2390,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 2389,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-pink-300 mt-1 font-bold",
                                                                                    children: [
                                                                                        percentFunded.toFixed(0),
                                                                                        "% funded"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 2397,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2384,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: [
                                                                                "Posted ",
                                                                                Math.floor((Date.now() - request.timestamp.getTime()) / 86400000),
                                                                                " days ago"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2400,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2369,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 2368,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-slate-800/50 rounded-lg p-4 border border-pink-500/20 mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-3 gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-semibold text-pink-200 mb-1",
                                                                                        children: "Your Balance"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                        lineNumber: 2410,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "bg-slate-700 rounded px-3 py-2 text-sm text-white",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    "PTO: ",
                                                                                                    employeePTOBalances['1']?.pto || 0,
                                                                                                    " hrs"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                                lineNumber: 2412,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    "Sick: ",
                                                                                                    employeePTOBalances['1']?.sick || 0,
                                                                                                    " hrs"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                                lineNumber: 2413,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                        lineNumber: 2411,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2409,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-semibold text-pink-200 mb-1",
                                                                                        children: "Donate Hours"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                        lineNumber: 2417,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "number",
                                                                                        placeholder: "8",
                                                                                        min: "4",
                                                                                        max: "40",
                                                                                        step: "4",
                                                                                        className: "w-full bg-slate-700 border border-pink-500/30 rounded px-3 py-2 text-white text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                        lineNumber: 2418,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2416,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-semibold text-pink-200 mb-1",
                                                                                        children: "Type"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                        lineNumber: 2428,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                        className: "w-full bg-slate-700 border border-pink-500/30 rounded px-3 py-2 text-white text-sm focus:ring-2 focus:ring-pink-500 outline-none",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                children: "PTO"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                                lineNumber: 2430,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                children: "Sick"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                                lineNumber: 2431,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                        lineNumber: 2429,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2427,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2408,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            const donorBalance = employeePTOBalances['1'];
                                                                            const donationAmount = 8; // Would come from input
                                                                            // Update balances
                                                                            setEmployeePTOBalances({
                                                                                ...employeePTOBalances,
                                                                                '1': {
                                                                                    ...donorBalance,
                                                                                    pto: donorBalance.pto - donationAmount
                                                                                },
                                                                                [request.recipientId]: {
                                                                                    ...employeePTOBalances[request.recipientId],
                                                                                    pto: (employeePTOBalances[request.recipientId]?.pto || 0) + donationAmount
                                                                                }
                                                                            });
                                                                            // Update request
                                                                            setPTODonationRequests(ptoDonationRequests.map((r)=>r.id === request.id ? {
                                                                                    ...r,
                                                                                    hoursReceived: r.hoursReceived + donationAmount
                                                                                } : r));
                                                                            // Add to history
                                                                            setPTODonationHistory([
                                                                                ...ptoDonationHistory,
                                                                                {
                                                                                    id: ptoDonationHistory.length + 1,
                                                                                    donorId: '1',
                                                                                    donorName: 'Sarah Martinez',
                                                                                    recipientId: request.recipientId,
                                                                                    recipientName: request.recipientName,
                                                                                    hours: donationAmount,
                                                                                    type: 'PTO',
                                                                                    timestamp: new Date()
                                                                                }
                                                                            ]);
                                                                            alert(`Successfully donated ${donationAmount} hours to ${request.recipientName}!`);
                                                                        },
                                                                        className: "mt-3 w-full px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-5 h-5",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                    lineNumber: 2475,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                                lineNumber: 2474,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Donate Time"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                        lineNumber: 2435,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                lineNumber: 2407,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, request.id, true, {
                                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                        lineNumber: 2367,
                                                        columnNumber: 23
                                                    }, this);
                                                }),
                                                ptoDonationRequests.filter((r)=>r.status === 'active').length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-slate-400 py-8 border-2 border-dashed border-slate-600 rounded-lg",
                                                    children: "No active donation requests"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2484,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2363,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2358,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-purple-200 mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2494,
                                                    columnNumber: 19
                                                }, this),
                                                "Recent Donations - Wall of Generosity"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2493,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                            children: ptoDonationHistory.slice(0, 6).map((donation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800/50 rounded-lg p-3 border border-purple-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: mockEmployees.find((e)=>e.id === donation.donorId)?.avatar,
                                                                    alt: donation.donorName,
                                                                    className: "w-8 h-8 rounded-full border-2 border-purple-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2501,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-white",
                                                                            children: donation.donorName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2507,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: [
                                                                                "donated to ",
                                                                                donation.recipientName
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2508,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2506,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-lg font-bold text-purple-400",
                                                                            children: [
                                                                                donation.hours,
                                                                                " hrs"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2513,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-slate-400",
                                                                            children: donation.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                            lineNumber: 2514,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2512,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2500,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-500",
                                                            children: [
                                                                Math.floor((Date.now() - donation.timestamp.getTime()) / 3600000),
                                                                " hours ago"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2517,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, donation.id, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2499,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2497,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2492,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-5 border-2 border-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-white mb-4",
                                            children: "Create Donation Request (Manager)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2527,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-slate-300 mb-1",
                                                            children: "Employee"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2530,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "w-full bg-slate-700 border border-slate-500 rounded px-3 py-2 text-white focus:ring-2 focus:ring-pink-500 outline-none",
                                                            children: mockEmployees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: emp.id,
                                                                    children: emp.name
                                                                }, emp.id, false, {
                                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                                    lineNumber: 2533,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2531,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2529,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-slate-300 mb-1",
                                                            children: "Hours Needed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2538,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            placeholder: "40",
                                                            className: "w-full bg-slate-700 border border-slate-500 rounded px-3 py-2 text-white focus:ring-2 focus:ring-pink-500 outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                            lineNumber: 2539,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2537,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2528,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-300 mb-1",
                                                    children: "Reason"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2547,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    placeholder: "Brief description of the situation...",
                                                    className: "w-full bg-slate-700 border border-slate-500 rounded px-3 py-2 text-white focus:ring-2 focus:ring-pink-500 outline-none h-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                    lineNumber: 2548,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2546,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "mt-4 w-full px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-bold transition-all",
                                            children: "Create Request"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                            lineNumber: 2553,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2526,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InteractiveCalendar.tsx",
                            lineNumber: 2356,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 2337,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 2336,
                columnNumber: 9
            }, this),
            contextMenu.show && contextMenu.shift && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bg-slate-900 border-2 border-purple-500 rounded-lg shadow-2xl py-2 z-[100]",
                style: {
                    left: contextMenu.x,
                    top: contextMenu.y
                },
                onMouseLeave: ()=>setContextMenu({
                        ...contextMenu,
                        show: false
                    }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full px-4 py-2 text-left text-white hover:bg-purple-600 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2570,
                                columnNumber: 13
                            }, this),
                            " Copy Shift"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 2569,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full px-4 py-2 text-left text-white hover:bg-purple-600 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2573,
                                columnNumber: 13
                            }, this),
                            " Swap Shift"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 2572,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full px-4 py-2 text-left text-white hover:bg-purple-600 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2576,
                                columnNumber: 13
                            }, this),
                            " Add Bonus"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 2575,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full px-4 py-2 text-left text-white hover:bg-purple-600 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2579,
                                columnNumber: 13
                            }, this),
                            " Add Break"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 2578,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-700 my-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 2581,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full px-4 py-2 text-left text-red-400 hover:bg-red-600 hover:text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2583,
                                columnNumber: 13
                            }, this),
                            " Delete Shift"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 2582,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 2564,
                columnNumber: 9
            }, this),
            showMarketplaceConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-20 right-6 z-[100] animate-in slide-in-from-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow-2xl p-4 border-2 border-green-400 max-w-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/20 rounded-full p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2594,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2593,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-lg mb-1",
                                        children: "Posted to Marketplace! 🎉"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2597,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-green-100",
                                        children: marketplacePostedShifts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                marketplacePostedShifts[marketplacePostedShifts.length - 1].shift.title,
                                                " with $",
                                                marketplacePostedShifts[marketplacePostedShifts.length - 1].bonus,
                                                " bonus is now live!"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2598,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-green-200 mt-1 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                                lineNumber: 2606,
                                                columnNumber: 19
                                            }, this),
                                            "Employees will be notified"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2605,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2596,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowMarketplaceConfirmation(false),
                                className: "text-white/80 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                        lineNumber: 2615,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                    lineNumber: 2614,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                                lineNumber: 2610,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveCalendar.tsx",
                        lineNumber: 2592,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/InteractiveCalendar.tsx",
                    lineNumber: 2591,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveCalendar.tsx",
                lineNumber: 2590,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InteractiveCalendar.tsx",
        lineNumber: 617,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ThemeCustomizer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeCustomizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flower-2.js [app-ssr] (ecmascript) <export default as Flower2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$colorful$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-colorful/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ThemeCustomizer() {
    const [showCustomizer, setShowCustomizer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [useGradients, setUseGradients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [decorativeTheme, setDecorativeTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('none');
    const [selectedFont, setSelectedFont] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('inter');
    const [activeColorPicker, setActiveColorPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customColors, setCustomColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        pageBackground: '#000000',
        cardBackground: '#1a1a1a',
        primaryButtons: '#8b5cf6',
        secondaryButtons: '#ec4899',
        headerText: '#ffffff',
        bodyText: '#e2e8f0',
        calendarBackground: '#0a0a0a',
        calendarNumbers: '#ffffff',
        todayHighlight: '#8b5cf6',
        borderColors: '#4a4a4a'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem('appTheme');
        const savedColors = localStorage.getItem('customColors');
        const savedGradients = localStorage.getItem('useGradients');
        const savedDecorativeTheme = localStorage.getItem('decorativeTheme');
        const savedFont = localStorage.getItem('fontFamily');
        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            applyColors(customColors);
        }
        if (savedColors) {
            const colors = JSON.parse(savedColors);
            setCustomColors(colors);
            applyColors(colors);
        }
        if (savedGradients !== null) {
            setUseGradients(savedGradients === 'true');
        }
        if (savedDecorativeTheme) {
            setDecorativeTheme(savedDecorativeTheme);
            applyDecorativeTheme(savedDecorativeTheme);
        }
        if (savedFont) {
            setSelectedFont(savedFont);
            applyFont(savedFont);
        }
    }, []);
    const applyTheme = (newTheme)=>{
        document.documentElement.setAttribute('data-theme', newTheme);
        const colors = newTheme === 'light' ? {
            pageBackground: '#f8fafc',
            cardBackground: '#ffffff',
            primaryButtons: '#8b5cf6',
            secondaryButtons: '#ec4899',
            headerText: '#0f172a',
            bodyText: '#334155',
            calendarBackground: '#ffffff',
            calendarNumbers: '#0f172a',
            todayHighlight: '#8b5cf6',
            borderColors: '#e2e8f0'
        } : {
            pageBackground: '#000000',
            cardBackground: '#1a1a1a',
            primaryButtons: '#8b5cf6',
            secondaryButtons: '#ec4899',
            headerText: '#ffffff',
            bodyText: '#e2e8f0',
            calendarBackground: '#0a0a0a',
            calendarNumbers: '#ffffff',
            todayHighlight: '#8b5cf6',
            borderColors: '#4a4a4a'
        };
        setCustomColors(colors);
        applyColors(colors);
    };
    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem('appTheme', newTheme);
    };
    const applyColors = (colors)=>{
        const root = document.documentElement;
        document.body.style.backgroundColor = colors.pageBackground;
        document.body.style.color = colors.bodyText;
        root.style.setProperty('--page-bg', colors.pageBackground);
        root.style.setProperty('--card-bg', colors.cardBackground);
        root.style.setProperty('--header-text', colors.headerText);
        root.style.setProperty('--body-text', colors.bodyText);
        root.style.setProperty('--calendar-bg', colors.calendarBackground);
        root.style.setProperty('--calendar-numbers', colors.calendarNumbers);
        root.style.setProperty('--today-highlight', colors.todayHighlight);
        root.style.setProperty('--border-color', colors.borderColors);
        if (useGradients) {
            root.style.setProperty('--primary-btn', `linear-gradient(to right, ${colors.primaryButtons}, ${colors.secondaryButtons})`);
            root.style.setProperty('--secondary-btn', `linear-gradient(135deg, ${colors.primaryButtons}, ${colors.secondaryButtons})`);
        } else {
            root.style.setProperty('--primary-btn', colors.primaryButtons);
            root.style.setProperty('--secondary-btn', colors.secondaryButtons);
        }
    };
    const applyFont = (font)=>{
        const fontMap = {
            'inter': "'Inter', sans-serif",
            'roboto': "'Roboto', sans-serif",
            'open-sans': "'Open Sans', sans-serif",
            'lato': "'Lato', sans-serif",
            'montserrat': "'Montserrat', sans-serif",
            'poppins': "'Poppins', sans-serif",
            'source-sans': "'Source Sans Pro', sans-serif",
            'raleway': "'Raleway', sans-serif",
            'ubuntu': "'Ubuntu', sans-serif",
            'nunito': "'Nunito', sans-serif"
        };
        document.documentElement.style.fontFamily = fontMap[font];
    };
    const handleFontChange = (font)=>{
        setSelectedFont(font);
        applyFont(font);
        localStorage.setItem('fontFamily', font);
    };
    const applyDecorativeTheme = (theme)=>{
        const body = document.body;
        body.classList.remove('theme-classic', 'theme-corporate', 'theme-elegant', 'theme-minimalist', 'theme-executive', 'theme-professional', 'theme-spring-flowers', 'theme-winter-sparkle', 'theme-autumn-leaves', 'theme-ocean-waves', 'theme-thunderstorm', 'theme-galaxy', 'theme-northern-lights', 'theme-cherry-blossom', 'theme-sunset', 'theme-desert', 'theme-foggy-morning', 'theme-volcanic', 'theme-meteor-shower', 'theme-solar-eclipse', 'theme-cosmic-nebula', 'theme-coral-reef', 'theme-deep-ocean', 'theme-tropical-waters', 'theme-fireflies', 'theme-rainbow-prism', 'theme-enchanted-forest');
        if (theme !== 'none') {
            body.classList.add(`theme-${theme}`);
            // Apply theme-specific color palette
            const themeColors = getThemeColors(theme);
            if (themeColors) {
                setCustomColors(themeColors);
                applyColors(themeColors);
            }
        }
    };
    const getThemeColors = (theme)=>{
        const colorPalettes = {
            'none': null,
            'classic': {
                pageBackground: '#1a1a2e',
                cardBackground: '#16213e',
                primaryButtons: '#8b5cf6',
                secondaryButtons: '#ec4899',
                headerText: '#f0f0f0',
                bodyText: '#e2e8f0',
                calendarBackground: '#0f172a',
                calendarNumbers: '#f8fafc',
                todayHighlight: '#a78bfa',
                borderColors: '#4c1d95'
            },
            'corporate': {
                pageBackground: '#1e3a5f',
                cardBackground: '#2a4a70',
                primaryButtons: '#3b82f6',
                secondaryButtons: '#60a5fa',
                headerText: '#f1f5f9',
                bodyText: '#cbd5e1',
                calendarBackground: '#1e293b',
                calendarNumbers: '#e2e8f0',
                todayHighlight: '#3b82f6',
                borderColors: '#475569'
            },
            'elegant': {
                pageBackground: '#f5f0e8',
                cardBackground: '#faf7f2',
                primaryButtons: '#b8860b',
                secondaryButtons: '#daa520',
                headerText: '#3e3020',
                bodyText: '#5c4a2f',
                calendarBackground: '#fefdfb',
                calendarNumbers: '#4a3b28',
                todayHighlight: '#daa520',
                borderColors: '#d4c5a9'
            },
            'minimalist': {
                pageBackground: '#0a0a0a',
                cardBackground: '#1a1a1a',
                primaryButtons: '#ffffff',
                secondaryButtons: '#d1d5db',
                headerText: '#ffffff',
                bodyText: '#d1d5db',
                calendarBackground: '#000000',
                calendarNumbers: '#e5e7eb',
                todayHighlight: '#ffffff',
                borderColors: '#404040'
            },
            'executive': {
                pageBackground: '#0f2027',
                cardBackground: '#1a2f3a',
                primaryButtons: '#64748b',
                secondaryButtons: '#94a3b8',
                headerText: '#f1f5f9',
                bodyText: '#cbd5e1',
                calendarBackground: '#0a1820',
                calendarNumbers: '#e2e8f0',
                todayHighlight: '#94a3b8',
                borderColors: '#334155'
            },
            'professional': {
                pageBackground: '#1c1c1c',
                cardBackground: '#2a2a2a',
                primaryButtons: '#6b7280',
                secondaryButtons: '#9ca3af',
                headerText: '#f9fafb',
                bodyText: '#d1d5db',
                calendarBackground: '#171717',
                calendarNumbers: '#e5e7eb',
                todayHighlight: '#9ca3af',
                borderColors: '#4b5563'
            },
            'spring-flowers': {
                pageBackground: '#fce4ec',
                cardBackground: '#fff0f5',
                primaryButtons: '#ec4899',
                secondaryButtons: '#f472b6',
                headerText: '#be185d',
                bodyText: '#831843',
                calendarBackground: '#fff5f7',
                calendarNumbers: '#9f1239',
                todayHighlight: '#ec4899',
                borderColors: '#fbbf24'
            },
            'winter-sparkle': {
                pageBackground: '#e0f2fe',
                cardBackground: '#f0f9ff',
                primaryButtons: '#0ea5e9',
                secondaryButtons: '#38bdf8',
                headerText: '#0c4a6e',
                bodyText: '#075985',
                calendarBackground: '#f0f9ff',
                calendarNumbers: '#0369a1',
                todayHighlight: '#0ea5e9',
                borderColors: '#7dd3fc'
            },
            'autumn-leaves': {
                pageBackground: '#fed7aa',
                cardBackground: '#ffedd5',
                primaryButtons: '#ea580c',
                secondaryButtons: '#fb923c',
                headerText: '#7c2d12',
                bodyText: '#9a3412',
                calendarBackground: '#fff7ed',
                calendarNumbers: '#c2410c',
                todayHighlight: '#f97316',
                borderColors: '#fdba74'
            },
            'ocean-waves': {
                pageBackground: '#cffafe',
                cardBackground: '#ecfeff',
                primaryButtons: '#06b6d4',
                secondaryButtons: '#22d3ee',
                headerText: '#164e63',
                bodyText: '#155e75',
                calendarBackground: '#f0fdfa',
                calendarNumbers: '#0e7490',
                todayHighlight: '#06b6d4',
                borderColors: '#67e8f9'
            },
            'thunderstorm': {
                pageBackground: '#1e293b',
                cardBackground: '#334155',
                primaryButtons: '#3b82f6',
                secondaryButtons: '#60a5fa',
                headerText: '#f1f5f9',
                bodyText: '#cbd5e1',
                calendarBackground: '#1e293b',
                calendarNumbers: '#e2e8f0',
                todayHighlight: '#3b82f6',
                borderColors: '#475569'
            },
            'galaxy': {
                pageBackground: '#1e1b4b',
                cardBackground: '#312e81',
                primaryButtons: '#8b5cf6',
                secondaryButtons: '#a78bfa',
                headerText: '#f5f3ff',
                bodyText: '#ddd6fe',
                calendarBackground: '#1e1b4b',
                calendarNumbers: '#e9d5ff',
                todayHighlight: '#8b5cf6',
                borderColors: '#6d28d9'
            },
            'northern-lights': {
                pageBackground: '#0c4a6e',
                cardBackground: '#075985',
                primaryButtons: '#10b981',
                secondaryButtons: '#34d399',
                headerText: '#ecfdf5',
                bodyText: '#d1fae5',
                calendarBackground: '#0e7490',
                calendarNumbers: '#f0fdfa',
                todayHighlight: '#10b981',
                borderColors: '#0891b2'
            },
            'cherry-blossom': {
                pageBackground: '#fce7f3',
                cardBackground: '#fdf2f8',
                primaryButtons: '#ec4899',
                secondaryButtons: '#f9a8d4',
                headerText: '#9f1239',
                bodyText: '#be185d',
                calendarBackground: '#fef3f8',
                calendarNumbers: '#be185d',
                todayHighlight: '#f472b6',
                borderColors: '#fbcfe8'
            },
            'sunset': {
                pageBackground: '#ff9a56',
                cardBackground: '#ffb380',
                primaryButtons: '#ff6b35',
                secondaryButtons: '#fdc830',
                headerText: '#7c2d12',
                bodyText: '#92400e',
                calendarBackground: '#ffedd5',
                calendarNumbers: '#c2410c',
                todayHighlight: '#f97316',
                borderColors: '#fb923c'
            },
            'desert': {
                pageBackground: '#fcd34d',
                cardBackground: '#fde68a',
                primaryButtons: '#d97706',
                secondaryButtons: '#f59e0b',
                headerText: '#78350f',
                bodyText: '#92400e',
                calendarBackground: '#fef3c7',
                calendarNumbers: '#b45309',
                todayHighlight: '#f59e0b',
                borderColors: '#fbbf24'
            },
            'foggy-morning': {
                pageBackground: '#e2e8f0',
                cardBackground: '#f1f5f9',
                primaryButtons: '#64748b',
                secondaryButtons: '#94a3b8',
                headerText: '#1e293b',
                bodyText: '#475569',
                calendarBackground: '#f8fafc',
                calendarNumbers: '#334155',
                todayHighlight: '#64748b',
                borderColors: '#cbd5e1'
            },
            'volcanic': {
                pageBackground: '#450a0a',
                cardBackground: '#7f1d1d',
                primaryButtons: '#dc2626',
                secondaryButtons: '#ef4444',
                headerText: '#fef2f2',
                bodyText: '#fecaca',
                calendarBackground: '#450a0a',
                calendarNumbers: '#fee2e2',
                todayHighlight: '#f87171',
                borderColors: '#991b1b'
            },
            'meteor-shower': {
                pageBackground: '#0f172a',
                cardBackground: '#1e293b',
                primaryButtons: '#60a5fa',
                secondaryButtons: '#93c5fd',
                headerText: '#f0f9ff',
                bodyText: '#dbeafe',
                calendarBackground: '#0f172a',
                calendarNumbers: '#bfdbfe',
                todayHighlight: '#3b82f6',
                borderColors: '#334155'
            },
            'solar-eclipse': {
                pageBackground: '#18181b',
                cardBackground: '#27272a',
                primaryButtons: '#facc15',
                secondaryButtons: '#fde047',
                headerText: '#fef9c3',
                bodyText: '#fef08a',
                calendarBackground: '#18181b',
                calendarNumbers: '#fde68a',
                todayHighlight: '#eab308',
                borderColors: '#3f3f46'
            },
            'cosmic-nebula': {
                pageBackground: '#1e1b4b',
                cardBackground: '#2e1065',
                primaryButtons: '#d946ef',
                secondaryButtons: '#e879f9',
                headerText: '#fae8ff',
                bodyText: '#f3e8ff',
                calendarBackground: '#1e1b4b',
                calendarNumbers: '#f5d0fe',
                todayHighlight: '#c026d3',
                borderColors: '#581c87'
            },
            'coral-reef': {
                pageBackground: '#06b6d4',
                cardBackground: '#22d3ee',
                primaryButtons: '#f97316',
                secondaryButtons: '#fb923c',
                headerText: '#0c4a6e',
                bodyText: '#164e63',
                calendarBackground: '#cffafe',
                calendarNumbers: '#155e75',
                todayHighlight: '#f97316',
                borderColors: '#67e8f9'
            },
            'deep-ocean': {
                pageBackground: '#001f3f',
                cardBackground: '#003366',
                primaryButtons: '#06b6d4',
                secondaryButtons: '#22d3ee',
                headerText: '#cffafe',
                bodyText: '#a5f3fc',
                calendarBackground: '#001a33',
                calendarNumbers: '#67e8f9',
                todayHighlight: '#0891b2',
                borderColors: '#155e75'
            },
            'tropical-waters': {
                pageBackground: '#00bcd4',
                cardBackground: '#00acc1',
                primaryButtons: '#0097a7',
                secondaryButtons: '#00838f',
                headerText: '#e0f2f1',
                bodyText: '#b2dfdb',
                calendarBackground: '#e0f7fa',
                calendarNumbers: '#004d40',
                todayHighlight: '#00acc1',
                borderColors: '#26c6da'
            },
            'fireflies': {
                pageBackground: '#1e3a5f',
                cardBackground: '#2d4f7c',
                primaryButtons: '#fbbf24',
                secondaryButtons: '#fcd34d',
                headerText: '#fef3c7',
                bodyText: '#fde68a',
                calendarBackground: '#1e3a5f',
                calendarNumbers: '#fef08a',
                todayHighlight: '#f59e0b',
                borderColors: '#3b5998'
            },
            'rainbow-prism': {
                pageBackground: '#ffffff',
                cardBackground: '#f9fafb',
                primaryButtons: '#8b5cf6',
                secondaryButtons: '#ec4899',
                headerText: '#1f2937',
                bodyText: '#4b5563',
                calendarBackground: '#f9fafb',
                calendarNumbers: '#111827',
                todayHighlight: '#a855f7',
                borderColors: '#e5e7eb'
            },
            'enchanted-forest': {
                pageBackground: '#14532d',
                cardBackground: '#166534',
                primaryButtons: '#22c55e',
                secondaryButtons: '#4ade80',
                headerText: '#f0fdf4',
                bodyText: '#dcfce7',
                calendarBackground: '#14532d',
                calendarNumbers: '#bbf7d0',
                todayHighlight: '#16a34a',
                borderColors: '#15803d'
            }
        };
        return colorPalettes[theme];
    };
    const handleColorChange = (key, color)=>{
        setCustomColors((prev)=>({
                ...prev,
                [key]: color
            }));
    };
    const handleApply = ()=>{
        applyColors(customColors);
        applyDecorativeTheme(decorativeTheme);
        localStorage.setItem('customColors', JSON.stringify(customColors));
        localStorage.setItem('useGradients', String(useGradients));
        localStorage.setItem('decorativeTheme', decorativeTheme);
        alert('✨ Theme applied successfully! Your custom design is now active.');
        setShowCustomizer(false);
        setActiveColorPicker(null);
    };
    const colorLabels = {
        pageBackground: '🖼️ Page Background',
        cardBackground: '📦 Cards & Panels',
        primaryButtons: '🎯 Primary Buttons',
        secondaryButtons: '🎨 Secondary Buttons',
        headerText: '📝 Header Text',
        bodyText: '📄 Body Text',
        calendarBackground: '📅 Calendar Background',
        calendarNumbers: '🔢 Calendar Numbers',
        todayHighlight: '⭐ Today Highlight',
        borderColors: '🔳 Borders & Lines'
    };
    const decorativeThemes = [
        {
            id: 'none',
            name: 'No Decoration',
            icon: '🚫'
        },
        {
            id: 'classic',
            name: 'Classic',
            icon: '💜'
        },
        {
            id: 'corporate',
            name: 'Corporate',
            icon: '💼'
        },
        {
            id: 'elegant',
            name: 'Elegant',
            icon: '✨'
        },
        {
            id: 'minimalist',
            name: 'Minimalist',
            icon: '⬛'
        },
        {
            id: 'executive',
            name: 'Executive',
            icon: '🎩'
        },
        {
            id: 'professional',
            name: 'Professional',
            icon: '👔'
        },
        {
            id: 'spring-flowers',
            name: 'Spring Flowers',
            icon: '🌸'
        },
        {
            id: 'winter-sparkle',
            name: 'Winter Sparkle',
            icon: '❄️'
        },
        {
            id: 'autumn-leaves',
            name: 'Autumn Leaves',
            icon: '🍂'
        },
        {
            id: 'ocean-waves',
            name: 'Ocean Waves',
            icon: '🌊'
        },
        {
            id: 'thunderstorm',
            name: 'Thunderstorm',
            icon: '⚡'
        },
        {
            id: 'galaxy',
            name: 'Galaxy',
            icon: '🌌'
        },
        {
            id: 'northern-lights',
            name: 'Northern Lights',
            icon: '🌌'
        },
        {
            id: 'cherry-blossom',
            name: 'Cherry Blossom',
            icon: '🌸'
        },
        {
            id: 'sunset',
            name: 'Sunset',
            icon: '🌅'
        },
        {
            id: 'desert',
            name: 'Desert',
            icon: '🏜️'
        },
        {
            id: 'foggy-morning',
            name: 'Foggy Morning',
            icon: '🌫️'
        },
        {
            id: 'volcanic',
            name: 'Volcanic',
            icon: '🌋'
        },
        {
            id: 'meteor-shower',
            name: 'Meteor Shower',
            icon: '☄️'
        },
        {
            id: 'solar-eclipse',
            name: 'Solar Eclipse',
            icon: '🌑'
        },
        {
            id: 'cosmic-nebula',
            name: 'Cosmic Nebula',
            icon: '🌠'
        },
        {
            id: 'coral-reef',
            name: 'Coral Reef',
            icon: '🪸'
        },
        {
            id: 'deep-ocean',
            name: 'Deep Ocean',
            icon: '🌊'
        },
        {
            id: 'tropical-waters',
            name: 'Tropical Waters',
            icon: '🏝️'
        },
        {
            id: 'fireflies',
            name: 'Fireflies',
            icon: '✨'
        },
        {
            id: 'rainbow-prism',
            name: 'Rainbow Prism',
            icon: '🌈'
        },
        {
            id: 'enchanted-forest',
            name: 'Enchanted Forest',
            icon: '🌲'
        }
    ];
    const fontOptions = [
        {
            id: 'inter',
            name: 'Inter',
            preview: 'Modern & Clean'
        },
        {
            id: 'roboto',
            name: 'Roboto',
            preview: 'Professional & Readable'
        },
        {
            id: 'open-sans',
            name: 'Open Sans',
            preview: 'Friendly & Approachable'
        },
        {
            id: 'lato',
            name: 'Lato',
            preview: 'Elegant & Versatile'
        },
        {
            id: 'montserrat',
            name: 'Montserrat',
            preview: 'Bold & Contemporary'
        },
        {
            id: 'poppins',
            name: 'Poppins',
            preview: 'Geometric & Stylish'
        },
        {
            id: 'source-sans',
            name: 'Source Sans Pro',
            preview: 'Technical & Clear'
        },
        {
            id: 'raleway',
            name: 'Raleway',
            preview: 'Sophisticated & Refined'
        },
        {
            id: 'ubuntu',
            name: 'Ubuntu',
            preview: 'Warm & Humanist'
        },
        {
            id: 'nunito',
            name: 'Nunito',
            preview: 'Rounded & Playful'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleTheme,
                        className: "flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in",
                        title: `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`,
                        children: [
                            theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                lineNumber: 591,
                                columnNumber: 32
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                lineNumber: 591,
                                columnNumber: 63
                            }, this),
                            theme === 'light' ? 'Dark' : 'Light',
                            " Mode"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ThemeCustomizer.tsx",
                        lineNumber: 586,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowCustomizer(true),
                        className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                lineNumber: 599,
                                columnNumber: 11
                            }, this),
                            "Customize Colors"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ThemeCustomizer.tsx",
                        lineNumber: 595,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ThemeCustomizer.tsx",
                lineNumber: 585,
                columnNumber: 7
            }, this),
            showCustomizer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden border-2 border-purple-500/30 animate-slide-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-6 flex items-center justify-between relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 608,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-white flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-8 h-8 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 19
                                                }, this),
                                                "Customize Your Experience"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 610,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple-100 text-sm mt-1",
                                            children: "✨ Choose colors visually, add gradients, and decorate - make it uniquely yours!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 614,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 609,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowCustomizer(false);
                                        setActiveColorPicker(null);
                                    },
                                    className: "relative z-10 text-white hover:bg-white/20 p-2 rounded-lg transition-all hover:rotate-90",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                        lineNumber: 625,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 618,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto max-h-[calc(95vh-220px)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 bg-slate-800/50 rounded-xl border border-purple-500/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: useGradients,
                                                onChange: (e)=>setUseGradients(e.target.checked),
                                                className: "w-6 h-6 rounded accent-purple-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                lineNumber: 633,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-bold text-lg",
                                                        children: "🎨 Use Gradient Buttons"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm",
                                                        children: "Enable beautiful gradient effects on all buttons"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                        lineNumber: 641,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                lineNumber: 639,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                        lineNumber: 632,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 631,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 bg-slate-800/50 rounded-xl border border-purple-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-bold text-lg mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower2$3e$__["Flower2"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 19
                                                }, this),
                                                "Decorative Themes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 648,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-5 gap-3",
                                            children: decorativeThemes.map((dt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDecorativeTheme(dt.id),
                                                    className: `p-4 rounded-xl border-2 transition-all hover:scale-105 ${decorativeTheme === dt.id ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/50' : 'border-slate-600 hover:border-purple-400 bg-slate-700/50'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-4xl mb-2",
                                                            children: dt.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-semibold text-sm",
                                                            children: dt.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 664,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, dt.id, true, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 647,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 bg-slate-800/50 rounded-xl border border-purple-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-bold text-lg mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 19
                                                }, this),
                                                "Font Family"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 672,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                            children: fontOptions.map((font)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleFontChange(font.id),
                                                    className: `p-4 rounded-xl border-2 transition-all hover:scale-105 text-left ${selectedFont === font.id ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/50' : 'border-slate-600 hover:border-purple-400 bg-slate-700/50'}`,
                                                    style: {
                                                        fontFamily: font.id === 'inter' ? 'Inter, sans-serif' : font.id === 'roboto' ? 'Roboto, sans-serif' : font.id === 'open-sans' ? 'Open Sans, sans-serif' : font.id === 'lato' ? 'Lato, sans-serif' : font.id === 'montserrat' ? 'Montserrat, sans-serif' : font.id === 'poppins' ? 'Poppins, sans-serif' : font.id === 'source-sans' ? 'Source Sans Pro, sans-serif' : font.id === 'raleway' ? 'Raleway, sans-serif' : font.id === 'ubuntu' ? 'Ubuntu, sans-serif' : 'Nunito, sans-serif'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-bold text-lg mb-1",
                                                            children: font.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-slate-400 text-sm",
                                                            children: font.preview
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 698,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-slate-300 text-xs mt-2",
                                                            children: "The quick brown fox jumps"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, font.id, true, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 671,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-bold text-xl mb-4",
                                    children: "Color Customization"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 706,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: Object.entries(colorLabels).map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 animate-fade-in",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-white",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setActiveColorPicker(activeColorPicker === key ? null : key),
                                                            className: "w-full flex items-center gap-3 px-4 py-4 bg-slate-800/70 border-2 border-slate-700 rounded-xl hover:border-purple-500 transition-all group hover:scale-105",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-16 h-16 rounded-lg border-4 border-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform animate-pulse-slow",
                                                                    style: {
                                                                        backgroundColor: customColors[key]
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                                    lineNumber: 717,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-white font-mono text-sm mb-1",
                                                                            children: customColors[key].toUpperCase()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                                            lineNumber: 722,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-slate-400 text-xs",
                                                                            children: "Click to pick color"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                                            lineNumber: 725,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                                    lineNumber: 721,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 23
                                                        }, this),
                                                        activeColorPicker === key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-full left-0 mt-3 z-50 bg-slate-800 p-6 rounded-xl shadow-2xl border-2 border-purple-500 animate-fade-in",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-3 text-white font-semibold text-sm flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                                            lineNumber: 734,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Pick your color:"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                                    lineNumber: 733,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$colorful$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexColorPicker"], {
                                                                    color: customColors[key],
                                                                    onChange: (color)=>handleColorChange(key, color),
                                                                    style: {
                                                                        width: '240px',
                                                                        height: '240px'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                                    lineNumber: 737,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: customColors[key],
                                                                    onChange: (e)=>handleColorChange(key, e.target.value),
                                                                    className: "w-full mt-3 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white font-mono text-center",
                                                                    placeholder: "#000000"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                                    lineNumber: 742,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 709,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 707,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 p-6 bg-slate-800/50 rounded-xl border border-purple-500/30 animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-bold mb-4 text-lg flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 19
                                                }, this),
                                                "Live Preview"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 758,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 rounded-lg transition-all",
                                            style: {
                                                backgroundColor: customColors.cardBackground,
                                                borderColor: customColors.borderColors,
                                                borderWidth: '3px',
                                                borderStyle: 'solid'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "text-2xl font-bold mb-3",
                                                    style: {
                                                        color: customColors.headerText
                                                    },
                                                    children: "Sample Header"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    style: {
                                                        color: customColors.bodyText
                                                    },
                                                    children: "This is how your text will look throughout the application."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 777,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform hover:scale-105",
                                                            style: {
                                                                background: useGradients ? `linear-gradient(to right, ${customColors.primaryButtons}, ${customColors.secondaryButtons})` : customColors.primaryButtons,
                                                                color: '#ffffff'
                                                            },
                                                            children: "Primary Button"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 784,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform hover:scale-105",
                                                            style: {
                                                                background: useGradients ? `linear-gradient(135deg, ${customColors.secondaryButtons}, ${customColors.primaryButtons})` : customColors.secondaryButtons,
                                                                color: '#ffffff'
                                                            },
                                                            children: "Secondary Button"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 795,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-2 rounded-lg font-bold shadow-lg",
                                                            style: {
                                                                backgroundColor: customColors.todayHighlight,
                                                                color: '#ffffff'
                                                            },
                                                            children: "Today Badge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                            lineNumber: 806,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                            lineNumber: 762,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 757,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                            lineNumber: 629,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-800 p-6 flex gap-4 border-t-2 border-purple-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setShowCustomizer(false);
                                        setActiveColorPicker(null);
                                    },
                                    className: "flex-1 bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 821,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleApply,
                                    className: "flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105",
                                    children: "✨ Apply Changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                                    lineNumber: 831,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ThemeCustomizer.tsx",
                            lineNumber: 820,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ThemeCustomizer.tsx",
                    lineNumber: 606,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeCustomizer.tsx",
                lineNumber: 605,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/DraggableDecorations.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DraggableDecorations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function DraggableDecoration({ config }) {
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const decorationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if the specific theme is active
        const checkTheme = ()=>{
            setIsVisible(document.body.classList.contains(config.themeClass));
        };
        checkTheme();
        const interval = setInterval(checkTheme, 500);
        // Load saved position
        const savedPosition = localStorage.getItem(config.storageKey);
        if (savedPosition) {
            setPosition(JSON.parse(savedPosition));
        } else {
            // Use default position
            setPosition({
                x: config.defaultX,
                y: config.defaultY
            });
        }
        return ()=>clearInterval(interval);
    }, [
        config
    ]);
    const handleMouseDown = (e)=>{
        if (!decorationRef.current) return;
        setIsDragging(true);
        const rect = decorationRef.current.getBoundingClientRect();
        dragOffset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };
    const handleMouseMove = (e)=>{
        if (!isDragging) return;
        const newPosition = {
            x: e.clientX - dragOffset.current.x,
            y: e.clientY - dragOffset.current.y
        };
        setPosition(newPosition);
    };
    const handleMouseUp = ()=>{
        if (isDragging) {
            setIsDragging(false);
            localStorage.setItem(config.storageKey, JSON.stringify(position));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            return ()=>{
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [
        isDragging,
        position
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: decorationRef,
        onMouseDown: handleMouseDown,
        style: {
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            fontSize: '3.5rem',
            cursor: isDragging ? 'grabbing' : 'grab',
            zIndex: 1000,
            userSelect: 'none',
            filter: 'drop-shadow(0 0 10px rgba(147, 197, 253, 0.8))',
            animation: isDragging ? 'none' : 'float 3s ease-in-out infinite',
            transition: isDragging ? 'none' : 'filter 0.2s'
        },
        title: "Drag me to move!",
        children: config.emoji
    }, void 0, false, {
        fileName: "[project]/src/components/DraggableDecorations.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
function DraggableDecorations() {
    const decorations = [
        {
            emoji: '☃️',
            themeClass: 'theme-winter-sparkle',
            storageKey: 'snowmanPosition',
            defaultX: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 500,
            defaultY: 150
        },
        {
            emoji: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    width: '120px',
                    height: '100px',
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
                },
                className: "jsx-a4e5a10e1cb3819",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '-2px',
                            top: '12px',
                            width: '52px',
                            height: '42px',
                            background: `
              /* Wing veins - black lines */
              linear-gradient(140deg, transparent 48%, rgba(0,0,0,0.9) 48%, rgba(0,0,0,0.9) 50%, transparent 50%),
              linear-gradient(155deg, transparent 58%, rgba(0,0,0,0.8) 58%, rgba(0,0,0,0.8) 59%, transparent 59%),
              linear-gradient(125deg, transparent 38%, rgba(0,0,0,0.8) 38%, rgba(0,0,0,0.8) 39%, transparent 39%),
              /* Black spots along edge */
              radial-gradient(ellipse 4px 5px at 18% 20%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 28% 12%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 42% 8%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 5px 6px at 15% 38%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 25% 55%, rgba(0,0,0,0.9) 0%, transparent 100%),
              radial-gradient(ellipse 3px 4px at 38% 68%, rgba(0,0,0,0.9) 0%, transparent 100%),
              /* White spots on black border */
              radial-gradient(circle 2px at 12% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 1.5px at 20% 10%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 1.5px at 32% 6%, rgba(255,255,255,0.9) 0%, transparent 100%),
              /* Orange gradient with depth */
              radial-gradient(ellipse 120% 140% at 40% 30%, #ff8c00 0%, #ff6f00 25%, #ff5722 50%, #d84315 75%, #bf360c 100%)
            `,
                            borderRadius: '65% 30% 55% 25%',
                            border: '2.5px solid #000',
                            boxShadow: `
              inset 5px 5px 15px rgba(255, 152, 0, 0.6),
              inset -3px -3px 12px rgba(191, 54, 12, 0.7),
              -5px 5px 20px rgba(255, 111, 0, 0.5)
            `,
                            animation: 'monarch-flap-left 0.4s ease-in-out infinite',
                            transformOrigin: 'right center',
                            opacity: 0.95
                        },
                        className: "jsx-a4e5a10e1cb3819" + " " + "monarch-wing-lu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            right: '-2px',
                            top: '12px',
                            width: '52px',
                            height: '42px',
                            background: `
              /* Wing veins - black lines */
              linear-gradient(40deg, transparent 48%, rgba(0,0,0,0.9) 48%, rgba(0,0,0,0.9) 50%, transparent 50%),
              linear-gradient(25deg, transparent 58%, rgba(0,0,0,0.8) 58%, rgba(0,0,0,0.8) 59%, transparent 59%),
              linear-gradient(55deg, transparent 38%, rgba(0,0,0,0.8) 38%, rgba(0,0,0,0.8) 39%, transparent 39%),
              /* Black spots along edge */
              radial-gradient(ellipse 4px 5px at 82% 20%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 72% 12%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 58% 8%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 5px 6px at 85% 38%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 75% 55%, rgba(0,0,0,0.9) 0%, transparent 100%),
              radial-gradient(ellipse 3px 4px at 62% 68%, rgba(0,0,0,0.9) 0%, transparent 100%),
              /* White spots on black border */
              radial-gradient(circle 2px at 88% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 1.5px at 80% 10%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 1.5px at 68% 6%, rgba(255,255,255,0.9) 0%, transparent 100%),
              /* Orange gradient with depth */
              radial-gradient(ellipse 120% 140% at 60% 30%, #ff8c00 0%, #ff6f00 25%, #ff5722 50%, #d84315 75%, #bf360c 100%)
            `,
                            borderRadius: '30% 65% 25% 55%',
                            border: '2.5px solid #000',
                            boxShadow: `
              inset -5px 5px 15px rgba(255, 152, 0, 0.6),
              inset 3px -3px 12px rgba(191, 54, 12, 0.7),
              5px 5px 20px rgba(255, 111, 0, 0.5)
            `,
                            animation: 'monarch-flap-right 0.4s ease-in-out infinite',
                            transformOrigin: 'left center',
                            opacity: 0.95
                        },
                        className: "jsx-a4e5a10e1cb3819" + " " + "monarch-wing-ru"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '4px',
                            top: '48px',
                            width: '48px',
                            height: '48px',
                            background: `
              /* Wing veins */
              linear-gradient(145deg, transparent 45%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.85) 46%, transparent 46%),
              linear-gradient(160deg, transparent 55%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.8) 56%, transparent 56%),
              linear-gradient(130deg, transparent 35%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.8) 36%, transparent 36%),
              /* Black patches characteristic of monarch lower wing */
              radial-gradient(ellipse 8px 10px at 25% 30%, rgba(0,0,0,0.85) 0%, transparent 100%),
              radial-gradient(ellipse 6px 8px at 40% 25%, rgba(0,0,0,0.85) 0%, transparent 100%),
              radial-gradient(ellipse 7px 9px at 32% 48%, rgba(0,0,0,0.8) 0%, transparent 100%),
              /* White spots - signature of monarch */
              radial-gradient(circle 3px at 18% 25%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 3px at 28% 20%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 35% 18%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 22% 40%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 28% 52%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2px at 18% 58%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 2px at 12% 45%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 2px at 10% 30%, rgba(255,255,255,0.9) 0%, transparent 100%),
              /* Orange base with realistic shading */
              radial-gradient(ellipse 130% 120% at 45% 40%, #ffa726 0%, #ff8a65 30%, #ff6f00 60%, #e65100 90%)
            `,
                            borderRadius: '60% 28% 70% 35%',
                            border: '2.5px solid #000',
                            boxShadow: `
              inset 4px 6px 18px rgba(255, 167, 38, 0.5),
              inset -4px -4px 15px rgba(230, 81, 0, 0.6),
              -4px 6px 18px rgba(255, 143, 0, 0.5)
            `,
                            animation: 'monarch-flap-left 0.4s ease-in-out infinite',
                            transformOrigin: 'right top',
                            opacity: 0.95
                        },
                        className: "jsx-a4e5a10e1cb3819" + " " + "monarch-wing-ll"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            right: '4px',
                            top: '48px',
                            width: '48px',
                            height: '48px',
                            background: `
              /* Wing veins */
              linear-gradient(35deg, transparent 45%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.85) 46%, transparent 46%),
              linear-gradient(20deg, transparent 55%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.8) 56%, transparent 56%),
              linear-gradient(50deg, transparent 35%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.8) 36%, transparent 36%),
              /* Black patches */
              radial-gradient(ellipse 8px 10px at 75% 30%, rgba(0,0,0,0.85) 0%, transparent 100%),
              radial-gradient(ellipse 6px 8px at 60% 25%, rgba(0,0,0,0.85) 0%, transparent 100%),
              radial-gradient(ellipse 7px 9px at 68% 48%, rgba(0,0,0,0.8) 0%, transparent 100%),
              /* White spots */
              radial-gradient(circle 3px at 82% 25%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 3px at 72% 20%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 65% 18%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 78% 40%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 72% 52%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2px at 82% 58%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 2px at 88% 45%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 2px at 90% 30%, rgba(255,255,255,0.9) 0%, transparent 100%),
              /* Orange base */
              radial-gradient(ellipse 130% 120% at 55% 40%, #ffa726 0%, #ff8a65 30%, #ff6f00 60%, #e65100 90%)
            `,
                            borderRadius: '28% 60% 35% 70%',
                            border: '2.5px solid #000',
                            boxShadow: `
              inset -4px 6px 18px rgba(255, 167, 38, 0.5),
              inset 4px -4px 15px rgba(230, 81, 0, 0.6),
              4px 6px 18px rgba(255, 143, 0, 0.5)
            `,
                            animation: 'monarch-flap-right 0.4s ease-in-out infinite',
                            transformOrigin: 'left top',
                            opacity: 0.95
                        },
                        className: "jsx-a4e5a10e1cb3819" + " " + "monarch-wing-rl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '50%',
                            top: '24px',
                            transform: 'translateX(-50%)',
                            width: '7px',
                            height: '58px',
                            background: `
              /* Body segments with realistic shading */
              repeating-linear-gradient(to bottom,
                #0d0d0d 0px, #0d0d0d 4px,
                #2a2a2a 4px, #2a2a2a 5px,
                #0d0d0d 5px, #0d0d0d 9px,
                #2a2a2a 9px, #2a2a2a 10px,
                #0d0d0d 10px, #0d0d0d 14px,
                #2a2a2a 14px, #2a2a2a 15px
              )
            `,
                            borderRadius: '3.5px',
                            boxShadow: `
              0 3px 12px rgba(0, 0, 0, 0.9),
              inset 1px 1px 3px rgba(255, 255, 255, 0.15),
              inset -1px -1px 3px rgba(0, 0, 0, 0.8)
            `,
                            zIndex: 5
                        },
                        className: "jsx-a4e5a10e1cb3819"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '50%',
                            top: '20px',
                            transform: 'translateX(-50%)',
                            width: '8px',
                            height: '8px',
                            background: 'radial-gradient(circle at 40% 40%, #2a2a2a 0%, #0d0d0d 60%)',
                            borderRadius: '50%',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.8), inset 1px 1px 2px rgba(255,255,255,0.2)',
                            zIndex: 6
                        },
                        className: "jsx-a4e5a10e1cb3819"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '54px',
                            top: '18px',
                            width: '1.5px',
                            height: '14px',
                            background: 'linear-gradient(to top, #0d0d0d 0%, #1a1a1a 70%, #2a2a2a 100%)',
                            borderRadius: '1px',
                            transform: 'rotate(-38deg)',
                            transformOrigin: 'bottom center',
                            boxShadow: '1px 0 2px rgba(0,0,0,0.5)'
                        },
                        className: "jsx-a4e5a10e1cb3819"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '50px',
                            top: '17px',
                            width: '2px',
                            height: '2px',
                            background: '#1a1a1a',
                            borderRadius: '50%',
                            transform: 'translate(-6px, 0)'
                        },
                        className: "jsx-a4e5a10e1cb3819"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '63px',
                            top: '18px',
                            width: '1.5px',
                            height: '14px',
                            background: 'linear-gradient(to top, #0d0d0d 0%, #1a1a1a 70%, #2a2a2a 100%)',
                            borderRadius: '1px',
                            transform: 'rotate(38deg)',
                            transformOrigin: 'bottom center',
                            boxShadow: '-1px 0 2px rgba(0,0,0,0.5)'
                        },
                        className: "jsx-a4e5a10e1cb3819"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '63px',
                            top: '17px',
                            width: '2px',
                            height: '2px',
                            background: '#1a1a1a',
                            borderRadius: '50%',
                            transform: 'translate(6px, 0)'
                        },
                        className: "jsx-a4e5a10e1cb3819"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "a4e5a10e1cb3819",
                        children: "@keyframes monarch-flap-left{0%,to{transform:perspective(400px)rotateY(0)rotate(0)}50%{transform:perspective(400px)rotateY(-35deg)rotate(-8deg)}}@keyframes monarch-flap-right{0%,to{transform:perspective(400px)rotateY(0)rotate(0)}50%{transform:perspective(400px)rotateY(35deg)rotate(8deg)}}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DraggableDecorations.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            themeClass: 'theme-spring-flowers',
            storageKey: 'butterflyPosition',
            defaultX: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 500,
            defaultY: 150
        },
        {
            emoji: '🍂',
            themeClass: 'theme-autumn-leaves',
            storageKey: 'leafPosition',
            defaultX: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 500,
            defaultY: 150
        },
        {
            emoji: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    width: '130px',
                    height: '70px',
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
                },
                className: "jsx-ffaf0ad098b3f409",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '-8px',
                            top: '18px',
                            width: '30px',
                            height: '35px',
                            background: `
              linear-gradient(120deg,
                transparent 0%, transparent 40%,
                rgba(96, 125, 139, 0.95) 40%, rgba(96, 125, 139, 0.95) 43%,
                transparent 43%
              ),
              radial-gradient(ellipse 100% 140% at 70% 30%,
                rgba(120, 144, 156, 0.98) 0%,
                rgba(96, 125, 139, 0.95) 50%,
                rgba(69, 90, 100, 0.9) 100%
              )
            `,
                            clipPath: 'polygon(100% 40%, 30% 0%, 0% 50%, 40% 100%, 100% 65%)',
                            boxShadow: 'inset -2px 0 10px rgba(55, 71, 79, 0.7)'
                        },
                        className: "jsx-ffaf0ad098b3f409"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '20px',
                            top: '15px',
                            width: '85px',
                            height: '42px',
                            background: `
              /* Belly lighter coloring */
              linear-gradient(to bottom,
                transparent 0%,
                transparent 60%,
                rgba(176, 190, 197, 0.3) 60%,
                rgba(176, 190, 197, 0.5) 100%
              ),
              /* Main body gradient */
              radial-gradient(ellipse 130% 110% at 35% 40%,
                #78909c 0%,
                #607d8b 25%,
                #546e7a 50%,
                #455a64 75%,
                #37474f 100%
              )
            `,
                            borderRadius: '50% 48% 48% 50% / 45% 45% 55% 55%',
                            boxShadow: `
              inset 4px 4px 15px rgba(120, 144, 156, 0.4),
              inset -4px -4px 20px rgba(38, 50, 56, 0.8),
              0 8px 25px rgba(69, 90, 100, 0.4)
            `,
                            border: '1px solid rgba(55, 71, 79, 0.6)'
                        },
                        className: "jsx-ffaf0ad098b3f409",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: '28px',
                                    top: '-22px',
                                    width: '0',
                                    height: '0',
                                    borderLeft: '14px solid transparent',
                                    borderRight: '16px solid transparent',
                                    borderBottom: '28px solid rgba(96, 125, 139, 0.95)',
                                    filter: 'drop-shadow(0 -2px 6px rgba(69, 90, 100, 0.6))',
                                    boxShadow: 'inset 0 -4px 10px rgba(55, 71, 79, 0.7)'
                                },
                                className: "jsx-ffaf0ad098b3f409",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        left: '-10px',
                                        top: '8px',
                                        width: '0',
                                        height: '0',
                                        borderLeft: '10px solid transparent',
                                        borderRight: '12px solid transparent',
                                        borderBottom: '15px solid rgba(120, 144, 156, 0.5)'
                                    },
                                    className: "jsx-ffaf0ad098b3f409"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DraggableDecorations.tsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDecorations.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: '18px',
                                    top: '28px',
                                    width: '0',
                                    height: '0',
                                    borderTop: '10px solid transparent',
                                    borderBottom: '14px solid transparent',
                                    borderLeft: '22px solid rgba(96, 125, 139, 0.85)',
                                    filter: 'drop-shadow(0 3px 6px rgba(69, 90, 100, 0.5))',
                                    opacity: 0.9
                                },
                                className: "jsx-ffaf0ad098b3f409"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDecorations.tsx",
                                lineNumber: 496,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    right: '14px',
                                    top: '12px',
                                    width: '11px',
                                    height: '11px',
                                    background: `
                radial-gradient(circle at 35% 32%,
                  rgba(255, 255, 255, 0.3) 0%,
                  rgba(189, 189, 189, 0.6) 18%,
                  rgba(117, 117, 117, 0.85) 35%,
                  rgba(66, 66, 66, 0.95) 50%,
                  rgba(33, 33, 33, 1) 65%,
                  rgba(13, 13, 13, 1) 100%
                )
              `,
                                    borderRadius: '50%',
                                    border: '1.5px solid rgba(38, 50, 56, 0.8)',
                                    boxShadow: `
                0 2px 8px rgba(0, 0, 0, 0.6),
                inset 1px 1px 3px rgba(189, 189, 189, 0.4),
                inset -1px -1px 2px rgba(0, 0, 0, 0.5)
              `
                                },
                                className: "jsx-ffaf0ad098b3f409",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: '3px',
                                        left: '3px',
                                        width: '3px',
                                        height: '3px',
                                        background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 100%)',
                                        borderRadius: '50%'
                                    },
                                    className: "jsx-ffaf0ad098b3f409"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DraggableDecorations.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDecorations.tsx",
                                lineNumber: 510,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: '22px',
                                    top: '16px',
                                    width: '1.5px',
                                    height: '8px',
                                    background: 'linear-gradient(to bottom, transparent 0%, rgba(38, 50, 56, 0.9) 20%, rgba(38, 50, 56, 0.9) 80%, transparent 100%)',
                                    borderRadius: '1px',
                                    boxShadow: '3px 0 0 rgba(38, 50, 56, 0.8), 6px 0 0 rgba(38, 50, 56, 0.7), 9px 0 0 rgba(38, 50, 56, 0.6)'
                                },
                                className: "jsx-ffaf0ad098b3f409"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDecorations.tsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    right: '6px',
                                    top: '22px',
                                    width: '14px',
                                    height: '8px',
                                    background: 'linear-gradient(to bottom, rgba(38, 50, 56, 0.9) 0%, rgba(13, 13, 13, 0.8) 100%)',
                                    borderRadius: '0 0 60% 20%',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(38, 50, 56, 0.8)'
                                },
                                className: "jsx-ffaf0ad098b3f409",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '1px',
                                        width: '100%',
                                        height: '3px',
                                        background: `
                  repeating-linear-gradient(90deg,
                    transparent 0px,
                    transparent 1px,
                    rgba(255, 255, 255, 0.9) 1px,
                    rgba(255, 255, 255, 0.9) 2px,
                    transparent 2px,
                    transparent 3px
                  )
                `,
                                        clipPath: 'polygon(0% 100%, 10% 0%, 20% 100%, 30% 0%, 40% 100%, 50% 0%, 60% 100%, 70% 0%, 80% 100%, 90% 0%, 100% 100%)'
                                    },
                                    className: "jsx-ffaf0ad098b3f409"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DraggableDecorations.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDecorations.tsx",
                                lineNumber: 559,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    right: '2px',
                                    top: '16px',
                                    width: '8px',
                                    height: '8px',
                                    background: 'radial-gradient(ellipse at 40% 40%, rgba(120, 144, 156, 0.6) 0%, transparent 100%)',
                                    borderRadius: '50%'
                                },
                                className: "jsx-ffaf0ad098b3f409"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDecorations.tsx",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '15px',
                            top: '32px',
                            width: '12px',
                            height: '12px',
                            background: 'linear-gradient(135deg, rgba(96, 125, 139, 0.9) 0%, transparent 100%)',
                            clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)'
                        },
                        className: "jsx-ffaf0ad098b3f409"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 604,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "ffaf0ad098b3f409",
                        children: "@keyframes shark-swim{0%,to{transform:translate(0)rotate(0)}50%{transform:translate(5px)rotate(-1deg)}}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DraggableDecorations.tsx",
                lineNumber: 408,
                columnNumber: 9
            }, this),
            themeClass: 'theme-ocean-waves',
            storageKey: 'fishPosition',
            defaultX: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 500,
            defaultY: 150
        },
        {
            emoji: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lightning-bolt",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bolt-main"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 634,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bolt-glow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 635,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DraggableDecorations.tsx",
                lineNumber: 633,
                columnNumber: 9
            }, this),
            themeClass: 'theme-thunderstorm',
            storageKey: 'lightningPosition',
            defaultX: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 500,
            defaultY: 150
        },
        {
            emoji: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "saturn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "saturn-planet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 646,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "saturn-rings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableDecorations.tsx",
                        lineNumber: 647,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DraggableDecorations.tsx",
                lineNumber: 645,
                columnNumber: 9
            }, this),
            themeClass: 'theme-galaxy',
            storageKey: 'saturnPosition',
            defaultX: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 500,
            defaultY: 150
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: decorations.map((config, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DraggableDecoration, {
                config: config
            }, index, false, {
                fileName: "[project]/src/components/DraggableDecorations.tsx",
                lineNumber: 660,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
}),
"[project]/src/app/calendar/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveCalendar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveCalendar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeCustomizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeCustomizer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableDecorations$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DraggableDecorations.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function CalendarPage() {
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handlePrint = ()=>{
        window.print();
    };
    const handleExportPDF = ()=>{
        alert('Export to PDF functionality would be implemented here');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 space-y-6 flex flex-col min-h-screen",
        style: {
            minHeight: '200vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableDecorations$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-black via-purple-950 to-black border-4 border-purple-600/50 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] p-6 print:hidden flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 px-6 py-3 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 shadow-[0_0_20px_rgba(168,85,247,0.4)] mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-black mb-0 flex items-center gap-3 tracking-wide uppercase",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-10 h-10 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calendar/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400",
                                        style: {
                                            textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                                            WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                                            filter: 'brightness(1.4)'
                                        },
                                        children: "Titan Scheduler"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calendar/page.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSettings(true),
                                className: "ml-auto px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-600 text-purple-200 hover:from-slate-600 hover:to-slate-500 transition-all shadow-lg flex items-center gap-2 border-2 border-purple-400/50",
                                style: {
                                    textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(168,85,247,0.4)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calendar/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    "Settings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-center gap-2 font-semibold mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "w-4 h-4 text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400",
                                    style: {
                                        textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                                        filter: 'brightness(1.4)'
                                    },
                                    children: "Drag to move shifts • Resize to adjust duration • Click to create or view details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 print:hidden flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: "flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white rounded-lg hover:from-purple-950 hover:via-purple-800 hover:to-black transition-all font-black shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] border-2 border-purple-500 hover:scale-105 uppercase tracking-wider",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                className: "w-6 h-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            "← Command Center"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrint,
                        className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-700 via-purple-600 to-black text-white rounded-lg hover:from-purple-800 hover:via-purple-700 hover:to-black transition-all font-semibold shadow-lg hover:shadow-xl border border-purple-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            "Print Calendar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExportPDF,
                        className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-800 via-purple-900 to-black text-white rounded-lg hover:from-purple-900 hover:via-black hover:to-purple-900 transition-all font-semibold shadow-lg hover:shadow-xl border border-purple-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            "Export to PDF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            "Filter by Employee"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeCustomizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveCalendar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    showSettings: showSettings,
                    setShowSettings: setShowSettings
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/calendar/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_800d1084._.js.map