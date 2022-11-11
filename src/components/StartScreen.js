import './StartScreen.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Jogo de caça palavras!</h1>
      <p>Clique no botão abaixo para começa a jogar.</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen