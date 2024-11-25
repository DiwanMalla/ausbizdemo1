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
import { Home, FileText, Mail, PanelLeftClose } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "FHIR Integration", href: "/fhir-integration", icon: FileText },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact Us", href: "/contact", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <ShadcnSidebar collapsible="icon" className="w-60 border-r border-gray-800">
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">AusBiz</span>
        </Link>
        <SidebarTrigger />
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
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-800"
                >
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
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-800 border-gray-700"
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Subscribe
          </Button>
        </form>
      </SidebarFooter>
      <SidebarRail />
    </ShadcnSidebar>
  );
}

function SidebarTrigger() {
  return (
    <Button variant="ghost" size="icon" className="h-6 w-6">
      <PanelLeftClose className="h-4 w-4" />
    </Button>
  );
}
