'use server'


import { supabase } from "@/lib/supabase"


export async function createSale(payload: any) {
const { error } = await supabase.rpc('create_sale_transaction', payload)
if (error) throw error
}