// material-ui
import { Typography, FormControl, FormHelperText, MenuItem, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// project import
import MainCard from 'components/MainCard';
import React from 'react';
// ==============================|| SAMPLE PAGE ||============================== //

const GestionTest = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <MainCard title="Página en construcción">
            <Typography variant="body1">Gestión de tests</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Test</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={10}>LANPROVA OPTIMIZADO BETA</MenuItem>
                    <MenuItem value={20}>BPI_14_AppBPI</MenuItem>
                    <MenuItem value={30}>HBPOR</MenuItem>
                </Select>
                <FormHelperText>Nombre del test</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Habilitar</MenuItem>
                    <MenuItem value={20}>Deshabilitar</MenuItem>
                </Select>
                <FormHelperText>Estado del test</FormHelperText>
            </FormControl>
        </MainCard>
    );
};

export default GestionTest;
