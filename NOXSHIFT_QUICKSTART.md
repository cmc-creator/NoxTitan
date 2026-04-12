# NoxShift Quick Start: Fix "NEEDS COVERAGE" Display Issue

## Your Problem
❌ Your NoxShift scheduler shows an **employee name** instead of **"NEEDS COVERAGE"**

## The Solution (3 Simple Steps)

### 1️⃣ Add `isCallout` to Your Shift Type
```typescript
type Shift = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  employeeName?: string;
  employeeId?: string;
  isCallout?: boolean;  // ← ADD THIS!
};
```

### 2️⃣ Mark Open Shifts with `isCallout: true`
```typescript
// When creating a callout or when someone calls out:
const openShift = {
  id: 1,
  title: "Day Shift",
  start: new Date(),
  end: new Date(),
  isCallout: true,        // ← SET THIS TO TRUE
  employeeName: undefined, // ← MUST BE UNDEFINED
  employeeId: undefined    // ← MUST BE UNDEFINED
};
```

### 3️⃣ Use Conditional Rendering
```tsx
{shifts.map(shift => (
  <div key={shift.id}>
    {shift.isCallout ? (
      // ✅ SHOW THIS WHEN isCallout IS TRUE
      <button className="w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-red-500 text-white font-bold shadow-lg animate-pulse">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1 text-yellow-300">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs uppercase">NEEDS COVERAGE</span>
          </div>
        </div>
      </button>
    ) : (
      // ❌ ONLY SHOW EMPLOYEE NAME WHEN isCallout IS FALSE
      <div className="p-2 bg-slate-800">
        <div className="font-bold">{shift.employeeName}</div>
      </div>
    )}
  </div>
))}
```

## The Key Rule

```
if (isCallout === true) {
  → Show "NEEDS COVERAGE" (NO employee name)
}

if (isCallout === false or undefined) {
  → Show employee name
}
```

## Why Your Current Code Shows a Name

Your code probably looks like this (WRONG):
```tsx
// ❌ WRONG - Always shows employee name
<div className="shift-card">
  {shift.employeeName || "NEEDS COVERAGE"}
</div>
```

It should look like this (CORRECT):
```tsx
// ✅ CORRECT - Checks isCallout first
{shift.isCallout ? (
  <button className="needs-coverage-button">
    NEEDS COVERAGE
  </button>
) : (
  <div className="shift-card">
    {shift.employeeName}
  </div>
)}
```

## Exact Styling to Match NyxTitan

### Tailwind Classes
```
bg-gradient-to-br from-red-900 to-rose-900
border-2 border-red-500
text-white font-bold
shadow-lg
hover:from-red-800 hover:to-rose-800
transition-all hover:scale-105
cursor-pointer
animate-pulse
```

### Plain CSS
```css
.needs-coverage-button {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: linear-gradient(to bottom right, #7f1d1d, #881337);
  border: 2px solid #ef4444;
  color: white;
  font-weight: bold;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

## Testing Checklist

- [ ] Create a shift with `isCallout: true` → Should show "NEEDS COVERAGE"
- [ ] Create a shift with `isCallout: false` and `employeeName: "John"` → Should show "John"
- [ ] Set `isCallout: undefined` and `employeeName: "Jane"` → Should show "Jane"
- [ ] Button should pulse/animate
- [ ] Button should have red gradient background
- [ ] No employee name should appear when `isCallout: true`

## Full Working Example

```tsx
import React, { useState } from 'react';
import { AlertTriangle, DollarSign } from 'lucide-react';

function NoxShiftScheduler() {
  const [shifts, setShifts] = useState([
    // ✅ This will show "NEEDS COVERAGE"
    {
      id: 1,
      title: "Morning Shift",
      isCallout: true,
      employeeName: undefined
    },
    // ✅ This will show "Sarah Martinez"
    {
      id: 2,
      title: "Evening Shift",
      isCallout: false,
      employeeName: "Sarah Martinez"
    }
  ]);

  return (
    <div className="grid grid-cols-7 gap-2">
      {shifts.map(shift => (
        <div key={shift.id}>
          {shift.isCallout ? (
            <button className="w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-red-500 text-white font-bold shadow-lg animate-pulse">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1 text-yellow-300">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-xs uppercase">NEEDS COVERAGE</span>
                </div>
                <div className="flex items-center gap-1 text-lg">
                  <DollarSign className="w-5 h-5" />
                  <span>OFFER BONUS?</span>
                </div>
              </div>
            </button>
          ) : (
            <div className="p-2 rounded-lg bg-slate-800 text-white">
              <div className="font-bold">{shift.employeeName}</div>
              <div className="text-xs opacity-75">{shift.title}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

## When Someone Claims the Shift

```typescript
const claimShift = (shiftId: number, employeeName: string) => {
  setShifts(shifts.map(shift =>
    shift.id === shiftId
      ? {
          ...shift,
          isCallout: false,      // ← Turn off callout
          employeeName: employeeName,  // ← Add employee
          employeeId: "123"
        }
      : shift
  ));
};
```

## Still Not Working?

Check these:
1. Is `isCallout` spelled correctly? (not `isCallOut` or `iscallout`)
2. Is it actually `true` (boolean), not `"true"` (string)?
3. Are you checking `if (shift.isCallout)` BEFORE trying to display `shift.employeeName`?
4. Is `employeeName` actually `undefined` when `isCallout` is true?

## See Full Documentation
For more details, examples, and troubleshooting, see `SCHEDULER_EXTRACTION_GUIDE.md`

---

**That's it! Three simple steps and your NoxShift scheduler will match NyxTitan's "NEEDS COVERAGE" feature perfectly.** 🎯
