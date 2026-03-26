import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="grid md:grid-cols-2">
        {/* Contact */}
        <div className="bg-[#1F2937] text-white text-center py-16">
          <h2 className="text-2xl mb-6">CONTACT US</h2>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>

        {/* Social */}
        <div className="bg-[#111827] text-white text-center py-16">
          <h2 className="text-2xl mb-6">Follow US</h2>
          <p className="mb-6">Join us on social media</p>

          <div className="flex justify-center gap-6 text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
            <FaInstagram className="cursor-pointer hover:text-yellow-400" />
            <FaTwitter className="cursor-pointer hover:text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-black text-white text-center py-4">
        <p>
          Copyright © <span className="font-bold">Jothi-Nokrek</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
