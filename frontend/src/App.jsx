import { Box } from "@chakra-ui/react";
import { Route , Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App(){
    return(
      // box = is div comming from chakra
      // 100vh = 100% of the viewport height
        <Box minH={"100vh"}>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} />  */}
            <Route path='/' element= {<HomePage />} />
            <Route path='/create' element= {<CreatePage />} />
          </Routes>
        </Box>
    );
}
export default App;