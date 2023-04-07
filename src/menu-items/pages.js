// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'administracion',
    title: 'Administración',
    type: 'group',
    children: [
        {
            id: 'tags',
            title: 'Gestionar Tags',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'entornos',
            title: 'Gestionar Entornos',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'test',
            title: 'Gestionar Tests',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default pages;
