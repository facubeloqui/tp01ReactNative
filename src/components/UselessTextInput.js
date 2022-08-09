import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";

const UselessTextInput = () => {
  const [char, onChangeChar] = React.useState("Ingrese texto");
  const [text, setTexto] = React.useState(null);
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeChar}
        placeholder={text}
      />
      <text>{char.length}</text>
      <Button
        title="Press me"
        onPress={() => setTexto(char)}
      />

      <Text>{text}</Text>
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