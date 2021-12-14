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

  h1 {
    font-size: 50px;
    padding: 0.5rem;
  }
`;

export const BoxContent = styled.div`
  margin: 0 auto;
  
  width: 70%;

  justify-content: center;

  display:grid;
  grid-template-columns: auto auto auto auto;
  
  grid-gap: 0;

  color: ##eeeeee;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    margin: 0 0.5rem;

    div.img_container{
      height:50%;

      transition: 0.5s;

      img{
        width: 100%;

        padding:0.5rem;
      }

    
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
