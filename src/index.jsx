import { createRoot } from "react-dom/client";
import ComtactApp from "./components/ContactApp";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ComtactApp />);
