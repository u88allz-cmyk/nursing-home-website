import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "홈" },
    { href: "/about", label: "병원소개" },
    { href: "/programs", label: "프로그램" },
    { href: "/gallery", label: "갤러리" },
    { href: "/guide", label: "입퇴원안내" },
    { href: "/contact", label: "상담문의" },
    { href: "/location", label: "오시는길" },
    { href: "/faq", label: "FAQ" },
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 ml-8 flex-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActiveLink(item.href) ? "text-primary" : "text-gray-600"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle className="sr-only">모바일 네비게이션 메뉴</SheetTitle>
                <SheetDescription className="sr-only">
                  해와달 요양원 웹사이트의 주요 페이지들로 이동할 수 있는 네비게이션 메뉴입니다.
                </SheetDescription>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span 
                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 hover:text-primary hover:bg-gray-50 ${
                          isActiveLink(item.href) ? "text-primary bg-gray-50" : "text-gray-600"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
