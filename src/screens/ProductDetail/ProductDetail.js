import { StyleSheet, Text, View, Image, Dimensions, Button, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import HeaderComponente from '../../components/Header/Header';
import { colors } from '../../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons'; 

const ProductDetail = ({route}) => {
    const {navigation, item} = route.params
  return (
    <SafeAreaView>
      <HeaderComponente title={"Detalle producto"} />
      <View style={styles.containerImage}>
        <Image 
        style={styles.image}
        source={{
            uri: item.img
        }} 
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.descripcion}</Text>
        <View style={styles.containerLeft}>
            <Text style={styles.rating}><AntDesign name="star" size={15} color="black" />{item.rating}</Text>
        </View>
        <Text style={styles.price}><FontAwesome name="dollar" size={20} color="black" />{item.precio}</Text>
      </View>
      <Pressable onPress={() => {console.log("Presione el boton");}} style={styles.boton}>
        <Text style={styles.textBoton}>Comprar</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    image: {
        height: 350,
        width: 350,
        resizeMode: 'cover'
    },
    containerImage: {
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontFamily: "RalewayBlack"
    },
    description: {
        fontSize: 20,
        marginVertical: 15,
        textAlign: 'left'
    },
    boton:{
        backgroundColor: colors.rosadoFuerte,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderWidth: 1,
        borderColor: colors.rosadoFuerte,
        borderRadius: 4
    },
    textBoton:{
        color: colors.white
    },
    rating:{
        fontSize: 15,
        textAlign: "left",
        marginRight: 330,
    },
    containerRating: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    price: {
        fontSize: 20,
    },
    containerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})