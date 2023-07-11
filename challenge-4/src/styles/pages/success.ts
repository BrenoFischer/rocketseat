import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100'
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 360,
        textAlign: 'center',
        marginTop: '2rem',
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const ImagesContainer = styled('div', {
    display: 'flex',
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(#1ea483, #7465d4)',
    borderRadius: '50%',
    padding: '0.5rem 0.25rem',
    marginTop: '4rem',
    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
    '&:not(:first-child)': {
        marginLeft: '-3rem',
    },

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})