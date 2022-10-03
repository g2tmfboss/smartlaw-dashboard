import React from "react";            
import {            
 Box,           
 Image,           
 SimpleGrid,           
 Badge,           
} from "@chakra-ui/react";            
import { ImStarFull } from "react-icons/im";            
      function GridLayout4() {      
    const property1 = {        
imageUrl:" https://bafybeiao3qdxr5vajubefkuyae3pxlp2u26uuizip4pzejw7a7snn643xm.ipfs.infura-ipfs.io ",  
imageAlt: " Player Profile ",  
     skills: 3,       
     guilds: 2,       
     title: "Each player receives a MyMeta profile and ...",       
     formattedPrice: "    100 ",  
     reviewCount: 34,       
     rating: 4,       
};
    const property2 = {        
imageUrl:" https://bafybeiao3qdxr5vajubefkuyae3pxlp2u26uuizip4pzejw7a7snn643xm.ipfs.infura-ipfs.io ",  
imageAlt: " Player Profile ",  
     skills: 3,       
     guilds: 2,       
     title: "Each player receives a MyMeta profile and ...",       
     formattedPrice: "    20 MATIC ",  
     reviewCount: 34,       
     rating: 4,       
};
    const property3 = {        
imageUrl:" https://bafybeiao3qdxr5vajubefkuyae3pxlp2u26uuizip4pzejw7a7snn643xm.ipfs.infura-ipfs.io ",  
imageAlt: " Player Profile ",  
     skills: 3,       
     guilds: 2,       
     title: "Each player receives a MyMeta profile and ...",       
     formattedPrice: "    30 MATIC ",  
     reviewCount: 34,       
     rating: 4,       
};
    const property4 = {        
imageUrl:" https://bafybeiao3qdxr5vajubefkuyae3pxlp2u26uuizip4pzejw7a7snn643xm.ipfs.infura-ipfs.io ",  
imageAlt: " Player Profile ",  
     skills: 3,       
     guilds: 2,       
     title: "Each player receives a MyMeta profile and ...",       
     formattedPrice: "    40 MATIC ",  
     reviewCount: 34,       
     rating: 4,       
};
       return (     
        <SimpleGrid columns={4} spacing={6} mr="5">    
        <Box    
w="100%"    
bg="gray.600"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property1.imageUrl} alt={property1.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property1.skills} skills &bull; {property1.guilds}  guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property1.title}    
        </Box>    
        <Box color="yellow.500">    
{property1.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property1.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property1.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="yellowgreen"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </Box>    
        <Box    
w="100%"    
bg="gray.600"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property2.imageUrl} alt={property1.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property1.skills} skills &bull; {property1.guilds}  guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property1.title}    
        </Box>    
        <Box color="yellow.500">    
{property1.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property1.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property1.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="yellowgreen"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </Box>    
        <Box    
w="100%"    
bg="gray.600"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property3.imageUrl} alt={property1.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property1.skills} skills &bull; {property1.guilds}  guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property1.title}    
        </Box>    
        <Box color="yellow.500">    
{property1.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property1.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property1.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="yellowgreen"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </Box>    
        <Box    
w="100%"    
bg="gray.600"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property3.imageUrl} alt={property1.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property1.skills} skills &bull; {property1.guilds}  guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property1.title}    
        </Box>    
        <Box color="yellow.500">    
{property1.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property1.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property1.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="yellowgreen"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </Box>    
        <Box    
w="100%"    
bg="gray.600"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property2.imageUrl} alt={property2.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property2.skills} skills &bull; {property2.guilds} guilds guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property2.title}    
        </Box>    
        <Box color="yellow.500">    
{property2.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property2.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property2.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="deepskyblue"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </Box>    
        <Box    
w="100%"    
bg="gray.600"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property3.imageUrl} alt={property3.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property3.skills} skills &bull; {property3.guilds} guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property3.title}    
        </Box>    
        <Box color="yellow.500">    
{property3.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property3.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property3.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="honeydew"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </Box>    
        <Box    
w="100%"    
bg="gray.600"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property4.imageUrl} alt={property4.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property4.skills} skills &bull; {property4.guilds} guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property4.title}    
        </Box>    
        <Box color="yellow.500">    
{property4.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property4.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property4.reviewCount} reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="lightskyblue"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </Box>    
        </SimpleGrid>    
);
}
export default GridLayout4;              
