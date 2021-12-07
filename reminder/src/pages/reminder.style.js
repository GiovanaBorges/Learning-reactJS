import styled from "styled-components";

export const WrapperBox = styled.div`
  width: 40%;
  height: auto;
  background-color: #f86a6a;
  margin: 5rem auto;

  align-items: center;
  display: flex;
  flex-direction: column;

  border-radius: 5%;

  h1 {
    text-align: center;
    padding: 1rem 0;
  }
`;

export const InformationBox = styled.div`
  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    margin: 0 0.5rem;
    font-weight: 300;
  }

  h2 {
    font-weight: 700;
  }
`;

export const Button = styled.button`
  color: white;

  height: 5rem;
  width: 30%;

  margin: 0.5rem auto;
  font-weight: 700;

  font-size: 2rem;
  border-radius: 10%;
  background: #da4747;
  box-shadow: 2px 2px 25px #da4747;
`;
