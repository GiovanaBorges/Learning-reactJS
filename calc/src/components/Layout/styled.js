import styled from "styled-components";

export const Content = styled.div`
  width: 35%;
  padding: 0.5rem;

  height: 60vh;

  margin: 5rem auto;
  padding: 1rem;

  align-items: center;

  justify-items: center;
  display: flex;
  flex-direction: column;

  color: white;
`;

export const View = styled.div`
  width: 70%;

  height: 3rem;
  background: linear-gradient(145deg, #d095be, #f7b2e2);
  border-radius: 30px;

  padding: 0.5rem;

  input {
    border: none;
    outline: none;
    width: 75%;
    height: 100%;
    padding: 0 3rem;

    font-size: 25px;
    text-align: right;
    color: fffff;

    border-radius: 100px;
    background: linear-gradient(145deg, #d095be, #f7b2e2);
  }
`;

export const BtnBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
  grid-gap: 5px;

  width: 70%;
  height: 100%;

  .highlight {
    border-radius: 100px;
    background: linear-gradient(315deg, #dea0cb, #ffbef2);
    box-shadow: -6px -6px 100px #f0addb, 6px 6px 5px #dea0cb;
  }

  button {
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;

    text-align: center;
    color: black;

    font-size: 1.5rem;

    border: none;
    border-radius: 100px;
    background: #e38dc7;
    box-shadow: inset 19px 19px 38px #cf80b5, inset -19px -19px 38px #f79ad9;
  }
`;
