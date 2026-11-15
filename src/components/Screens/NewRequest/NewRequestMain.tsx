import { Picker } from "@/components/ui/picker";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useState } from "react";

const NewRequestMain = () => {

  const [value, setValue] = useState<string>('');
  const options = [
    { label: 'Kamal', value: '1' },
    { label: 'Thanula', value: '2' },
    { label: 'Prabath', value: '3' },
    { label: 'Yasith', value: '4' },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text>Warehouse *</Text>
      <Picker
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder='Select a fruit...'
      />
    </View>
  )
}

export default NewRequestMain