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
import {
  Home,
  FileText,
  Users,
  Cpu,
  TrendingUp,
  Mail,
  BookOpen,
  PanelLeftClose,
} from "lucide-react";

// Defining the main core services
const coreServices = [
  { name: "Home", href: "/", icon: Home },
  { name: "FHIR Integration", href: "/fhir-integration", icon: FileText },
  { name: "Corporate Bootcamps", href: "/corporate-bootcamps", icon: Users },
  { name: "AI Services", href: "/ai-services", icon: Cpu },
  {
    name: "Healthcare Solutions",
    href: "/healthcare-solutions",
    icon: TrendingUp,
  },
];

// Optional additional pages (can be expanded)
const additionalPages = [
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact Us", href: "/contact", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <ShadcnSidebar
      collapsible="icon"
      className="w-60 border-r border-gray-800 bg-gray-900 text-white"
    >
      {/* Sidebar Header */}
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">AusBiz</span>
        </Link>
        <SidebarTrigger />
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarMenu>
          {/* Core Services */}
          <h4 className="text-xs text-gray-400 px-4 mt-6">Core Services</h4>
          {coreServices.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.name}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-800 rounded-md"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {/* Additional Pages (optional) */}
        {additionalPages.length > 0 && (
          <SidebarMenu>
            <h4 className="text-xs text-gray-400 px-4 mt-6">
              Additional Pages
            </h4>
            {additionalPages.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.name}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-800 rounded-md"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        )}
      </SidebarContent>

      {/* Sidebar Footer with Newsletter */}
      <SidebarFooter className="p-4 space-y-4">
        <form className="space-y-2 group-data-[collapsible=icon]:hidden">
          <h4 className="text-sm font-semibold">Newsletter Signup</h4>
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Subscribe
          </Button>
        </form>
      </SidebarFooter>

      {/* Sidebar Rail for extra space */}
      <SidebarRail />
    </ShadcnSidebar>
  );
}

// Sidebar Trigger Button (for collapsing)
function SidebarTrigger() {
  return (
    <Button variant="ghost" size="icon" className="h-6 w-6">
      <PanelLeftClose className="h-4 w-4" />
    </Button>
  );
}
