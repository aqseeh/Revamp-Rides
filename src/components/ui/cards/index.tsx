import { useState } from "react";

const Cards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cards = [
    {
      color: "bg-black ",
      title: "Online Platform",
      description: `Revamp Rides features a user-friendly online platform for browsing vehicle listings, scheduling test drives, and managing purchases. Customers can access detailed vehicle histories, obtain insurance quotes, and apply for financing all in one place. The platform ensures a convenient and transparent car buying experience.`,
    },
    {
      color: " bg-slate-800",
      title: "Customer Support",
      description: `
Revamp Rides  provides exceptional customer support with 24/7 assistance for any queries or concerns. We offer dedicated help with insurance claims, vehicle documentation, and after-sale services to ensure a seamless experience. Our team is committed to resolving issues promptly and maintaining customer satisfaction.`,
    },
    {
      color: "bg-blue-500",
      title: "Insurance Services",
      description: `Revamp Rides providing customized policies, including liability, collision, and comprehensive coverage, tailored to protect your vehicle and ensure peace of mind. Our services offer competitive quotes, claims assistance, and flexible plans to meet diverse customer needs.`,
    },
    {
      color: "bg-green-500",
      title: "After-Sales Service",
      description: `
Revamp Rides offers comprehensive after-sale services, including regular maintenance, repair, and 24/7 roadside assistance. We provide extended warranties, vehicle detailing, and customization options to keep your vehicle in top condition. Customer support and loyalty programs ensure continued satisfaction and engagement. `,
    },
  ];

  return (
    <div className=" grid grid-cols-4 flex-wrap  justify-center p-4 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${
            card.color
          } mx-3 text-white p-6 rounded-lg shadow-lg transition-transform transform ${
            hoveredCard === index
              ? "scale-105 z-10"
              : hoveredCard !== null
              ? "opacity-50"
              : ""
          }`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex flex-col h-full">
            <h1 className="text-white text-2xl font-bold mb-2">{card.title}</h1>
            <p className="text-white text-sm">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
