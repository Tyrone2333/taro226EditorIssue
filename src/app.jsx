import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
let dynamicLib = {};
let usingComponents = {};
if (process.env.TARO_ENV === 'swan') {
    dynamicLib = {
        "editorLib": {
            "provider": "swan-editor",
        },
    };
    usingComponents = {
        "editor": "dynamicLib://editorLib/editor",
    };
}
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
        "dynamicLib": dynamicLib,
        "usingComponents": usingComponents,

        // "dynamicLib": {
        //     "editorLib": {
        //         "provider": "swan-editor"
        //     }
        // },
        // "usingComponents": {
        //     "editor": "dynamicLib://editorLib/editor",
        // },
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
