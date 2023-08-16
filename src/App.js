import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Sidebar />
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora non
          libero earum! Doloribus sint quam reiciendis cupiditate? Voluptas hic
          in unde odit. Porro minima nulla reprehenderit similique repellat
          repellendus maxime.
        </div>
      </main>
    </>
  );
}

export default App;
