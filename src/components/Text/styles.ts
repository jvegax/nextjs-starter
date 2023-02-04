import { Text as BaseText } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { FlattenSimpleInterpolation } from 'styled-components';
import type { Props, Variant } from './types';

export const variantStyles: Record<Variant, FlattenSimpleInterpolation> = {
  'text-xs-bold-600': css`
    font-size: 11px;
    font-weight: 600;
    line-height: 13px;
  `,
  'text-xs-regular': css`
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
  `,
  'text-sm-bold': css`
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
  `,
  'text-sm-regular': css`
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
  `,
  'text-apply-filter': css`
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
  `,
  'text-md-bold': css`
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  `,
  'text-lg-regular': css`
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
  `,
  'text-lg-bold': css`
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  `,
  'text-lg-2-bold': css`
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
  `,
  'text-xl-regular': css`
    font-size: 28px;
    font-weight: 400;
    line-height: 28px;
  `,
  'text-xl-bold': css`
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
  `,
  'text-filter-checkbox': css`
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
  `,
  'text-filter-active': css`
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
  `,
};

export const Text = styled(BaseText)<Props>`
  color: ${({ theme }) => theme.colors.black};
  ${({ variant }) => variantStyles[variant!]}
`;
