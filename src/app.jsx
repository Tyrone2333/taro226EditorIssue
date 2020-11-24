import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

    componentDidMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentDidCatchError() {
    }

    config = {
        pages: [
            'pages/index/index',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black',
        },
        "dynamicLib": {
            // 'smartUI' 是个可自己定的别名。本小程序中统一用这个别名引用此动态库。
            "smartUI": {
                // 这个 provider 就是发布的动态库唯一名字，须写 "smart-ui"。
                "provider": "smart-ui",
            },
            "editorLib": {
                "provider": "swan-editor"
            }
        },
        "usingComponents": {
            "smt-icon": "dynamicLib://smartUI/smt-icon",
            "editor": "dynamicLib://editorLib/editor",
        },
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Index/>
        )
    }
}

Taro.render(<App/>, document.getElementById('app'))
