import { Link } from "react-router-dom";
import Form from "@/pages/form";

const ServicePost = () => {
  interface Display {
    id: number;
    title: string;
    description: string;
  }

  const content: Display[] = [
    {
      id: 1,
      title: "CAR BUYING",

      description: `The Car Buying page is designed to make purchasing a vehicle seamless and efficient. 
        It offers an extensive inventory of both new and used cars, allowing users to easily browse 
        and compare options based on make, model, price, mileage, and more. With detailed vehicle 
        information, pricing transparency, and access to vehicle history reports, buyers can make 
        informed decisions with confidence. The page also integrates financing options, trade-in 
        evaluations, and expert guidance to further assist in the buying process. Whether you're 
        looking for a family SUV or a sleek sedan, the Car Buying page simplifies the search, 
        financing, and purchasing experience.`,
    },
    {
      id: 2,
      title: "BODY REPAIR",

      description: `The Car Body Repair service is dedicated to restoring your vehicle to its original condition after any damage. 
      Our skilled technicians utilize advanced tools and techniques to address dents, scratches, and structural issues, 
      ensuring a high-quality finish. Whether it's minor cosmetic damage or extensive repairs, we provide comprehensive 
      assessments and efficient solutions. With a commitment to customer satisfaction, 
      we work with insurance companies to streamline the claims process, allowing you to get back on the road quickly and safely.`,
    },
    {
      id: 3,
      title: "  Accident Damage Insurance",
      description: `The Accident Damage Insurance service offers peace of mind by protecting your vehicle
       against unforeseen accidents and damage. Our comprehensive insurance plans cover a range of scenarios, 
       including collision, theft, and natural disasters. We work with reputable insurance providers to offer 
       customized coverage that meets your specific needs and budget. By choosing our Accident Damage Insurance, 
       you can drive confidently, knowing that you have financial protection in case of unexpected events.`,
    },
    {
      id: 4,
      title: "Book A Service",
      description: `The Book a Service feature allows you to easily schedule maintenance or repair appointments for your vehicle.
       Whether you need routine servicing, oil changes, or specific repairs, our online booking system makes it convenient to find 
       a time that fits your schedule. Our experienced technicians are equipped to handle all types of services, ensuring your 
       vehicle remains in optimal condition. With reminders and follow-up communications, we make it easy to keep track of your
        vehicle’s maintenance needs, ensuring safety and performance on the road.`,
    },
    {
      id: 5,
      title: " Financing",
      description: `Our Financing service simplifies the car buying process by providing a variety of
         financing options tailored to your budget and needs. Whether you're purchasing a new or used vehicle,
          we help you explore competitive loan offers from trusted lenders, ensuring you find the best rates and terms. 
          Our team guides you through the financing process, assisting with credit applications, calculating monthly payments, 
          and providing insights into trade-in values. With transparent financing options,we make it easy for you to secure the vehicle of your dreams without financial stress..`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="font-bold text-3xl text-center mb-6">Our Services</h1>
       {content.map((ServicePost) => (
        <Link
          to={`/service/${ServicePost}`}
          key={ServicePost.id}
          className="rounded-lg shadow-lg mb-4 p-4"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            {ServicePost.title}
          </h2>
          <p className="text-gray-700">{ServicePost.description}</p>
        </Link>
        
      ))} 
      <Form />
    </div>
  );
};

export default ServicePost;
