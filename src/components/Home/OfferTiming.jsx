import { useEffect, useState } from "react";
import PrimaryButton from "../ui/button/PrimaryButton";

export default function OfferTiming() {
  // Set your target date here
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(
        Math.floor(distance / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="py-12 ">
      <div className="flex items-center">
        {/* LEFT IMAGE */}
        <div className="flex-1">
          <img
            className="w-full  object-cover"
            src="https://i.ibb.co.com/x8smGDrV/image.png"
            alt=""
          />
        </div>
        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-[#0C0C0C] text-white px-16 py-20">
          <span className="text-[12px] font-bold text-[#71EFA3] border border-[#71EFA3] px-2 py-1 tracking-widest">
            LIMITED EDITION
          </span>

          <h1 className="text-4xl font-bold mt-6">Hurry up! 30% OFF</h1>

          <p className="mt-4 text-gray-300">
            Find clubs that are right for your game
          </p>

          <p className="mt-6 text-gray-400 text-sm">Offer expires in:</p>

          {/* TIMER */}
          <div className="flex items-center gap-4 mt-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white text-black w-16 h-16 flex flex-col justify-center items-center rounded"
              >
                <span className="text-xl font-bold">{item.value}</span>
                <span className="text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <PrimaryButton>Shop now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
