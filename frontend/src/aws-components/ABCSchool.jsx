import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { View } from '@aws-amplify/ui-react';


export default function ABCSchool(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="89px"
    height="16px"
    display="block"
    overflow="hidden"
    position="relative"
    {...getOverrideProps(overrides, "ABCSchool")}
    {...rest}
  />
  )
}
