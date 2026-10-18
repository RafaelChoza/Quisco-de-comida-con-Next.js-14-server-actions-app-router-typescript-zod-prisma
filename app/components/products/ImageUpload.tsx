"use client"

import { getImagePath } from "@/src/utils"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from "react-icons/tb"

export default function ImageUpload({image}: {image: string | undefined}) {

    const [imageUrl, setImageUrl] = useState()

    return (
        <CldUploadWidget 
            onSuccess={(result, {widget}) => {
                if(result.event === 'success') {
                    widget.close()
                    //@ts-expect-error: Cloudinary result type is not inferred correctly
                    setImageUrl(result.info?.secure_url)
                }
            }}
            uploadPreset="quiosco_products"
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => (
                <div className="space-y-2">
                    <label className="text-slate-800">
                        Imagen Producto
                    </label>

                    <button
                        type="button"
                        onClick={() => open()}
                        className="relative w-full cursor-pointer hover:opacity-70 transition p-10
                        border border-neutral-300 flex flex-col justify-center items-center gap-4
                        text-neutral-600 bg-slate-100"
                    >
                        <TbPhotoPlus size={50} />
                        <p className="text-lg font-semibold">
                            Agregar Imagen
                        </p>

                        {imageUrl && (
                            <div
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    fill
                                    style={{objectFit: 'contain'}}
                                    src={imageUrl}
                                    alt="imagen de producto"
                                />
                            </div>
                        )}
                    </button>
                    {image && !imageUrl && (
                        <div className="space-y-2">
                            <label htmlFor="">Imagen Actual: </label>
                            <div className="relative w-64 h-64">
                                <Image
                                    fill
                                    src={getImagePath(image)}
                                    alt="Imagen Productp"
                                    style={{objectFit: 'contain'}}
                                />
                            </div>
                        </div>
                    )}
                    <input type="hidden" name="image" defaultValue={imageUrl ? imageUrl : image} />
                </div>
            )}
        </CldUploadWidget>
    )
}