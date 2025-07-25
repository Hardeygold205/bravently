"use client";

import React from "react";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "Custom websites and web applications for your business",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-apps",
    description: "iOS and Android apps built with modern technologies",
  },
  {
    title: "E-Commerce Solutions",
    href: "/services/ecommerce",
    description: "Complete online store setups with payment integration",
  },
  {
    title: "UI/UX Design",
    href: "/services/design",
    description: "User-centered design that enhances engagement",
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud",
    description: "Scalable cloud infrastructure and migration",
  },
  {
    title: "IT Consulting",
    href: "/services/consulting",
    description: "Strategic technology guidance for business growth",
  },
];

const products = [
  {
    title: "Branovax CMS",
    href: "/products/cms",
    description: "Our proprietary content management system",
  },
  {
    title: "SecurePay Gateway",
    href: "/products/payment-gateway",
    description: "Secure payment processing solution",
  },
  {
    title: "Analytics Suite",
    href: "/products/analytics",
    description: "Business intelligence and data visualization",
  },
];

export function NavbarMenu() {
  const navItems = [
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Products",
      link: "#products",
    },
    {
      name: "Resources",
      link: "#resources",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="fixed z-100">
      <NavBody className="p-4">
        <NavbarLogo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/about" title="Our Company">
                    Learn about our mission and team
                  </ListItem>
                  <ListItem href="/careers" title="Careers">
                    Join our team of professionals
                  </ListItem>
                  <ListItem href="/clients" title="Client Success">
                    See our client success stories
                  </ListItem>
                  <ListItem href="/blog" title="Blog">
                    Industry trends and company updates
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {products.map((product) => (
                    <ListItem
                      key={product.title}
                      title={product.title}
                      href={product.href}>
                      {product.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/docs" title="Documentation">
                    Technical guides and API references
                  </ListItem>
                  <ListItem href="/case-studies" title="Case Studies">
                    Detailed client success stories
                  </ListItem>
                  <ListItem href="/whitepapers" title="Whitepapers">
                    In-depth technology research
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <NavbarButton
            target="_blank"
            href="https://wa.me/+2348138553465"
            variant="primary">
            Contact Us
          </NavbarButton>
          <Link
            href="#LetWork"
            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-blue-600 dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Get Started
          </Link>
        </div>
      </NavBody>
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
          onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300">
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full">
              Contact Us
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full">
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
