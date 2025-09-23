import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Bai7() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Chào cậu, cậu khỏe không?", sender: "other" },
        { id: 2, text: "Tớ khỏe, cảm ơn cậu. Còn cậu thì sao?", sender: "me" },
        { id: 3, text: "Tớ cũng ổn. Đang làm gì đó?", sender: "other" },
        { id: 4, text: "Tớ đang học React Native, khá là thú vị đó!", sender: "me" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { id: Date.now(), text: input, sender: "me" }]);
        setInput("");
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={80}
            >
                <ScrollView style={styles.messages}>
                    {messages.map((msg) => (
                        <View
                            key={msg.id}
                            style={[
                                styles.messageBubble,
                                msg.sender === "me" ? styles.myMessage : styles.otherMessage,
                            ]}
                        >
                            <Text
                                style={{
                                    color: msg.sender === "me" ? "#fff" : "#000",
                                    fontSize: 16,
                                }}
                            >
                                {msg.text}
                            </Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhắn tin..."
                        value={input}
                        onChangeText={setInput}
                    />
                    <TouchableOpacity onPress={handleSend}>
                        <Text style={styles.sendButton}>Gửi</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f8",
    },
    messages: {
        flex: 1,
        padding: 10,
    },
    messageBubble: {
        maxWidth: "70%",
        padding: 10,
        borderRadius: 16,
        marginVertical: 6,
    },
    myMessage: {
        backgroundColor: "#4c5cff",
        alignSelf: "flex-end",
        borderBottomRightRadius: 0,
    },
    otherMessage: {
        backgroundColor: "#fff",
        alignSelf: "flex-start",
        borderBottomLeftRadius: 0,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderTopWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 10,
        fontSize: 16,
        backgroundColor: "#fff",
    },
    sendButton: {
        color: "#4c5cff",
        fontWeight: "bold",
        fontSize: 16,
    },
});