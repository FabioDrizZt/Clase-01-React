import Cajon from "./components/Cajon";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Lista from "./components/Lista";
import Padre from "./components/Padre";
import { Hijo } from "./components/Hijo";

function App() {
  let contador = 0;
  const handleClick = () => {
    console.log(contador);
    contador++;
  };
  const numeros = [1, 2, 3, 4, 5];
  const frutas = ["pera 🍐", "banana 🍌", "sandia 🍉"];
  console.log("hola desde la consola");
  return (
    <>
      <Header />
      <main>
        <p>Contador: {contador}</p>
        <button onClick={() => handleClick}>+</button>
        <h1>Hola Mundo</h1>
        <h2>Aqui vengo yo!</h2>
        <img src="" alt="" />
        <Lista datos={numeros} />
        <Cajon frutas={frutas} />
        <Padre>
          <Hijo autor="Fabio" libro="Des. Web" />
          <span>soy un span</span>
          <p>soy un p</p>
        </Padre>
      </main>
      <Footer />
    </>
  );
}

export default App;
