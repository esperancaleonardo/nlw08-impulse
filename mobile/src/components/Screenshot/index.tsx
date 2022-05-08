import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";
import { Trash, Camera } from "phosphor-react-native";

interface Props {
  screenshot: string | null;
  onTake: () => void;
  onRemove: () => void;
}

export function Screenshot({ screenshot, onTake, onRemove }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemove : onTake}
    >
      {screenshot ? (
        <View>
          <Image style={styles.image} source={{ uri: screenshot }} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="fill" />
      )}
    </TouchableOpacity>
  );
}
