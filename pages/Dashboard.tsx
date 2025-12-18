import React, { useState, useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Activity,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  VStack,
  HStack,
  Grid,
  Heading,
  Text,
  IconButton,
  Icon,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useTheme,
} from '@chakra-ui/react';

// Chart Data (using Chakra theme colors)
const getPatientsData = (theme: any) => ({
  tooltip: { trigger: 'axis' },
  grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
  xAxis: { type: 'category', data: ['Ene', 'Feb', 'Mar', 'Abr', 'May'] },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Pacientes',
      type: 'line',
      smooth: true,
      data: [95, 140, 210, 260, 330],
      itemStyle: { color: theme.colors.pink[600] },
      areaStyle: { color: theme.colors.pink[100] }
    }
  ]
});

const getTreatmentsData = (theme: any) => ({
  tooltip: { trigger: 'item' },
  legend: { top: '5%', left: 'center' },
  series: [
    {
      name: 'Tratamientos',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: { show: false, position: 'center' },
      emphasis: {
        label: { show: true, fontSize: '18', fontWeight: 'bold' }
      },
      data: [
        { value: 40, name: 'Limpieza Facial', itemStyle: { color: theme.colors.pink[100] } },
        { value: 25, name: 'Botox', itemStyle: { color: theme.colors.pink[200] } },
        { value: 20, name: 'Láser', itemStyle: { color: theme.colors.pink[300] } },
        { value: 15, name: 'Cuerpo', itemStyle: { color: theme.colors.pink[400] } }
      ]
    }
  ]
});

const getChannelsData = (theme: any) => ({
  tooltip: { trigger: 'item' },
  legend: { bottom: '0%' },
  series: [
    {
      name: 'Adquisición',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 50, name: 'Sitio Web', itemStyle: { color: theme.colors.pink[100] } },
        { value: 30, name: 'Anuncios IG', itemStyle: { color: theme.colors.pink[300] } },
        { value: 20, name: 'Referidos', itemStyle: { color: theme.colors.pink[200] } }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});


interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  to?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false, to = '#' }) => (
  <Flex
    as={Link}
    to={to}
    align="center"
    p={3}
    mx={4}
    borderRadius="lg"
    role="group"
    cursor="pointer"
    bg={active ? 'pink.500' : 'transparent'}
    color={active ? 'white' : 'gray.600'}
    fontWeight={active ? 'bold' : 'medium'}
    transition="all 0.2s"
    _hover={{
      bg: 'pink.400',
      color: 'white',
    }}
  >
    <Icon as={icon} mr="4" fontSize="16" />
    {label}
  </Flex>
);

const SidebarContent = () => (
    <Flex direction="column" h="full" py={8}>
      <Box px={6} mb={8}>
        <Heading as="h2" size="md" tracking="tight">
          DermaPlus <Box as="span" color="pink.500">.</Box>
        </Heading>
        <Text fontSize="xs" color="gray.500" mt={1}>Gestión Interna</Text>
      </Box>
      
      <VStack spacing={1} align="stretch">
        <SidebarItem icon={LayoutDashboard} label="Resumen" active />
        <SidebarItem icon={Users} label="Pacientes" />
        <SidebarItem icon={Calendar} label="Citas" />
        <SidebarItem icon={Activity} label="Rendimiento" />
      </VStack>

      <VStack spacing={1} align="stretch" mt="auto" pt={10}>
        <Text px={6} fontSize="xs" fontWeight="bold" color="gray.400" textTransform="uppercase" mb={2}>Sistema</Text>
        <SidebarItem icon={Settings} label="Ajustes" />
        <SidebarItem icon={LogOut} label="Salir del Panel" to="/" />
      </VStack>
    </Flex>
);


interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendDirection?: 'increase' | 'decrease';
  helpText?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, trendDirection = 'increase', helpText }) => (
  <Stat bg="white" rounded="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100" p={6}>
    <StatLabel color="gray.500" fontSize="sm" fontWeight="medium" mb={1}>{label}</StatLabel>
    <StatNumber fontSize="2xl" fontWeight="bold" color="gray.900" mb={1}>{value}</StatNumber>
    {trend && (
      <StatHelpText color={trendDirection === 'decrease' ? 'red.500' : 'green.500'}>
        <Icon as={TrendingUp} w={4} h={4} mr={1} />
        {trend}
      </StatHelpText>
    )}
    {helpText && (
      <Text fontSize="xs" fontWeight="bold" color="gray.400" textTransform="uppercase" mt={1}>
        {helpText}
      </Text>
    )}
  </Stat>
);

const Dashboard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();
  
  // Refs for charts to handle resizing
  const chart1Ref = useRef<any>(null);
  const chart2Ref = useRef<any>(null);
  const chart3Ref = useRef<any>(null);

  // Fix: Force resize charts after mount to ensure they fit container properly
  useEffect(() => {
    const resizeCharts = () => {
      chart1Ref.current?.getEchartsInstance()?.resize();
      chart2Ref.current?.getEchartsInstance()?.resize();
      chart3Ref.current?.getEchartsInstance()?.resize();
    };

    const timer1 = setTimeout(resizeCharts, 50);
    const timer2 = setTimeout(resizeCharts, 500);

    window.addEventListener('resize', resizeCharts);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', resizeCharts);
    };
  }, [isOpen]);

  return (
    <Flex minH="100vh" bg="gray.50" fontFamily="sans">
      {/* Sidebar for Desktop */}
      <Box 
        as="aside"
        w="250px"
        bg="white"
        borderRight="1px"
        borderColor="gray.200"
        h="100vh"
        position="sticky"
        top="0"
        display={{ base: 'none', md: 'block' }}
      >
        <SidebarContent />
      </Box>

      {/* Sidebar for Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent />
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box as="main" flex="1" p={{ base: 4, md: 8 }} minW={0} overflow="auto">
        {/* Topbar */}
        <Flex
          bg="white"
          p={4}
          rounded="xl"
          shadow="sm"
          borderWidth="1px"
          borderColor="pink.100"
          mb={8}
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={4}
        >
          <HStack spacing={4}>
            <IconButton
              aria-label="Abrir menú"
              icon={<Menu />}
              onClick={onOpen}
              display={{ md: 'none' }}
              variant="ghost"
            />
            <Box>
              <Heading as="h1" size="lg" color="gray.900">Bienvenida, Dra. Sarah</Heading>
              <Text fontSize="sm" color="gray.500">Esto es lo que sucede hoy.</Text>
            </Box>
          </HStack>

          <HStack spacing={4}>
            <Box position="relative" cursor="pointer">
              <Icon as={Bell} w={5} h={5} color="gray.400" _hover={{ color: 'gray.600' }} />
              <Box position="absolute" top="-2px" right="-2px" w="10px" h="10px" bg="red.400" rounded="full" borderWidth="2px" borderColor="white" />
            </Box>
            <Avatar size="sm" name="Dra. Sarah" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" />
          </HStack>
        </Flex>

        {/* Stats Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
          <StatCard 
            label="Pacientes Totales (May)" 
            value="330" 
            trend="23.36% vs mes anterior" 
            trendDirection="increase"
          />
          <StatCard 
            label="Ingresos" 
            value="$45,200" 
            trend="12.5% vs mes anterior" 
            trendDirection="increase"
          />
          <StatCard 
            label="Nuevas Citas" 
            value="48" 
            helpText="Hoy"
          />
          <StatCard 
            label="Satisfacción Media" 
            value="4.9/5" 
            trend="Basado en 120 reseñas" 
            trendDirection="increase"
          />
        </SimpleGrid>

        {/* Charts Section */}
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
          {/* Main Chart */}
          <Box gridColumn={{ lg: 'span 2' }} bg="white" rounded="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100" p={6}>
            <Heading as="h3" size="sm" color="gray.900" mb={4}>Crecimiento de Pacientes (2025)</Heading>
            <Box h="300px" w="full">
              <ReactECharts 
                ref={chart1Ref}
                option={getPatientsData(theme)} 
                style={{ height: '100%', width: '100%' }} 
                opts={{ renderer: 'svg' }}
              />
            </Box>
          </Box>

          {/* Side Charts */}
          <VStack spacing={6}>
            <Box w="full" bg="white" rounded="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100" p={6}>
              <Heading as="h3" size="sm" color="gray.900" mb={4}>Tratamientos Populares</Heading>
              <Box h="200px" w="full">
                <ReactECharts 
                  ref={chart2Ref}
                  option={getTreatmentsData(theme)} 
                  style={{ height: '100%', width: '100%' }} 
                  opts={{ renderer: 'svg' }}
                />
              </Box>
            </Box>

            <Box w="full" bg="white" rounded="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100" p={6}>
              <Heading as="h3" size="sm" color="gray.900" mb={4}>Canales de Adquisición</Heading>
              <Box h="200px" w="full">
                <ReactECharts 
                  ref={chart3Ref}
                  option={getChannelsData(theme)} 
                  style={{ height: '100%', width: '100%' }} 
                  opts={{ renderer: 'svg' }}
                />
              </Box>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </Flex>
  );
};

export default Dashboard;