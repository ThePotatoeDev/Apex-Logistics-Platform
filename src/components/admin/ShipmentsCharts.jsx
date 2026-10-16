import { volumeData } from "@/data/dashboard.js";
import {
    LineChart, Line, 
    BarChart, Bar,
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer
} from "recharts";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";

function ShipmentsCharts() {
    const regionalData = [
        { region: "Northeast", shipments: 320 },
        { region: "Southeast", shipments: 450 },
        { region: "Midwest", shipments: 280 },
        { region: "West", shipments: 510 },
        { region: "Pacific", shipments: 390 }
    ]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
            <Card className="bg-slate-800 border border-slate-800/20 rounded-lg shadow-lg p-6 text-slate-300"> 
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-slate-50">Shipment Volume</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={volumeData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="shipments" stroke="#3b82f6" />
                            <Line type="monotone" dataKey="returns" stroke="#ef4444" />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card className="bg-slate-800 border border-slate-800/20 rounded-lg shadow-lg p-6 text-slate-300">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-slate-50">Regional Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={regionalData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="region" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="shipments" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );  
}

export default ShipmentsCharts;