import * as React from "react";
import {Provider} from "react-redux";
import "./index.less";
import DetteBorDuViteBokmal from "./artikler/dette-bor-du-vite/DetteBorDuViteBokmal";
import configureStore from "./redux/configureStore";

function App() {
    const store = configureStore();
  return (
      <Provider store={store}>
      <div className="spike">
          <h1>Test</h1>
          <DetteBorDuViteBokmal/>
      </div>
      </Provider>
  );
}

export default App;
