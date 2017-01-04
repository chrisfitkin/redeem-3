// Define global style vars here

const sans = 'Futura, "Trebuchet MS", Arial, "Helvetica Neue", sans-serif'
const serif = 'Georgia, serif'
const blue = '#0070ff'
const green = '#42b24f'
const white = '#fff'

export const Type = {
  sans,
  serif
}

export const Color = { blue, green, white }

export const Button = {
  background: 'transparent',
  border: '2px solid #999',
  textDecoration: 'none',
  borderRadius: 2,
  fontWeight: 'bold',
  fontSize: '11pt',
  textTransform: 'uppercase',
  display: 'inline-block',
  margin: '0 0 .5rem',
  padding: '5px 20px',
  minWidth: 250,
  lineHeight: '1.5',
  opacity: 1,
  transition: '.2s opacity ease',
    ':hover': {
      opacity: 0.5,
      textDecoration: 'none'
    }
}

export const InputField = {
}