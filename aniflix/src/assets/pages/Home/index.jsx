import { HomeWrapper, BoxContent } from "./Home.model";
import Button from "../../../components/Button";
import Navbar from "../../../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeWrapper>
        <h1>Quem está Assistindo ?</h1>
        <BoxContent>
          <div>
            <div className="img_container">
              <img
                src="https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_malhado_azul_maine_cool_no_quintal_rodeado_por_flores_amarelas_no_gramado.jpg?itok=fUTBtgXC"
                alt="perfil fedido"
              />
            </div>
            <div>
              <h1>Sandra</h1>
            </div>
          </div>

          <div>
            <div className="img_container">
              <img
                src="https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_malhado_azul_maine_cool_no_quintal_rodeado_por_flores_amarelas_no_gramado.jpg?itok=fUTBtgXC"
                alt="perfil fedido"
              />
            </div>
            <div>
              <h1>Sandra</h1>
            </div>
          </div>

          <div>
            <div className="img_container">
              <img
                src="https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_malhado_azul_maine_cool_no_quintal_rodeado_por_flores_amarelas_no_gramado.jpg?itok=fUTBtgXC"
                alt="perfil fedido"
              />
            </div>
            <div>
              <h1>Sandra</h1>
            </div>
          </div>

          <div>
            <div className="img_container">
              <img
                src="https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_malhado_azul_maine_cool_no_quintal_rodeado_por_flores_amarelas_no_gramado.jpg?itok=fUTBtgXC"
                alt="perfil fedido"
              />
            </div>
            <div>
              <h1>Sandra</h1>
            </div>
          </div>
        </BoxContent>
        <Button text={"GERENCIAR PERFIS"} />
      </HomeWrapper>
    </>
  );
};

export default Home;
