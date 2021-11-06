import React, { useState } from "react";
import { Content, View, BtnBlock } from "./styled";

const Layout = () => {
  let [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const del = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error sorry");
    }
  };

  return (
    <>
      <Content>
        <View>
          <input type="text" value={result} />
        </View>

        <BtnBlock>
          <button className="highlight" onClick={backspace}>
            C
          </button>
          <button className="highlight" onClick={del}>
            Del
          </button>
          <button name="/" className="highlight" onClick={handleClick}>
            /
          </button>
          <button name="7" onClick={handleClick} value={7}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="highlight" name="-" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="highlight" name="*" onClick={handleClick}>
            *
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>

          <button className="highlight" name="=" onClick={calculate}>
            =
          </button>
        </BtnBlock>
      </Content>
    </>
  );
};

export default Layout;
