import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

import { Constants } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: ""
    };
  }

  handleAddItem = () => {
    this.setState({ todos: [...this.state.todos, this.state.text] });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder="Add Item"
            onChangeText={text => this.setState({ text })}
            style={{
              padding: 8,
              borderWidth: 2,
              borderColor: "#eaeaea",
              flex: 1
            }}
          />
          <TouchableOpacity onPress={this.handleAddItem} style={styles.button}>
            <Text> Add </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoListContainer}>
          <Text>
            {this.state.todos.length === 0
              ? "No todo list "
              : "Todo list available"}{" "}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    padding: 10,
    paddingTop: Constants.statusBarHeight
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  todoListContainer: {
    paddingTop: 15
  },
  button: {
    backgroundColor: "#cbcbcb",
    padding: 9
  }
});
