import {ReactNode} from "react"

export default async function DashboardLayout({
                                                  children,
                                              }: {
    children: ReactNode
}) {
    return (<main className="flex-1 px-6">
            {children}
        </main>
    )
}