'use client'

import Image from 'next/image'
import { Product } from '@/modules/products/product.types'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-xl shadow-sm p-4 flex flex-col gap-3">
      <div className="relative w-full h-40">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h3 className="text-lg font-semibold">{product.name}</h3>

      <p className="text-sm text-gray-600">
        Stock disponible: {product.stock}
      </p>

      <p className="text-xl font-bold">
        ${product.price.toLocaleString()}
      </p>

      <button className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
        Comprar
      </button>
    </div>
  )
}
