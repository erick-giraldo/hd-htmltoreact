import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { Main } from "./components/main/Main";
import { Nav } from "./components/nav/Nav";
import './components/assets/scss/estilos.scss'
import { Whatsapp } from "./components/whatsapp/Whatsapp";
function App() {
  return (
    <div className="container-fluid padre">
      <div className="row">
        {/* <Login /> */}
        <Nav />
        <Main />
      </div>
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;
