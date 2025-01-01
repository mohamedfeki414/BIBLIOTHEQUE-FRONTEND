import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';

const Affichespecialites = ({specialities, handleDelete }) => {
    const columns = useMemo(
        () => [
          {
            accessorKey: 'nomspecialite',
            header: 'Nomspecialite',
            size: 300,
          },
         
        
          {accessorKey: '_id',
            header: 'Actions',
            size: 300, 
            Cell: ({ row}) => (
              <div>
                <Link to={`/specialites/edit/${row.original._id}`}>
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
    data: specialities, // data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default Affichespecialites
