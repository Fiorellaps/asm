import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import { PDFViewer, BlobProvider } from '@react-pdf/renderer';
import Report from './pdf_report/report';
import Button from '@mui/material/Button';

const DashboardDefault = () => {
    /*const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');*/
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const data = [
        { title: 'Item 1', description: 'Description 1' },
        { title: 'Item 2', description: 'Description 2' },
        { title: 'Item 3', description: 'Description 3' }
    ];
    return (
        <>
            <Button variant="contained">
                <BlobProvider document={<Report data={data} />}>
                    {({ url, loading, error }) => (
                        <a href={url} download="my-report.pdf">
                            Download report
                        </a>
                    )}
                </BlobProvider>
            </Button>
        </>
    );
};

export default DashboardDefault;
