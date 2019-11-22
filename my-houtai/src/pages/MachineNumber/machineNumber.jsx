import React, { Component } from "react";
import { Div, Input } from "cowui";
import HeaderNav from "../../common/HeaderNav";

import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
class MachineNumber extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    const xin = [
      { num: "序号", mr: 30 },
      { num: "型号", mr: 30 },
      { num: "币种", mr: 30 },
      { num: "算入", mr: 30 },
      { num: "功耗", mr: 30 },
      { num: "批量" }
    ];
    return (
      <Div>
        <HeaderNav />
        <Div jc="c" mt={26}>
          <Div wp={97} bg="ff" pt={20} jc="c">
            <Div wp={100}>
              <Div>
                <Div jc="c" wp={100}>
                  <Div wp={98}>
                    <Div
                      wp={100}
                      h={160}
                      b={[1, "s", "fe"]}
                      bt={[3, "s", "p"]}
                      r={4}
                    >
                      <Div
                        wp={100}
                        h={62}
                        style={styles.mg}
                        bb={[1, "d", "fc"]}
                        jc="sb"
                        ai="c"
                        pl={18}
                        pr={18}
                      >
                        <Div fs={1} c="my">
                          基本设置
                        </Div>
                        <Div
                          fs={0.5}
                          c="ff"
                          w={82}
                          h={30}
                          bg="p"
                          ai="c"
                          pl={18}
                          r={3}
                          cp
                        >
                          确认添加
                        </Div>
                      </Div>
                      <Div wp={70} style={styles.from}>
                        <Div jc mt={30}>
                          <Select
                            className="leibie"
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            placeholder="所属客户......."
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
                </Div>
                <Div jc="c" wp={100}>
                  <Div wp={98}>
                    <Div
                      wp={100}
                      b={[1, "s", "fe"]}
                      bt={[3, "s", "p"]}
                      r={4}
                      mt={40}
                    >
                      <Div
                        wp={100}
                        h={62}
                        style={styles.mg}
                        pt={16}
                        bb={[1, "d", "fc"]}
                        jc="sb"
                        pl={18}
                        pr={18}
                      >
                        <Div fs={1} c="my">
                          机床列表
                        </Div>
                        <Div
                          fs={0.5}
                          c="ff"
                          w={82}
                          h={30}
                          bg="p"
                          pt={6}
                          pl={18}
                          r={3}
                          style={{ cursor: "pointer" }}
                        >
                          确认添加
                        </Div>
                      </Div>
                      <Div wp={94} h={100} style={styles.from}>
                        <Div jc>
                          {xin.map((item, index) => (
                            <Div key={index} wp={40} mr={item.mr}>
                              <Div style={styles.al}>{item.num}</Div>
                            </Div>
                          ))}
                        </Div>
                        <Div jc mt={10}>
                          <Input wp={40} />
                          <Input wp={40} />
                          <Input wp={40} />
                          <Input wp={40} />
                          <Input wp={40} />
                          <Input wp={40} />
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
                      9
                    </Div>
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
const styles = {
  mg: {
    margin: "auto"
  },
  from: {
    margin: "auto",
    marginTop: 30
  },
  ou: {
    outline: "none"
  },
  al: {
    textAlign: "center"
  },
  posi: {
    borderRight: "1px solid #e5e5e5",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    width: "37px"
  },
  i: {
    width: "37px",
    // fontSize: "12px",
    textAlign: "center",
    height: "25px",
    display: "inline-block",
    paddingTop: "10px"
  }
};
export default MachineNumber;
