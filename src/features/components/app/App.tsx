
import { AppRoutes } from '../app.routes/App.routes';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './app.scss';


export function App() {

  return (
    <>
      <Header></Header>
      <main>
        <AppRoutes></AppRoutes>
      </main>
      <Footer></Footer>
    </>
  );
}
