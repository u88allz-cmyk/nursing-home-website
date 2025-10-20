import { Link, useLocation } from "wouter";
import logoImg from "@assets/바른나무요양원 로고-Photoroom_1760948721948.png";

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
    <header className="bg-white/98 backdrop-blur-md border-b border-green-100/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <img 
              src={logoImg} 
              alt="바른나무요양원 로고" 
              className="h-[75px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h1 className="hidden sm:block ml-5 text-3xl font-black tracking-tight transition-all duration-300 group-hover:scale-105" style={{ color: '#67BA6D' }}>
              바른나무요양원
            </h1>
          </Link>
          
          <nav className="flex space-x-4 sm:space-x-10 lg:space-x-14">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 whitespace-nowrap relative group ${
                  isActiveLink(item.href) ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`} style={{ color: '#67BA6D' }}>
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                    isActiveLink(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
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
