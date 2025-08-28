import * as React from "react";
import { cn } from "@/lib/utils";

type CollapsibleState = "default" | "icon";

type SidebarContextType = {
  collapsible: CollapsibleState;
  setCollapsible: (state: CollapsibleState) => void;
};

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsible, setCollapsible] = React.useState<CollapsibleState>("default");

  return (
    <SidebarContext.Provider value={{ collapsible, setCollapsible }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsible?: CollapsibleState;
}

export function Sidebar({ className, collapsible: propCollapsible, ...props }: SidebarProps) {
  const { collapsible, setCollapsible } = useSidebar();

  React.useEffect(() => {
    if (propCollapsible) {
      setCollapsible(propCollapsible);
    }
  }, [propCollapsible, setCollapsible]);

  return (
    <aside
      data-collapsible={collapsible}
      className={cn(
        "flex flex-col h-full transition-all duration-200 ease-in-out",
        collapsible === "icon" ? "w-16" : "w-64",
        className
      )}
      {...props}
    />
  );
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 overflow-y-auto", className)} {...props} />;
}

export function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("py-2", className)} {...props} />;
}

export function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <h3 className={cn("text-sm font-semibold", className)} {...props} />;
}

export function SidebarGroupContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1", className)} {...props} />;
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <nav className={cn("space-y-1", className)} {...props} />;
}

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export function SidebarMenuItem({ className, active, ...props }: SidebarMenuItemProps) {
  return (
    <div
      className={cn(
        "relative flex items-center rounded-md transition-colors duration-200",
        active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted",
        className
      )}
      {...props}
    />
  );
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function SidebarMenuButton({ className, asChild, ...props }: SidebarMenuButtonProps) {
  const Comp = asChild ? "div" : "button"; // Using div for asChild for now, will need to be more robust
  return (
    <Comp
      className={cn(
        "flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 justify-start",
        className
      )}
      {...props}
    />
  );
}

interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { collapsible, setCollapsible } = useSidebar();
  const handleClick = () => {
    setCollapsible(collapsible === "icon" ? "default" : "icon");
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "p-2 rounded-md hover:bg-muted transition-colors duration-200",
        className
      )}
      {...props}
    />
  );
}
