import { FlatList, Text, View } from 'react-native'

const PastRequestMain = () => {



  return (
    <View>
      <FlatList
        data={["Apple", "Banana", "Watermeoln", "Pineapple", "Cucumber"]}
        renderItem={({ index, item }) =>
          <Text style={
            {
              fontSize: 20,
              color: 'white',
              padding: 10,
              borderWidth: 1,
              borderColor: 'red',
              marginTop: 10
            }
          }>{item}</Text>
        }
      />
    </View>
  )
}

export default PastRequestMain