import { useParams } from "react-router";

function City() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <div>{params.city}콘서트 목록</div>
      <hr />
    </div>
  );
}
export default City;
