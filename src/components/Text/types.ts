import type { ReactNode } from 'react';
import type { TextProps } from 'react-native';

export type Fonts = '';

export type Props = {
  family?: Fonts;
  children?: ReactNode;
  variant?: Variant;
} & TextProps;

export type Variant =
  | 'text-sm-bold'
  | 'text-sm-regular'
  | 'text-md-bold'
  | 'text-lg-regular'
  | 'text-lg-bold'
  | 'text-xl-regular'
  | 'text-xl-bold'
  | 'text-lg-2-bold'
  | 'text-xs-bold-600'
  | 'text-xs-regular'
  | 'text-apply-filter'
  | 'text-filter-checkbox'
  | 'text-filter-active';
