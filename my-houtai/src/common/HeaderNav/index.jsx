import React, { Component } from 'react';
import { Div } from 'cowui';
import { Link } from 'react-router-dom';
import Links from '../../config/headerlink';
import { map, each } from 'lodash';
import { findDOMNode } from 'react-dom';
import './header-nav.css';

export default class HeaderNav extends Component {


    

    componentDidMount() {
        findDOMNode(this.refs.item0).classList.add("active")
    }
    indexStyle = (currentIndex) => {
        const {links} = Links;
        each(links, (item, index) => {
            findDOMNode(this.refs['item' + index]).classList.remove("active")
            if (currentIndex === index) {
                findDOMNode(this.refs['item' + currentIndex]).classList.add("active")
            }

        })
    }
    render() {
        const { links } = Links;
        return (
            <Div wp={100} h={40} style={{background:"#0ba2b5"}}>
                <Div wp={80} h={40} c='ff' ml={20} ai='c'>
                    {
                        map(links, (item, index) =>
                            <Link onClick={() => this.indexStyle(index)} key={index} to={item.to} ref={`item${index}`}>
                                <Div pl={20} pr={20} h={40} lh={40} >{item.content}</Div>
                            </Link>
                        )
                    }
                    {/* <Link to="/minelist">
                    <Div c='ff' pl={20} pr={20} h={30} lh={30}>矿场列表</Div>
                </Link>
                <Link to="/ammeterlevel">
                    <Div c='ff' pl={20} pr={20} h={30} lh={30}>添加电表级别</Div>
                </Link>
                <Link to="/ammeterlist">
                    <Div c='ff' pl={20} pr={20} h={30} lh={30}>电表级别列表</Div>
                </Link>
                <Link to="/recording">
                    <Div c='ff' pl={20} pr={20} h={30} lh={30}>维修添加记录</Div>
                </Link>
                <Link to="/recordinglist">
                    <Div c='ff' pl={20} pr={20} h={30} lh={30}>添加记录列表</Div>
                </Link> */}
                </Div>
            </Div>
        )
    }
}
