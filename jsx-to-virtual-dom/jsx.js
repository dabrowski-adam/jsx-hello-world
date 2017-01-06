import h from 'virtual-dom/h';

const render = jsxObj => (
  h(jsxObj.elementName, jsxObj.attributes, jsxObj.children)
);

export default render;