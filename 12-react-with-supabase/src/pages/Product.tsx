import { useAuth } from "@/auth/AuthProvider";
import S from "./Product.module.css";
import useProduets from "@/hook/useProduct";
import { useRouter } from "@/router/RouterProvider";

function Product() {
  // 로그인되지 않은 사용자 => 상품 목록은 로그인 후 이용 가능합니다
  const { isAuth } = useAuth();
  const { products, loading } = useProduets();
  const { setHistoryRoute } = useRouter();

  const handleRoute = (e: React.MouseEvent<HTMLAnchorElement>, id: string|undefined) => {
    e.preventDefault();
    history.pushState(null, "", `/Product/${id}`);
    setHistoryRoute(`/Product/${id}`);
  };

  console.log(products, loading);

  if (!isAuth) {
    return (
      <div className={S.invalid}>
        <h3>상품 목록은 로그인 후 사용 가능합니다.</h3>
        <a href="#">설마, 아직도 2.9cm 회원이 아니세요?</a>
      </div>
    );
  }

  if (loading) return <p>로딩 중 . . . . . .</p>;

  return (
    <div className={S.container}>
      <ul>
        {products &&
          products?.map((item) => (
            <li>
              <a href="#" onClick={(e) => handleRoute(e, item.id)}>
                <figure>
                  <img style={{ width: "200px" }} src={item.image_url} alt="" />
                </figure>
                <span className={S.brand}>{item.name}</span>
                <span className={S.description}>{item.description}</span>
                <span className={S.price}>{item.price?.toLocaleString()}</span>
                <div>
                  <span className={S.discount}>{item.sale}%</span>
                  <span className={S.realPrice}>
                    {Math.floor(
                      item.price! * ((100 - item.sale!) / 100)
                    ).toLocaleString()}
                  </span>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Product;
