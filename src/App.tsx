import Button from "./ui/Button/Button";
const App = () => {
  const hello = () => {
    console.log('Привет')
  }
  return (
    <div>
      <h1>Первый компонент</h1>
      <Button className="" size="big" func={hello}>
      Кнопка
      </Button>
    </div>
  );
};

export default App;
