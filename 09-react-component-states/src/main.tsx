import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.css';


const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <div>hello react</div>
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
