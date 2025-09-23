import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Bai1 from "./Bai1";
import Bai2 from "./Bai2";
import Bai3 from "./Bai3";
import Bai4 from "./Bai4";
import Bai5 from "./Bai5";
import Bai6 from "./Bai6";
import Bai7 from "./Bai7";
import Bai8 from "./Bai8";
import ProductDetail from "./ProductDetail";

export default function RootLayout() {
    return <SafeAreaView>
        {/* <Demo></Demo> */}
        <ProductDetail></ProductDetail>
        <Bai1></Bai1>
        <Bai2></Bai2>
        <Bai3></Bai3>
        <Bai4></Bai4>
        <Bai5></Bai5>
        <Bai6></Bai6>
        <Bai7></Bai7>
        <Bai8></Bai8>
    </SafeAreaView>
}