import { Link, useLocation } from "wouter";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [location] = useLocation();

  const navItems = [
    { href: "/about", label: "병원소개" },
    { href: "/programs", label: "프로그램" },
    { href: "/location", label: "오시는길" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-24">
          <Link href="/" className="flex-shrink-0">
            <img 
              src={logoImg} 
              alt="해와달 요양원 로고" 
              className="h-[70px] w-auto object-contain"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="flex space-x-6 sm:space-x-8 ml-8 flex-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`text-sm sm:text-base font-medium transition-colors duration-200 hover:text-primary ${
                  isActiveLink(item.href) ? "text-primary" : "text-gray-600"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
