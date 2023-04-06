import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
// material-ui
import { Avatar, Box, Card, CardHeader, IconButton, Collapse, CardContent, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // project import

// render - dashboard
/*import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';*/
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
/*const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];*/

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    /*const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');*/
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nombreTest', headerName: 'Test', width: 600 },
        { field: 'estado', headerName: 'Estado', /* sortable: false,*/ width: 70 },
        {
            field: 'fechaUltimaEjecucion',
            headerName: 'Última Ejecución',
            //type: 'date',
            width: 170
        },
        { field: 'diponibilidadHora', headerName: 'Hora', width: 70 },
        { field: 'diponibilidadDia', headerName: 'Día', width: 70 },
        { field: 'diponibilidadMes', headerName: 'Mes', width: 70 },
        {
            field: 'duracionUltimaEjecucion',
            headerName: 'Duración',
            type: 'number',
            width: 70
        }
    ];

    const rows = [
        {
            id: '99200',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-26_Extracte_Targeta_Firefox',
            diponibilidadHora: '75%',
            diponibilidadDia: '74.19%',
            diponibilidadMes: '74.19%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 0,
            fechaUltimaEjecucion: '2023-03-05 05:35:42',
            duracionUltimaEjecucion: '5.36'
        },
        {
            id: '99172',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-12_Empreses_Norma_43_Firefox',
            diponibilidadHora: '0%',
            diponibilidadDia: '82.98%',
            diponibilidadMes: '82.98%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 1,
            fechaUltimaEjecucion: '2023-03-05 05:38:10',
            duracionUltimaEjecucion: '6.14'
        },
        {
            id: '99185',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-17_Particulars_Cartera_de_valors_Firefox',
            diponibilidadHora: '0%',
            diponibilidadDia: '80.43%',
            diponibilidadMes: '80.43%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 1,
            fechaUltimaEjecucion: '2023-03-05 03:12:07',
            duracionUltimaEjecucion: '7.24'
        },
        {
            id: '99181',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-16_Particulars_Ordre_transferencia_Chrome',
            diponibilidadHora: '100%',
            diponibilidadDia: '98.79%',
            diponibilidadMes: '98.79%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 0,
            fechaUltimaEjecucion: '2023-03-05 05:34:58',
            duracionUltimaEjecucion: '19.76'
        },
        {
            id: '99163',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-05_Transferencies_Firefox',
            diponibilidadHora: '0%',
            diponibilidadDia: '99.4%',
            diponibilidadMes: '99.4%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 0,
            fechaUltimaEjecucion: '2023-03-05 05:40:47',
            duracionUltimaEjecucion: '18.66'
        },
        {
            id: '99182',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-16_Particulars_Ordre_transferencia_Firefox',
            diponibilidadHora: '100%',
            diponibilidadDia: '100%',
            diponibilidadMes: '100%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 0,
            fechaUltimaEjecucion: '2023-03-05 05:28:41',
            duracionUltimaEjecucion: '12.69'
        },
        {
            id: '99287',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-22_Recibox_Firefox',
            diponibilidadHora: '0%',
            diponibilidadDia: '75%',
            diponibilidadMes: '75%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 1,
            fechaUltimaEjecucion: '2023-03-05 03:18:50',
            duracionUltimaEjecucion: '5.11'
        },
        {
            id: '99395',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-32_BKGE4_RCCBOX_Firefox',
            diponibilidadHora: '0%',
            diponibilidadDia: '75%',
            diponibilidadMes: '75%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 0,
            fechaUltimaEjecucion: '2023-03-05 04:02:55',
            duracionUltimaEjecucion: '8.8'
        },
        {
            id: '99391',
            nombreTest: 'LANPROVA_OPTIMIZADO_BETA_HBLO-31_BKGE3_LOMUTF_Firefox',
            diponibilidadHora: '75%',
            diponibilidadDia: '76.32%',
            diponibilidadMes: '76.32%',
            fechaCalculo: '2023-03-05 05:36:00',
            estado: 1,
            fechaUltimaEjecucion: '2023-03-05 05:30:39',
            duracionUltimaEjecucion: '4.57'
        }
    ];
    return (
        <Fragment>
            <h1>Listado de Entornos</h1>
            <Card
                sx={{
                    minWidth: 300,
                    border: '1px solid rgba(211,211,211,0.6)'
                }}
            >
                <CardHeader
                    title="LANPROVA OPTIMIZADO BETA"
                    avatar={<Avatar>L</Avatar>}
                    action={
                        <IconButton onClick={() => setOpen(!open)} aria-label="expand" size="small">
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    }
                ></CardHeader>
                <div
                    style={{
                        backgroundColor: 'rgba(211,211,211,0.4)'
                    }}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Box sx={{ m: '1em', width: '100%' }}>
                                <OutlinedInput
                                    sx={{ with: '200px' }}
                                    size="large"
                                    id="header-search"
                                    startAdornment={
                                        <InputAdornment position="start" sx={{ mr: -0.5 }}>
                                            <SearchOutlined />
                                        </InputAdornment>
                                    }
                                    aria-describedby="header-search-text"
                                    inputProps={{
                                        'aria-label': 'weight'
                                    }}
                                    placeholder="Test"
                                />
                            </Box>
                            <Box sx={{ height: 800, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    onRowClick={(e) => navigate('test-dashboard')}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: 10
                                            }
                                        }
                                    }}
                                    pageSizeOptions={[10]}
                                    //checkboxSelection
                                    disableRowSelectionOnClick
                                />
                            </Box>
                        </CardContent>
                    </Collapse>
                </div>
            </Card>
        </Fragment>
    );
};

export default DashboardDefault;
