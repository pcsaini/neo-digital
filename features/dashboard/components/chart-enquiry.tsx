"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

interface ChartDataItem {
    date: string
    name: string
    value: number
}

interface ChartEnquiryProps {
    chartData: ChartDataItem[]
}

const chartConfig: ChartConfig = {
    enquires: {
        label: "Enquiries",
    },
    value: {
        label: "Value",
        color: "hsl(var(--chart-1))",
    },
}

export function ChartEnquiry({ chartData }: ChartEnquiryProps) {
    const isMobile = useIsMobile()
    const [timeRange, setTimeRange] = React.useState<"7d" | "30d" | "90d">("30d")

    React.useEffect(() => {
        if (isMobile) setTimeRange("7d")
    }, [isMobile])

    const referenceDate = new Date("2024-06-30")
    const daysToSubtract = timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : 90
    const startDate = new Date(referenceDate)
    startDate.setDate(referenceDate.getDate() - daysToSubtract)

    const filteredData = chartData.filter((item) => new Date(item.date) >= startDate)

    const gradientId = isMobile ? "fillMobile" : "fillDesktop"
    const strokeColor = isMobile ? "var(--color-mobile)" : "var(--color-desktop)"

    return (
        <Card className="@container/card">
            <CardHeader className="relative">
                <CardTitle>Total Enquiries</CardTitle>
                <CardDescription>
                    <span className="@[540px]/card:block hidden">Total for the last 7 days</span>
                    <span className="@[540px]/card:hidden">Last 7 days</span>
                </CardDescription>
            </CardHeader>

            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={1} />
                                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }
                        />

                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) =>
                                        new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                    }
                                    indicator="dot"
                                />
                            }
                        />

                        <Area
                            dataKey="count"
                            type="natural"
                            fill={`url(#${gradientId})`}
                            stroke={strokeColor}
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
