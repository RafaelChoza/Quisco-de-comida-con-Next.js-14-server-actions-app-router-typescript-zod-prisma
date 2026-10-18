"use client"
import { OrderWithProducts } from "@/src/types";
import Logo from "../components/ui/Logo";
import useSWR from 'swr'
import LatestOrderItem from "../components/order/LatestOrderItem";


export default function OrdersPage() {

    const url = '/orders/api'

    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)

    const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false
    })

    if (isLoading) return (<p>Cargando ...</p>)

    if (data)  return(
        <>
            <h1 className="text-center mt-10 text-6xl font-bold">Ordenes Listas</h1>

            <Logo />
                <div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (
                        <LatestOrderItem 
                        key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            {data.length ? (
                <p></p>
            ) : (
                <p className="text-center mt-10 font-bold text-4xl">No hay Ordenes Listas</p>
            )}
            
        </>
    )
}
