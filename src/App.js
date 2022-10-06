
import './index.css'
import CasesFiled from './Components/CasesFiled';
import CasesSettled from './Components/CasesSettled';
import AboutSama from './Components/AboutSama';

function App() {

  
const panelView = document.querySelectorAll(".panel");

panelView.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeClasses();
    panel.classList.add("active");
  });
});

function removeClasses() {
  panelView.forEach((panel) => {
    panel.classList.remove("active");
  });
}
  return (
    <div className='containeria'>
      <CasesFiled/>
      <CasesSettled/>
      <AboutSama/>
    </div>
  );
}

export default App;
