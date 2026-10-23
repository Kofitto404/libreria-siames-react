import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// - Con #ancla: lleva la vista a la sección indicada.
// - Sin ancla: al cambiar de página, sube al inicio.
export default function useScrollAlHash() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])
}