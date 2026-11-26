import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Plus, Truck } from "lucide-react-native";

const DistributionsMain = () => {

  const bg = useColor('card');
  const primary = useColor('success');


  return (
    <View style={{ padding: 20 }}>
      <Text variant="title">Distributions</Text>
      <Text variant="caption">Manage your active distribution run, records deliveries and submit returns</Text>

      {/* Card Details */}

      <View style={{
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#3f3f3f",
        backgroundColor: bg,
        marginTop: 20
        // marginVertical: 10
      }}>
        <View style={{
          flexDirection: 'row',
          padding: 20,
          gap: 10
        }}>
          <View style={{
            width: 60,
            height: 60,
            backgroundColor: '#57240f',
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Truck size={40} color={'#a6461d'} />
          </View>

          {/* Id and the status */}
          <View
            style={{ flex: 1, minWidth: 0 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text>RUN-1010</Text>
              <View style={{
                borderWidth: 1,
                borderColor: '#01c401',
                backgroundColor: '#003100',
                paddingHorizontal: 10,
                height: 20,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{ fontSize: 14, color: '#01c401', lineHeight: 14 }}>Complete</Text>
              </View>
            </View>

            <View style={{ marginTop: 4, alignSelf: 'stretch' }}>
              <Text
                style={{ fontSize: 14, color: '#888', lineHeight: 18, }}
              >
                Request: REQ-1050 - Colombo central warehouse
              </Text>
            </View>
          </View>

        </View>

        {/* Second Row */}

        <View style={{
          flexDirection: 'row'
        }}>
          <View style={{
            borderWidth: 1,
            borderColor: "#3f3f3f",
            padding: 15,
            flex: 1
          }}>
            <Text style={{ fontSize: 12, color: '#888' }}>Collected</Text>
            <Text style={{ fontSize: 25 }}>90</Text>
          </View>
          <View style={{
            borderWidth: 1,
            borderColor: "#3f3f3f",
            padding: 15,
            flex: 1
          }}>
            <Text style={{ fontSize: 12, color: '#888' }}>Delivered</Text>
            <Text style={{ fontSize: 25 }}>0</Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row'
        }}>
          <View style={{
            borderWidth: 1,
            borderColor: "#3f3f3f",
            padding: 15,
            flex: 1
          }}>
            <Text style={{ fontSize: 12, color: '#888' }}>Collected</Text>
            <Text style={{ fontSize: 25 }}>90</Text>
          </View>
          <View style={{
            borderWidth: 1,
            borderColor: "#3f3f3f",
            padding: 15,
            flex: 1
          }}>
            <Text style={{ fontSize: 12, color: '#888' }}>Delivered</Text>
            <Text style={{ fontSize: 25 }}>0</Text>
          </View>
        </View>

        <View style={{
          padding: 15
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 12, color: '#888' }}>Issues</Text>
            <Text style={{ fontSize: 12, lineHeight: 14 }}>6th Aug 2026</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 12, color: '#888' }}>Collected</Text>
            <Text style={{ fontSize: 12, lineHeight: 14 }}>10th Oct 2026, 14:41</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 12, color: '#888' }}>Route</Text>
            <Text style={{ fontSize: 12, lineHeight: 14 }}>Colombo North</Text>
          </View>
        </View>

      </View>

      <View style={
        {
          borderRadius: 16,
          padding: 20,
          borderWidth: 1,
          borderColor: primary,
          marginTop: 20,
          backgroundColor: bg
        }
      }>
        <Text >Ready to deliver to an outlet?</Text>
        <Text variant="caption">Record each outlet deliveries as you complete it during the distribution run</Text>
        <Button icon={Plus} variant="success" style={{ marginTop: 10 }}>Record Outlet Delivery</Button>
      </View>

    </View>
  )
}

export default DistributionsMain