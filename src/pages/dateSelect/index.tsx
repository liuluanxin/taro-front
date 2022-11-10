import { Component, PropsWithChildren } from "react";
import { View, Text, Button } from "@tarojs/components";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='bg-blue-300 h-full justify-center items-center'>
        <View className='flex flex-col'>
          <Text>Hello world!</Text>
        </View>
        <Button>Hello worldssss!</Button>
      </View>
    );
  }
}
