/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NeOverridesProps = {
    Ne?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField38474850?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TextAreaField38474864?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TextAreaField38474857?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NeOverridesProps | undefined | null;
}>;
export default function Ne(props: NeProps): React.ReactElement;
