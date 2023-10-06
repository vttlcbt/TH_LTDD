import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Ratting() {
  const show = () => {
    alert("Cảm ơn bạn đã đánh giá sản phẩm");
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoUsb}>
        <View style={styles.img}>
          <Image source={require("../assets/usb.png")} style={styles.img_usb} />
        </View>
        <Text style={styles.infoUsb_text}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={styles.rate}>
        <Text style={styles.infoUsb_text}>Cực kỳ hài lòng</Text>
        <View style={styles.star}>
          <Image
            source={require("../assets/star.png")}
            style={styles.star_img}
          />
          <Image
            source={require("../assets/star.png")}
            style={styles.star_img}
          />
          <Image
            source={require("../assets/star.png")}
            style={styles.star_img}
          />
          <Image
            source={require("../assets/star.png")}
            style={styles.star_img}
          />
          <Image
            source={require("../assets/star.png")}
            style={styles.star_img}
          />
        </View>
        <View style={styles.picture}>
          <Image
            source={require("../assets/camera.png")}
            style={styles.img_camera}
          />
          <Text style={styles.infoUsb_text}>Thêm hình ảnh</Text>
        </View>
        <View style={styles.cmt}>
          <Text style={styles.cmt_text}>
            Hãy chi sẻ những điều mà bạn thích về sản phẩm
          </Text>
        </View>
        <View style={styles.btnSent}>
          <Button title="Gửi phản hồi" color="transparent" onPress={show} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btnSent: {
    flexDirection: "row",
    backgroundColor: "#1511EB",
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginTop: 15,
  },
  cmt: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "80%",
    height: "40%",
    alignItems: "flex-start",
    borderRadius: 7,
    border: "2px solid #585858",
    marginTop: 15,
    padding: 10,
  },
  cmt_text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#585858",
  },
  picture: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "80%",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    border: "1px solid #1511EB",
    marginTop: 30,
  },
  img_camera: {
    width: 56,
    height: 45,
    marginRight: 10,
  },
  infoUsb: {
    flexDirection: "row",
    // backgroundColor: "#FFFFC5",
    width: "100%",
    height: "18%",
    alignItems: "center",
  },
  infoUsb_text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  img: {
    width: 100,
    height: 92,
    padding: 10,
  },
  img_usb: {
    width: "100%",
    height: "100%",
  },
  rate: {
    flex: 1,
    // backgroundColor: "#AAFBBC",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: 30,
  },
  star: {
    flexDirection: "row",
    // backgroundColor: "#AAB5FB",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    height: 60,
    marginTop: 15,
  },
  star_img: {
    width: "18%",
    height: 50,
  },
});
