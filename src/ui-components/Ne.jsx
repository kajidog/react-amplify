/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, TextAreaField } from "@aws-amplify/ui-react";
export default function Ne(props) {
  const { test, overrides, ...rest } = props;
  return (
    <Flex
      gap="51px"
      direction="row"
      width="1260px"
      height="354px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="19px 21px 19px 21px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Ne")}
      {...rest}
    >
      <TextAreaField
        width="300px"
        height="unset"
        shrink="0"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField38474850")}
      ></TextAreaField>
      <TextAreaField
        width="300px"
        height="unset"
        shrink="0"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField38474864")}
      ></TextAreaField>
      <TextAreaField
        width="300px"
        height="unset"
        shrink="0"
        label={test}
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField38474857")}
      ></TextAreaField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="link"
        children="送信"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
