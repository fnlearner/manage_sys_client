import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox} from "antd";
import { Container, InlineBox } from "./style";
import Coffee from "../../components/Coffee";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (submit: any, values: unknown) => {
  // console.log(typeof submit)
  if (!values) return false;
  submit(true);
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: unknown) => {
  console.log("Failed:", errorInfo);
  if (errorInfo) return false;
};

const Login = (props: { submit: (val: any) => void }) => {
  const [inputval, setinputval] = useState("");
  useEffect(() => {
    console.log(inputval);
  }, [inputval]);

  const changeInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputval(e.target.value);
  };
  return (
    <Container>
      <InlineBox>    
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish.bind(null, props.submit)}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input onChange={changeInputVal} value={inputval} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </InlineBox>
      <Coffee />
    </Container>
  );
};

export default Login;
