"use client";

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

import { PreviewBanner } from "@/components/preview/preview-banner";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { usePathname } from "next/navigation";

const navLinks = [
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className={`block text-base font-medium leading-7 tracking-tight text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </PopoverButton>
  );
}

interface HeaderProps {
  isPreview: boolean;
}

export function Header({ isPreview }: HeaderProps) {
  const pathname = usePathname();

  if (pathname.includes("/admin")) {
    return null;
  }

  return (
    <header>
      {isPreview && <PreviewBanner />}
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center space-x-16">
            <Link href="/">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Acme Inc.
              </h2>
            </Link>
            <div className="hidden lg:flex lg:space-x-6">
              {navLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                >
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-white px-6 pb-6 pt-24 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="">
                            {navLinks.map(([label, href], index) => (
                              <MobileNavLink href={href} key={index}>
                                {label}
                              </MobileNavLink>
                            ))}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Link href={"/"}>
                              <Button variant="outline" className="w-full">
                                Log in
                              </Button>
                            </Link>
                            <Link href={"/"}>
                              <Button className="w-full">
                                Get started free
                              </Button>
                            </Link>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Link href={"/"}>
                <Button variant="outline" className="">
                  Log in
                </Button>
              </Link>
              <Link href={"/"}>
                <Button className="">Get started free</Button>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
