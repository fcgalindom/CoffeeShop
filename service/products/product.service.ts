
import { supabase } from '@/lib/supabase'
import { Product } from '@/modules/products/product.types'



export async function getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')

    console.log('DATA:', data)
    console.log('ERROR:', error)

    console.log('DATA:', JSON.stringify(data, null, 2))

    if (error) {
        console.error('Error fetching products:', error)
        throw new Error('Error fetching products')
    }

    return data as Product[]
}