import{b as o,j as e}from"./index-1c65059b.js";import{u as c}from"./use.nudibranchs-6ff87593.js";function p(){const n=o(),{handleCreateNudibranch:t}=c(),r=async a=>{a.preventDefault();const i=a.target,s=new FormData(i);await t(s),n("/home")};return e.jsx("div",{className:"form-wrapper",children:e.jsxs("form",{className:"create-form","aria-label":"form",id:"create-form",onSubmit:r,children:[e.jsx("h2",{className:"title_form",children:"Sharing is caring"}),e.jsx("input",{type:"text",placeholder:"Specie",name:"specie"}),e.jsxs("select",{name:"marinezone",children:[e.jsx("option",{children:"Marine Zone"}),e.jsx("option",{value:"Mediterranean Sea",children:"Mediterranean Sea"}),e.jsx("option",{value:"Cantabrian Sea",children:"Cantabrian Sea"}),e.jsx("option",{value:"Atlantic Ocean",children:"Atlantic Ocean"})]}),e.jsx("input",{type:"text",placeholder:"Season",name:"season"}),e.jsx("input",{type:"text",placeholder:"Depth",name:"depth"}),e.jsx("input",{type:"file",placeholder:"Image",name:"image"}),e.jsx("button",{type:"submit",children:"Submit"})]})})}export{p as default};
