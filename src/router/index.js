import IncidentDescScreen from '../screens/home/IncidentDescScreen';
import TheoryDescScreen from '../screens/home/TheoryDescScreen';
import ImageSaveScreen from '../screens/home/ImageSaveScreen';
import ImagePicker from '../screens/home/ImagePicker';
import AudioScreen from '../screens/home/AudioScreen';
import Error from '../screens/error/Error';
import StackScreen from '../screens/storage/StackScreen';
import InfoScreen from '../screens/wechat/InfoScreen';
const StorageStackRoutes = [
    {
        name: 'StackScreen',
        component: StackScreen,
        option: { title: 'StackPages' },
    }
];
const HomeStackRoutes = [
    {
        name: 'TheoryDescScreen',
        component: TheoryDescScreen,
        option: { title: 'WebView网页' },
    },
    {
        name: 'IncidentDescScreen',
        component: IncidentDescScreen,
        option: { title: '视频集成' },
    },
    {
        name: 'AudioScreen',
        component: AudioScreen,
        option: { title: '音频集成' },
    },
    {
        name: 'ImagePicker',
        component: ImagePicker,
        option: { title: '访问相机集成' },
    },

    {
        name: 'ImageSaveScreen',
        component: ImageSaveScreen,
        option: { title: '图片保存' },
    }
];
const CameraStackRoutes = [];
const WechatStackRoutes = [
    {
        name: 'InfoScreen',
        component: InfoScreen,
        option: { title: 'InfoScreen' },
    }
];
const ErrorStackRoutes = [
    {
        name: 'Error',
        component: Error,
        option: { title: '错误页面' },
    }
];
export const containStackRoutes = [
    ...HomeStackRoutes,
    ...StorageStackRoutes,
    ...WechatStackRoutes,
    ...CameraStackRoutes,
    ...ErrorStackRoutes
]