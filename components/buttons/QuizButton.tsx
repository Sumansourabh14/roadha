import { Button } from "../ui/button";

const QuizButton = ({
  title,
  onClick,
  disabled,
}: {
  title: string;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <Button
      onClick={onClick}
      className="mt-4 px-4 py-2 rounded cursor-pointer"
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default QuizButton;
