import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Bai6() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([
        "Học React Native Styling",
        "Làm bài tập về ScrollView",
        "Tìm hiểu về component Pressable",
        "Chuẩn bị cho dự án cuối kỳ",
        "Đọc sách chuyên ngành 30 phút",
    ]);

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Danh sách công việc</Text>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập công việc mới..."
                    value={task}
                    onChangeText={setTask}
                />
                <Pressable style={styles.addButton} onPress={addTask}>
                    <Text style={styles.addText}>Thêm</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.list}>
                {tasks.map((item, index) => (
                    <View key={index} style={styles.taskItem}>
                        <Text style={styles.taskText}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: "row",
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
    },
    addButton: {
        backgroundColor: "#4c5cff",
        marginLeft: 8,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    addText: {
        color: "#fff",
        fontWeight: "bold",
    },
    list: {
        flex: 1,
    },
    taskItem: {
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
    },
    taskText: {
        fontSize: 16,
        color: "#333",
    },
});
