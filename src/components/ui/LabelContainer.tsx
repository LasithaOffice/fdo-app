import { StyleProp, Text, TextStyle, View } from 'react-native'

type Props = {
  label: string,
  value: string,
  labelStyle?: StyleProp<TextStyle> | undefined
  valueStyle?: StyleProp<TextStyle> | undefined
}

const LabelContainer = ({ label, value, labelStyle, valueStyle }: Props) => {
  return (
    <View>
      <Text style={[{ fontSize: 14, color: '#888' }, labelStyle]}>{label}</Text>
      <Text style={[{ fontSize: 20, color: '#fff' }, valueStyle]}>{value}</Text>
    </View>
  )
}

export default LabelContainer