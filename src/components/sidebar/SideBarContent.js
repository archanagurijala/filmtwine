import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBarJSON from './SideBarJSON'

export default class SideBarComponent extends Component {
    render() {
        return (
            <div className="pro-sidebar-content">
                <nav className="pro-menu">
                    <ul>
                        {SideBarJSON && SideBarJSON.menuItems.map((menu, index) => (
                            <li className="pro-menu-item" key={index}>
                                {menu && menu.title && <h4>{menu && menu.title}</h4>}
                                {!menu.title &&
                                    <Link to={"/" + menu.name} className={menu.name === this.props.selected ? "pro-inner-item active" : "pro-inner-item"} tabIndex={index} role="button" onClick={() => this.props.selectedItem(menu.name)}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <img src={menu && menu.icon} alt="" />
                                            </span>
                                        </span>
                                        <span className="pro-item-content">{menu && menu.text} {menu && menu.badge && <span className="badge badge-pill badge-danger ml-2">{menu.badge}</span>}</span>
                                    </Link>
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        )
    }
}