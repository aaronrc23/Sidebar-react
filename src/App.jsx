import { useState } from "react";

import "./App.css";
import Sidebar from "./assets/components/organismo/Sidebar";
import SidebarToggleComponent from "./assets/components/organismo/SidebarToggle.JSX";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Sidebar />
      <div className="main">
        <SidebarToggleComponent />
        <div>
          <h1>Main Content</h1>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  .main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 10px 20px;
    margin-left: 60px; // Espacio para el sidebar cuando está colapsado

    @media (max-width: 768px) {
      margin-left: 0; // Para que ocupe todo el ancho en móvil
    }
  }
`;

export default App;
