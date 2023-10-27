import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowDown from '../assets/icons/ArrowDown'
import Deposit from '../assets/icons/Deposit'

type Props = {}

const Recieve = (props: Props) => {
  return (
<View
      style={{
        width: 114,
        height:84,
        backgroundColor: "#2d2d2d",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
      }}
    >
      <Deposit width={32} height={32} />
      <Text style={{fontWeight:"400",fontSize:16,color:"white"}} >Recieve</Text>
    </View>
  )
}

export default Recieve

const styles = StyleSheet.create({})