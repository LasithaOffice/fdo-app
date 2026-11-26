import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { View } from "@/components/ui/view"
import { useRouter } from "expo-router"
import { History, Plus } from "lucide-react-native"
import { useCallback } from "react"
import { StyleSheet } from "react-native"
import OverviewCard from "./OverviewCard"

const StockRequestMain = () => {

  const router = useRouter();

  const cardDetails = [
    {
      title: "Active Products",
      value: "6",
      description: "Unique SKUs tracked from last month"
    },
    {
      title: "Remaining Stock",
      value: "9820",
      description: "Unique SKUs tracked from last month"
    },
    {
      title: "With FDOs",
      value: "225",
      description: "Unique SKUs tracked from last month"
    },
    {
      title: "Variance",
      value: "90",
      description: "Unique SKUs tracked from last month"
    }
  ]

  const gotoNewRequest = useCallback(() => {
    router.push('/NewRequest');
  }, [])

  const gotoPastRequest = useCallback(() => {
    router.push('/PastRequests');
  }, [])

  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={{
        gap: 20,
        flexDirection: 'row', flexWrap: 'wrap'
      }}>
        {
          cardDetails.map(i =>
            <OverviewCard key={i.title} {...i} />
          )
        }
      </View>

      {/* Bottom Part */}
      <View style={{ gap: 10, marginBottom: 10 }}>
        <Text variant="title">Stock Requests</Text>
        <Text variant="caption" style={{ fontSize: 12 }}>Request stock from a warehouse and track approval status</Text>
        <Button icon={Plus} variant="success" onPress={gotoNewRequest}>New Request</Button>
        <Button icon={History} variant="outline" onPress={gotoPastRequest}>Past Requests</Button>
      </View>

    </View>
  )
}

export default StockRequestMain

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20 }
})