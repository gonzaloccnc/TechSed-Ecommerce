import { useEffect } from 'react'
import ReactDOM from 'react-dom'

const PortalModal = ({ children }) => {
  const portalModal = document.createElement('div')
  portalModal.id = 'portal-modal'
  portalModal.classList.add('z-[200]', 'fixed', 'top-0', 'left-0', 'w-full', 'h-screen')

  useEffect(() => {
    document.body.appendChild(portalModal)
    return () => portalModal.remove()
  }, [])

  return ReactDOM.createPortal(children, portalModal)
}

export default PortalModal
