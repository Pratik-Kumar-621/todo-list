import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddItem from "./pages/AddItem";
import TodoList from "./pages/TodoList";
import EditItem from "./pages/EditItem";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
        <Route path="/" element={<TodoList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
