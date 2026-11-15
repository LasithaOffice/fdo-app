import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { windowWidth } from '@/constants/dimentions'

type Props = {
  title: string,
  value: string,
  description: string
}

const OverviewCard = ({ title, description, value }: Props) => {
  return (
    <Card style={{ width: (windowWidth - 60) / 2 }}>
      <CardHeader>
        <CardTitle style={{ fontSize: 16 }}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 4 }}>
          {value}
        </Text>
        <Text style={{ color: '#797979', fontSize: 12 }}>
          {description} from last month
        </Text>
      </CardContent>
    </Card>
  )
}

export default OverviewCard