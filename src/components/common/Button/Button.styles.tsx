import styled from "@emotion/styled";

export const Container = styled.button<{
  size: "lg" | "md" | "sm";
  color: "primary" | "success" | "secondary" | "warning" | "error";
}>`
  ${({ size, theme }) =>
    size === "sm" ? theme.borderRadius.sm : theme.borderRadius.md};
  padding: ${({ size }) => (size === "sm" ? "0.5rem 1rem" : " 0.7rem 2rem")};
  width: ${({ size }) => size === "lg" && "100%"};
  background: ${({ color, theme }) => theme.color[color]};
  border-radius: 4px;
  color: #fff;
  outline: none;
  transition: 0.2s ease-in-out;
`;
