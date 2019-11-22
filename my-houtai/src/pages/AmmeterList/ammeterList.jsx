import React, { Fragment } from "react";
import HeaderNav from "../../common/HeaderNav";
import { Div, Span, Input } from "cowui";
import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Select from "react-select";

export default () => {
  return (
    <Fragment>
      <Div wp={100}>
        <HeaderNav />
        <Div wp={100} jc="c" mt={26}>
          <Div jc="c" wp={100}>
            <Div jc="c" bg="ff" wp={97} hp={100} pt={20}>
              <Div
                wp={98}
                b={[1, "s", "fe"]}
                bt={[3,'s','p']}
                r={4}
              >
                <Div wp={100} h={60} jc="sb" bb={[1, "d", "fc"]} mb={30}>
                  <Div ai="c" pl={18}>
                    <Div>电表级别列表</Div>
                  </Div>
                </Div>
                <Div wp={100} jc="c">
                  <Div fd="c" c="f6" wp={100} jc="c">
                    <Div wp={100} mb={20} ai="c" jc="sa">
                      {/* 位置和类别 */}
                      <Div jc wp={70} pl={16}>
                        <Div wp={80} fs={0.5}>
                          <Select
                            placeholder="类别筛选..."
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
                      <Div f={1} jc>
                        <Input
                          wp={87}
                          type="text"
                          placeholder="搜索..."
                          c="f3"
                        />
                        <Div
                          w={40}
                          h={31}
                          b={[1, "s", "fc"]}
                          cp
                          bl={[0]}
                          jc="c"
                          ai="c"
                        >
                          <IoIosSearch />
                        </Div>
                      </Div>
                    </Div>
                    <Div jc="c">
                      <Div jc="c" bg="ff" wp={100} hp={100} pt={20}>
                        <Div wp={98.2} b={[1, "s", "fe"]} r={2}>
                          <Div
                            wp={100}
                            h={60}
                            jc="sb"
                            
                            bg='fe'
                            bb={[1, "d", "fc", 3]}
                            mb={30}
                          >
                            <Div ai="c" pl={10}>
                              <Div c="f6" b>
                                列表
                              </Div>
                            </Div>
                          </Div>
                          <Div wp={100}>
                            {/* 查询结果 */}
                            <Div fd="c" c="f6" wp={100} jc="c">
                              <Div
                                wp={100}
                                mb={20}
                                ai="c"
                                jc="sb"
                                h={60}
                                jc="sb"
                                jc="c"
                              >
                                <Div wp={98.2} jc="sb">
                                  <Div fd="c" ai="c" h={60} jc="sb">
                                    <Span b>序号</Span>
                                    <Div>ss</Div>
                                  </Div>
                                  <Div fd="c" ai="c" h={60} jc="sb">
                                    <Span b>名称</Span>
                                    <Div>ss</Div>
                                  </Div>
                                  <Div fd="c" ai="c" h={60} jc="sb">
                                    <Span b>负荷</Span>
                                    <Div>ss</Div>
                                  </Div>
                                  <Div fd="c" ai="c" h={60} jc="sb">
                                    <Span b>电价</Span>
                                    <Div> ss</Div>
                                  </Div>
                                  <Div fd="c" ai="c" h={60} jc="sb">
                                    <Span b>状态</Span>
                                    <Div
                                      ai="c"
                                      jc="c"
                                      c="p"
                                      w={58}
                                      h={22}
                                      b={[1, "d", "p"]}
                                      fs={0.1}
                                    >
                                      已启用
                                    </Div>
                                  </Div>
                                  <Div fd="c" ai="c" h={60} jc="sb">
                                    <Span b>创建时间</Span>
                                    <Div fs={0.8}>2088/11/11</Div>
                                  </Div>
                                  <Div fd="c" ai="c" h={60} jc="sb">
                                    <Span b>操作</Span>
                                    <Div jc="c" c="f6" fs={0.12}>
                                      <Div
                                        ai="c"
                                        jc="c"
                                        w={62}
                                        h={30}
                                        b={[1, "s", "fc"]}
                                        r={[3, 0, 0, 3]}
                                      >
                                        <Div mr={5} fs={0.8} h={30} ai="c">
                                          <FaEdit />
                                        </Div>
                                        编辑
                                      </Div>
                                      <Div
                                        ai="c"
                                        jc="c"
                                        w={62}
                                        h={30}
                                        b={[1, "s", "fc"]}
                                        r={[0, 3, 3, 0]}
                                      >
                                        <Div mr={5} fs={0.9} h={30} ai="c">
                                          <MdDelete />
                                        </Div>
                                        删除
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
                    <Div jc="c" pt={10} pb={10}>
                      <Div wp={98.2} jc="fe" fs={0.2} c="f9">
                        共一条<Span pl={10}></Span>每页：15条 / 共有1页
                      </Div>
                    </Div>
                    <Div jc="c" wp={98.2} pb={20}>
                      <Div
                        ai="c"
                        jc="c"
                        c="ff"
                        w={25}
                        h={25}
                        r={3}
                        bg='p'
                      >
                        1
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
