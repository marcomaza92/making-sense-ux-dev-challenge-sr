export interface ModalProps {
  type?: string;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}
