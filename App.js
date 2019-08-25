import React from "react";
import { Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productReducer, { productsReducer } from "./store/reducers/products";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provier store={store}>
      <View>
        <Text>A new app!</Text>
      </View>
    </Provier>
  );
}
