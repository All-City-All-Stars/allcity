import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default function InputWithLabel(props) {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onSubmitEditing,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={{ padding: 8, fontSize: 17, fontWeight: 'bold' }}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {
    padding: 8,
    fontSize: 18,
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  }
});