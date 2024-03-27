import { Badge, ChakraProvider, Divider, HStack, Heading, Icon, Image, Link, Stack, Text } from "@chakra-ui/react"
import "@fontsource/inter"
import { FiMail, FiPhone } from "react-icons/fi"
import data from "./data"
import theme from "./styles"

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Stack h="100vh">
                <HStack flexBasis="70.5px" p="5" w="full" justify="end">
                    {data.socials.map(({ icon, link }) => (
                        <Link key={link} href={link} isExternal>
                            <Icon as={icon} w={6} h={6} />
                        </Link>
                    ))}
                </HStack>

                <Stack flex="1" justify="center" align="center">
                    <Stack maxW="500" align="center" spacing="8" p="6" mt="-80px">
                        <Image width="450" height="300" mb="-35px" src="./logo.svg" alt="Studio Estetico Logo" />

                        <Divider borderColor="#684f1d" />

                        <Heading as="h2" size="lg" fontWeight="400">
                            {data.name}
                        </Heading>

                        <Stack spacing="4" align="center">
                            <HStack align="left">
                                <Icon as={FiPhone} w={6} h={6} />
                                <Text>{data.phone_number}</Text>
                            </HStack>

                            <HStack>
                                <Icon as={FiMail} w={6} h={6} />
                                <Link href={`mailto:${data.mail}`} isExternal>
                                    {data.mail}
                                </Link>
                            </HStack>
                        </Stack>

                        <HStack flexWrap="wrap" justify="center">
                            {data.services.map((x) => (
                                <Badge key={x} colorScheme="transparent" fontSize="0.9em" fontWeight="500">
                                    {x}
                                </Badge>
                            ))}
                        </HStack>

                        <HStack px="6">
                            <Link
                                href="https://maps.app.goo.gl/ZgpaXJXM9durRx579"
                                fontWeight="500"
                                isExternal
                                overflowWrap="break-word"
                                textAlign="center"
                            >
                                {data.address}
                            </Link>
                        </HStack>
                    </Stack>
                </Stack>
            </Stack>
        </ChakraProvider>
    )
}

export default App
