import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link id="form-link" to="/">
          Form
        </Link>

        <Link id="form-ref-link" to="/form-ref">
          Form Ref
        </Link>

        <Link id="form-state-link" to="/form-state">
          Form State
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
