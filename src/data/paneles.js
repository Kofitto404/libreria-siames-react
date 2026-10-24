export const PANELES_POR_ROL = {
  admin: [
    {
      icono: 'user-shield',
      titulo: 'Administración',
      texto: 'Gestiona usuarios, revisa las solicitudes de publicación y consulta el dashboard.',
      enlaces: [
        { to: '/panel/admin', texto: 'Dashboard' },
        { to: '/panel/admin/usuarios', texto: 'Gestión de usuarios' },
        { to: '/panel/admin/solicitudes', texto: 'Solicitudes de publicación' },
      ],
    },
  ],
  vendedor: [
    {
      icono: 'store',
      titulo: 'Ventas',
      texto: 'Consulta el stock en tiempo real para atender a los clientes.',
      enlaces: [{ to: '/panel/vendedor/stock', texto: 'Consultar stock' }],
    },
  ],
  inventario: [
    {
      icono: 'boxes-stacked',
      titulo: 'Inventario',
      texto: 'Gestiona el stock de forma directa, ajustando unidades por producto.',
      enlaces: [{ to: '/panel/inventario/stock', texto: 'Gestión de stock' }],
    },
  ],
  compras: [
    {
      icono: 'truck-ramp-box',
      titulo: 'Compras',
      texto: 'Gestiona pedidos a proveedores y revisa su seguimiento hasta la bodega.',
      enlaces: [
        { to: '/panel/compras/nuevo-pedido', texto: 'Nuevo pedido' },
        { to: '/panel/compras/seguimiento', texto: 'Seguimiento de proveedores' },
      ],
    },
  ],
  usuario: [
    {
      icono: 'bag-shopping',
      titulo: 'Mis compras',
      texto: 'Revisa el estado de tus pedidos y reservas.',
      enlaces: [{ to: '/mi-cuenta/pedidos', texto: 'Mis pedidos' }],
    },
  ],
}
