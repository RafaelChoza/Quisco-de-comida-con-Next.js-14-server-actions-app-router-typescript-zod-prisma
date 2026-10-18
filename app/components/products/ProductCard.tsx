import { Product } from "@/src/generated/prisma/client"
import { formatCurrency, getImagePath } from "@/src/utils"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    const imagePath = getImagePath(product.image)

    return (
        <div className="boder bg-white">
            <Image
                width={500}
                height={600}
                src={imagePath}
                alt={`Imagen platillo ${product.name}`}
            />
            <div className="p-3">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-amber-400 text-4xl">
                    {formatCurrency(product.price)}
                </p>
                <AddProductButton
                    product={product}
                />
            </div>
        </div>
    )
}
