import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 77px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AboutBox = styled.div`
  margin-left: 87px;
  width: fit-content;

  h5 {
    padding: 5px;
    margin: 0 0 10px 3px;
    width: fit-content;
    background-color: #D5EEC6;
    color: #244030;
    border-radius: 2em;
  }

  h1 {
    width: 100%;
    max-width: 545px;
    font-size: 62px;
    font-weight: 800;
  }

  p {
    margin: 10px 0;
    width: 100%;
    max-width: 630px;
    font-size: 22px;
    font-weight: 300;
  }

  button {
    margin-top: 20px;
    padding: 17px 40px;
    background-color: #318161;
    color: #ffffff;
    font-size: 24px;
    font-weight: 500;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.4s ease-in-out;

    :hover {
      background-color: #1A4534;
    }
  }

`

export const PlantImage = styled.div`
  width: 450px;
  height: 450px;
  background-color: #d5eec6;
  background-image: linear-gradient(90deg, #d5eec6 0%, #9abd84 100%);
  background-attachment: fixed;
  -webkit-box-shadow: 5px 5px 5px -1px #8F8F8F; 
  box-shadow: 5px 5px 5px -1px #8F8F8F;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;

  img {
    width: 400px;
  }
`

export const SocialMedia = styled.div`
  background-color: forestgreen;
`