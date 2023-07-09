import { ContainerOutlined, ReadOutlined } from '@ant-design/icons'

export const BASE_API = 'http://38.242.237.75:3333'

export const controlLabels = [
  {
    label: 'Kontrolli I',
    key: 'kontrolli1',
    icon: <ReadOutlined />,
  },
  {
    label: 'Kontrolli II',
    key: 'kontrolli2',
    icon: <ContainerOutlined />,
    disabled: false,
  },
  {
    label: 'Kontrolli III',
    key: 'kontrolli3',
    icon: <ContainerOutlined />,
    disabled: false,
  },
]
