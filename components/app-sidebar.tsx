"use client";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Command,
  AudioWaveform,
  GalleryVerticalEnd,
} from "lucide-react";
import { TooltipProvider } from "./ui/tooltip";
import { TeamSwitcher } from "./team-switcher";
import { authClient } from "@/lib/auth-client";
import { appMenu } from "@/shared/navigation/menu";

const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { data: session } = authClient.useSession()

  return (
    <TooltipProvider>
      <Sidebar variant="inset" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={appMenu} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={session?.user} />
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  );
}
