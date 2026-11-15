import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Picker } from "@/components/ui/picker";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { WARE_HOUSES } from "@/constants/mock-data";
import { useColor } from "@/hooks/useColor";
import { Plus, SaveCheck } from "lucide-react-native";
import { useState } from "react";

const NewRequestMain = () => {

  const [value, setValue] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const border = useColor('border')

  const options = WARE_HOUSES.map(i => ({
    label: i.name,
    value: i.id + ""
  }))

  // [
  //   { label: 'Kamal', value: '1' },
  //   { label: 'Thanula', value: '2' },
  //   { label: 'Prabath', value: '3' },
  //   { label: 'Yasith', value: '4' },
  // ];

  //   export const WARE_HOUSES = [
  //   {
  //     id: 1,
  //     name: "Colombo Central Warehouse"
  //   },
  //   {
  //     id: 2,
  //     name: "Kandy Regional Warehouse"
  //   },
  //   {
  //     id: 3,
  //     name: "Galle Regional Warehouse"
  //   }
  // ]

  return (
    <View style={{ padding: 20, gap: 15 }}>
      <Text>Warehouse *</Text>
      <Picker
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder='Select a fruit...'
      />
      <Text>Request Date</Text>
      <DatePicker
        label='Select Date'
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder='Choose a date'
      />
      <Text>Products *</Text>
      <View style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: border,
        padding: 10
      }}>
        <Text>No items are added</Text>
      </View>
      <Button icon={Plus}>Add</Button>
      <Text>Note</Text>
      <Input type="textarea" placeholder="Add any information relevant to this stock request" />
      <Button variant="success" icon={SaveCheck}>Save</Button>
    </View>
  )
}

export default NewRequestMain