import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'

const ProductItem = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => { navigation.navigate("productDetail", {navigation: navigation, item: item})}}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <View style={styles.containerDescription}>
          <Text style={styles.textCard}>{item.descripcion}</Text>
        </View>
      </Pressable>
      <Image source={{uri: item.img}} resizeMode="cover" width={80} height={75}/>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.verdeOlivo,
        borderRadius: 10,
        borderWidth: 1,
        height: 100,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 15
        
    },
    image: {
        marginRight: 10,
    },
    textCard:{
      fontFamily: "RaleWaylight",
      color: "black"
    },
    containerDescription: {
      width: 190,
      paddingTop: 4
    },
    textTitle: {
      fontSize: 16,
      fontWeight: "bold"
    }
})