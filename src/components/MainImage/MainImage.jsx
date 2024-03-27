import PropTypes from 'prop-types';
import { Flex, Box, Image } from '@mantine/core';

const MainImage = ({
    width,
    height,
    imageSource,
}) => {
  return (
    <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="column"
    >
        <Box component="div">
            <Image mih={height} maw={width} src={imageSource} radius='md'/>
        </Box>
    </Flex>
  )
}

MainImage.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    imageSource: PropTypes.string
};

export default MainImage;
