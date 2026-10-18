'use client'

import { Product } from "@/src/generated/prisma/client"
import { useStore } from "@/src/store"

type AddProductButtonProps = {
    product: Product 
}

export default function AddProductButton({product}: AddProductButtonProps) {
    const addToOrder = useStore((state) => state.addToOrder)
    return (
        <button
            type="button"
            className="bg-indigo-600 rounded hover:bg-indigo-800 text-white font-bold w-full mt-5 p-3 uppercase cursor-pointer"
            onClick={() => addToOrder(product)}
        >
            Agregar
        </button>
    )
}
