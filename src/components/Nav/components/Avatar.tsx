import React from "react";
import { Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getLoginStatus } from "../../../views/Login/store/actionCreator";
import { connect } from "react-redux";

type CustomProps = ReturnType<typeof mapDispatch> & ReturnType<typeof mapStateToProps>;

const CustomAvatar = (props: CustomProps) => {
  const { signOutDispatch } = props;
  const changeLoginStatus = () => {
    //TODO
    signOutDispatch(false)
    // console.log(signOutDispatch)
    console.log("false");
  };
  const menu = () => {
    return (
      <Menu>
        <Menu.Item onClick={changeLoginStatus}>Sing Out</Menu.Item>
      </Menu>
    );
  };
  return (
    <span>
      <Dropdown overlay={menu}>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </Dropdown>
    </span>
  );
};
interface SignOutDispatch {
  type: string;
  data: boolean;
}
const mapStateToProps = ({ reducer }: any) => ({
  isLogin: reducer?.isLoginReducer?.isLogin
});
const mapDispatch = (dispatch:any) => {
  return {
    signOutDispatch(param: boolean) {
      dispatch(getLoginStatus(param));
    },
  };
};
export default connect(mapStateToProps,mapDispatch)(React.memo(CustomAvatar));
