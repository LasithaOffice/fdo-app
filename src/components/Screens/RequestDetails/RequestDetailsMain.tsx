import CardContainer from '@/components/ui/CardContainer';
import LabelContainer from '@/components/ui/LabelContainer';
import { MockRequests } from '@/constants/mock-data';
import { useColor } from '@/hooks/useColor';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const RequestDetailsMain = () => {

  const params: any = useLocalSearchParams();

  console.log("params ", params.reqId);

  const request = MockRequests.find(r => r.id == params.reqId);
  const bg = useColor('card')

  if (!request) return <Text style={{ fontSize: 25, color: 'white' }}>Request cannot be found</Text>

  return (
    <View style={{
      padding: 20,
      gap: 20
    }}>

      <CardContainer>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
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
      </CardContainer>

      <CardContainer>
        <View style={{ gap: 10 }}>
          <LabelContainer label='Warehouse' value={request.warehouse} />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <LabelContainer label='Request Date' value={request.requestDate} />
            </View>
            <View style={{ flex: 1 }}>
              <LabelContainer label='Decision Date' value={request.decisionDate} />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <LabelContainer label='Decided By'
                value={request.decidedBy} />
            </View>
            <View style={{ flex: 1 }}>
              <LabelContainer label='Destribution Run'
                value={(request.destributionRun) ? request.destributionRun : "-"} />
            </View>
          </View>
          <View style={{ gap: 6 }}>
            <Text style={{ fontSize: 14, color: '#888' }}>Run Status</Text>
            <Text style={{
              borderWidth: 1,
              borderColor: '#01c401',
              backgroundColor: '#003100',
              color: "#01c401",
              paddingHorizontal: 10,
              height: 35,
              textAlignVertical: 'center',
              borderRadius: 100,
              fontSize: 14,
              width: 100,
              textAlign: 'center'
            }}>{request.runStatus}</Text>
          </View>
        </View>
      </CardContainer>
      <CardContainer>
        <LabelContainer label='Request Note' value={request.note} valueStyle={{
          fontSize: 16
        }} />
        {/* <View>
          <Text style={{ fontSize: 14, color: '#888' }}>{"Request Note"}</Text>
          <Text style={{ fontSize: 16, color: '#fff' }}>{request.note}</Text>
        </View> */}
      </CardContainer>
    </View>
  )
}

export default RequestDetailsMain