import { kpiStats } from '@/data/dashboard.js'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Truck, Clock, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const iconMap = {
    Truck,
    Clock,
    TrendingUp,
    DollarSign,
}

const trendMap = {
    up: ArrowUpRight,
    down: ArrowDownRight
}

function KpiDeck() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
            {
                kpiStats.map((stat) => {
                    const Icon = iconMap[stat.icon]
                    const Trend = trendMap[stat.trend]
                    return (
                        <Card key={stat.id} className="bg-slate-800 border border-slate-800/20">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <Icon className="h-5 w-5 text-slate-300" />
                                <CardTitle className="text-sm text-slate-300 font-medium">
                                    {stat.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div className="text-2xl font-bold text-slate-50">
                                    {stat.value}
                                </div>
                                <Badge variant={stat.trend === 'up' ? 'default' : 'destructive'} className="text-xs gap-1">
                                    {stat.change}
                                    <Trend className='w-3 h-3' />
                                </Badge>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default KpiDeck;