import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponente from '../../components/Header/Header'
import { DATA } from '../../data/index'
import ProductItem from '../../components/ProductItem/ProductItem'
import { useWindowDimensions } from 'react-native'
import Search from '../../components/Search'
import { SafeAreaView } from 'react-native-safe-area-context'

const Products = ({route}) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);

  const {item, navigation} = route.params;

    useEffect(() => {
      const categoryProducts = DATA.filter((el) => el.categoria === item);
      setCategoryProd(categoryProducts);
  
      if (text) {
        const titleProduct = DATA.filter((el) => el.name.toLowerCase() === text.toLowerCase());
        setCategoryProd(titleProduct);
      }
    }, [text, item]);

    console.log(categoryProd);
    
  return (
    <SafeAreaView>
        <HeaderComponente title={item} />
        <Search text={text} setText={setText}/>
        <FlatList data={categoryProd} keyExtractor={DATA.id}  renderItem={({item}) => <ProductItem item={item} navigation={navigation} /> }/>

    </SafeAreaView>
  )
}

export default Products