import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h3 {
      margin-left: 140px;
      width: 100%;
      max-width: 150px;
      font-size: 30px;
      color: #435151;
    }

    ul {
      display: flex;
      justify-content: center;
      gap: 38px;
      
      li {
        width: 122px;
        text-align: center;
        color: #142F38;
        transition: 0.3s ease;
        cursor: pointer;

        :hover {
          transform: scale(1.05);
          font-weight: 600;
        }
      }
    }

  }
`

export const Box = styled.div`
  background-color: #142E38;
  padding: 40px 86px 37px 75px;
  width: fit-content;
  -webkit-border-top-right-radius: 50px;
  -webkit-border-bottom-left-radius: 50px;
  -moz-border-radius-topright: 50px;
  -moz-border-radius-bottomleft: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;

  div {
    display: flex;
    gap: 24px;
    
    img {
      width: 32px;
      transition: 0.3s ease;
      cursor: pointer;

      :hover {
        transform: scale(1.1);
      }
    }
  }
`