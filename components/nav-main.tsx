"use client"

import {type LucideIcon} from "lucide-react"
import Link from "next/link"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"


interface NavItem {
    title: string
    url: string
    icon?: LucideIcon
    items?: any[]
}

interface NavMainProps {
    items: NavItem[]
    label?: string
}

export function NavMain({items, label = "Platform"}: NavMainProps) {
    return (<SidebarGroup>
        <SidebarGroupLabel>{label}</SidebarGroupLabel>
        <SidebarMenu>
            {items?.map((item) => {
                return <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                    >
                        <Link href={item.url}>
                            {item.icon && <item.icon/>}
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            })}
        </SidebarMenu>
    </SidebarGroup>)
}