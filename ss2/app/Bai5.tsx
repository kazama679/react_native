import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Bai5() {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                style={styles.logo}
            />

            <Text style={styles.title}>Chào mừng trở lại!</Text>
            <Text style={styles.subtitle}>Đăng nhập để tiếp tục</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập địa chỉ email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 20,
    },
    inputContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        backgroundColor: "#fff",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#4c5cff",
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
