import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { captureScreen } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";

import { styles } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { theme } from "../../theme";

import { FeedbackType } from "../Widget";
import { Button } from "../Button";
import { Screenshot } from "../Screenshot";

import { api } from "../../libs/api";

import { feedbackTypes } from "../../utils/feedbackTypes";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent,
}: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [comment, setComment] = useState("");

  function handleScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isSending) {
      return;
    }
    setIsSending(true);

    const base64Screenshot =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));

    try {
      console.log("tentando fazer requisicao");

      await api.post("/feedbacks", {
        type: feedbackType,
        screenshot: `data:image/png;base64,${base64Screenshot}`,
        comment: comment,
      });
      onFeedbackSent();
      console.log("fez a  requisicao");
    } catch (error) {
      console.log("falhou fazer requisicao");
      console.log(error);

      setIsSending(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          ></ArrowLeft>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        autoCorrect={false}
        onChangeText={setComment}
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <Screenshot
          onTake={handleScreenshot}
          onRemove={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button isLoading={isSending} onPress={handleSendFeedback} />
      </View>
    </View>
  );
}
