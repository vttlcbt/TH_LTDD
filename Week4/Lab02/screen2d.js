import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

export default function Order() {
  return (
    <View style={styles.box}>
      <View style={styles.frag}>
        <View style={styles.book}>
          <Image source={require("../assets/book.png")} style={styles.img} />
          <View style={styles.infoBook}>
            <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.text1}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.giaTien}>140.000</Text>
            <View style={styles.infoBook_1}>
              <Text style={styles.text1}>Số lượng</Text>
              <Text style={styles.text2}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.giamGia}>
          <Text style={styles.text1}>Mã giảm giá đã lưu</Text>
          <Text style={styles.text2}>Xem tại đây</Text>
        </View>
      </View>
      <View style={styles.voucher}>
        <View style={styles.chonVC}>
          <View
            style={{
              width: "30%",
              height: "80%",
              backgroundColor: "yellow",
              marginRight: 10,
            }}
          ></View>
          <Text style={styles.text3}>Mã giảm giá</Text>
        </View>
        <Button title="Áp dụng"></Button>
      </View>
      <View style={styles.nhapTaiDay}>
        <Text style={styles.text1}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={styles.text2}>Nhập tại đây</Text>
      </View>
      <View style={styles.tamTinh}>
        <Text style={styles.text3}>Tạm tính</Text>
        <Text style={styles.giaTien}>140.000đ</Text>
      </View>
      <View style={styles.dathang}>
        <View style={styles.btnDatHang}>
          <Button title="TIẾN HÀNH ĐẶT HÀNG" color="trasparent"></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frag: {
    width: "100%",
    height: "30%",
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
  },
  book: {
    flexDirection: "row",
    width: "100%",
    height: "70%",
    // border: "1px solid #000000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoBook: {
    flexDirection: "column",
    width: "70%",
    height: "100%",
    // backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 10,
    marginLeft: 10,
  },
  infoBook_1: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "ceneter",
    paddingRight: "20%",
    // backgroundColor: "#C5AAAA",
  },
  img: {
    width: 100,
    height: 125,
  },
  giamGia: {
    flexDirection: "row",
    width: "62%",
    height: "25%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: "2%",
  },
  voucher: {
    flexDirection: "row",
    width: "100%",
    height: "12%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  chonVC: {
    flexDirection: "row",
    width: "70%",
    height: "100%",
    backgroundColor: "#ffffff",
    border: "1px solid #000000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  nhapTaiDay: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    marginTop: 10,
  },
  tamTinh: {
    flexDirection: "row",
    width: "100%",
    height: "12%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 10,
  },
  dathang: {
    width: "100%",
    height: "12%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: "34%",
  },
  btnDatHang: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EE0D0D",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 2,
  },
  box: {
    width: "100%",
    height: "100%",
    backgroundColor: "#c4c4c4",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text1: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
  },
  text2: {
    color: "blue",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },
  text3: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
  },
  giaTien: {
    color: "#EE0D0D",
    fontSize: 22,
    fontWeight: "bold",
  },
});
