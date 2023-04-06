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
            title: 'Añadir tags',
            type: 'item',
            url: '/',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'entornos',
            title: 'Añadir Entornos',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'test',
            title: 'Añadir Tests',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default pages;
