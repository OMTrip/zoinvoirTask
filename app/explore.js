import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import auth from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function explore() {
  const [email, setEmail] = useState("gav12@gmail.com");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Login Successful", `Welcome back, ${email}!`);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          Alert.alert("Error", "No user found with this email.");
        } else if (error.code === "auth/wrong-password") {
          Alert.alert("Error", "Incorrect password.");
        } else if (error.code === "auth/invalid-email") {
          Alert.alert("Error", "Invalid email address.");
        } else {
          Alert.alert("Error", error.message);
        }
      });
  };

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Signup Successful", `Account created for ${email}`);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Error", "That email address is already in use!");
        } else if (error.code === "auth/invalid-email") {
          Alert.alert("Error", "That email address is invalid!");
        } else if (error.code === "auth/weak-password") {
          Alert.alert("Error", "Password should be at least 6 characters.");
        } else {
          Alert.alert("Error", error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#007BFF",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  signUpButton: {
    backgroundColor: "#28a745",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
