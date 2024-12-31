import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material'; 
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

const Affichelivres = ({ livres, handleDelete }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'isbn',
        header: 'ISBN',
        size: 150,
      },
      {
        accessorKey: 'titre',
        header: 'Titre',
        size: 150,
      },
      {
        accessorKey: 'annedition',
        header: 'Année d\'édition',
        size: 200,
      },
      {
        accessorKey: 'prix',
        header: 'Prix',
        size: 100,
      },
      {
        accessorKey: 'qtestock',
        header: 'Quantité en Stock',
        size: 100,
      },
      {
        accessorKey: 'couverture',
        header: 'Couverture',
        Cell: ({ cell }) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              alt="Couverture"
              height={100}
              src={cell.getValue()}
              loading="lazy"
              style={{ borderRadius: '10%' }}
            />
          </Box>
        ),
      },
      {
        accessorKey: 'specialite.nomspecialite',
        header: 'Spécialité',
        size: 150,
        Cell: ({ cell }) => cell.getValue() || 'Non spécifié',
      },
      {
        accessorKey: 'maised.maisonedit',
        header: 'Maison d\'édition',
        size: 150,
        Cell: ({ cell }) => cell.getValue() || 'Non spécifié',
      },
      {
        accessorKey: 'auteurs',
        header: 'Auteurs',
        Cell: ({ cell }) => (
          <ul>
            {cell.getValue() && cell.getValue().length > 0
              ? cell.getValue().map((auteur, index) => (
                  <li key={index}>{auteur.nomauteur}</li>
                ))
              : 'Aucun auteur'}
          </ul>
        ),
      },
      {
        accessorKey: '_id',
        header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <Link to={`/livres/edit/${row.original._id}`}>
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

  return (
    <MaterialReactTable
      columns={columns}
      data={livres}
      enableStickyHeader
      enableColumnResizing
    />
  );
};

export default Affichelivres;
