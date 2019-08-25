import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const ProductItem = props => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      <View style={styles.actions}>
        <Button title="view details" onPress={props.onViewDetail} />
        <Button title="to cart" onPress={props.onAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20
  },
  image: {
    height: "60%",
    width: "100%"
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: "#888"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default ProductItem;
