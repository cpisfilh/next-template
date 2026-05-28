import { Settings, SquareTerminal } from "lucide-react";
import { MenuGroup } from "../types/menu.types";

export const appMenu: MenuGroup[] = [
  {
    groupMenuName: "Plataforma",
    key: "platform",
    menus : [
      {
        key: "playground",
        title: "Playground",
        icon: SquareTerminal,
        isActive: true,
        menuItems: [
          {
            key: "history",
            title: "History",
            url: "/admin/history",
          },
          {
            key: "hola",
            title: "Hola",
            url: "/admin/hola",
          },
        ],
      },
      {
        key: "settings",
        title: "Settings",
        icon: Settings,
        isActive: true,
        menuItems: [
          {
            key: "users",
            title: "Users",
            url: "/admin/users",
            permission: "users.view",
          }
        ],
      }
    ]
  },
]
