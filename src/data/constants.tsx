import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const statusIcons: Record<string, React.ReactElement> = {
  pending: <ExclamationTriangleIcon />,
  rejected: <XMarkIcon />,
  approved: <CheckCircleIcon />,
};
