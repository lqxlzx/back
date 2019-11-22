import React, { Component } from "react";
import { Div, Input } from "cowui";
import { GoSearch } from "react-icons/go";
import { AiOutlineForm } from "react-icons/ai";
import { IoIosTrash } from "react-icons/io";
import HeaderNav from "../../common/HeaderNav";

import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
class FrameList extends Component {
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
      <Div>
        <HeaderNav />
        <Div wp={100} jc="c">
          <Div wp={97} mt={26} jc="c">
            <Div wp={100} jc="c" bg="ff">
              {/* 机架机位列表 */}
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
                    style={styles.mg}
                    ai="c"
                    bb={[1, "d", "fc"]}
                    jc="sb"
                    pl={18}
                    pr={18}
                  >
                    <Div fs={1} c="my">
                      机架机位列表
                    </Div>
                    <Div
                      fs={0.5}
                      c="ff"
                      w={82}
                      h={30}
                      cp
                      bg="p"
                      ai="c"
                      jc="c"
                      r={3}
                    >
                      确认添加
                    </Div>
                  </Div>
                  <Div wp={90} style={styles.from}>
                    <Div jc mt={30} wp={100}>
                      <Div jc wp={100}>
                        <Select
                          className="leibie"
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                          placeholder="分类筛选..."
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

                      <Div jc wp={100}>
                        <Select
                          className="leibie"
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                          placeholder="矿场..."
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

                      <Div jc wp={100}>
                        <Input
                          wp={80}
                          c="f3"
                          style={styles.ou}
                          placeholder="表层次"
                        />
                      </Div>

                      <Div jc wp={100}>
                        <Input
                          wp={80}
                          c="f3"
                          placeholder="编码搜索..."
                          pl={8}
                        />
                        <Div style={styles.posi}>
                          <i style={styles.i}>
                            <GoSearch />
                          </i>
                        </Div>
                      </Div>
                    </Div>

                    {/* 列表 */}
                    <Div wp={100} mt={40}>
                      <Div wp={100} jc="sb" pl={13} ml={-10}>
                        <Div>序号</Div>
                        <Div>矿场</Div>
                        <Div>表层次</Div>
                        <Div jc w={366}>
                          <Div wp={28}>状态</Div>
                          <Div wp={42}>创建时间</Div>
                          <Div wp={21} style={styles.al}>
                            操作
                          </Div>
                        </Div>
                      </Div>
                      <Div wp={100} jc="sb" h={45} bt={[1, "s", "fc"]} pt={10}>
                        <Div wp={20} pl={20}>
                          1
                        </Div>
                        <Div jc w={390}>
                          <Div
                            mr={10}
                            h={26}
                            fs={0.5}
                            pt={3}
                            c="p"
                            style={styles.al}
                            wp={16}
                            bg="p"
                            c="ff"
                            r={3}
                          >
                            已上架
                          </Div>
                          <Div fs={0.5} w={130} pt={2} ml={18}>
                            2019 - 11 - 11 18:35
                          </Div>
                          <Div jc wp={35} ml={20}>
                            <Div
                              fs={0.5}
                              c="f3"
                              h={26}
                              p={2}
                              style={styles.al}
                              w={70}
                              b={[1, "s", "fc"]}
                              jc
                              r={[3, 0, 0, 3]}
                              className="colorer"
                            >
                              <Div ml={7} mt={3} mr={6}>
                                <AiOutlineForm />
                              </Div>
                              <Div>修改</Div>
                            </Div>
                            <Div
                              fs={0.5}
                              c="f3"
                              w={70}
                              h={26}
                              pt={2}
                              style={styles.al}
                              className="colorer"
                              r={[0, 3, 3, 0]}
                              bt={[1, "s", "fc"]}
                              br={[1, "s", "fc"]}
                              bb={[1, "s", "fc"]}
                              jc
                            >
                              <Div ml={9} mt={2} mr={6}>
                                <IoIosTrash />
                              </Div>
                              <Div>删除</Div>
                            </Div>
                          </Div>
                        </Div>
                      </Div>
                      <Div wp={100} jc="sb" h={45} bt={[1, "s", "fc"]} pt={10}>
                        <Div wp={20} pl={20}>
                          1
                        </Div>
                        <Div jc w={390}>
                          <Div
                            mr={10}
                            h={26}
                            fs={0.5}
                            pt={3}
                            c="p"
                            style={styles.al}
                            wp={16}
                            bg="s"
                            c="ff"
                            r={3}
                          >
                            空闲
                          </Div>
                          <Div fs={0.5} w={130} pt={2} ml={18}>
                            2019 - 11 - 11 18:35
                          </Div>
                          <Div jc wp={35} ml={20}>
                            <Div
                              fs={0.5}
                              c="f3"
                              h={26}
                              p={2}
                              style={styles.al}
                              w={70}
                              b={[1, "s", "fc"]}
                              jc
                              r={[3, 0, 0, 3]}
                              className="colorer"
                            >
                              <Div ml={7} mt={3} mr={6}>
                                <AiOutlineForm />
                              </Div>
                              <Div>修改</Div>
                            </Div>
                            <Div
                              fs={0.5}
                              c="f3"
                              w={70}
                              h={26}
                              pt={2}
                              style={styles.al}
                              bt={[1, "s", "fc"]}
                              br={[1, "s", "fc"]}
                              className="colorer"
                              bb={[1, "s", "fc"]}
                              jc
                              r={[0, 3, 3, 0]}
                            >
                              <Div ml={9} mt={2} mr={6}>
                                <IoIosTrash />
                              </Div>
                              <Div>删除</Div>
                            </Div>
                          </Div>
                        </Div>
                      </Div>
                      <Div
                        wp={100}
                        jc="sb"
                        h={45}
                        bt={[1, "s", "fc"]}
                        pt={10}
                        mb={20}
                      >
                        <Div wp={20} pl={20}>
                          1
                        </Div>
                        <Div jc w={390}>
                          <Div
                            mr={10}
                            h={26}
                            fs={0.5}
                            pt={3}
                            c="i"
                            style={styles.al}
                            wp={16}
                            bg="p"
                            c="ff"
                            r={3}
                          >
                            已上架
                          </Div>
                          <Div fs={0.5} w={130} pt={2} ml={18}>
                            2019 - 11 - 11 18:35
                          </Div>
                          <Div jc wp={35} ml={20}>
                            <Div
                              fs={0.5}
                              c="f3"
                              h={26}
                              p={2}
                              style={styles.al}
                              w={70}
                              b={[1, "s", "fc"]}
                              className="colorer"
                              jc
                              r={[3, 0, 0, 3]}
                            >
                              <Div ml={7} mt={3} mr={6}>
                                <AiOutlineForm />
                              </Div>
                              <Div>修改</Div>
                            </Div>
                            <Div
                              fs={0.5}
                              c="f3"
                              w={70}
                              h={26}
                              pt={2}
                              style={styles.al}
                              bt={[1, "s", "fc"]}
                              className="colorer"
                              br={[1, "s", "fc"]}
                              bb={[1, "s", "fc"]}
                              jc
                              r={[0, 3, 3, 0]}
                            >
                              <Div ml={9} mt={2} mr={6}>
                                <IoIosTrash />
                              </Div>
                              <Div>删除</Div>
                            </Div>
                          </Div>
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
                  10
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
    fontSize: "12px",
    textAlign: "center",
    height: "25px",
    display: "inline-block",
    paddingTop: "10px"
  }
};
export default FrameList;
