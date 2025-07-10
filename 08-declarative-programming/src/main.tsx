import '@/styles/main.css'
// import '@/programming/imperative'
import '@/programming/declarative.tsx'
import '@/programming/imperative'
import { createRoot } from 'react-dom/client';
import Form from '@/programming/declarative.tsx';





const root = document.getElementById('root');

if(root){
  createRoot(root).render(
    <Form>
      
    </Form>
  )
}