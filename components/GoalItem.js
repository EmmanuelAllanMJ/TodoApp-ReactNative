import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressData }) => pressData && styles.pressedItem}
      >
        {/* rounded corners wont work in ios if the styles is included in text. But if we do so, we would lose white text color */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});
