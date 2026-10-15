import { Badge } from 'react-bootstrap'

export default function Insignia({ bg = 'primary', children, ...resto }) {
  return <Badge bg={bg} {...resto}>{children}</Badge>
}
