import { Image } from 'react-bootstrap'

export default function Imagen({ alt = '', ...resto }) {
  return <Image fluid alt={alt} {...resto} />
}
