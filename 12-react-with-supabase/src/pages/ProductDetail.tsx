import { useParams, useRouter } from "@/router/RouterProvider";
import S from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import supabase from "@/supabase/supabase";
import type { Tables } from "@/supabase/database.types";

type Product = Tables<"products">;

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {setHistoryRoute} = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
        setError("해당하는 상품 데이터가 존재하지 않습니다.");
      } else {
        setProduct(data);
      }
    };

    fetchProduct();
    console.log(product);
  }, [id]);

  if (error) return <div className={S.errorPage}>{error}</div>;

  if(product)
  return (
    <div className={S.container}>
      <img src={product?.image_url} alt="" />
      <div>
        <h2>{product?.name}</h2>
        <div>{product?.description}</div>
      </div>

      <div>
        <span className={S.sale}>{product?.sale}% </span>
        {product?.price}
      </div>
      <h2>최종가격</h2>
      <div>{product?.price * ((100 - product?.sale) / 100)}</div>
      
      <div>
        <button type="button">수정</button>
        <button type="button" onClick={()=>setHistoryRoute('/')}>돌아가기</button>
      </div>
    </div>
  );
}

export default ProductDetail;
