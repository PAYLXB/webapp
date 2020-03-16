import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
    loadOpen(){
        Indicator.open({
            text: 'Loading...',
            spinnerType: 'fading-circle'
        })
    },
    loadClose(){
        Indicator.close()
    },
    /**
     * 消息提示弹框
     * @param {*} content 内容
     * @param {*} title 标题
     */
    messageBox(content,title){
        MessageBox(title || '提示', content || '暂无数据');
    }
}