import React, { Component } from "react";
import { Div, Input } from "cowui";
import HeaderNav from "../../common/HeaderNav";

import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class AddUser extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
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
      <Div wp={100}>
        <HeaderNav />
        <Div jc="c">
          <Div wp={97} jc="c" mt={26}>
            <Div wp={100} bg="ff" jc="c">
              <Div wp={98}>
                <Div
                  wp={100}
                  b={[1, "s", "fe"]}
                  bt={[3, "s", "p"]}
                  r={4}
                  mt={20}
                >
                  <Div
                    wp={100}
                    h={62}
                    pl={18}
                    pr={19}
                    ai="c"
                    bb={[1, "d", "fc"]}
                    jc="sb"
                  >
                    <Div fs={1}>基本设置</Div>
                    <Div
                      fs={0.5}
                      c="ff"
                      w={82}
                      h={30}
                      bg="p"
                      style={{ cursor: "pointer" }}
                      pt={6}
                      pl={18}
                      r={3}
                    >
                      确认添加
                    </Div>
                  </Div>
                  <Div wp={70} style={styles.from}>
                    <Div mt={30}>
                      {from.map((item, index) => (
                        <Div jc key={index} mt={20}>
                          <Div pr={5} mt={5}>
                            {item.title}：
                          </Div>
                          <Input wp={70} style={styles.ou} />
                        </Div>
                      ))}
                      <Div jc mt={20} mb={20}>
                        <Div pr={5} mt={5}>
                          类别：
                        </Div>

                        <Select
                          className="user"
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                          placeholder="选择......."
                          styles={{
                            option: base => ({
                              ...base,

                              height: "100%"
                            })
                          }}
                          theme={theme => ({
                            ...theme,
                            borderRadius: 0
                          })}
                        />
                      </Div>
                    </Div>
                  </Div>
                </Div>

                {/* 页眉 */}
                <Div mt={20}>
                  <Div wp={100} jc="sb" fs={0.5} c="f3">
                    <Div></Div>
                    <Div jc>
                      <Div mr={30}>共有3条</Div>
                      <Div>每页：15条/共有20页</Div>
                    </Div>
                  </Div>
                </Div>
                <Div w={25} h={25} bg="p" r={3} c="ff" className="ye">
                  7
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    );
  }
}

const styles = {
  from: {
    margin: "auto"
  },
  ou: {
    outline: "none"
  },
  no: {
    outline: "none"
  },
  posion: {
    position: "relative",
    bakground: "blue"
  },
  posi: {
    borderRight: "1px solid #e5e5e5",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    width: "37px"
  },
  i: {
    width: "37px",
    fontSize: "12px",
    textAlign: "center",
    height: "25px",
    display: "inline-block",
    paddingTop: "8px"
  }
};

export default AddUser;
