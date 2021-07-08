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

export default function ListaProdutos() {
  const classes = useStyles();

  const [produtos, setProdutos] = useState([]);

  async function handleDeleteProduto(id) {
    try {
        await api.delete(`wine/${id}`, {});
        setProdutos(produtos.filter(produto => produto.id !== id));
    } catch (error) {
        alert('Erro ao deletar livro');
    }
}

  useEffect(() => {
    api.get('wines',{}).then(response => {
        setProdutos(response.data);
    });
}, []);  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Nome</StyledTableCell >
            <StyledTableCell  align="right">Id</StyledTableCell >
            <StyledTableCell  align="right">Tipo</StyledTableCell >
            <StyledTableCell  align="right">Nacionalidade</StyledTableCell >
            <StyledTableCell  align="right">Quantidade</StyledTableCell >
            <StyledTableCell  align="right">Preço</StyledTableCell >
            <StyledTableCell  align="right"></StyledTableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map(produto => (
            <StyledTableRow  key={produto.id}>
              <StyledTableCell  component="th" scope="row">
                {produto.nome}
              </StyledTableCell>
              <StyledTableCell  align="right">{produto.id}</StyledTableCell >
              <StyledTableCell  align="right">{produto.tipo}</StyledTableCell >
              <StyledTableCell  align="right">{produto.nacionalidade}</StyledTableCell >
              <StyledTableCell  align="right">{produto.quantidade}</StyledTableCell >
              <StyledTableCell  align="right">{produto.preco}</StyledTableCell >
              <StyledTableCell  align="center">
                  <button type="button" onClick={() => handleDeleteProduto(produto.id)}>Excluir</button></StyledTableCell >
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
