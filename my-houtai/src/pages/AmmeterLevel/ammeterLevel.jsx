import React, { Fragment } from "react";
import HeaderNav from "../../common/HeaderNav";
import { Div, Button, Input } from "cowui";
import Select from "react-select";

export default () => {
  return (
    <Fragment>
      <Div>
        <HeaderNav />
        <Div wp={100} jc='c'>
          <Div wp={100} jc="c" mt={26}>
            <Div wp={100} jc="c">
              <Div jc="c" bg="ff" wp={97} hp={100} pt={20}>
                <Div
                  wp={98}
                  b={[1, "s", "fe"]}
                  bt={[3,'s','p']}
                  r={4}
                >
                  <Div wp={100} h={62} jc="sb" bb={[1, "d", "fc"]}>
                    <Div ai="c" pl={18}>
                      <Div>添加电表级别</Div>
                    </Div>
                  </Div>
                  <Div wp={100} jc="c">
                    <Div fd="c" c="f6" wp={70} jc="c">
                      <Div wp={100} mt={30} mb={20}>
                        排序
                        <Input ml={15} pl={20} wp={60} type="text" />
                      </Div>

                      <Div wp={100} mb={20} ai="c">
                        类别
                        <Div wp={61.1} ml={15}>
                          <Select
                            className="select"
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
                      <Div wp={100} mb={20}>
                        编号
                        <Input ml={15} pl={20} wp={60} type="text" />
                      </Div>
                      <Div wp={100} pl={45} mt={20} mb={30}>
                        <Button
                          wp={60}
                          bg='p'
                          c="ff"
                        >
                          添加
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
    </Fragment>
  );
};
