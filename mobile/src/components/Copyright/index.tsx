import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>
        Feito na base do ☕ por Leonardo Esperança
      </Text>
    </View>
  );
}
