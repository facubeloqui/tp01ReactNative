import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Ingrese texto");
  const [number, setTexto] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={text}
      />
      <Button
        title="Press me"
        onPress={() => setTexto(text)}
      />

      <Text>{number}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;