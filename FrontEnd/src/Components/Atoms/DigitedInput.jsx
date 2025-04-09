import React from 'react';
import { Flex, Input } from 'antd';
const DigitedInput = () => {
  const onChange = text => {
    console.log('onChange:', text);
  };
  const onInput = value => {
    console.log('onInput:', value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  return (
    <Flex gap="middle" align="flex-start" vertical>
      <Input.OTP variant="filled" length={4} {...sharedProps} />
    </Flex>
  );
};
export default DigitedInput;