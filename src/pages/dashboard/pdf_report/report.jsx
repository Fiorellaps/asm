import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import BarChart from './bar_chart_component';
// Create styles
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
                <Text>Informe mensual del test LANPROVA_OPTIMIZADO_BETA_HBLO-26_Extracte_Targeta_Firefox</Text>
                <Text>Date: {new Date().toLocaleDateString()}</Text>
                <View style={{ marginTop: 10 }}>
                    {data.map((item, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text>{item.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
);

export default Report;
