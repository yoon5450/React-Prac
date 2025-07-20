import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
// import Parent from './components/effectAndRef/Parents';
import App from './components/context/App';
// import Effect from './components/effect/Effect';
// import Parent from './components/ref/Parent';
import data from './data/data.json'


console.log(data);

const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <div>
      {/* <Effect /> */}
      {/* <Parent /> */}
      {/* <Parent /> */}
      <App></App>
    </div>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
