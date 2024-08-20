import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OrderHistory() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ title: "Your Orders" });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
