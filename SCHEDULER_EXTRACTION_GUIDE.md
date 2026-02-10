# Scheduler Extraction Guide: "NEEDS COVERAGE" Feature

## Overview
This guide explains how the red "NEEDS COVERAGE" feature works in NoxTitan's scheduler and how to replicate it in NoxShift or other programs. The feature displays a prominent red, animated button when a shift needs coverage (e.g., when someone calls out).

## The Problem You're Experiencing
**Issue**: Your implementation keeps showing an employee name instead of "NEEDS COVERAGE"

**Root Cause**: The display logic checks whether a shift has the `isCallout` property set to `true`. If this property is missing or `false`, it will display the employee name instead.

## Data Structure

### Shift Interface
```typescript
interface ShiftEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  employeeName?: string;      // Employee assigned to shift
  employeeId?: string;         // Employee ID
  location?: string;
  notes?: string;
  color?: string;
  isOvertime?: boolean;
  isCallout?: boolean;         // 🔑 KEY: Mark shift as needing coverage
  claimedViaMarketplace?: boolean;
  marketplaceBonus?: number;
}
```

## The Critical Logic

### Display Decision Flow
```typescript
// For each shift in the calendar grid:

if (shift.isCallout) {
  // ✅ SHOW RED "NEEDS COVERAGE" BUTTON
  // This is what you want!
  
  if (marketplacePosting) {
    // If bonus was already posted, show "BONUS POSTED" state
  } else {
    // Show "NEEDS COVERAGE" with "OFFER BONUS?" option
  }
  
} else {
  // ❌ SHOW EMPLOYEE NAME CARD
  // This is what you're currently seeing
}
```

### The Key Condition
**The shift MUST have `isCallout: true` to show "NEEDS COVERAGE" instead of the employee name.**

## Exact Rendering Code

### "NEEDS COVERAGE" Button (What You Want)
```tsx
<button
  onClick={() => {
    setSelectedShiftForBonus(shift);
    setShowBonusOffer(true);
  }}
  className="w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-red-500 text-white font-bold shadow-lg hover:from-red-800 hover:to-rose-800 transition-all hover:scale-105 cursor-pointer animate-pulse"
>
  <div className="flex flex-col items-center gap-1">
    <div className="flex items-center gap-1 text-yellow-300">
      <AlertTriangle className="w-4 h-4" />
      <span className="text-xs uppercase">NEEDS COVERAGE</span>
    </div>
    <div className="flex items-center gap-1 text-lg">
      <DollarSign className="w-5 h-5" />
      <span>OFFER BONUS?</span>
    </div>
    <div className="text-[8px] text-red-200 opacity-75">(Optional)</div>
  </div>
</button>
```

### Visual Specifications

#### Colors
- **Background Gradient**: `from-red-900 to-rose-900`
- **Border**: `border-2 border-red-500`
- **Text**: `text-white` (main), `text-yellow-300` (warning text)
- **Hover State**: `from-red-800 to-rose-800`

#### Animation
- **Pulse**: `animate-pulse` - Makes the button pulsate to draw attention
- **Hover Scale**: `hover:scale-105` - Slight zoom on hover
- **Transitions**: `transition-all` - Smooth animations

#### Icons (Lucide React)
- `AlertTriangle` - Warning triangle for "NEEDS COVERAGE"
- `DollarSign` - Dollar sign for "OFFER BONUS?"

## How to Implement in NoxShift

### Step 1: Add the `isCallout` Property to Your Shift Type
```typescript
// In your shift type definition
type Shift = {
  // ... other properties
  isCallout?: boolean;  // Add this
}
```

### Step 2: Mark Shifts as Needing Coverage
When someone calls out or you create an open shift:
```typescript
// When creating a callout shift
const newShift = {
  id: generateId(),
  title: "Day Shift - Nursing",
  start: new Date('2026-02-10T07:00:00'),
  end: new Date('2026-02-10T15:00:00'),
  isCallout: true,  // 🔑 THIS IS THE KEY
  // Don't set employeeName or set it to undefined
  employeeName: undefined,
  employeeId: undefined,
  location: "Floor 3",
  color: "#3b82f6"
};
```

### Step 3: Conditional Rendering
```typescript
{shifts.map((shift) => {
  // Check if shift needs coverage
  if (shift.isCallout) {
    // Render red "NEEDS COVERAGE" button
    return (
      <button className="w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-red-500 text-white font-bold shadow-lg animate-pulse">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1 text-yellow-300">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs uppercase">NEEDS COVERAGE</span>
          </div>
        </div>
      </button>
    );
  }
  
  // Otherwise render normal employee card
  return (
    <div className="shift-card">
      <div>{shift.employeeName}</div>
      {/* Rest of employee shift display */}
    </div>
  );
})}
```

### Step 4: When Coverage is Found
When someone picks up the shift:
```typescript
const claimShift = (shift, newEmployeeName, newEmployeeId) => {
  const updatedShift = {
    ...shift,
    isCallout: false,  // 🔑 Turn off the callout flag
    employeeName: newEmployeeName,
    employeeId: newEmployeeId
  };
  
  // Update your shifts array with the claimed shift
  setShifts(shifts.map(s => s.id === shift.id ? updatedShift : s));
};
```

## Common Mistakes to Avoid

### ❌ Mistake 1: Not Setting `isCallout`
```typescript
// This will show employee name, not "NEEDS COVERAGE"
const shift = {
  title: "Day Shift",
  // Missing: isCallout: true
  employeeName: undefined  // Even if empty, won't show correctly
};
```

### ❌ Mistake 2: Setting Both `isCallout` and `employeeName`
```typescript
// Conflicting properties
const shift = {
  isCallout: true,
  employeeName: "John Doe"  // ❌ Should be undefined when isCallout is true
};
```

### ✅ Correct Way
```typescript
const shift = {
  id: 1,
  title: "Day Shift",
  isCallout: true,  // ✅ Flag as needing coverage
  employeeName: undefined,  // ✅ No employee assigned
  employeeId: undefined
};
```

## Complete Working Example

### React Component (Simplified)
```tsx
import { AlertTriangle, DollarSign } from 'lucide-react';

function SchedulerGrid({ shifts, onClaimShift }) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {shifts.map((shift) => (
        <div key={shift.id}>
          {shift.isCallout ? (
            // 🔴 RED "NEEDS COVERAGE" BUTTON
            <button
              onClick={() => onClaimShift(shift)}
              className="w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-red-500 text-white font-bold shadow-lg hover:from-red-800 hover:to-rose-800 transition-all hover:scale-105 cursor-pointer animate-pulse"
            >
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
            // 💚 NORMAL EMPLOYEE SHIFT CARD
            <div className="p-3 rounded-lg bg-blue-900 border border-blue-500">
              <div className="font-semibold">{shift.employeeName}</div>
              <div className="text-xs">{shift.title}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

### Usage Example
```tsx
function App() {
  const [shifts, setShifts] = useState([
    {
      id: 1,
      title: "Day Shift - Nursing",
      start: new Date('2026-02-10T07:00:00'),
      end: new Date('2026-02-10T15:00:00'),
      isCallout: true,  // 🔑 This will show "NEEDS COVERAGE"
      employeeName: undefined,
      location: "Floor 3"
    },
    {
      id: 2,
      title: "Day Shift - Nursing",
      start: new Date('2026-02-10T07:00:00'),
      end: new Date('2026-02-10T15:00:00'),
      isCallout: false,  // This will show employee name
      employeeName: "Sarah Martinez",
      location: "Floor 2"
    }
  ]);

  const handleClaimShift = (shift) => {
    const updatedShift = {
      ...shift,
      isCallout: false,
      employeeName: "Marcus Chen",
      employeeId: "8"
    };
    setShifts(shifts.map(s => s.id === shift.id ? updatedShift : s));
  };

  return <SchedulerGrid shifts={shifts} onClaimShift={handleClaimShift} />;
}
```

## Tailwind CSS Classes Reference

If you're not using Tailwind CSS, here are the equivalent styles:

```css
/* Main button container */
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

.needs-coverage-button:hover {
  background: linear-gradient(to bottom right, #991b1b, #9f1239);
  transform: scale(1.05);
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .8;
  }
}

/* Warning text color (yellow) */
.warning-text {
  color: #fcd34d;
}
```

## Troubleshooting

### Problem: Still showing employee name
**Solution**: Check these in order:
1. Verify `shift.isCallout === true`
2. Verify `shift.employeeName` is `undefined` or `null`
3. Check your conditional rendering logic
4. Look for typos: `isCallout` vs `isCallOut` vs `isCallout`

### Problem: Button not animating
**Solution**: 
- Ensure `animate-pulse` class is applied
- If not using Tailwind, add the CSS animation above
- Check browser DevTools to see if animation is working

### Problem: Colors don't match
**Solution**:
- Use exact Tailwind classes: `from-red-900 to-rose-900 border-red-500`
- Or use hex colors: `#7f1d1d`, `#881337`, `#ef4444`

## Quick Reference Card

```
✅ TO SHOW "NEEDS COVERAGE":
{
  isCallout: true,
  employeeName: undefined,
  employeeId: undefined
}

❌ TO SHOW EMPLOYEE NAME:
{
  isCallout: false,  // or undefined
  employeeName: "John Doe",
  employeeId: "123"
}

🔄 WHEN SHIFT IS CLAIMED:
{
  isCallout: false,      // Change from true
  employeeName: "Jane",  // Add employee
  employeeId: "456"      // Add ID
}
```

## Files to Reference in NoxTitan
- `src/components/InteractiveCalendar.tsx` - Lines 1970-2034 for the exact rendering logic
- Line 31: Interface definition with `isCallout` property
- Lines 2020-2033: The exact JSX for the red button

## Summary
The key to replicating the "NEEDS COVERAGE" feature is:
1. **Add `isCallout` property** to your shift data structure
2. **Set `isCallout: true`** when creating a callout/open shift
3. **Conditionally render** the red button when `shift.isCallout === true`
4. **Use the exact styling** provided above for the same look
5. **Set `isCallout: false`** when coverage is found

That's it! The feature is simpler than it looks - it's just a boolean flag with conditional rendering.
