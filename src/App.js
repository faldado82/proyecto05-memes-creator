import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');
  
  const onChangeLinea1 = function (evento){
    if(imagen){
      setLinea1(evento.target.value);
    }
  }

  const onChangeLinea2 = function (evento){
    if (imagen){
      setLinea2(evento.target.value);
    }
  }

  const onChangeImagen = function (evento){
    setImagen(evento.target.value);
  }

  const onClickExportar = function (evento){
    if(linea1 !== '' || linea2 !== ''){
      html2canvas(document.querySelector("#meme")).then(canvas => {
        var img = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = img;
        link.click();
      }); 
    }
  }

  
  return (
    <div className="App">
      <h1> Meme Creator</h1>
    {/* seleccionador de memes */}
    <select onChange={onChangeImagen}>
      <option value="-1">Seleccione una imagen...</option>
      <option value="fire">Casa en llamas</option>
      <option value="baby">Bebe Poderoso</option>
      <option value="baby2">Niña en auto</option>
      <option value="baby3">Niño extrañado</option>
      <option value="baby4">Dance Baby</option>
      <option value="futurama">Futurama</option>
      <option value="history">History Channel</option>
      <option value="dicaprio">DiCaprio</option>
      <option value="toys">Toys</option>
      <option value="think">Smart Guy</option>
    </select> <br />

    
    {/* input text de primera linea */}
    <input maxLength={16} onChange={onChangeLinea1} type="text" placeholder="Linea 1" /> <br />
    
    {/* input text de segunda linear */}
    <input maxLength={16} onChange={onChangeLinea2} type="text" placeholder="Linea 2" /> <br />

    {/* boton de exportar */}
    <button onClick={onClickExportar} type="button">Exportar</button>

    <div className="meme" id="meme">
      <span>{linea1}</span> <br />
      <span>{linea2}</span>
      <figure>
        <img src={`/img/${imagen}.jpg`} />
      </figure>
    </div>



    </div>
  );
}

export default App;
