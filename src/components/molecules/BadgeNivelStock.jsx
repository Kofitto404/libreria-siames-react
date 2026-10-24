import { nivelStock } from '../../utils/stock'

export default function BadgeNivelStock({ stock }) {
  const { texto, clase } = nivelStock(stock)
  return <span className={`badge ${clase} px-3 py-2`}>{texto}</span>
}
