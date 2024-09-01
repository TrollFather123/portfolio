import { primaryColors } from "@/themes/_muiPalette";
import { plusJakarta } from "@/themes/_muiTheme";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  display: flex;
  padding: 12.5px 22px;
  border-radius: 10px;
  min-width: 157px;
  justify-content: space-between;
  align-items: center;
  color: ${primaryColors.white};
  font-family: ${plusJakarta.style.fontFamily};
  font-size: 15px;
  font-weight: 600;
  max-height: 53px;
box-shadow: 0px 25px 37.3px -8px rgba(69, 121, 255, 0.2);


  svg{
    margin-left: auto;
  }
  :hover{
    font-size: 15px;
    font-weight: 800;
    svg{
      transform: scale(1.35);
    }
  }
  &.Mui-disabled {
    background-color: ${primaryColors?.disabledBg};
    border: 1px solid ${primaryColors?.disabledBg};

    p {
      color: ${primaryColors?.white};
    }
    img {
      filter: contrast(0);
    }
  }
  &.smallButton {
    padding: 4px 16px;
    width: auto;
  }

  &.MuiButton-outlinedInfo {
    p {
      color: ${primaryColors?.black};
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    color: ${primaryColors?.white};
  }
  span {
    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  /* img {
    width: 24px;
  } */
`;

interface CustomButtonprops extends ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  buttonType?: "small" | "large";
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === "small" && "smallButton"} ${
        className || ""
      }`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
