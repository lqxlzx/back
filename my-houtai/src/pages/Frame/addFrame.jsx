import React, { Component } from "react";
import { Div, Input } from "cowui";
import HeaderNav from "../../common/HeaderNav";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class AddFrame extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Div wp={100}>
        <HeaderNav />
        <Div wp={100} jc="c">
          <Div jc="c" wp={97} mt={26}>
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
                    ai="c"
                    wp={100}
                    h={62}
                    style={styles.mg}
                    pl={18}
                    pr={18}
                    bb={[1, "d", "fc"]}
                    jc="sb"
                  >
                    <Div fs={1}>添加机架</Div>
                    <Div
                      fs={0.5}
                      c="ff"
                      w={82}
                      h={30}
                      bg="p"
                      cp
                      jc="c"
                      ai="c"
                      r={3}
                    >
                      确认添加
                    </Div>
                  </Div>
                  <Div wp={70} style={styles.from}>
                    <Div mt={30} wp={70}>
                      {/* 上级 */}
                      <Div jc mt={20} wp={100}>
                        <Div mt={5}>上&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：</Div>
                        <Select
                          className="addjia"
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                          placeholder="选择..."
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

                      {/* 编号 */}
                      <Div jc mt={20} style={{ borderColor: "hsl(0,0%,80%)" }}>
                        <Div mt={5}>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</Div>
                        <Input wp={100} style={styles.ou} />
                      </Div>

                      {/* 层 */}
                      <Div jc mt={20}>
                        <Div mt={5}>层&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：</Div>
                        <Input wp={100} style={styles.ou} />
                      </Div>

                      {/* 类型 */}
                      <Div jc mt={20}>
                        <Div mt={5}>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</Div>

                        <Select
                          className="addjia"
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                          placeholder="选择..."
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

                      {/* 机位码 */}
                      <Div jc mt={20}>
                        <Div mt={5}>机&nbsp;位&nbsp;码：</Div>
                        <Select
                          className="addjia"
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                          placeholder="选择..."
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

                      {/* 选层 */}
                      <Div jc mt={20}>
                        <Div mt={5}>选&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;层：</Div>
                        <Input
                          wp={100}
                          fs={0.5}
                          c="f6"
                          placeholder="个数..."
                          style={styles.ou}
                        />
                      </Div>
                      <Div jc mt={20} mb={20}>
                        <Div
                          w={100}
                          h={30}
                          tc
                          cp
                          pt={3}
                          c="ff"
                          bg="p"
                          b={[1, "s", "fc"]}
                          ml={74}
                        >
                          生成
                        </Div>
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
                  5
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
  mg: {
    margin: "auto"
  },
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
    paddingTop: "10px"
  }
};
export default AddFrame;
