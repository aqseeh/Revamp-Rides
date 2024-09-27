const ContactUs: React.FC = () => {
  return (
    <div className="bg-gray-50 ">
      {/* Contact Section */}
      <section className="container mx-auto mt-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4 ">Contact Us</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Revamp Rides offers an unparalleled experience in buying and selling
          cars, providing a vast selection of quality vehicles and exceptional
          customer service. With transparent pricing and hassle-free
          transactions, it ensures customer satisfaction every step of the way.
        </p>
      </section>

      {/* Get In Touch and Form Section */}
      <section className="bg-gray-100 py-12  px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Get In Touch */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold text-gray-800">
              Get In Touch
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet accumsan eros, sit amet auctor nunc. Nullam ac purus.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-orange-500 mr-4">📍</span>
                <p> Islamabad,Pakistan</p>
              </div>
              <div className="flex items-center">
                <span className="text-orange-500 mr-4">📞</span>
                <p>+123-456-7890</p>
              </div>
              <div className="flex items-center">
                <span className="text-orange-500 mr-4">✉️</span>
                <p>revamprides@gmail.com</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <span className="text-orange-500">🔗</span>
              <span className="text-orange-500">🔗</span>
              <span className="text-orange-500">🔗</span>
            </div>
          </div>

          {/* Send a Message Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail address"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-red-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Revamp Rides</h3>
            <p>
              Drive growth, retain customers, and scale up effortlessly with
              revamp Rides.
            </p>
            <a href="mailto:revamprides.com" className="text-red-500">
              revamprides@gmail.com
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Features</h4>
            <ul>
              <li>Business Messenger</li>
              <li>Customizable Bots</li>
              <li>Automated Answers</li>
              <li>Product Tours</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Resources</h4>
            <ul>
              <li>Whitepapers & Blog</li>
              <li>Watch a Demo</li>
              <li>Product Glossary</li>
              <li>Industry Reports</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          © Copyright Revamp Rides. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
