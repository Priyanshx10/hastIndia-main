const Footer = () => {
  return (
    <footer className="text-gray-500 py-10 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold">HastIndia</h1>
          <p className="mt-2 text-sm md:text-base">
            Your one-stop shop for all things Indian.
          </p>
        </div>

        {/* Company Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg md:text-xl font-semibold">Company</h2>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-sm md:text-base hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg md:text-xl font-semibold">Get in Touch</h2>
          <ul className="mt-2">
            <li>
              <a
                href="mailto:info@hastindia.com"
                className="text-sm md:text-base hover:underline"
              >
                Email Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:underline">
                Contact Support
              </a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:underline">
                Follow Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg md:text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-sm md:text-base hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-sm md:text-base hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-sm md:text-base hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-sm md:text-base hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p className="text-sm md:text-base">
          &copy; 2023 HastIndia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
