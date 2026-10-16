import { manifestData } from '@/data/dashboard.js'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
function ManifestTable() {
  return (
    <Card className="bg-slate-800 border border-slate-800/20 px-6 py-3 overflow-x-auto rounded-lg">
        <CardHeader className='text-slate-50'>
            <CardTitle className='text-lg text-semibold'>Recent Manifests</CardTitle>
        </CardHeader>
        <CardContent>
            <table className="w-full text-sm">
                <thead className="border-b border-slate-300 text-muted-foreground uppercase text-xs tracking-wider">
                    <tr>
                        <th className='text-left px-3 py-2.5'>Shipment ID</th>
                        <th className='text-left px-3 py-2.5'>Origin → Destination</th>
                        <th className='text-left px-3 py-2.5'>Status</th>
                        <th className='text-right px-3 py-2.5'>ETA</th>
                        <th className='text-right px-3 py-2.5'>Weight</th>
                    </tr>
                </thead>

                <tbody className='divide-y divide-slate-700'>
                    {
                        manifestData.map((shipment) => (
                            <tr key={shipment.id} className='hover:bg-gray-900 text-slate-300 cursor-pointer'>
                                <td className='font-bold text-left px-3 py-3'>{shipment.id}</td>
                                <td className='font-bold text-left px-3 py-3'>{shipment.origin} → {shipment.destination}</td>
                                <td className='font-bold text-left px-3 py-3'><Badge variant={shipment.status === 'Delivered' ? 'default' : shipment.status === 'In Transit' ? 'secondary' : shipment.status === 'Delayed' ? 'destructive' : 'outline'}>{shipment.status}</Badge></td>
                                <td className="font-bold text-right px-3 py-3">{shipment.eta}</td>
                                <td className="font-bold text-right px-3 py-3">{shipment.weight}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </CardContent>
    </Card>
  )
}

export default ManifestTable;