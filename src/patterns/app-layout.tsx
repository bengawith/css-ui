import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LogOut, Factory, PanelLeftClose, ChevronDown } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, SidebarProvider } from "../components/ui/sidebar";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";

interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
}

interface AppLayoutProps {
  appName: string;
  user: User;
  navItems: NavItem[];
  onLogout: () => void;
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ appName, user, navItems, onLogout, children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavCls = (path: string) =>
    currentPath === path
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary"
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  const userInitials = `${user.firstName[0] || ''}${user.lastName[0] || ''}`.toUpperCase();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar collapsible="icon">
          <SidebarContent className="bg-gradient-to-b from-background to-muted/20">
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                  <Factory className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="group-data-[collapsible=icon]:hidden">
                  <h2 className="font-semibold text-foreground">{appName}</h2>
                </div>
              </div>
              <SidebarTrigger className="group-data-[collapsible=icon]:hidden">
                <PanelLeftClose className="w-4 h-4" />
              </SidebarTrigger>
            </div>

            <SidebarGroup>
              <SidebarGroupLabel className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground group-data-[collapsible=icon]:hidden">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="px-2">
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="w-full">
                        <NavLink
                          to={item.url}
                          end
                          className={`${getNavCls(item.url)} flex items-center px-3 py-2 rounded-lg transition-all duration-200`}
                        >
                          <item.icon className="h-4 w-4 shrink-0" />
                          <span className="ml-3 group-data-[collapsible=icon]:hidden">{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-auto p-4 border-t">
              <Button variant="outline" size="sm" onClick={onLogout} className="w-full justify-start group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2">
                <LogOut className="w-4 h-4 group-data-[collapsible=icon]:mr-0 mr-2" />
                <span className="group-data-[collapsible=icon]:hidden">Sign Out</span>
              </Button>
            </div>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="lg:hidden" />
                <h1 className="text-lg font-semibold text-foreground">{appName}</h1>
              </div>
              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} />}
                        <AvatarFallback>{userInitials}</AvatarFallback>
                      </Avatar>
                      <span>{user.firstName} {user.lastName}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={onLogout}>Sign Out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export { AppLayout };
