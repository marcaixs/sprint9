import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from "./Contact";
import { Footer } from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export const MainPage = () =>  {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

