import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Game from 'pages/Game';
import GlobalStyle from 'theme/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}>
        <Game />
      </Provider>
    </div>
  );
}

export default App;
