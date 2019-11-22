import React, { Component } from "react";
import { Div } from "cowui";
import HeaderNav from "../../common/HeaderNav";

class UserList extends Component {
  render() {
    const from = [
      { title: "序号" },
      { title: "预存" },
      { title: "名称" },
      { title: "余额" },
      { title: "欠款" },
      { title: "手机" },
      { title: "邮件" },
      { title: "微信" }
    ];
    return (
      <Div>
        <HeaderNav />
        <Div wp={100} jc="c" mt={26}>
          <Div wp={97} bg="ff">
            <Div>
              <Div jc="c" wp={100}>
                <Div wp={98} mt={20}>
                  <Div wp={100} b={[1, "s", "fe"]} bt={[3, "s", "p"]} r={4}>
                    <Div
                      wp={100}
                      h={62}
                      ai="c"
                      pl={18}
                      pr={19}
                      bb={[1, "d", "fc"]}
                      jc="sb"
                    >
                      <Div fs={1}>客户列表</Div>
                      <Div
                        fs={0.5}
                        c="ff"
                        w={82}
                        h={30}
                        bg="p"
                        ai="c"
                        jc="c"
                        r={3}
                      >
                        确认添加
                      </Div>
                    </Div>
                    <Div wp={100} jc="c">
                      <Div wp={98}>
                        <Div mt={30} jc="sa" bg="bp">
                          {from.map((item, index) => (
                            <Div jc key={index}>
                              <Div pr={5} mt={5}>
                                {item.title}
                              </Div>
                            </Div>
                          ))}
                        </Div>
                        <Div wp={100} mt={30} tc>
                          暂时没内容
                        </Div>
                      </Div>
                    </Div>
                  </Div>

                  {/* 页眉 */}
                  <Div mt={20}>
                    <Div wp={100} jc="fe" fs={0.5} c="f3">
                      <Div jc>
                        <Div mr={30}>共有3条</Div>
                        <Div>每页：15条/共有20页</Div>
                      </Div>
                    </Div>
                  </Div>
                  <Div w={25} h={25} bg="p" r={3} c="ff" className="ye">
                    8
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    );
  }
}
export default UserList;
