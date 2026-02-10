// Example: Simple Calendar Implementation
// This demonstrates how to use the BigCalendar component with minimal setup

'use client';

import React, { useState, useEffect } from 'react';
import BigCalendar from '../components/BigCalendar';

interface ShiftEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  employeeId: string;
  employeeName: string;
  color?: string;
}

export default function SimpleCalendarExample() {
  const [events, setEvents] = useState<ShiftEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch shifts from API
  useEffect(() => {
    async function loadShifts() {
      try {
        const response = await fetch('/api/shifts');
        const data = await response.json();
        
        // Transform API data to calendar events
        const transformedEvents = data.map((shift: any) => ({
          id: shift.id,
          title: `${shift.employee.firstName} ${shift.employee.lastName} - ${shift.position}`,
          start: new Date(shift.startTime),
          end: new Date(shift.endTime),
          employeeId: shift.employeeId,
          employeeName: `${shift.employee.firstName} ${shift.employee.lastName}`,
          color: shift.color || '#3b82f6',
        }));
        
        setEvents(transformedEvents);
      } catch (error) {
        console.error('Failed to load shifts:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadShifts();
  }, []);

  // Handle clicking on empty slot to create new shift
  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = prompt('Enter shift title:');
    if (title) {
      const newEvent: ShiftEvent = {
        id: `temp-${Date.now()}`,
        title,
        start,
        end,
        employeeId: 'TBD',
        employeeName: 'Unassigned',
        color: '#6b7280',
      };
      
      setEvents([...events, newEvent]);
      
      // Save to API
      createShift(newEvent);
    }
  };

  // Handle clicking on existing event
  const handleSelectEvent = (event: ShiftEvent) => {
    const action = confirm(`Edit shift: ${event.title}\n\nClick OK to edit, Cancel to delete`);
    if (action) {
      // Edit shift
      const newTitle = prompt('Enter new title:', event.title);
      if (newTitle) {
        setEvents(events.map(e => 
          e.id === event.id ? { ...e, title: newTitle } : e
        ));
        updateShift(event.id, { title: newTitle });
      }
    } else {
      // Delete shift
      setEvents(events.filter(e => e.id !== event.id));
      deleteShift(event.id);
    }
  };

  // API functions
  async function createShift(shift: ShiftEvent) {
    try {
      const response = await fetch('/api/shifts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: shift.title,
          startTime: shift.start.toISOString(),
          endTime: shift.end.toISOString(),
          employeeId: shift.employeeId,
        }),
      });
      
      if (response.ok) {
        const createdShift = await response.json();
        // Update with real ID from server
        setEvents(events.map(e => 
          e.id === shift.id ? { ...e, id: createdShift.id } : e
        ));
      }
    } catch (error) {
      console.error('Failed to create shift:', error);
    }
  }

  async function updateShift(id: string, updates: Partial<ShiftEvent>) {
    try {
      await fetch(`/api/shifts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
    } catch (error) {
      console.error('Failed to update shift:', error);
    }
  }

  async function deleteShift(id: string) {
    try {
      await fetch(`/api/shifts/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Failed to delete shift:', error);
    }
  }

  if (loading) {
    return <div className="p-6">Loading calendar...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Schedule</h1>
      <div className="h-[600px]">
        <BigCalendar
          events={events}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
        />
      </div>
    </div>
  );
}
