"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Download } from "lucide-react";

function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Achievements",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <Navbar className="fixed top-5">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems.map((item, idx) => ({
              ...item,
              element: (
                <a
                  key={`desktop-link-${idx}`}
                  href={item.link}
                  className="relative text-neutral-600 dark:text-neutral-300 hover:text-primary"
                >
                  {item.name}
                </a>
              ),
            }))}
          />
          <div className="flex items-center gap-4">
            {/* Desktop Button */}
            <a href="/resume.pdf" download>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full 
                  bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                  <Download />
                  Resume
                </span>
              </button>
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* Mobile Button */}
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <NavbarButton variant="primary" className="w-full">
                  Resume
                </NavbarButton>
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default NavbarDemo;
