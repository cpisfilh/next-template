"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { MenuGroup, MenuItem } from "@/shared/types/menu.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({ items }: { items: MenuGroup[] }) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/admin/dashboard"
        className={`m-2 p-2 rounded-md ${pathname === "/admin/dashboard" ? "bg-muted" : undefined}`}
      >
        <span>Tablero</span>
      </Link>
      {items.map((item) => (
        <SidebarGroup key={item.key}>
          <SidebarGroupLabel>{item.groupMenuName}</SidebarGroupLabel>
          <SidebarMenu>
            {item.menus.map((menu: MenuItem) => (
              <Collapsible
                key={menu.key}
                asChild
                defaultOpen={menu.menuItems?.some((subItem) => subItem.url === pathname)}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={menu.title}>
                      {menu.icon && <menu.icon />}
                      <span>{menu.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {menu.menuItems?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.key}>
                          <SidebarMenuSubButton
                            asChild
                            className={
                              pathname === subItem.url ? "bg-muted" : undefined
                            }
                          >
                            <Link href={subItem.url ?? ""}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
