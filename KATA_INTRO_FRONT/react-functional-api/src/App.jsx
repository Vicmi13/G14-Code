import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";

import { UsersScreen } from "./pages/usersScreen/UsersScreen";
import { UsersScreen as UserInput } from "./pages/usersScreeen2/UsersScreen";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";

import NotFound from "./pages/notFound/NotFound";
import { User } from "./pages/user/User";

const App = () => {
  // const [test, settest] = useState("");

  return (
    // 1.- Definir como wrapper general de todos mis componentes a BrowserRouter
    <Router>
      {/* // 2- <Routes> indica los componentes que van a trabajar como rutas de redireccionamiento */}
      <Header />
      <Routes>
        {/* 3.- Definir las rutas, tenemos 2 props path element */}

        <Route index path="/" element={<UserInput />} />

        <Route
          path="users"
          element={
            <UsersScreen
              sendIdUser={(id) => console.log("id desde comp hijo", id)}
              nameProp="Viernes😎"
            />
          }
        />
        {/* Ruta hija de /users */}
        <Route path="users/:id" element={<User />} />

        {/* Pagina 404 cuando no encuentra alguna otra ruta   */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
