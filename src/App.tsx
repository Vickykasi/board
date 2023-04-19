import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Board from "./pages/Board";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
       <Routes>
          <Route element={<Home/>} path="" />
          <Route element={<Board/>} path="/Board/:id"/>
        </Routes>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
