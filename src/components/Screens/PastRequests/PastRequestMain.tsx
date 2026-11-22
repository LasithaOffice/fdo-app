import { Image } from 'expo-image'
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
      <Image contentFit='contain' source={require('@/assets/images/dog.jpg')}
        style={{ width: 300, height: 300 }} />
      <Image source={
        {
          uri: "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
        }
      } style={{ width: 150, height: 150 }} />
    </View>
  )
}

export default PastRequestMain