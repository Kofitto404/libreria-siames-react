export const nivelStock = (stock) => {
  if (stock <= 5) return { texto: 'Crítico', clase: 'bg-danger' }
  if (stock <= 10) return { texto: 'Bajo', clase: 'bg-warning text-dark' }
  return { texto: 'Óptimo', clase: 'bg-success' }
}
