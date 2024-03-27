import { Box, Image } from '@mantine/core';

const Logo = ({ imageSource }) => {
  return (
    <Box component="div">
        <Image maw='120px' h='120px' radius='md' src={imageSource}/>
    </Box>
  )
}

export default Logo
