import React, { Fragment } from "react";
import HeaderNav from "../../common/HeaderNav";
import { Div, Button, Input, Span } from "cowui";

export default () => {
  return (
    <Fragment>
      <Div wp={100}>
        <HeaderNav />
        <Div jc='c'> 
          <Div wp={100} jc="c" mt={26}>
            <Div jc="c" wp={100}>
              <Div jc="c" bg="ff" wp={97} hp={100} pt={20}>
                <Div
                  wp={98}
                  b={[1, "s", "fe"]}
                  bt={[3,'s','p']}
                  r={4}
                >
                  <Div wp={100} h={60} jc="sb" bb={[1, "d", "fc"]}>
                    <Div ai="c" pl={18}>
                      <Div>维修和添加记录</Div>
                    </Div>
                  </Div>
                  <Div wp={100} jc="c">
                    <Div fd="c" c="f6" wp={70} jc="c">
                      <Div wp={100} mt={30} mb={20}>
                        机码
                        <Input ml={15} pl={20} wp={60} type="text" />
                      </Div>
                      <Div wp={100} mb={20}>
                        时间
                        <Input ml={15} pl={20} wp={60} type="text" />
                      </Div>
                      <Div wp={100} mb={20} ai="c">
                        <Span>状态</Span>
                        <Div ai="c" wp={25} jc="sa" pl={15}>
                          <Div
                            wp={33}
                            jc="c"
                            ai="c"
                            bg="f6"
                            c='ff'
                          >
                            维修中
                          </Div>
                          <Div wp={33} jc="c" ai="c" bg="s" c="ff">
                            OK
                          </Div>
                          <Div
                            wp={33}
                            jc="c"
                            ai="c"
                            bg='d'
                            c='ff'
                          >
                            NO
                          </Div>
                        </Div>
                      </Div>

                      <Div wp={100} pl={45} mt={20} mb={30}>
                        <Button
                          wp={60}
                          c="ff"
                          bg="p"
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
