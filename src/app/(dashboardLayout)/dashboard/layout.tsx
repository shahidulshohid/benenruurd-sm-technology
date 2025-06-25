
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import  AppSidebar  from "./page"; 
import "@/app/globals.css"; 

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
