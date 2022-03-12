import Typography from "@mui/material/Typography";
import React from 'react'
import ErrorImage from '../../assets/Error.png'
import { ImgStyled, ImgContainer } from './styled'

const ErrorPage = () => {
    return (
        <ImgContainer>
            <ImgStyled src={ErrorImage} />
            <Typography variant='h4' sx={{ mt: '2rem' }} color='#5F5950'>Página Não Encontrada</Typography>
        </ImgContainer>
    )
}

export default ErrorPage;