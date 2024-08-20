// OrderHistory.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewWaterRequest from "../../components/Buttons/NewWaterRequest";
import RequestWaterModal from "../../components/Modals/RequestWaterModal"; // Import the modal

export default function OrderHistory() {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ title: "Your Orders" });
  }, [navigation]);

  const handleNewWaterRequestPress = () => {
    setModalVisible(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order History</Text>
      <NewWaterRequest
        style={styles.floatingButton}
        onPress={handleNewWaterRequestPress} // Attach the handler to open the modal
      />
      <RequestWaterModal
        visible={modalVisible}
        onClose={handleCloseModal} // Pass the close handler to the modal
      />
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
  floatingButton: {
    position: "absolute", // Absolute positioning to make it float
    bottom: 30, // Distance from the bottom
    right: 20, // Distance from the right
  },
});
