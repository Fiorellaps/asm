import React from 'react';
import { Image, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
//import BarChart from './bar_chart_component';
// Create styles

import Logo from './logo.png';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const data = [
    { title: 'Disponibilidad media', description: '98%' },
    { title: 'Tiempo medio de ejecución', description: '89.3s' },
    { title: 'Número de errores', description: '5' },
    { title: 'Número de ejecuciones', description: '95' }
];
// Create report component
const Report = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Image style={{ width: '80px' }} src="https://media.glassdoor.com/sqll/887465/nextret-squarelogo-1567586597192.png" />
                <Text>Informe mensual del test LANPROVA_OPTIMIZADO_BETA_HBLO-26_Extracte_Targeta_Firefox</Text>
                <Text>Fecha: {new Date().toLocaleDateString()}</Text>
                <View style={{ marginTop: 10 }}>
                    {data.map((item, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
);

export default Report;
