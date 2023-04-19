import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import PostList from './components/PostList';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Lista de Posts</h1>
        <PostList />
      </div>
    </Provider>
  );
};

export default App;

