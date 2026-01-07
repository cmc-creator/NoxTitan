import React from "react";
import { createRoot } from "react-dom/client";
import ChatBot from "../src/components/ChatBot";

const root = createRoot(document.getElementById("react-chatbot-root"));
root.render(<ChatBot />);
