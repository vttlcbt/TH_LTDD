import React, { useEffect, useRef, useState } from "react"
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

const choiceColor = (props) => {
  const { navigation, route } = props
  const { navigate, goBack } = navigation
  const screenWidth = Dimensions.get("window").width
  const screenHeight = Dimensions.get("window").height
  const colorRef = useRef("blue")
  const [color, setColor] = useState("blue")

  useEffect(() => {}, [])

  const [imageSource, setImageSource] = useState(
    require("../assets/mobile4.png")
  )
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={
            colorRef.current === "white"
              ? require("../assets/mobile1.png")
              : colorRef.current === "red"
              ? require("../assets/mobile2.png")
              : colorRef.current === "black"
              ? require("../assets/mobile3.png")
              : colorRef.current === "blue"
              ? require("../assets/mobile4.png")
              : require("../assets/mobile4.png")
          }
          style={styles.img_phone}
        />
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 15,
          }}
        >
          <Text style={styles.text1}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.text1}>Hàng chính hãng</Text>

          <View style={styles.info_spp}>
            <Text style={styles.text1}>Màu:</Text>
            <Text style={styles.text2}>{" " + color}</Text>
          </View>

          <View style={styles.info_spp}>
            <Text style={styles.text1}>Cung cấp bởi: </Text>
            <Text style={styles.text2}>Tiki Tradding</Text>
          </View>

          <Text style={styles.text3}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.chonMau}>
        <Text style={styles.text1}>Chọn 1 màu bên dưới</Text>

        <TouchableOpacity
          onPress={() => {
            colorRef.current = "white"
            setColor("white")
            setImageSource(require("../assets/mobile1.png"))
          }}
        >
          <View style={styles.viewWhite}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            colorRef.current = "red"
            setColor("red")
            setImageSource(require("../assets/mobile2.png"))
          }}
        >
          <View style={styles.viewRed}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            colorRef.current = "black"
            setColor("black")
            setImageSource(require("../assets/mobile3.png"))
          }}
        >
          <View style={styles.viewBlack}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            colorRef.current = "blue"
            setColor("blue")
            setImageSource(require("../assets/mobile4.png"))
          }}
        >
          <View style={styles.viewBlue}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate("Screen_One", {
              color: colorRef.current,
            })
          }}
        >
          <View style={styles.btnXong}>
            <Text style={styles.text4}>XONG</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default choiceColor

const styles = StyleSheet.create({
  btnXong: {
    borderRadius: 10,
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    borderStyle: "solid",
    borderColor: "#1521CA",
    borderWidth: 1,
    height: "50px",
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  text4: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f9f2f2",
    textAlign: "center",
  },
  viewWhite: {
    marginTop: 10,
    // height: "screenHeight * 0.13",
    // width: "screenHeight * 0.13",
    backgroundColor: "#c5f1fb",
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  viewRed: {
    marginTop: 11,
    // height: "screenHeight * 0.13",
    // width: "screenHeight * 0.13",
    backgroundColor: "red",
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  viewBlack: {
    marginTop: 11,
    // height: "screenHeight * 0.13",
    // width: "screenHeight * 0.13",
    backgroundColor: "black",
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  viewBlue: {
    marginTop: 11,
    // height: "screenHeight * 0.13",
    // width: "screenHeight * 0.13",
    backgroundColor: "blue",
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  chonMau: {
    flex: 1,
    backgroundColor: "#c4c4c4",
    padding: 10,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    height: "screenHeight",
    width: "screenWidth",
  },
  header: {
    height: "screenHeight * 0.25",
    width: "screenWidth",
    flexDirection: "row",
  },
  img_phone: {
    resizeMode: "contain",
    width: "38%",
    height: "90%",
    alignSelf: "center",
  },
  text1: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
  },
  text2: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
  },
  text3: {
    marginTop: 13,
    fontSize: 18,
    fontWeight: "700",
    color: "black",
  },
  info_spp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
})
