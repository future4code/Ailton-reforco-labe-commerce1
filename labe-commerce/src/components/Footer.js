
  import styled from "styled-components";
  
  const FooterContainer = styled.div`
    height: 55px;
    width: 100%;
    text-align: center;
    background-color: black;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
  align-items: center;
  
    a {
      text-decoration: none;
      transition: all 1s;
    cursor: pointer;
  
    :hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    }
  
    
  `;
  
  function Footer() {
    return (
      <FooterContainer>
         
      </FooterContainer>
    );
  }
  
  export default Footer;