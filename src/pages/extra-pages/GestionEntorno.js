// material-ui
import { Typography, FormControl, FormHelperText, MenuItem, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// project import
import MainCard from 'components/MainCard';
import React from 'react';
// ==============================|| SAMPLE PAGE ||============================== //

const GestionEntorno = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <MainCard title="Página en construcción">
            <Typography variant="body1">Gestión de entornos</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Entorno</InputLabel>
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
                    <MenuItem value={10}>Selenium Chrome</MenuItem>
                    <MenuItem value={20}>Selenium Firefox</MenuItem>
                    <MenuItem value={30}>Microsoft Edge </MenuItem>
                </Select>
                <FormHelperText>Nombre del entorno</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Añadir test</MenuItem>
                    <MenuItem value={20}>Deshabilitar test</MenuItem>
                </Select>
                <FormHelperText>Acciones</FormHelperText>
            </FormControl>
        </MainCard>
    );
};

export default GestionEntorno;
