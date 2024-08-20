import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

interface RequestWaterModalProps {
  visible: boolean;
  onClose: () => void;
}

const RequestWaterModal: React.FC<RequestWaterModalProps> = ({
  visible,
  onClose,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<Date | undefined>(new Date());
  const [dateText, setDateText] = useState("");
  const [timeText, setTimeText] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState<string>("");

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
    setDateText(currentDate.toDateString());
  };

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || new Date();
    setShowTimePicker(Platform.OS === "ios");
    setTime(currentTime);
    setTimeText(
      currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  const handleClose = () => {
    setDate(undefined);
    setTime(undefined);
    setDateText("");
    setTimeText("");
    setUrgencyLevel("");
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Close button */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>x</Text>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Request Water</Text>

          {/* Date Input */}
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={[styles.input, styles.dateInput]}
              placeholder="Date"
              placeholderTextColor="#999"
              value={dateText}
              editable={false}
            />
          </TouchableOpacity>

          {/* Time Input */}
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <TextInput
              style={[styles.input, styles.timeInput]}
              placeholder="Time"
              placeholderTextColor="#999"
              value={timeText}
              editable={false}
            />
          </TouchableOpacity>

          {/* Water Quantity Input */}
          <TextInput
            style={styles.input}
            placeholder="Water Quantity (Liters)"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />

          {/* Urgency Level Input */}
          <Picker
            selectedValue={urgencyLevel}
            style={styles.picker}
            onValueChange={(itemValue) => setUrgencyLevel(itemValue)}
          >
            <Picker.Item label="Urgency Level" value="" />
            <Picker.Item label="Low" value="Low" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>

          {/* Request Button */}
          <Button title="Request" onPress={() => {}} />

          {/* Date Picker */}
          {showDatePicker && (
            <DateTimePicker
              value={date || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          {/* Time Picker */}
          {showTimePicker && (
            <DateTimePicker
              value={time || new Date()}
              mode="time"
              display="spinner"
              is24Hour={true}
              onChange={handleTimeChange}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    height: 360, // Increased height
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#333",
  },
  dateInput: {
    height: 40,
    width: 260,
    fontSize: 16,
  },
  timeInput: {
    height: 40,
    width: 260,
    fontSize: 16,
  },
  picker: {
    width: "100%",
    height: 40,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});

export default RequestWaterModal;
