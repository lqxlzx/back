import React, { Fragment, Component } from "react";
import HeaderNav from "../../common/HeaderNav";
import { Div, Button, Input, Span } from "cowui";
import Select from "react-select";

export default class AddMine extends Component {
  render() {
    return (
      <Fragment>
        <Div>
          <HeaderNav />
          <Div jc='c'>
            <Div wp={100} mt={26} jc="c">
              <Div wp={99}>
                <Div jc="c">
                  <Div jc="c" bg="ff" wp={98} hp={100} pt={20}>
                    <Div
                      wp={98}
                      b={[1, "s", "fe"]}
                      bt={[3,'s','p']}
                      r={4}
                    >
                      <Div wp={100} h={62} jc="sb" bb={[1, "d", "fc"]}>
                        <Div ai="c" pl={18}>
                          <Div >基本设置</Div>
                        </Div>
                      </Div>
                      <Div wp={100} jc="c">
                        <Div fd="c" c="f6" wp={70} jc="c">
                          <Div wp={100} mt={30} mb={20}>
                            名称
                            <Input ml={15} pl={20} wp={60} type="text" />
                          </Div>
                          <Div wp={100} mb={20}>
                            排序
                            <Input ml={15} pl={20} wp={60} type="text" />
                          </Div>
                          <Div wp={100} mb={20} ai="c">
                            类别
                            <Div wp={61.1} ml={15} fs={0.5}>
                              <Select
                                placeholder="请选择..."
                                theme={theme => ({
                                  ...theme,
                                  borderRadius: 0,
                                  height: {
                                    ...theme.height
                                  }
                                })}
                              />
                            </Div>
                          </Div>

                          <Div wp={100} mb={20} ai="c">
                            <Span>位置</Span>
                            <Div wp={45} jc fs={0.8}>
                              <Div wp={33.3} ml={15}>
                                <Select
                                  placeholder="省"
                                  theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    height: {
                                      ...theme.height
                                    }
                                  })}
                                />
                              </Div>
                              <Div wp={33.3} ml={15}>
                                <Select
                                  placeholder="市"
                                  theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    height: {
                                      ...theme.height
                                    }
                                  })}
                                />
                              </Div>
                              <Div wp={33.3} ml={15}>
                                <Select
                                  placeholder="镇"
                                  theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    height: {
                                      ...theme.height
                                    }
                                  })}
                                />
                              </Div>
                            </Div>
                          </Div>
                          <Div pl={47} ai="c" mb={50}>
                            <Input type="text" wp={50} />
                            <Div pl={20} b>
                              详细地址
                            </Div>
                          </Div>
                          <Div wp={100} mb={20}>
                            负荷
                            <Input ml={15} pl={20} wp={60} type="text" />
                          </Div>
                          <Div wp={100} mb={20}>
                            电价
                            <Input ml={15} pl={20} wp={60} type="text" />
                          </Div>
                          <Div wp={100} ml={-32}>
                            机位数量
                            <Input ml={15} pl={20} wp={60} type="text" />
                          </Div>
                          <Div wp={100} pl={45} mt={20} mb={30}>
                            <Button
                              wp={60}
                              bg='p'
                              c="ff"
                            >
                              确认添加
                            </Button>
                          </Div>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Fragment>
    );
  }
}
