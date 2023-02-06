import { StyledButton } from "./styled";

interface IButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export const Button = ({ children, onClick, type, className }: IButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};
