import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Ek nayi type meeting save karne ke liye
type Meeting = {
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending';
};

export const MeetingCalendar: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Nayi State: Book ki hui meetings ko list mein save karne ke liye
  const [bookedMeetings, setBookedMeetings] = useState<Meeting[]>([]);

  const availableSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM'];

  const handleBookMeeting = () => {
    if (selectedTime && date) {
      // 1. Nayi meeting banayein
      const newMeeting: Meeting = {
        date: format(date as Date, 'PPP'),
        time: selectedTime,
        status: 'Confirmed'
      };
      
      // 2. Us nayi meeting ko purani list mein add kar dein
      setBookedMeetings([...bookedMeetings, newMeeting]);
      
      // 3. Form clear kar dein aur alert dikhayein
      setSelectedTime(null);
      alert('✅ Meeting Successfully Booked!');
    }
  };

  return (
    <div className="space-y-8">
      {/* ---------------- CALENDAR SECTION ---------------- */}
      <div className="card-base p-6 bg-white rounded-lg shadow-md border border-neutral-200">
        <h2 className="text-2xl font-bold mb-6 text-primary-700">Schedule a meeting</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Calendar 
              onChange={(newDate) => { setDate(newDate); setSelectedTime(null); }} 
              value={date}
              className="w-full border-none rounded-lg shadow-sm p-2 bg-neutral-50"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">
              Selected Date: <span className="text-primary-600">{date ? format(date as Date, 'PPP') : 'None'}</span>
            </h3>
            
            <div className="mt-4">
              <p className="text-sm text-neutral-600 mb-3">Available Time Slots:</p>
              <div className="grid grid-cols-2 gap-3">
                {availableSlots.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 text-sm rounded border transition-colors ${
                      selectedTime === time 
                        ? 'bg-primary-600 text-white border-primary-600' 
                        : 'bg-white text-neutral-700 border-neutral-300 hover:border-primary-500'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleBookMeeting}
                disabled={!selectedTime} 
                className={`w-full py-3 px-4 rounded font-medium transition-colors ${
                  selectedTime 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                }`}
              >
                Confirm Booking
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* ---------------- UPCOMING MEETINGS SECTION ---------------- */}
      <div className="card-base p-6 bg-white rounded-lg shadow-md border border-neutral-200">
        <h2 className="text-xl font-bold mb-4 text-neutral-800">Your Upcoming Meetings</h2>
        
        {bookedMeetings.length === 0 ? (
          <p className="text-neutral-500 text-sm">You don't have any upcoming meetings scheduled yet.</p>
        ) : (
          <ul className="space-y-3">
            {bookedMeetings.map((meeting, index) => (
              <li key={index} className="flex justify-between items-center p-4 bg-neutral-50 rounded border border-neutral-200">
                <div>
                  <p className="font-medium text-neutral-900">{meeting.date}</p>
                  <p className="text-sm text-neutral-600">Time: {meeting.time}</p>
                </div>
                <span className="px-3 py-1 bg-success-50 text-success-700 text-xs font-semibold rounded-full border border-success-300">
                  {meeting.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};