import { ReactElement, ReactNode } from 'react'
import ReactModal from 'react-modal'

interface Props {
  isOpen: boolean
  closeModal: () => void
  children: ReactNode[] | ReactNode
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px 42px 42px 42px',
  },
  overlay: {
    backgroundColor: 'rgba(95, 95, 87, 0.3)',
  },
}

ReactModal.setAppElement('#root')

export const Modal = ({
  isOpen,
  closeModal,
  children,
}: Props): ReactElement => (
  <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
    {children}
  </ReactModal>
)
