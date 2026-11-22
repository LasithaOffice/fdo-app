import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'
import { Request } from '@/constants/mock-data'
import { useColor } from '@/hooks/useColor'
import { useRouter } from 'expo-router'
import { ArrowRight } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'



const RequestItem = ({ request }: { request: Request }) => {

  const bg = useColor('card')

  const router = useRouter();

  const gotoRequestDetails = () => {
    router.push({
      pathname: '/RequestDetails',
      params: {
        reqId: request.id
      }
    })
  }

  return (
    <TouchableOpacity onPress={gotoRequestDetails} style={{
      padding: 20,
      borderWidth: 1,
      borderRadius: 16,
      borderColor: "#3f3f3f",
      backgroundColor: bg,
      flexDirection: 'row',
      marginHorizontal: 20,
      // marginVertical: 10
    }}>

      {/* Details */}
      <View style={{ flex: 1, marginRight: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#ff9501', fontSize: 14 }} >{request.id}</Text>
          <Text style={{
            borderWidth: 1,
            borderColor: '#01c401',
            backgroundColor: '#003100',
            color: "#01c401",
            paddingHorizontal: 10,
            height: 35,
            textAlignVertical: 'center',
            borderRadius: 100,
            fontSize: 14
          }}>{request.status}</Text>
        </View>
        <Text style={{ fontSize: 25, height: 50 }}>{request.warehouse}</Text>
        <Text style={{ fontSize: 12, color: '#888' }}>{request.requestDate}</Text>
      </View>

      {/* Arrow Icon */}
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => {

        }}>
          <ArrowRight color={'white'} />
        </TouchableOpacity>
      </View>

    </TouchableOpacity>
  )
}

export default RequestItem