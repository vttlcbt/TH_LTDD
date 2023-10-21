import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import { DATA1 } from "../data/data1"
import Screen4b from "./Screen4b"

export default function Screen4a({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={require("../assets/muiTen.png")} />
        <Text style={styles.text}>Chat</Text>
        <Pressable
          onPress={() => {
            navigation.navigate(Screen4b)
          }}
        >
          <Image
            style={styles.img1}
            source={require("../assets/gioHang.png")}
          />
        </Pressable>
      </View>
      <ScrollView>
        <Text style={styles.text1}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
        <FlatList
          data={DATA1}
          renderItem={({ item }) => {
            return (
              <View style={styles.box}>
                <View style={styles.box1}>
                  <Image style={styles.img2} source={item.img} />
                  <View style={styles.boxitem}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.shop}>Shop: {item.shop}</Text>
                  </View>
                </View>
                <View>
                  <Pressable style={styles.button}>
                    <Text style={styles.text2}>Chat</Text>
                  </Pressable>
                </View>
              </View>
            )
          }}
        />
      </ScrollView>
      <View style={styles.cuoi}>
        <Icon name="bars" size={24} />
        <Icon name="home" size={24} />
        <Icon name="undo" size={24} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cuoi: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: "15px",
  },

  boxitem: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shop: {
    fontSize: 14,
    color: "red",
  },
  img2: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
  },
  box1: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F31111",
    padding: 10,
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1BA9FF",
    padding: 10,
    width: "100%",
  },
  img: {
    width: 30,
    height: 30,
  },
  img1: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  text1: {
    fontSize: 15,
    color: "black",
    padding: 10,
    width: "95%",
    marginLeft: 20,
  },
})
