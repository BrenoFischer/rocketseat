import { styled } from "..";


export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const IconContainer = styled('div', {
    background: '$gray800',
    padding: '0.75rem',
    borderRadius: 6,
    cursor: 'pointer',
    position: 'relative',
})

export const CartQuantityContainer = styled('div', {
    background: '$green500',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2rem',
    height: '2rem',
    border: '4px solid $gray900',

    position: 'absolute',
    right: '-1rem',
    top: '-1rem',
})

export const CartMenuContainer = styled('aside', {
    height: '100vh',
    width: '35rem',
    position: 'fixed',
    top: 0,
    right: 0,
    background: '$gray800',
    boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
    padding: '4.5rem 3rem 3rem 3rem',

    h2: {
        color: '$gray100',
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: '160%',
        marginBottom: '2rem',
    },

    zIndex: '999',
    overflowY: 'scroll',
})

export const CloseIconContainer = styled('div', {
    position: 'absolute',
    right: '1.5rem',
    top: '1.5rem',
    cursor: 'pointer',
})

export const CartMenuWrapper = styled('div', {
    height: 'calc(100% - 4rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const CartProductContainer = styled('div', {
    display: 'flex',
    gap: '1.25rem',
    '&:not(:last-child)': {
        marginBottom: '1.5rem',
    },
})

export const ImageContainer = styled('div', {
    width: '6rem',
    height: '6rem',
    borderRadius: 8,
    background: 'linear-gradient(#1ea483 0%, #7465d4 100%)',

})


export const ProductDetailsCartContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h3: {
        color: '$gray300',
        fontSize: '1.125rem',
        lineHeight: '160%',
        fontWeight: '400',
    },

    p: {
        fontSize: '1.125rem',
        fontWeight: '700',
        lineHeight: '160%'
    },

    button: {
        all: 'unset',
        color: '$green500',
        fontWeight: '700',
        lineHeight: '160%',
        cursor: 'pointer',
    },
})

export const CartTotalDetailsContainer = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
})

export const QuantityIndicator = styled('span', {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '160%',
})

export const QuantityOnCart = styled('span', {
    fontSize: '1.125rem',
    fontWeight: '400',
    lineHeight: '160%',
    color: '$gray300',
    textAlign: 'right'
})

export const TotalPriceIndicator = styled('span', {
    fontSize: '1.125rem',
    fontWeight: '700',
    lineHeight: '160%',
    color: '$gray100',
})

export const TotalPriceOnCart = styled('span', {
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: '140%',
    color: '$gray100',
    textAlign: 'right',
})

export const CartSubmitButtonWrapper = styled('div', {
    marginTop: '3.5rem',
    marginBottom: '1.5rem',

    button: {
        cursor: 'pointer',
        borderRadius: 8,
        background: '$green300',
    
        display: 'flex',
        width: '100%',
        padding: '1.25rem 2rem',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',

        color: '$white',
        fontSize: '1.125rem',
        fontWeight: '700',
        lineHeight: '160%',
    }
})