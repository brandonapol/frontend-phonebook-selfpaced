// Need to figure out params and selection issues

import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks';
import { server_calls } from '../api';
// import { Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle } from '@mui/base';
import Modal from './Modal';
import Button from './Button';
import { ContactForm } from './ContactForm';




const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'name', headerName: 'Contact Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone_number', headerName: 'Phone Number', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 2 },
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let { contactData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        // console.log(gridData.data.id);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    console.log(gridData.data.id!);
    console.log(`testing for data ${contactData}`)


    return (
        <>
        {/* We have to keep the modal itself outside of the Button, or we'll have recursive components */}
        <Modal 
            open={open} 
            onClose={() => handleClose()} />
        <div className='flex flex-row'>
            <div>
                <button
                    onClick={() => handleOpen()}
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                >
                    Create New Contact
                </button> 
            </div>
            <Button className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" onClick={handleOpen}>Update</Button>
            <Button className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" onClick={deleteData}>Delete</Button>
        </div>    
        <div 

            style={{ height: 400, width: '100%' }}>
            <h2 className='p-3 bg-slate-300 my-2 rounded'>My Contacts</h2>


            <DataGrid rows={ contactData } columns={ columns } rowsPerPageOptions={ [5] } checkboxSelection={true}
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
              }}
            />


   
    </div>

    </>
    )
}

export default DataTable;