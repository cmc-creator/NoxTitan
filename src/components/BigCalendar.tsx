'use client';

import { useState } from 'react';
import { Calendar, dateFnsLocalizer, View } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  employeeId: string;
  employeeName: string;
  position?: string;
  color?: string;
}

interface BigCalendarProps {
  events: CalendarEvent[];
  onSelectSlot?: (slotInfo: { start: Date; end: Date }) => void;
  onSelectEvent?: (event: CalendarEvent) => void;
  onEventDrop?: (event: { event: CalendarEvent; start: Date; end: Date }) => void;
  enableDragAndDrop?: boolean;
}

export default function BigCalendar({
  events,
  onSelectSlot,
  onSelectEvent,
  onEventDrop,
  enableDragAndDrop = false,
}: BigCalendarProps) {
  const [view, setView] = useState<View>('month');
  const [date, setDate] = useState(new Date());

  const eventStyleGetter = (event: CalendarEvent) => {
    const style = {
      backgroundColor: event.color || '#3174ad',
      borderRadius: '8px',
      opacity: 0.9,
      color: 'white',
      border: '0px',
      display: 'block',
      padding: '4px 8px',
    };
    return { style };
  };

  return (
    <div className="h-[calc(100vh-12rem)] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-700">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        view={view}
        onView={setView}
        date={date}
        onNavigate={setDate}
        onSelectSlot={onSelectSlot}
        onSelectEvent={onSelectEvent}
        selectable
        eventPropGetter={eventStyleGetter}
        popup
        views={['month', 'week', 'day']}
        step={30}
        showMultiDayTimes
        defaultDate={new Date()}
      />
    </div>
  );
}
