import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { IconFaceId } from '@tabler/icons-react';
import { Flex, Button, Anchor, Text } from '@mantine/core';

const RedirectActions = ({
    mainColor
}) => {
    const navigate = useNavigate();
    const levelsByColor = {
        red: '9',
        grape: '6'
    };

    return (
        <Flex
            w='100%'
            h='23%'
            gap="xl"
            mt="xl"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            bg='gray.1'
            pos='relative'
            style={{  borderRadius: '30px 30px 0 0' }}
        >
            <Flex align='center' direction='column' gap='lg' pos='absolute' top={'-1rem'}>
                <Button
                    mih={72}
                    miw={246}
                    size='xl'
                    fw={400}
                    radius='xl'
                    variant='filled'
                    color={`${mainColor}.${levelsByColor[mainColor]}`}
                    leftSection={
                    <IconFaceId
                        size={40}
                        stroke={1}
                        style={{ margin: 0, marginRight: 0, marginLeft: 6 }}/>
                    }>
                    Me encontre!
                </Button>

                <Anchor c='gray.6' td='underline' display='flex' onClick={() => navigate('/gallery')}>
                    Ir para a&#160;
                    <Text fw={600}>Galeria do Evento</Text>
                </Anchor>
            </Flex>
        </Flex>
    )
}

RedirectActions.propTypes = {
    mainColor: PropTypes.string
};

export default RedirectActions;
