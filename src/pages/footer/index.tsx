const Footer = () => {
  return (
    <div>
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

export default Footer;
