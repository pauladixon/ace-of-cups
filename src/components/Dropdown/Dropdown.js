import React, { useState } from 'react'
import onClickOutside from 'react-onclickoutside'
import './Dropdown.scss'


function Dropdown(){
    
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)