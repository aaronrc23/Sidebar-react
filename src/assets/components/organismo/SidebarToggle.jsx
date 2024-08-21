// SidebarToggleComponent.js
import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import useSidebarStore from "../../store/useSidebarstore";

const SidebarToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  margin: 10px;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const SidebarToggleComponent = () => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <SidebarToggle onClick={toggleSidebar}>
      <Icon icon="fluent-emoji-flat:avocado" width="24" height="24" />
    </SidebarToggle>
  );
};

export default SidebarToggleComponent;
