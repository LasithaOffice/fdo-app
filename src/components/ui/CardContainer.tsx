import { useColor } from '@/hooks/useColor';
import { ReactNode } from 'react';
import { View } from 'react-native';

const CardContainer = ({ children }: { children: ReactNode }) => {

  const bg = useColor('card');

  return (
    <View style={{
      borderWidth: 1,
      padding: 20,
      borderRadius: 16,
      borderColor: "#3f3f3f",
      backgroundColor: bg,
      // marginVertical: 10
    }}>
      {children}
    </View>
  )
}

export default CardContainer