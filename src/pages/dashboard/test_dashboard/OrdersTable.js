import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

function createData(hora, tiempo, disponibilidad, errores, muestras) {
    return { hora, tiempo, disponibilidad, errores, muestras };
}

const rows = [
    createData('00:00', '85.8s', '100.00%', 0, 4),
    createData('01:00', '86.8s', '100.00%', 0, 4),
    createData('02:00', '83.3s', '95.00%', 1, 5),
    createData('03:00', '85.8s', '100.00%', 0, 4),
    createData('04:00', '80.5s', '89.05%', 2, 6),
    createData('05:00', '85.8s', '100.00%', 0, 4),
    createData('06:00', '85.8s', '100.00%', 0, 4),
    createData('07:00', '85.8s', '100.00%', 0, 4),
    createData('08:00', '85.8s', '100.00%', 0, 4)
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'hora',
        align: 'left',
        disablePadding: false,
        label: 'Hora'
    },
    {
        id: 'tiempo',
        align: 'left',
        disablePadding: true,
        label: 'Tiempo'
    },
    {
        id: 'disponibilidad',
        align: 'right',
        disablePadding: false,
        label: 'Disponibilidad'
    },
    {
        id: 'errores',
        align: 'left',
        disablePadding: false,
        label: 'Número de errores'
    },
    {
        id: 'muestras',
        align: 'right',
        disablePadding: false,
        label: 'Muestras totales'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
    let color;
    let title = status;

    switch (status) {
        case 0:
            color = 'success';
            break;

        default:
            color = 'error';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Dot color={color} />
            <Typography>{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('hora');
    const [selected] = useState([]);

    const isSelected = (hora) => selected.indexOf(hora) !== -1;

    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <OrderTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.hora);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.hora}
                                    selected={isItemSelected}
                                >
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.hora}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{row.tiempo}</TableCell>
                                    <TableCell align="right">{row.disponibilidad}</TableCell>
                                    <TableCell align="left">
                                        <OrderStatus status={row.errores} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <NumberFormat value={row.muestras} displayType="text" thousandSeparator prefix="" />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
