import React, { useState } from "react";
import styled from "styled-components";
import IconWrapper from "../atoms/IconWrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NotificationBadge } from "../atoms/NotificationBadge";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isExpanded }) => (isExpanded ? "flex-start" : "center")};
  padding: 10px;
  width: 100%;
  position: relative; 
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const MainItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Text = styled.span`
  margin-left: 10px;
  display: ${({ isExpanded }) => (isExpanded ? "inline" : "none")};
`;

const Submenu = styled.div`
  margin-top: 5px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding-left: 20px;
  width: 100%;
`;

const SubmenuItem = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
  color: #ccc;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ArrowIcon = styled.div`
  margin-left: auto;
  display: ${({ isExpanded, hasSubmenu }) =>
    isExpanded && hasSubmenu ? "inline" : "none"};
  color: #fff;
`;

const SidebarItem = ({
  icon,
  text,
  isExpanded,
  submenuItems,
  hasNotification,
}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <ItemWrapper isExpanded={isExpanded}>
      <MainItem onClick={toggleSubmenu}>
        <IconWrapper>{icon}</IconWrapper>
        <Text isExpanded={isExpanded}>{text}</Text>
        <ArrowIcon
          isExpanded={isExpanded}
          hasSubmenu={submenuItems && submenuItems.length > 0}
        >
          <Icon icon="codicon:triangle-down" width="18" height="18" />
        </ArrowIcon>
        <NotificationBadge hasNotification={hasNotification} />
      </MainItem>
      {submenuItems && (
        <Submenu isOpen={isSubmenuOpen && isExpanded}>
          {submenuItems.map((subItem, index) => (
            <SubmenuItem key={index}>
              <IconWrapper>
                <Icon icon={subItem.icon} width="24" height="24" />
              </IconWrapper>
              <Text isExpanded={isExpanded}>{subItem.text}</Text>
            </SubmenuItem>
          ))}
        </Submenu>
      )}
    </ItemWrapper>
  );
};

export default SidebarItem;
