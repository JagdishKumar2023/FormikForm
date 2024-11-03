import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormicForm from "./components/FormicForm/FormicForm";
import FomicLogin from "./components/FormicForm/FormicLogin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<FomicLogin />} />
        <Route path="/signup" element={<FormicForm />} />
      </Routes>
    </Router>
  );
};

export default App;
