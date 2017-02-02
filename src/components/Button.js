import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = () => {
  return (
    <TouchableOpacity>
      <Text
        style={styles.buttonStyles}>
        Click me!!
      </Text>
    </TouchableOpacity>
  )
}

const styles= {
  buttonStyles: {

  }
}
export default Button
