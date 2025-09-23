import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Bai3() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Họ và tên:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên của bạn..."
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: "500",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 10,
        fontSize: 16,
    },
});
