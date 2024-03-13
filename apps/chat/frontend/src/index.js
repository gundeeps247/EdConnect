import React from 'react';
import './index.css';
import App from './App'; 
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'; // Import createRoot
import ChatProvider from './Context/ChatProvider';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
