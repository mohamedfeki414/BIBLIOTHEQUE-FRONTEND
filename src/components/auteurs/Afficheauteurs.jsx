import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';


const Afficheauteurs = ({auteurs, handleDelete }) => {
    const columns = useMemo(
        () => [
          {
            accessorKey: 'nomauteur',
            header: 'Nomauteur',
            size: 150,
          },
          {
            accessorKey: 'email',
            header: 'Email',
            size: 150,
          },
          {
            accessorKey: 'numtel',
            header: 'Numtel',
            size: 200,
          },
        
          {accessorKey: '_id',
            header: 'Actions',
            size: 100, 
            Cell: ({ row}) => (
              <div>
                <Link to={`/auteurs/edit//${row.original._id}`}>
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
    data: auteurs, // data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};
export default Afficheauteurs
