import createElement from 'virtual-dom/create-element';
import App from './components/app'; 

const html = createElement(App("Adam"));
document.body.appendChild(html);
