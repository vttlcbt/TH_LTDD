import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
} from "react-native";

export default function ShowPhone() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/vs_blue.png")}
        style={styles.img_phone}
      />
      <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={styles.rate}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/star.png")}
            style={styles.img_rate}
          />
          <Image
            source={require("../assets/star.png")}
            style={styles.img_rate}
          />
          <Image
            source={require("../assets/star.png")}
            style={styles.img_rate}
          />
          <Image
            source={require("../assets/star.png")}
            style={styles.img_rate}
          />
          <Image
            source={require("../assets/star.png")}
            style={styles.img_rate}
          />
        </View>
        <Text style={styles.rate_text}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.giaTien}>
        <Text style={styles.text1}>1.790.000 đ</Text>
        <Text style={styles.text2}>1.790.000 đ</Text>
      </View>
      <View style={styles.viewChonMau}>
        <Pressable style={styles.pressChonMau}>
          <Text style={styles.text3}>4 MÀU-CHỌN MÀU</Text>
          <Image
            source={require("../assets/toright.png")}
            style={{
              width: 12,
              height: 18,
              marginLeft: "10%",
            }}
          />
        </Pressable>
      </View>
      <View style={styles.viewMua}>
        <Pressable style={styles.pressMua}>
          <Text style={styles.text4}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  img_phone: {
    width: "81%",
    height: "63%",
  },
  giaTien: {
    flexDirection: "row",
    // backgroundColor:"#e4e4e4",
    width: "100%",
    height: "5%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000000",
  },
  text2: {
    marginLeft: "15%",
    fontWeight: "medium",
    fontSize: 14,
    color: "#000000",
    textDecorationLine: "line-through",
  },
  text3: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  text4: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  viewChonMau: {
    flexDirection: "row",
    // backgroundColor: "#912020",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "6%",
  },
  pressChonMau: {
    flexDirection: "row",
    // backgroundColor: "#EAC8C8",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #000000",
    borderRadius: "8px",
    margin: "2%",
    paddingRight: "5%",
    paddingLeft: "30%",
  },
  viewMua: {
    backgroundColor: "#FF0000",
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  pressMua: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  rate: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    width: "100%",
    height: "5%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "2%",
    marginBottom: "2%",
  },
  rate_text: {
    color: "#000000",
    marginLeft: "10%",
  },
  img_rate: {
    width: 20,
    height: 20,
  },
});
