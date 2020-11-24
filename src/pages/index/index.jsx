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
    editorReady = () => {
        console.log('ready')
        this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
        return
        Taro.createSelectorQuery().select('#editor').context((res) => {
            this.editorCtx = res.context;
            let {articleId, mode} = this.$router.params;

            // 编辑文章,拉取内容
            if (mode === 'edit') {
                getReminisceInfo(articleId).then((res2) => {
                    this.setState({
                        title: res2.title || '',
                    });
                    this.editorCtx.setContents({
                        'html': res2.richTextContent || '',
                    });
                });
            }

        }).exec();
    }

    onStatusChange(e) {
        this.setState({
            formats: e.detail,
        });
    }

    render() {
        return (
            <View className='index'>
                <Text>Hello world!</Text>

                <Editor
                    className='editor ql-container'
                    placeholder='写文章...'
                    onReady={this.editorReady.bind(this)}
                    onStatuschange={this.onStatusChange.bind(this)}
                    showImgToolbar
                    showImgResize
                    showImgSize
                />

                <View className=''>没有??</View>
            </View>
        )
    }
}
