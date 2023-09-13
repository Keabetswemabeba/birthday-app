import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity } from "react-native";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageStyle}
        source={require("../assets/pngtree-happy-birthday-text-effect-png-image_8802415.png")}
      />

      <Text style={styles.headingStyle}>To: You</Text>

      <Text style={styles.textStyle}>
        It is a plus one to you, and you are getting older and older🎂💯. Have an
        amazing day and may the great Lord shower you with many more years to
        come💝😭🎂🙏. Let it be a wonderful day so you could enjoy your day with lots of
        love, smiles and laughs💝😇😄. New level unlocked🔥🎉🔓💃.
      </Text>

      <Text style={styles.lastStyle}>From: Keabetswe</Text>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 25,
    height: 390,
    backgroundColor: "lightgray",
    borderRadius: 20,
    marginTop: 140,

    shadowColor: "#0000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    width: deviceWidth - 25,
    height: 200,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  headingStyle: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "800",
    paddingLeft: 10,
  },
  textStyle: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "400",
    paddingLeft: 10,
    fontStyle: 'italic',
  },
  lastStyle: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "800",
    textAlign: "right",
    paddingRight: 10,
    color: '#4a4a4a',
  },
});

export default Card;
