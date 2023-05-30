import { useState } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id:1,
      nome:"Motivação",
      frases:[
        "Frase 1",
        "Frase 2",
        "Frase 3",
        "Frase 4",
        "Frase 5"
      ]
    },
    {
      id:2,
      nome:"Bom dia",
      frases:[
        "Frase 6",
        "Frase 7",
        "Frase 8",
        "Frase 9"
      ]
    },
    {
      id:2,
      nome:"Boa noite",
      frases:[
        "Frase 6",
        "Frase 7",
        "Frase 8",
        "Frase 9"
      ]
    }
  ]

  function handleSwitchCategory(index:number){
    setCategoriaSelecionada(index)
  }

  function gerarFrases(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
      <div className='container'>
        <img className='logo'
          alt='Logo frases'
          src={logoImg}
        />
        <h2 className='title'>Categorias</h2>
        <section className='category-area'>
          {allFrases.map((item,index)=>(
            <button
              key={item.id}
              className='category-button'
              style={{
                borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
                borderColor: "#1fa4db"
              }}
              onClick={()=>handleSwitchCategory(index)}
            >
              {item.nome}
            </button>
          ))}
        </section>

        <button className='button-frase' onClick={gerarFrases} > Gerar frase</button>
        {textoFrase !== "" && <p className='textoFrase'>{textoFrase}</p>}
      </div>
  )
}

export default App
