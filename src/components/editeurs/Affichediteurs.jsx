import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';

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
        
          {accessorKey: '_id',
            header: 'Actions',
            size: 100, 
            Cell: ({ row}) => (
              <div>
                <Link to={`/editeurs/edit/${row.original._id}`}>
                  <Button variant="warning" size="sm" className="text-warning btn-link edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  className="text-danger btn-link delete"
                  onClick={() => handleDelete(row.original._id)}
                >
                  <i className="fa fa-trash" />
                </Button>
              </div>
            ),
          },
        ],
        [handleDelete]
      );
    

  

  const table = useMaterialReactTable({
    columns,
    data: editeurs, // data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};


export default Affichediteurs
