import { Book, Briefcase, Calendar, ClipboardList } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const menuItems = [
  {
    title: "Services",
    url: "#",
    icon: ClipboardList,
  },
  {
    title: "Projects",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: Book,
  },
  {
    title: "Events",
    url: "#",
    icon: Calendar,
  },
];

export function AppSidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <Sidebar
      className={`transition-all duration-300 bg-gray-800 dark:bg-gray-100 text-white dark:text-black ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <SidebarContent>
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-gray-700 dark:border-gray-300">
          <span className="text-2xl font-bold text-black dark:text-white">
            <Link href={"/"}>AusBiz</Link>
          </span>
        </div>
        {/* Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="sr-only">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-200"
                    >
                      <item.icon className="w-5 h-5 text-black dark:text-white" />
                      {isOpen && (
                        <span className="text-black dark:text-white">
                          {item.title}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
