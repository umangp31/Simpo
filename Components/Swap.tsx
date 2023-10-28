import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SwapToken from '../assets/icons/SwapToken'

type Props = {}

const Swap = (props: Props) => {
  return (
<View
      style={{
        width: 106,
        height:84,
        flex:1,
        backgroundColor: "#2d2d2d",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
      }}
    >
      <SwapToken width={32} height={32} />
      <Text style={{fontWeight:"400",fontSize:16,color:"white"}} >Swap</Text>
    </View>
  )
}

export default Swap

const styles = StyleSheet.create({})