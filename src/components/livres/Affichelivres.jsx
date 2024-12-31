import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material'; 
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

const Affichelivres = ({livres}) => {
    const columns = useMemo(
        () => [
            
          {
            accessorKey: 'isbn', // access nested data with dot notation
            header: 'isbn',
            size: 150,
          },
          {
            accessorKey: 'titre',
            header: 'titre',
            size: 150,
          },
          {
            accessorKey: 'annedition', // normal accessorKey
            header: 'annedition',
            size: 200,
          },
          { 
         
            accessorKey: 'prix', //normal accessorKey 
     
            header: 'prix', 
     
            size: 200, 
     
          },
          { 
         
            accessorKey: 'qtestock', 
     
            header: 'State', 
     
            size: 150, 
     
          },
          { 
            accessorKey: 'couverture', //access nested data with dot notation 
            header: 'Image', 
            Cell: ({ cell}) => ( 
            <Box 
    
    
            sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            }} 
            > 
            <img 
            alt="" 
            height={100} 
            src={cell.getValue()} 
            loading="lazy" 
            style={{ borderRadius: '20%' }} 
            /> 
            </Box>), 
            }, 
            { 
                accessorKey: '_id', 
                header: 'actions', 
                size: 100, 
                Cell: ({ cell, row }) => ( 
                <div > 
                   <Link to={`/livres/edit/${row.original._id}`}>
                <Button 
                onClick={() => { 
                console.log("modification ...") 
                }} 
                variant="warning" 
                size="md" 
                className="text-warning btn-link edit" 
                > 
                <i className="fa-solid fa-pen-to-square"></i> 
                </Button> 
                </Link>
                <Button 
                onClick={(e) => { 
                  deleteProduct(cell.row.original._id,cell.row.original.reference, e); 
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
        data: livres, // data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
      });
    
      return <MaterialReactTable table={table} />;
    };

export default Affichelivres
