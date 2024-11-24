"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Home, FileText, Mail } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "FHIR Integration", href: "/fhir-integration", icon: FileText },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact Us", href: "/contact", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <ShadcnSidebar
      collapsible="icon"
      className="fixed left-0 top-0 z-40 h-full w-64 transition-all duration-300"
    >
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">AusBiz</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.name}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 space-y-4">
        <form className="space-y-2 group-data-[collapsible=icon]:hidden">
          <h4 className="text-sm font-semibold">Newsletter Signup</h4>
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </SidebarFooter>
      <SidebarRail />
    </ShadcnSidebar>
  );
}
