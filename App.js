import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Weather() {
  const apiKey = "1372b6d6a8d8aaa9502f75bd61199434";//"YOUR_API_KEY";
  const apiUrl = `https://api.openweathermap.org/data/2.5/`;

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  const searchCity = async () => {
    try {
      const response = await fetch(`${apiUrl}weather?q=${search}&units=metric&APPID=${apiKey}`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WEATHER APP</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter City..."
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity style={styles.button} onPress={searchCity}>
          <Text style={styles.buttonText}>Get Weather</Text>
        </TouchableOpacity>
      </View>

      {weather && (
        <View style={styles.weatherContainer}>
          {/* Country */}
          <Text style={styles.weatherText}>Country: {weather.sys.country}</Text>
          {/* City Name */}
          <Text style={styles.weatherText}>City: {weather.name}</Text>
          {/* City Temperature */}
          <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
          {/* Weather Condition */}
          <Text style={styles.weatherText}>Weather: {weather.weather[0].main}</Text>
          {/* Weather Description */}
          <Text style={styles.weatherText}>({weather.weather[0].description})</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007BFF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  weatherText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#007BFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
});
