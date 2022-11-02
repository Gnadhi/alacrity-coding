import { GlobeAltIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type CollectionButtonProps = {
  active?: boolean;
  icon: JSX.Element;
  activeIcon?: JSX.Element;
  text: string;
};
const CollectionButton = ({
  active = false,
  icon,
  activeIcon,
  text,
}: CollectionButtonProps) => (
  <button
    type="button"
    className={clsx(
      'flex grow items-center py-2 text-sm font-semibold leading-4 text-gray-300',
      active && 'bg-light-gray-500',
    )}
  >
    {active ? activeIcon : icon}
    {text}
  </button>
);

export default CollectionButton;
