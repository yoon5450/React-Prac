import getRandom from "@/utils/getRandom";

type Props = {status:StatusMessage[]}

function DataBinding({status}:Props) {

  const message = status[getRandom(4)]; // 데이터 전달

  return (
    <>
      <dt>데이터 바인딩 (data binding)</dt>
      <dd>
        <p>상태 메세지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">{message}</span> // 데이터 사용
      </dd>
    </>
  );
}

export default DataBinding;
