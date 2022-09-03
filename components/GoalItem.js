import React from "react";
import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      {/* rounded corners wont work in ios if the styles is included in text. But if we do so, we would lose white text color */}
      <Text style={styles.goalText}>{props.itemData.item.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
  goalText: {
    color: "#fff",
  },
});
