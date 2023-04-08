import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const TestDashboardDefault = Loadable(lazy(() => import('pages/dashboard/test_dashboard')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const GestionTags = Loadable(lazy(() => import('pages/extra-pages/GestionTags')));
const GestionTest = Loadable(lazy(() => import('pages/extra-pages/GestionTest')));
const GestionEntorno = Loadable(lazy(() => import('pages/extra-pages/GestionEntorno')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'test-dashboard',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'test-dashboard',
            element: <TestDashboardDefault />
        },
        {
            path: 'gestion-tags',
            element: <GestionTags />
        },
        {
            path: 'gestion-entornos',
            element: <GestionEntorno />
        },
        {
            path: 'gestion-tests',
            element: <GestionTest />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
