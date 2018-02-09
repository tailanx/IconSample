React-Native中使用http://iconfont.cn
------------------------------------
# 首先需要登录，可使用github账号，阿里域账号，以及新浪微博
# 其次选择需要的图片，构建出一个项目用来以后可以快速找到
![](https://github.com/tailanx/IconSample/blob/master/image/icon1.png)
# 将需要的图片下载到本地
![](https://github.com/tailanx/IconSample/blob/master/image/icon2.png)
# 解压得到（iconfont.ttt文件）
![](https://github.com/tailanx/IconSample/blob/master/image/icon3.png)
使用
--------------------------------------
第一种使用方式
安装phtho，安装pip install fonttools
将iconfont.ttt 和icon-map.py放在同一目录下，执行 python icon-map.py iconfont.ttf iconfont.js 生成相关的iconfont.js文件,
![](https://github.com/tailanx/IconSample/blob/master/image/icon4.png)
在android项目中，将iconfont.ttf文件放入`/src/assets/fonts`目录下，ios中放入创建的fonts目录下 ，将iconfont.js文件放入src/assets/fonts目录下
```java
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


第二种使用方式使用·react-native-vector-icons·，官方地址[!](https://github.com/oblador/react-native-vector-icons)
安装 npm install react-native-vector-icons --save
添加原生 react-native link react-native-vector-icons





