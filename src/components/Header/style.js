import styled from "styled-components";

export const Cabecalho = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;

    background: #0b1312;
    color: white;
    
    font-family: space;

    position: sticky;
    top: 0;
    z-index: 3;

    a{
        text-decoration: none;
        color: white;
    }
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const UlHeader = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;

li {
  padding: 18px 10px;
}

z-index: 3;

@media (max-width: 600px) {
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  min-height: 120vh;
  width: 50%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li {
    color: #fff;
  }
}
`;

export const EspacoEntreLi = styled.li`
padding: 0 20px 0 20px;
:hover {
  cursor: pointer;
  background: #afa8a8;
}
`;