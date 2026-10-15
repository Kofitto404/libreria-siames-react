import { Button } from 'react-bootstrap'

export default function Boton({ variant = 'outline-primary', children, ...resto }) {
  return <Button variant={variant} {...resto}>{children}</Button>
}
