import ProductSearchForm from "@/app/components/products/ProductSearchForm";
import Heading from "@/app/components/ui/Heading";
import ProductTable from "@/app/products/ProductsTable";
import { prisma } from "@/src/lib/prisma";

async function searchproducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function searchPage({ searchParams }: { searchParams: { search: string } }) {

    const products = await searchproducts(searchParams.search)

    return (
        <>
            <Heading>Resultados de Búsqueda: {searchParams.search}</Heading>

            <div className='flex flex-col gap-5 lg:flex-row lg:justify-end'>
                <ProductSearchForm />
            </div>
            {products.length > 0 ? (
                <ProductTable
                products={products}
            />
            ) : (
                <p className="text-center text-2xl font-bold text-red-600">No hay resultados de búsqueda</p>
            )}
            
        </>
    )
}
