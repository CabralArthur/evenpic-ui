import PropTypes from 'prop-types';

import { IconArrowBackUp, IconDots } from '@tabler/icons-react';
import { Box, Flex, ActionIcon } from '@mantine/core';

const NavigationContainer = ({
    onReturnClick,
    getNavigationItems
}) => {
    return (
        <Flex miw={'200px'} mih={58} bg='gray.2' component='div' style={{ borderRadius: '30px', maxWidth: '400px' }} align='center' justify='space-between' p={8} pos='relative' m='0 auto' top={44}>
            <ActionIcon variant="filled" color="gray.4" size="xl" radius="xl" aria-label="Settings" onClick={() => onReturnClick()}>
                <IconArrowBackUp style={{ width: '70%', height: '70%' }} stroke={1.5} color='black' />
            </ActionIcon>
            <Box> { getNavigationItems() } </Box>
            <ActionIcon variant="filled" color="gray.4" size="xl" radius="xl" aria-label="Settings">
                <IconDots style={{ width: '70%', height: '70%' }} stroke={1.5} color='black' />
            </ActionIcon>
        </Flex>
    )
};

NavigationContainer.propTypes = {
    onReturnClick: PropTypes.func,
    getNavigationItems: PropTypes.func
};

export default NavigationContainer;
