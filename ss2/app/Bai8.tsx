import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CustomButtonProps {
    title: string;
    type?: "primary" | "secondary" | "danger";
    onPress?: () => void;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, type = "primary", onPress, disabled }) => {
    return (
        <Pressable
            style={[
                styles.button,
                type === "primary" && styles.primary,
                type === "secondary" && styles.secondary,
                type === "danger" && styles.danger,
                disabled && styles.disabled,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text
                style={[
                    styles.text,
                    type === "secondary" && styles.secondaryText,
                    disabled && styles.disabledText,
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
};

export default function Bai8() {
    return (
        <View style={styles.container}>
            <CustomButton title="Button Primary" type="primary" onPress={() => alert("Primary pressed")} />
            <CustomButton title="Button Secondary" type="secondary" onPress={() => alert("Secondary pressed")} />
            <CustomButton title="Button Danger" type="danger" onPress={() => alert("Danger pressed")} />
            <CustomButton title="Button Disabled" type="primary" disabled />
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
    button: {
        width: "80%",
        paddingVertical: 14,
        borderRadius: 8,
        marginVertical: 8,
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    primary: {
        backgroundColor: "#4c5cff",
    },
    secondary: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#4c5cff",
    },
    secondaryText: {
        color: "#4c5cff",
    },
    danger: {
        backgroundColor: "red",
    },
    disabled: {
        backgroundColor: "gray",
    },
    disabledText: {
        color: "#ddd",
    },
});
