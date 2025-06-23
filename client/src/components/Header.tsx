import { Link, useLocation } from "wouter";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [location] = useLocation();

  const navItems = [
    { href: "/gallery", label: "시설안내" },
    { href: "/programs", label: "프로그램" },
    { href: "/location", label: "오시는길" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img 
              src={logoImg} 
              alt="해와달 요양원 로고" 
              className="h-[70px] w-auto object-contain"
            />
            <h1 className="ml-4 text-2xl font-semibold" style={{ color: '#C69C6D', fontFamily: 'ChosunilboMyeongjo, serif' }}>
              해와달 요양원
            </h1>
          </Link>
          
          {/* Navigation */}
          <nav className="flex space-x-4 sm:space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 hover:text-primary ${
                  isActiveLink(item.href) ? "text-primary" : "text-muted-foreground"
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
