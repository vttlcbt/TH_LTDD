import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import { DATA2 } from "../data/Data2"
import Screen4a from "./Screen4a"

export default function Screen4b({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate(Screen4a)
          }}
        >
          <Image
            style={styles.headerImg}
            source={require("../assets/muiTen.png")}
          />
        </Pressable>

        <View style={styles.search}>
          <Image
            style={styles.headerImg}
            source={require("../assets/timKiem.png")}
          />
          <TextInput style={styles.input} placeholder="Dây cáp usb"></TextInput>
        </View>

        <Image
          style={styles.headerImg}
          source={require("../assets/gioHang.png")}
        />
      </View>
      <View style={styles.sectionContext}>
        <ScrollView>
          <FlatList
            numColumns={2}
            data={DATA2}
            renderItem={({ item }) => {
              return (
                <View style={styles.box}>
                  <Image style={styles.img} source={item.img} />
                  <Text style={styles.content}>{item.content}</Text>
                  <View style={styles.rating}>
                    <Image style={styles.img1} source={item.imgRating} />
                    <Text style={styles.review}>({item.review})</Text>
                  </View>
                  <View style={styles.boxPrice}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.disCount}>{item.disCount}</Text>
                  </View>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.footerBar}>
        <Icon name="bars" size={24} />
        <Icon name="home" size={24} />
        <Icon name="undo" size={24} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  sectionContext: {
    // backgroundColor: "#1BA9FF",
    height: "85%",
    width: "100%",
  },
  footerBar: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "8%",
  },
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImg: {
    width: 24,
    height: 24,
  },
  header: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "7%",
  },
  input: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  search: {
    // backgroundColor: "#B13D3D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: "100%",
    padding: 10,
  },
  box: {
    // border: "1px solid #969DAA",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "50%",
  },
  img: {
    // border: "1px solid #969DAA",
    width: 165,
    height: 90,
    marginBottom: 10,
  },
  content: {
    maxWidth: "80%",
    fontSize: 12,
    fontWeight: 400,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  img1: {
    width: 85,
    height: 13,
  },
  boxPrice: {
    flexDirection: "row",
    gap: 16,
    marginRight: 18,
  },
  price: {
    fontSize: 12,
    fontWeight: 700,
  },
  disCount: {
    fontSize: 12,
    fontWeight: 400,
    color: "#969DAA",
  },
})
