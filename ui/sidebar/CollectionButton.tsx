import clsx from 'clsx';
type CollectionButtonProps = {
  icon: JSX.Element;
  active?: boolean;
  activeIcon?: JSX.Element;
  text: string;
};
const CollectionButton = ({
  icon,
  active,
  activeIcon,
  text,
}: CollectionButtonProps) => (
  <button
    type="button"
    className={clsx(
      'flex items-center py-2 text-sm text-white hover:bg-light-gray-300',
      active && 'bg-light-gray-300',
    )}
  >
    {active ? activeIcon : icon}
    <div className="px-1"> {text} </div>
  </button>
);

export default CollectionButton;
