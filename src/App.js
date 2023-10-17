// Importing the App.css file for styling
import "./App.css";



// Importing React components for rendering
import Cards from "./components/cards";
import Graph from "./components/graph";

import MyChart from "./components/pie";
import Products from "./components/products-sell";
import { SideBar } from "./components/side-bar";

import { User } from "./components/user";

// Define the App component
function App() {
  return (

    <div className='App d-flex  overflow-x-hidden'>
      {/* Sidebar section */}
      <div className='side'>
      <nav class="navbar navbar-expand-lg navigation-wrap">
          <div className="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Sidebar component */}
              <SideBar />
            </div>
          </div>
        </nav>
      
      
      </div>
      {/* Main content section */}
      <div className="main">

        <User />

        <Cards />
        <section className="row mt-2">

          <div className="graph col-8 mt-2 ms-lg-4 col-md-8">
            <Graph />
          </div>

          <div className="pie col-lg-3 col-md-4 col-sm-6 mt-2 ms-lg-4">
            <MyChart />
          </div>

          <Products />
        </section>
      </div>
    </div>
  );
}


export default App;
