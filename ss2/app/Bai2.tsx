import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Bai2() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{count}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Tăng" onPress={() => setCount(count + 1)} />
                <View style={{ width: 20 }} />
                <Button title="Giảm" onPress={() => setCount(count - 1)} />
            </View>
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
    number: {
        fontSize: 60,
        fontWeight: "bold",
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: "row",
    },
});