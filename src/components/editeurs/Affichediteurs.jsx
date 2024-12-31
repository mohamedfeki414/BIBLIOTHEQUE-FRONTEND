import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Button from 'react-bootstrap/Button'; 

const Affichediteurs = ({editeurs, handleDelete }) => {
    const columns = useMemo(
        () => [
          {
            accessorKey: 'maisonedit',
            header: '¨Maisonedit',
            size: 150,
          },
          {
            accessorKey: 'siteweb',
            header: 'Siteweb',
            size: 150,
          },
          {
            accessorKey: 'email',
            header: 'Email',
            size: 200,
          },
        
          { 
            accessorKey: '_id', 
            header: 'actions', 
            size: 100, 
            Cell: ({ cell, row }) => ( 
            <div >
                
            <Button 
            onClick={() => { 
            
            }} 
            variant="warning" 
            size="md" 
            className="text-warning btn-link edit" 
            > 
            <i class="fa-solid fa-pen-to-square"></i> 
            </Button> 
            <Button 
            onClick={(e) => { 
              deleteProduct(cell.row.original._id,cell.row.original.reference, 
e); 
            }} 
            variant="danger" 
            size="md" 
            className="text-danger btn-link delete" 
            >
                  <i className="fa fa-trash" /> 
            </Button> 
            </div> 
            ), 
            },

      
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: editeurs, // data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};


export default Affichediteurs
