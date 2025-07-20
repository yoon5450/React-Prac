import type { Database } from "@/supabase/database.types";
import supabase from "@/supabase/supabase";
import { useEffect, useState } from "react";

type Prodect = Database['public']['Tables']['products']['Insert']

function useProduets() {
  const [products, setProducts] = useState<Prodect[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url, description, sale");

      if(data){
        setProducts(data);
        setLoading(false)
      }
      
      if (error) {
        console.log("상품 가져오기 실패");
        return null;
      }
    };

    fetchProducts();
  }, []);


  return {products, loading}
}

export default useProduets;
