import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories } from '../../data/categories'
import CategoriasItem from '../CategoriasItem/CategoriasItem'
import { colors } from '../../theme/colors'

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
        <FlatList data={categories} keyExtractor={key => key} renderItem={({item}) => <CategoriasItem item={item} navigation={navigation}/>} />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: "100%"
    }
})