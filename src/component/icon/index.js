import FontAwesome from "react-native-vector-icons/FontAwesome"
import {CustomIcon} from "./icon"
import React, {Component} from 'react'
import PropTypes from 'prop-types'

const iconMap = {
    vectorIcon: FontAwesome,
    customIcon: CustomIcon
}
export default class Icon extends Component {
    render() {
        const {name, size, color} = this.props;
        if (!name.includes('|')) {
            throw  new Error("name 解析错误")
            return null
        }
        const nameArray = name.split('|');
        const type = nameArray[0];
        const  nametype = nameArray[1];
        const IconType = iconMap[type]
        if (!IconType) {
            throw new Error("没有找打匹配的icon库")
        }
        return (
            <IconType name={nametype} size={size} color={color}/>
        )
    }
}
Icon.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
}
Icon.defaultProps = {
    name: '',
    color: "",
    size: '',
}