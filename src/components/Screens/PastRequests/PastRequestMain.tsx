import { MockRequests } from '@/constants/mock-data'
import { FlatList, View } from 'react-native'
import RequestItem from './RequestItem'

const PastRequestMain = () => {



  return (
    <View>
      <FlatList
        style={{ marginTop: 20 }}
        data={MockRequests}
        renderItem={({ index, item }) => <RequestItem request={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
      />

      {/* <Image contentFit='contain' source={require('@/assets/images/dog.jpg')}
        style={{ width: 300, height: 300 }} />
      <Image source={
        {
          uri: "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
        }
      } style={{ width: 150, height: 150 }} /> */}
    </View>
  )
}

export default PastRequestMain