import { lazy } from 'react';
import { IRoute } from '@/interfaces/interfaceCommon';
import { Path } from './path';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Settings = lazy(() => import('@/pages/Settings'));
const TLSCommunications = lazy(() => import('@/pages/TLSCommunications'));
const Certificates = lazy(() => import('@/pages/Certificates'));

const routesConfig: IRoute[] = [
  {
    path: Path.DASHBOARD,
    component: Dashboard,
  },
  {
    path: Path.TLS_COMMUNICATIONS,
    component: TLSCommunications,
  },
  {
    path: Path.CERTIFICATES,
    component: Certificates,
  },
  {
    path: Path.SETTINGS,
    component: Settings,
  },
  {
    path: Path.UNDEFINED,
    component: NotFound,
  },
];

export default routesConfig;
