import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css"

function Header() {
    return (
        <div className="Header">
            <img className="Header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            <div className="header_search">
                <input type="text" className="Header-SearchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="Header_nav">
                <div className="hrader-option">
                    <span className="header-optionLineOne">Hello guest</span>
                    <span className="header-optionLineTwo">Sign In</span>
                </div>
                <div className="hrader-option">
                <span className="header-optionLineOne">Return</span>
                    <span className="header-optionLineTwo"> & Orders</span>
                </div>
                
                <div className="hrader-option">
                <span className="header-optionLineOne"> Your</span>
                    <span className="header-optionLineTwo"> Prime</span>
                </div>
                <div className="header_optionBasket">
                      <ShoppingBasketIcon/>
                      <span className="header-optionLineTwo header_basketCount">0</span>

                </div>
            </div>
        </div>
    )
}

export default Header
