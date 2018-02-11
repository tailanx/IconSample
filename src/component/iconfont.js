import React, {Component} from 'react'
import {Text} from 'react-native'
import icons from '../assets/fonts/iconfont'

const FONTSIZE = {
    xxs:15,
    xs:18,
    sm:21,
    md:22,
    lg:36
}
export  default  class IconFont extends Component{
    render(){
        const {type,color,size,styles} = this.props
        return (
            <Text
                style={[{
                    color:color||"#666",
                    fontSize:size|| FONTSIZE.xxs,
                    fontWeight:'normal',
                    fontStyle:'normal',
                    fontFamily:'iconfont',
                    alignItems:'center',
                    textAlignVertical:'center',
                    textAlign:'center',
                    backgroundColor:"rgba(0,0,0,0)"

                },styles]}

            >
                {icons[type]}
            </Text>

        )
    }
}