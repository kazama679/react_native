import { ArrowLeft, Heart, Star } from "lucide-react-native";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductDetail() {
    return (
        <>
            <Text>Product detail</Text>
            <View>
                <ArrowLeft style={styles.arrowLeft} />
                <Heart style={styles.heart}></Heart>
            </View>
            {/* pham vi cua hinh anh */}
            <Image style={{ height: 200, width: 450 }} source={{ uri: "https://i1-vnexpress.vnecdn.net/2024/10/18/Porsche-Taycan-Vnexpress-net-11-JPG.jpg?w=2400&h=0&q=100&dpr=1&fit=crop&s=LoskMEDqKHzXgrHyeWd5Ag&t=image" }}></Image>
            <View style={{ padding: 24 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Porsche Taycan</Text>
                <Text style={{ marginTop: 12 }}><Star /> 4.9 | 86 Đánh giá</Text>
                <Text style={{ color: "red", marginTop: 12, fontSize: 24 }}>1.250.000đ </Text>
                <Text style={{ marginTop: 12, fontSize: 18, fontWeight: "bold" }}>Chọn kích thước</Text>
                <View style={{ alignContent: "center", flexDirection: "row", gap: 10 }}>
                    <TouchableOpacity style={{ marginTop: 10, borderRadius: 4, borderColor: "black", borderWidth: 1, padding: 4, width: 48 }}>
                        <Text style={{ textAlign: "center", lineHeight: 36 }}>
                            39
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, borderRadius: 4, borderColor: "black", borderWidth: 1, padding: 4, width: 48 }}>
                        <Text style={{ textAlign: "center", lineHeight: 36 }}>
                            40
                        </Text>
                    </TouchableOpacity><TouchableOpacity style={{ marginTop: 10, backgroundColor: "black", borderRadius: 4, borderColor: "black", borderWidth: 1, padding: 4, width: 48 }}>
                        <Text style={{ textAlign: "center", lineHeight: 36, color: "white" }}>
                            41
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, borderRadius: 4, borderColor: "black", borderWidth: 1, padding: 4, width: 48 }}>
                        <Text style={{ textAlign: "center", lineHeight: 36 }}>
                            42
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 12, fontSize: 18, fontWeight: "bold" }}>Mô tả</Text>
                <Text style={{ marginTop: 12 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur excepturi at minima tenetur natus ut quia ea, magnam asperiores error, molestias possimus officia unde consequuntur magni dolorem ratione repudiandae dignissimos.</Text>
            </View >
            <View style={{ borderTopColor: "black", padding: 12, paddingTop: -16, borderTopWidth: 1, alignContent: "center", flexDirection: "row", gap: 10 }}>
                <TouchableOpacity style={{ marginTop: 10, borderRadius: 4, borderColor: "blue", borderWidth: 1, padding: 4, width: "48%" }}>
                    <Text style={{ textAlign: "center", lineHeight: 36, color: "blue" }}>
                        Thêm vào giỏ hàng
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, borderRadius: 4, borderColor: "black", borderWidth: 1, padding: 4, width: "48%", backgroundColor: "blue" }}>
                    <Text style={{ textAlign: "center", lineHeight: 36, color: "white" }}>
                        Mua ngay
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        position: "relative"
    },
    arrowLeft: {
        position: "absolute",
        left: 10,
        top: 10,
        zIndex: 100,
        color: "white"
    },
    heart: {
        position: "absolute",
        right: 10,
        top: 10,
        zIndex: 100,
        color: "white"
    }
})