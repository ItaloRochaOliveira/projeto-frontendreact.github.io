import styled from "styled-components";

const UlHeader = styled.ul`
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

const EspacoEntreLi = styled.li`
  padding: 0 20px 0 20px;
  :hover {
    cursor: pointer;
    background: #afa8a8;
  }
`;

export const ListaHeader = ({ open }) => {
  return (
    <nav>
      <UlHeader open={open}>
        <a href="" target={"_top"}><EspacoEntreLi>Home</EspacoEntreLi></a>
        <a href="#about"><EspacoEntreLi>Sobre</EspacoEntreLi></a>
        <a href="#footer"><EspacoEntreLi>Contato</EspacoEntreLi></a>
      </UlHeader>
    </nav>
  );
};
