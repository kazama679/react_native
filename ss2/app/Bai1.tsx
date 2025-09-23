import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Bai1() {
    return (
        <View style={styles.card}>
            <Image
                style={styles.avatar}
                source={{ uri: "https://fastly.picsum.photos/id/345/100/100.jpg?hmac=fW1aLnpUTb_aQ2tjdKZXRgnpTUYPj0aV1C22oqBsUqE" }}
            />
            <Text style={styles.name}>Nguyễn Văn A</Text>
            <Text style={styles.description}>
                React Native Developer | UI/UX Enthusiast
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // cần cho Android để hiển thị shadow
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
});
