import Taro, { Component } from '@tarojs/taro'
import { View, Text, Editor } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    config = {
        navigationBarTitleText: '首页',
    }

    render() {
        return (
            <View className='index'>
                <Text>Hello world!</Text>

                <Editor
                    className='editor ql-container'
                    placeholder='写文章...'
                    // onReady={this.editorReady}
                    // onStatuschange={this.onStatusChange.bind(this)}
                    showImgToolbar
                    showImgResize
                    showImgSize
                />
                <smt-icon name='arrow-left'></smt-icon>
                <smt-icon name='add' size='30px'/>
                <smt-icon name='add' size='36.232rpx'/>
                <smt-icon name='add' size='6vw'/>

                <View className=''>没有??</View>
            </View>
        )
    }
}
