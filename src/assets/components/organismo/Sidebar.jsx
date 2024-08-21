import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import useSidebarStore from "../../store/useSidebarstore";
import SidebarItem from "../moleculas/SidebarItem";

const SidebarContainer = styled.div`
  width: ${({ isExpanded }) => (isExpanded ? "250px" : "60px")};
  background-color: #333;
  color: #fff;
  height: 100vh;
  transition: width 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Espacio entre las secciones */
  align-items: ${({ isExpanded }) => (isExpanded ? "flex-start" : "center")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transform: ${({ isExpanded }) =>
    isExpanded ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 768px) {
    transform: none;
    position: relative;
  }
`;

const Overlay = styled.div`
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  align-items: ${({ isExpanded }) => (isExpanded ? "flex-start" : "center")};
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: ${({ isExpanded }) => (isExpanded ? "flex-start" : "center")};
`;

const Footer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${({ isExpanded }) => (isExpanded ? "flex-start" : "center")};
`;
const Sidebar = () => {
  const { isExpanded, toggleSidebar } = useSidebarStore();

  return (
    <>
      <Overlay isExpanded={isExpanded} onClick={() => toggleSidebar(false)} />
      <SidebarContainer isExpanded={isExpanded}>
        <Header isExpanded={isExpanded}>
          <Icon icon="fluent-emoji-flat:avocado" width="40" height="40" />
          {isExpanded && <h1>My App</h1>}
        </Header>

        <Content isExpanded={isExpanded}>
          <SidebarItem
            icon={<Icon icon="fluent-emoji-flat:avocado" width="24" height="24" />}
            text="Home"
            isExpanded={isExpanded}
            // hasNotification={true} 
          />
          <SidebarItem
            icon={<Icon icon="fluent-emoji-flat:avocado" width="24" height="24" />}
            text="Profile"
            isExpanded={isExpanded}
            submenuItems={[
              { icon: "twemoji:1st-place-medal", text: "Subitem 1" },
              { icon: "twemoji:1st-place-medal", text: "Subitem 2" },
            ]}
            // hasNotification={true} 
          />
          <SidebarItem
            icon={<Icon icon="fluent-emoji-flat:avocado" width="24" height="24" />}
            text="Settings"
            isExpanded={isExpanded}
            hasNotification={true} 
          />
          
        </Content>

        <Footer isExpanded={isExpanded}>
          <Icon icon="fluent-emoji-flat:avocado" width="24" height="24" />
          {isExpanded && <span>Footer Text</span>}
        </Footer>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
