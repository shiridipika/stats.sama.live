
import './index.css'
import CasesFiled from './Components/CasesFiled';
import CasesSettled from './Components/CasesSettled';
import AboutSama from './Components/AboutSama';
import { useState } from 'react';

function App() {

const [filed, setFiled] = useState(true);
const [settled, setSettled] = useState(false);
const [about, setAbout] = useState(false);

const [view, setView] = useState(true);

function changeSettled(active) {
  setSettled(!active);
  setFiled(false);
  setAbout(false);
  setView(false);
}
function changeFiled(active) {
  setSettled(false);
  setFiled(!active);
  setAbout(false);
  setView(true);
}
function changeAbout(active) {
  setSettled(false);
  setFiled(false);
  setAbout(!active);
  
  setView(false);
}

// const panelView = document.querySelectorAll(".panel");

// console.log(panelView)

// panelView.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeClasses();
//     panel.classList.add("active");
//   });
// });

// function removeClasses() {
//   panelView.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
  return (
    <div id='containeria'>
      <CasesFiled click={changeFiled} act={filed} onemoreprop={view} />
      <CasesSettled click={changeSettled} act={settled} onemoreprop={!view}/>
      <AboutSama click={changeAbout} act={about} onemoreprop={!view}/>
    </div>
  );
}

export default App;
