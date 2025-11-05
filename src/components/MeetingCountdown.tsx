import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

const MeetingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate next second Thursday of the month at 7pm ET
  const getNextMeeting = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    // Find second Thursday of current month
    const firstDay = new Date(year, month, 1);
    const firstThursday = firstDay.getDay() <= 4 
      ? 1 + (4 - firstDay.getDay()) 
      : 1 + (11 - firstDay.getDay());
    const secondThursday = firstThursday + 7;
    
    let nextMeeting = new Date(year, month, secondThursday, 19, 0, 0); // 7pm
    
    // If meeting has passed, get next month's meeting
    if (now > nextMeeting) {
      const nextMonth = month + 1;
      const nextYear = nextMonth > 11 ? year + 1 : year;
      const adjustedMonth = nextMonth > 11 ? 0 : nextMonth;
      
      const nextFirstDay = new Date(nextYear, adjustedMonth, 1);
      const nextFirstThursday = nextFirstDay.getDay() <= 4 
        ? 1 + (4 - nextFirstDay.getDay()) 
        : 1 + (11 - nextFirstDay.getDay());
      const nextSecondThursday = nextFirstThursday + 7;
      
      nextMeeting = new Date(nextYear, adjustedMonth, nextSecondThursday, 19, 0, 0);
    }
    
    return nextMeeting;
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const nextMeeting = getNextMeeting();
      const now = new Date();
      const difference = nextMeeting.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextMeeting = getNextMeeting();
  const meetingDate = nextMeeting.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-gradient-to-r from-green-500/20 to-lime-500/20 border-2 border-green-400/50 rounded-2xl p-6 backdrop-blur-sm">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calendar className="w-6 h-6 text-green-400" />
          <h3 className="text-xl font-bold text-green-300">Next Virtual Meeting</h3>
        </div>
        <p className="text-green-200 text-sm">{meetingDate} at 7:00 PM ET</p>
        <p className="text-green-300 text-xs mt-1">Every Second Thursday of the Month</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((unit) => (
          <div key={unit.label} className="bg-black/30 rounded-lg p-3 border border-green-400/30">
            <div className="text-3xl font-bold text-green-400 mb-1">{unit.value.toString().padStart(2, '0')}</div>
            <div className="text-xs text-green-300">{unit.label}</div>
          </div>
        ))}
      </div>
      
      <a
        href="https://us06web.zoom.us/j/81252494648?pwd=65oTtSJoFvsDKWlqzgw7ehYy1b7aby.1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-green-500 to-lime-600 hover:from-green-400 hover:to-lime-500 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        <Clock className="w-5 h-5" />
        Join Zoom Meeting
      </a>
      
      <div className="mt-3 text-center text-xs text-green-300/80">
        Meeting ID: 812 5249 4648 • Passcode: Dz9bQj
      </div>
    </div>
  );
};

export default MeetingCountdown;
