import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  endDate: string;
  title?: string;
}

export const CountdownTimer = ({ endDate, title = "Ends in" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(endDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (timeLeft.isExpired) {
    return (
      <div className="text-center p-4 bg-card border border-border rounded-lg">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Competition Ended</span>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center p-4 bg-card border border-border rounded-lg hover-lift">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-gaming-orange" />
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
      </div>
      <div className="flex justify-center gap-4">
        {timeLeft.days > 0 && (
          <div className="text-center">
            <div className="text-xl font-bold text-gaming-orange">{timeLeft.days}</div>
            <div className="text-xs text-muted-foreground">days</div>
          </div>
        )}
        <div className="text-center">
          <div className="text-xl font-bold text-gaming-orange">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs text-muted-foreground">hours</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gaming-orange">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs text-muted-foreground">mins</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gaming-orange">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs text-muted-foreground">secs</div>
        </div>
      </div>
    </div>
  );
};