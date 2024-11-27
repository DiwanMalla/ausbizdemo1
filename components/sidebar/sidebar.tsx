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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Define menu items
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

const exploreMore = [
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact Us", href: "/contact", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <ShadcnSidebar className="w-60 border-r border-gray-800 bg-gray-900 text-white">
      {/* Header */}
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">AusBiz</span>
        </Link>
        <SidebarTrigger />
      </SidebarHeader>

      {/* Core Services */}
      <SidebarContent>
        <h4 className="text-xs text-gray-400 px-4 mt-6">Core Services</h4>
        <SidebarMenu>
          {coreServices.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-800 rounded-md ${
                    pathname === item.href ? "bg-gray-700" : ""
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {/* Explore More */}
        <h4 className="text-xs text-gray-400 px-4 mt-6">Explore More</h4>
        <SidebarMenu>
          {exploreMore.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
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
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4">
        <Card className="bg-card border-border shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-lg font-bold text-foreground">
              Stay Updated
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Subscribe to receive the latest news and updates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-input border-input text-foreground"
              />
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Subscribe
            </Button>
          </CardFooter>
        </Card>
      </SidebarFooter>
    </ShadcnSidebar>
  );
}

function SidebarTrigger() {
  return (
    <Button variant="ghost" size="icon">
      <PanelLeftClose className="h-5 w-5" />
    </Button>
  );
}
