import { AvatarItem } from "./components/avatar/AvatarItem.js";
import ReactDOM from "./lib/react-dom.js";
import { createElement as h } from "./lib/react.js";
import _PlanetPage from './pages/_PlanetPage.js';
import { AvartarPage } from "./pages/AvatarPage.js";
// import {AvatarPage} from './pages/AvatarPage.js';




/* function syntax  */

const container = document.getElementById('app');
const reactDomRoot = ReactDOM.createRoot(container);

reactDomRoot.render(h(AvartarPage));