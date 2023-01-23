import { Button } from '@/components/base/atoms/Button';

interface UserButtonProps {
  onClick: () => void;
}

export const UserButton = ({ onClick }: UserButtonProps) => {
  return <Button content="User" onClick={onClick} />;
};
