import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
//import ImgAdmin from "../../../assets/img/painel-mock.png"
import Grid from '@material-ui/core/Grid';

import MenuAdmin from "../../../components/menu-admin";
import Footer from "../../../components/footer-admin";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';

import api from "../../../services/api";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: 15,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

    formControl: {
        width: "100%"
    },

}));


export default function UsuariosCadastrar() {

    const classes = useStyles();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipo, setTipo] = useState('');

    const { idUsuario } = useParams()

    useEffect(() => {
        async function getUsuario() {
            var response = await api.get('/api/usuarios/' + idUsuario)
            
            setNome(response.data.nome_usuario)
            setEmail(response.data.email_usuario)
            setSenha(response.data.senha_usuario)
            setTipo(response.data.tipo_usuario)
        }

        getUsuario()
    }, [])


    async function handleSubmit() {

        const data = {
            nome_usuario: nome,
            email_usuario: email,
            senha_usuario: senha,
            tipo_usuario: tipo,
            _id:idUsuario,
        }

        if (nome !== '' && email !== '' && senha !== '' && tipo !== '') {

            const response = await api.put("/api/usuarios", data);

            if (response.status === 200) {
                window.location.href = "/admin/usuarios"
            } else {
                alert("Erro ao atualizar o usuário");
            }

        } else {
            alert("preencha todo os campos");
        }
    }


    return (
        <div className={classes.root}>


            <MenuAdmin title={'Usuários'} />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    <Grid container spacing={3}>
                        <Grid item sm={12}>

                            <Paper className={classes.paper}>

                                <h2>Atualização de usuários</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            required
                                            id="nome"
                                            name="nome"
                                            label="Nome completo"
                                            fullWidth
                                            autoComplete="nome"
                                            value={nome}
                                            onChange={ev => setNome(ev.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="email"
                                            name="email"
                                            label="E-mail"
                                            fullWidth
                                            autoComplete="email"
                                            value={email}
                                            onChange={ev => setEmail(ev.target.value)}
                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={3}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                            <Select
                                                labelId="labelTipo"
                                                id="tipo"
                                                value={tipo}
                                                onChange={ev => setTipo(ev.target.value)}
                                            >
                                                <MenuItem value={1}>Administrador</MenuItem>
                                                <MenuItem value={2}>Funcionário</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={3}>
                                        <TextField
                                            type="password"
                                            required
                                            id="senha"
                                            name="senha"
                                            label="senha"
                                            fullWidth
                                            autoComplete="senha"
                                            value={senha}
                                            onChange={ev => setSenha(ev.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                                            Salvar
                    </Button>
                                    </Grid>
                                </Grid>

                            </Paper>
                        </Grid>
                    </Grid>

                    <Box pt={4}>
                        <Footer />
                    </Box>

                </Container>
            </main>
        </div>
    );
}