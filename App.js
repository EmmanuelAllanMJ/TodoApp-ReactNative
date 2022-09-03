import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Image } from "react-native";
// As the statusbar is not visible we use
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  function startAddGoalHandler() {
    setModalVisibility(true);
  }
  function endAddGoalHandler() {
    setModalVisibility(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* As scroll view depends on the parent container, we need to enclose it with View tag to restricts the available height */}
          {/* Only this view will be scrollable  */}
          <GoalInput
            visible={modalVisibility}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

// Flex=1 in appContainer is used to specify our full screen is the area, as by default it takes as much space as it needs
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
