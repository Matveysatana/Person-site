import Button from "./ui/Button/Button";
import './styles.css'

const App = () => {
  const hello = () => {
    console.log('Привет')
  }
  return (
    <div>
      <h1>Первый компонент</h1>
      <Button className="" size="big" onClick={hello}>
        Кнопка
      </Button>
      <Button className="acent" size="" onClick={hello}>
        Акцент
      </Button>
    </div>
  );
};

export default App;
