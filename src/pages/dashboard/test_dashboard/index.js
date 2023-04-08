import { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography,
    Tooltip,
    Chip
} from '@mui/material';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import { BlobProvider } from '@react-pdf/renderer';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import Report from '../pdf_report/report';

// assets
import { LoginOutlined, MobileOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status

const selectorOptions = [
    {
        value: 'hoy',
        label: 'Esta semana'
    },
    {
        value: 'mes',
        label: 'Este mes'
    },
    {
        value: 'year',
        label: 'Este año'
    }
];
const status = [
    {
        value: 'hoy',
        label: 'Hoy'
    },
    {
        value: 'mes',
        label: 'Este mes'
    },
    {
        value: 'year',
        label: 'Este año'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const TestDashboardDefault = () => {
    const [value, setValue] = useState('hoy');
    const [slot, setSlot] = useState('semana');
    const test_data = {
        time: 89.3 + 's',
        time_percentage: 1.0,
        time_diference: 1 + 's',
        availability: '98' + '%',
        availability_percentage: 1.0,
        availability_diference: 1 + '%',
        errors: '5',
        errors_percentage: 1.0,
        errors_diference: 1 + '%',
        records: '95',
        records_diference: '-'
    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard del Test LANPROVA_OPTIMIZADO_BETA_HBLO-26_Extracte_Targeta_Firefox</Typography>
                <Button variant="contained">
                    <BlobProvider document={<Report />}>
                        {({ url, loading, error }) => (
                            <a href={url} style={{ textDecoration: 'none' }} download="informe_LANPROVA_OPTIMIZADO_BETA_HBLO.pdf">
                                Descargar informe mensual
                            </a>
                        )}
                    </BlobProvider>
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce
                    title="Tiempo medio de ejecución"
                    count={test_data.time}
                    percentage={test_data.time_percentage}
                    extra={test_data.time_diference}
                    color="success"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce
                    title="Disponibilidad media"
                    count={test_data.availability}
                    percentage={test_data.availability_percentage}
                    extra={test_data.availability_diference}
                    color="success"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce
                    title="Número de errores"
                    count={test_data.errors}
                    percentage={test_data.errors_percentage}
                    extra={test_data.errors_diference}
                    isLoss
                    color="error"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Número de registros" count={test_data.records} extra={test_data.records_diference} />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            {/* row 2 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Tiempos de ejecución</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-select-currency"
                            size="small"
                            select
                            value={value}
                            onChange={(e) => setSlot('mes')}
                            sx={{ '& .MuiInputBase-input': { py: 1.5, fontSize: '0.875rem' } }}
                        >
                            {selectorOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/*<Stack direction="row" alignItems="center" spacing={0}>
                            <Button
                                size="small"
                                onClick={() => setSlot('mes')}
                                color={slot === 'mes' ? 'primary' : 'secondary'}
                                variant={slot === 'mes' ? 'outlined' : 'text'}
                            >
                                Mes
                            </Button>
                            <Button
                                size="small"
                                onClick={() => setSlot('semana')}
                                color={slot === 'semana' ? 'primary' : 'secondary'}
                                variant={slot === 'semana' ? 'outlined' : 'text'}
                            >
                                Semana
                            </Button>
    </Stack>*/}
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        <IncomeAreaChart slot={slot} />
                    </Box>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Evolución de disponibilidad</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <Box sx={{ p: 3, pb: 0 }}>
                        <Stack spacing={2}>
                            <Typography variant="h6" color="textSecondary">
                                La disponibilidad media de esta semana
                            </Typography>
                            <Typography variant="h3">98%</Typography>
                        </Stack>
                    </Box>
                    <MonthlyBarChart />
                </MainCard>
            </Grid>

            {/* row 3 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Detalle de las ejecuciones</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrdersTable />
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Disponibilidad por paso</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
                        <Tooltip title="Descripción del paso 1" placement="right" arrow>
                            <ListItemButton divider>
                                <ListItemText primary="Paso 1" />
                                <Typography variant="h5">100%</Typography>
                            </ListItemButton>
                        </Tooltip>
                        <Tooltip title="Descripción del paso 2" placement="right" arrow>
                            <ListItemButton sx={{ bgcolor: '#FF8886' }} divider>
                                <ListItemText primary="Paso 2" />
                                <Typography variant="h5">90.5%</Typography>
                            </ListItemButton>
                        </Tooltip>
                        <ListItemButton>
                            <ListItemText primary="Paso 3" />
                            <Typography variant="h5">100%</Typography>
                        </ListItemButton>
                    </List>
                    <ReportAreaChart />
                </MainCard>
            </Grid>

            {/* row 4 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Predicción de disponibilidad</Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" alignItems="center" spacing={0}>
                            <Button
                                size="small"
                                onClick={() => ''}
                                color={slot === 'mes' ? 'primary' : 'secondary'}
                                variant={slot === 'mes' ? 'outlined' : 'text'}
                            >
                                Mes
                            </Button>
                            <Button
                                size="small"
                                onClick={() => ''}
                                color={slot === 'semana' ? 'primary' : 'secondary'}
                                variant={slot === 'semana' ? 'outlined' : 'text'}
                            >
                                Semana
                            </Button>
                        </Stack>
                        {/*
                            <TextField
                                id="standard-select-currency"
                                size="small"
                                select
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
                            >
                                {status.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>*/}
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 1.75 }}>
                    <Stack spacing={1.5} sx={{ mb: -12 }}>
                        <Typography variant="h6" color="secondary">
                            Porcentaje de disponibilidad
                        </Typography>
                        <Typography variant="h4">97%</Typography>
                    </Stack>
                    <SalesColumnChart />
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Detección de errores</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <List
                        component="nav"
                        sx={{
                            px: 0,
                            py: 0,
                            '& .MuiListItemButton-root': {
                                py: 1.5,
                                '& .MuiAvatar-root': avatarSX,
                                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                            }
                        }}
                    >
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'success.main',
                                        bgcolor: 'success.lighter'
                                    }}
                                >
                                    <LoginOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Login</Typography>} secondary="Total: 7" />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Grid>
                                        <Chip
                                            variant="combined"
                                            color={'error'}
                                            icon={
                                                <>
                                                    <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />
                                                </>
                                            }
                                            label={`+5`}
                                            sx={{ ml: 1.25, pl: 1 }}
                                            size="small"
                                        />
                                    </Grid>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'primary.main',
                                        bgcolor: 'primary.lighter'
                                    }}
                                >
                                    <MobileOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Aplicación Móvil</Typography>} secondary="Total: 2" />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Grid>
                                        <Chip
                                            variant="combined"
                                            color={'error'}
                                            icon={
                                                <>
                                                    <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />
                                                </>
                                            }
                                            label={`+2`}
                                            sx={{ ml: 1.25, pl: 1 }}
                                            size="small"
                                        />
                                    </Grid>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        {/*<ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'primary.main',
                                        bgcolor: 'primary.lighter'
                                    }}
                                >
                                    <MobileOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Order #984947</Typography>}
                                secondary="5 August, 1:45 PM"
                            />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $302
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        8%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'primary.main',
                                        bgcolor: 'primary.lighter'
                                    }}
                                >
                                    <MobileOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Order #984947</Typography>}
                                secondary="5 August, 1:45 PM"
                            />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $302
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        8%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'primary.main',
                                        bgcolor: 'primary.lighter'
                                    }}
                                >
                                    <MobileOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Order #984947</Typography>}
                                secondary="5 August, 1:45 PM"
                            />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $302
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        8%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'error.main',
                                        bgcolor: 'error.lighter'
                                    }}
                                >
                                    <SettingOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $682
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        16%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        */}
                    </List>
                </MainCard>
                {/*<MainCard sx={{ mt: 2 }}>
                    <Stack spacing={3}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack>
                                    <Typography variant="h5" noWrap>
                                        Help & Support Chat
                                    </Typography>
                                    <Typography variant="caption" color="secondary" noWrap>
                                        Typical replay within 5 min
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                                    <Avatar alt="Remy Sharp" src={avatar1} />
                                    <Avatar alt="Travis Howard" src={avatar2} />
                                    <Avatar alt="Cindy Baker" src={avatar3} />
                                    <Avatar alt="Agnes Walker" src={avatar4} />
                                </AvatarGroup>
                            </Grid>
                        </Grid>
                        <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                            Need Help?
                        </Button>
                    </Stack>
                </MainCard>*/}
            </Grid>
        </Grid>
    );
};

export default TestDashboardDefault;
