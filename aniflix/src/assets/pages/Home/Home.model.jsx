import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  z-index: 0;
  top: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  align-items: center;

  font-weight: 300;

  margin-bottom: 1rem;
`;

export const BoxContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ##eeeeee;

  div {
    margin: 0 1rem;

    img {
      max-height: 8rem;

      transition: 0.5s;

      &:hover {
        border: 1px solid #eeeeee;
      }
    }

    h1 {
      color: #5c5c5c;
      font-size: 20px;

      font-weight: 400;

      &:hover {
        color: #eeeeee;
      }
    }
  }
`;
