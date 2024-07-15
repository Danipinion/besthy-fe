import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <Button>Button</Button>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
