//Komponens = függvény, ami jsx-et ad vissza
//JSX = HTML + JAVASCRIPT
//Mivel komponens, mindig nagy betűvel kezd

import Paragraph from './components/Paragraph';
import Vizsla from './images/vizsla.jpg'

function FoxterrierAlkalmazas() {
  return (
    <>
      <Paragraph description="Vizsla leírása" title="Vizsla">
        <div>Ez itt a gyerek elem.</div>
      </Paragraph>
      <Paragraph description="Labrador leírása" title="Labrador">
        <img src={Vizsla}/>
        </Paragraph> 
      <Paragraph description="Forxterrier leírása" title="Foxterrier" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum a qui aspernatur est dolores fugiat ut, soluta iure quis, vel provident iusto, et repellat culpa dolore adipisci saepe consectetur.</p>
    </>
  );
}

export default FoxterrierAlkalmazas;
