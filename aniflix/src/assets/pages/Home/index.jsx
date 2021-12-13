import { HomeWrapper, BoxContent } from "./Home.model";
import Button from "../../../components/Button";
import Navbar from "../../../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeWrapper>
        <h1>COMO DIMINUI?::</h1>
        <BoxContent>
          <div>
            <img
              src="https://exame.com/wp-content/uploads/2016/09/size_960_16_9_foto-de-perfil-da-netflix.jpg"
              alt="perfil fedido"
            />
            <h1>mirellão</h1>
          </div>
          <div>
            <img
              src="https://exame.com/wp-content/uploads/2016/09/size_960_16_9_foto-de-perfil-da-netflix.jpg"
              alt="perfil fedido"
            />
            <h1>jorgitoLITO</h1>
          </div>
          <div>
            <img
              src="https://img.ifunny.co/images/b2dc95e364500a6d52d302cc37dedb52d9cdeab683be8e1372ec3c2dee2d6bee_1.jpg"
              alt="perfil fedido"
            />
            <h1>Sabrinuda</h1>
          </div>
          <div>
            <img
              src="https://exame.com/wp-content/uploads/2016/09/size_960_16_9_foto-de-perfil-da-netflix.jpg"
              alt="perfil fedido"
            />
            <h1>Pairulito</h1>
          </div>
        </BoxContent>
        <Button text={"GERENCIAR PERFIS"} />
      </HomeWrapper>
    </>
  );
};

export default Home;
