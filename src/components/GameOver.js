import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
   <div>
    <h1 className='titleGameOver'>Fim do Jogo!</h1>
    <h2>
      <span className='spanGameOver'>Sua pontuação foi: {score}</span>
      <button className='buttonGameOver' onClick={retry}>Reiniciar o Jogo</button>
    </h2>
   </div>
  )
}

export default GameOver