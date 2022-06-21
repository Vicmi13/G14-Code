import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { UsersScreen } from "./pages/usersScreen/UsersScreen";
import { UsersScreen as UserInput } from "./pages/usersScreeen2/UsersScreen";

const App = () => {
  // const [test, settest] = useState("");

  return (
    // 1.- Definir como wrapper general de todos mis componentes a BrowserRouter
    <Router>
      {/* // 2- <Routes> indica los componentes que van a trabajar como rutas de redireccionamiento */}
      <Routes>
        {/* 3.- Definir las rutas, tenemos 2 props path element */}
        <Route
          path="/"
          element={
            <UsersScreen
              sendIdUser={(id) => console.log("id desde comp hijo", id)}
              nameProp="Viernes😎"
            />
          }
        />

        <Route path="user-screen" element={<UserInput />} />
      </Routes>
    </Router>
  );
};

export default App;
