import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { TaskProvider } from './context/TaskContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './components/dashboard/Dashboard';
import { Toast } from './components/common/Toast';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surface.body};
`;

const MainLayout = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const App = () => {
  // Local UI state for mobile sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Local UI state for header "Add Task" trigger
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TaskProvider>
        <AppContainer>
          {/* Top Sticky Header */}
          <Header
            onOpenAddModal={handleOpenAddModal}
            onToggleSidebar={handleToggleSidebar}
          />

          {/* Core App Layout: Sidebar + Dashboard */}
          <MainLayout>
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={handleCloseSidebar}
            />
            <Dashboard
              isAddModalOpen={isAddModalOpen}
              setIsAddModalOpen={setIsAddModalOpen}
            />
          </MainLayout>

          {/* Non-intrusive action feedback toast */}
          <Toast />
        </AppContainer>
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
