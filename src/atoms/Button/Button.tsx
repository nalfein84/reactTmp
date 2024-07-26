import React, { useContext } from 'react';
import { ActivityIndicator, TouchableHighlight, TouchableOpacity, View, ViewStyle } from 'react-native';
import { IButton } from '../../Interfaces';
import { DefaultBtnProps } from '../../DefaultProps';
import { BG, BorderRadius, Flex, Height, Width } from '../../Assets';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import { ETextType, EButtonType } from '../../Enum/Enum';


const Button = ({ btnStyle, textStyle, text, ...props }: IButton): JSX.Element => {

  const theme = useContext(ThemeContext)
  let containerClassName: ViewStyle = {}
  let icon: any = { iconSize: 20, iconName: "arrow-right1", color: theme.modalGray, style: {} }
  let textType: ETextType = ETextType.title1
  let customIcon: any
  const commonType = {
    ...Flex.row,
    ...Flex.center,
    ...BorderRadius.br20,
    ...props.containerClassName
  }

  switch (props.type) {
    case EButtonType.primaryBtn:
      containerClassName = {
        ...BG(theme).primary,
        ...Width.w124,
        ...Height.h52,
        ...commonType
      };
      textType = ETextType.subTitle1;
      break;
    case EButtonType.secondaryBtn:
      containerClassName = {
        ...Width.full,
        ...Height.h52,
        ...commonType
      };
      textType = ETextType.subTitle1;
      break;
    case EButtonType.tertiaryBtn:
      containerClassName = {
        ...BG(theme).modalGray,
        ...Width.w124,
        ...Height.h52,
        ...commonType
      };
      textType = ETextType.subTitle1;
      break;
    default:
      break;
  }

  if (btnStyle) {
    containerClassName = { ...containerClassName, ...btnStyle }
  }


  const btnContent = () => {
    return (
      <View style={{ ...containerClassName }}>
        {props.isLoading && <ActivityIndicator color={props.loaderColor} style={{ paddingRight: 8 }} />}
        {props.isLeftIcon && <Icon size={icon.iconSize} name={icon.iconName} color={icon?.color} style={icon.style} />}
        <Text type={textType} textStyle={textStyle}>{text}</Text>
        {props.isRightIcon && <Icon size={icon.iconSize} name={icon.iconName} color={icon.color} style={icon.style} />}
        {props.isCustomIcon && customIcon}
      </View>
    )
  }

  const renderBtn = () => {
    if (props.isTouchableHighlight) {
      return (
        <TouchableHighlight {...props} style={{ ...containerClassName }} disabled={props.isLoading}>
          {btnContent()}
        </TouchableHighlight>
      )
    }
    else {
      return (
        <TouchableOpacity {...props} style={{ ...containerClassName }}>
          {btnContent()}
        </TouchableOpacity>
      )
    }
  }

  return (
    renderBtn()
  );

};
Button.defaultProps = {
  ...DefaultBtnProps,
}

export default Button;
