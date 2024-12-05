import Container from "./components/Container";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />
      <main className="flex-grow overflow-hidden pt-20">
        <Outlet />
      </main>
    </Container>
  );
}

export default App;
