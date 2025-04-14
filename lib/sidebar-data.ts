import { BarChart3, Cog, Settings2 } from "lucide-react";

export const sidebarData = {
  navigation: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: BarChart3,
    },
    { title: "Services", url: "/admin/services", icon: Cog },
    { title: "Enquires", url: "/admin/enquires", icon: Cog },
    { title: "Settings", url: "/admin/settings", icon: Settings2 },
  ],
};
