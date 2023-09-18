import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'

const CategoriesItem = ({item, navigation}) => {
  return (
    <Pressable style={styles.categoryText} onPress={() => {navigation.navigate("products", {item: item, navigation: navigation})}}>
      <Text style={styles.text}>{item}</Text>
    </Pressable>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
    categoryText: {
        margin: 10,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 8,
        height: 45,
        paddingLeft: 20,
        justifyContent: "center",
        backgroundColor: colors.AzulRey
    },
    text: {
        fontSize: 20,
        color: colors.white,
    }
})
