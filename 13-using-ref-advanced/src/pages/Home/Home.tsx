
import S from './Home.module.css'


function Home() {
  return (
    <main className={S.container}>
        <h1 lang='en'>Single Page Application</h1>
        <p>
          브라우저 측에서 리액트를 사용해 사용자 요청에 따른 페이지 컴포넌트를 렌더링하여 전통적인 웹 프로그래밍을 브라우저 단에서 처리하는 기술입니다.
        </p>
    </main>        
  )
}
export default Home