// Submenu.js
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import styled from 'styled-components';


const SubmenuContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-left: 20px;
  background-color: #444;
`;

const SubmenuItem = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  color: #fff;

  &:hover {
    background-color: #555;
  }

  .submenu-icon {
    margin-right: 10px;
  }
`;

const Submenu = ({ items, isOpen }) => {
  return (
    <SubmenuContainer isOpen={isOpen}>
      {items.map((item, index) => (
        <SubmenuItem key={index}>
          <Icon className="submenu-icon" icon={item.icon} width="20" height="20" />
          {item.text}
        </SubmenuItem>
      ))}
    </SubmenuContainer>
  );
};

export default Submenu;
