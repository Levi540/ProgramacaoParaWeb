import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../services/api';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListaUsuario() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  async function handleDeleteUser(id) {
    try {
        await api.delete(`user/${id}`, {});
        setUsers(users.filter(user => user.id !== id));
    } catch (error) {
        alert('Erro ao deletar livro');
    }
}

  useEffect(() => {
    api.get('users',{}).then(response => {
        setUsers(response.data);
    });
}, []);  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Nome</StyledTableCell >
            <StyledTableCell  align="right">Id</StyledTableCell >
            <StyledTableCell  align="right">Senha</StyledTableCell >
            <StyledTableCell  align="right">Email</StyledTableCell >
            <StyledTableCell  align="right"></StyledTableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <StyledTableRow  key={user.id}>
              <StyledTableCell  component="th" scope="row">
                {user.nome}
              </StyledTableCell>
              <StyledTableCell  align="right">{user.id}</StyledTableCell >
              <StyledTableCell  align="right">{user.senha}</StyledTableCell >
              <StyledTableCell  align="right">{user.email}</StyledTableCell >
              <StyledTableCell  align="center">
                  <button type="button" onClick={() => handleDeleteUser(user.id)}>Excluir</button></StyledTableCell >
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
