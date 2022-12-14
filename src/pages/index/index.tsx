import { View, Text, Button, Form, Input } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React from 'react';

export const Index = () => {
  const handleClick = () => {
    Taro.navigateTo({
      url: `/pages/login/index`,
    });
  };

  return (
    <Form>
      <View tw='h-full justify-center items-center'>
        <View className='flex flex-col'>
          <Text>
            账户：
            <Input className='border-collapse' />
          </Text>
          <Text>
            密码：
            <Input />
          </Text>
        </View>
        <Button type='primary' onClick={handleClick}>
          登录
        </Button>
      </View>
    </Form>
  );
};

export default Index;
