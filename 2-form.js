import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},m="feedback-form-state",s=document.querySelector(".feedback-form");s.addEventListener("submit",r);s.addEventListener("input",o);function l(){const a=localStorage.getItem(m);if(a){const t=JSON.parse(a);e.email=t.email||"",e.message=t.message||"",s.elements.email.value=e.email,s.elements.message.value=e.message}}window.addEventListener("load",l);function o(a){e[a.target.name]=a.target.value.trim(),localStorage.setItem(m,JSON.stringify(e))}function r(a){a.preventDefault();const t=a.currentTarget;t.elements.email,t.elements.message,e.email!==""&&e.message!==""?(console.log(e),e.email="",e.message="",localStorage.removeItem(m),t.reset()):alert("Fill please all fields")}
//# sourceMappingURL=2-form.js.map
