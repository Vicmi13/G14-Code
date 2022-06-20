import { UsersScreen } from "./pages/usersScreen/UsersScreen";

const App = () => {
  // const [test, settest] = useState("");

  return (
    <UsersScreen
      sendIdUser={(id) => console.log("id desde comp hijo", id)}
      nameProp="Viernes😎"
    />
  );
};

export default App;
