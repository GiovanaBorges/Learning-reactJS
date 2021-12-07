import React, { useState } from "react";
import Data from "../assets/DATA.json";
import * as style from "./reminder.style.js";

function Reminder() {
  const [Dados, setDados] = useState(Data);

  function deleteNiver() {
    setDados(0);
  }

  function niver() {
    setDados(Data);
  }
  return (
    <div>
      <style.WrapperBox>
        <h1>Aniversariantes do mês </h1>
        <hr />
        {Dados.length > 0 ? (
          <>
            {Dados.map((data) => {
              return (
                <>
                  <style.InformationBox>
                    <h1>{data.nome}</h1>
                    <h1>:</h1>
                    <h2>{data.idade}</h2>
                  </style.InformationBox>
                </>
              );
            })}
          </>
        ) : (
          <style.InformationBox>
            <h2>Espere pelo mês que vem....</h2>
          </style.InformationBox>
        )}

        {Dados.length > 0 ? (
          <>
            <h1>Quantidade de nivers : {Dados.length}</h1>
            <style.Button onClick={deleteNiver}>apagar</style.Button>
          </>
        ) : (
          <>
            <h1>Não existe aniversariantes esse mês</h1>
            <style.Button onClick={niver}>Restaurar</style.Button>
          </>
        )}
      </style.WrapperBox>
    </div>
  );
}

export default Reminder;
