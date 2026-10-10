import { Box } from "@chakra-ui/react";
import { useColorModeValue } from './components/ui/color-mode';
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster"; 

function App() {
  const bg = useColorModeValue('#fff8e7', 'gray.900');

  return (
    <Box minH={"100vh"} bg={bg}>
      <Navbar  />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
      <Toaster />
    </Box>
  );
}

export default App;