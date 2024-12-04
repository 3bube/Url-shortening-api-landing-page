import Image from "next/image";

const Footer = () => {
  const footerLinks = [
    {
      title: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  const socialIcons = [
    { name: "facebook", path: "/images/icon-facebook.svg" },
    { name: "twitter", path: "/images/icon-twitter.svg" },
    { name: "pinterest", path: "/images/icon-pinterest.svg" },
    { name: "instagram", path: "/images/icon-instagram.svg" },
  ];

  return (
    <footer className="bg-veryDarkViolet py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/logo.svg"
              alt="Shortly Logo"
              width={120}
              height={33}
              className="brightness-0 invert"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 flex-1 justify-center md:justify-end">
            {footerLinks.map((section) => (
              <div key={section.title} className="text-center md:text-left">
                <h3 className="text-white font-bold mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray hover:text-cyan transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-8 md:mt-0">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="hover:brightness-0 hover:invert-[0.4] transition-all"
                >
                  <Image
                    src={icon.path}
                    alt={`${icon.name} icon`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
