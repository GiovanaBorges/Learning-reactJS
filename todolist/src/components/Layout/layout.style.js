import styled from "styled-components";

export const WrapperTodolist = styled.div`
  margin: 2rem auto;

  width: 40%;
  height: auto;
  color: white;

  text-align: center;
  align-items: center;

  display: flex;
  flex-direction: column;

  input {
    color: #303030;
    font-size: 25px;

    width: 100%;
    height: 2rem;
    padding: 0.5rem;

    outline: none;
    border: 1px solid black;
    border-radius: 5px;
  }

  button {
    height: 3rem;
    align-items: center;
    padding: 0.5rem;

    background-color: red;
    color: white;

    border-radius: 5px;
    margin: 1rem 0;
    font-size: 1em;
    border: none;
  }
`;

export const Task = styled.div`
  color: white;
  position: relative;

  font-size: 25px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;

  padding: 0.5rem;

  margin: 0.5rem 0;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.175rem;
    left: 0;
    bottom: 0;

    background-color: red;
  }

  &:after {
    transform: scale(0, 1);
    transform-origin: 0% 100%;
    transition: transform 0.3s ease;
  }
  &:hover:after {
    transform: scale(1, 1);
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
`;
