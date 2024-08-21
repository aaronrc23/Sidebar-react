import styled from 'styled-components';

export const NotificationBadge = styled.div`
 position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  background-color: red; /* Color del círculo de notificación */
  border-radius: 50%;
  display: ${({ hasNotification }) => (hasNotification ? 'block' : 'none')};
`;
