import { Loader2 } from "lucide-react";

type LoadingProps = {
  text?: string;
  className?: string;
};

const LoadingSection = ({
  text = "Loading...",
  className = "",
}: LoadingProps) => {
  return (
    <div
      className={`flex items-center justify-center space-x-2 text-muted-foreground py-6 ${className} min-h-screen`}
    >
      <Loader2 className="h-5 w-5 animate-spin" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default LoadingSection;
