import { Component, PropsWithChildren } from "react";
import { View, Text, Button, Form, Input } from "@tarojs/components";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Form>
        <View className='h-full justify-center items-center'>
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
          <Button>登录</Button>
        </View>
      </Form>
    );
  }
}
