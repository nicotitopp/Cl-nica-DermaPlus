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
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Chart Data
const patientsData = {
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
      itemStyle: { color: '#BE185D' }, // Pink 700
      areaStyle: { color: 'rgba(255, 218, 227, 0.5)' } // #FFDAE3 with opacity
    }
  ]
};

const treatmentsData = {
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
        { value: 40, name: 'Limpieza Facial', itemStyle: { color: '#FFDAE3' } },
        { value: 25, name: 'Botox', itemStyle: { color: '#FBCFE8' } },
        { value: 20, name: 'Láser', itemStyle: { color: '#F9A8D4' } },
        { value: 15, name: 'Cuerpo', itemStyle: { color: '#F472B6' } }
      ]
    }
  ]
};

const channelsData = {
  tooltip: { trigger: 'item' },
  legend: { bottom: '0%' },
  series: [
    {
      name: 'Adquisición',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 50, name: 'Sitio Web', itemStyle: { color: '#FFDAE3' } },
        { value: 30, name: 'Anuncios IG', itemStyle: { color: '#F9A8D4' } },
        { value: 20, name: 'Referidos', itemStyle: { color: '#FBCFE8' } }
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
};

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active = false }) => (
  <div 
    className={`flex items-center p-3 mx-4 rounded-lg cursor-pointer transition-all duration-200 ${
      active 
        ? "bg-primary text-gray-900 font-bold" 
        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 font-medium"
    }`}
  >
    <Icon className="mr-4 w-5 h-5" />
    <span>{label}</span>
  </div>
);

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendDirection?: 'increase' | 'decrease';
  helpText?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, trendDirection, helpText }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
    <div className="text-gray-500 text-sm font-medium mb-1">{label}</div>
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    {trend && (
      <div className={`text-sm font-medium flex items-center ${trendDirection === 'decrease' ? 'text-red-500' : 'text-green-500'}`}>
        <TrendingUp className="w-4 h-4 mr-1" />
        {trend}
      </div>
    )}
    {helpText && (
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
        {helpText}
      </div>
    )}
  </div>
);

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Refs for charts to handle resizing
  const chart1Ref = useRef<any>(null);
  const chart2Ref = useRef<any>(null);
  const chart3Ref = useRef<any>(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Fix: Force resize charts after mount to ensure they fit container properly
  useEffect(() => {
    const resizeCharts = () => {
      chart1Ref.current?.getEchartsInstance()?.resize();
      chart2Ref.current?.getEchartsInstance()?.resize();
      chart3Ref.current?.getEchartsInstance()?.resize();
    };

    // Resize immediately and after a short delay for layout rendering
    const timer1 = setTimeout(resizeCharts, 50);
    const timer2 = setTimeout(resizeCharts, 500);

    window.addEventListener('resize', resizeCharts);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', resizeCharts);
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-light-bg flex font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-[250px] bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full py-8">
          <div className="px-6 mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                DermaPlus <span className="text-primary-text">.</span>
              </h2>
              <p className="text-xs text-gray-500 mt-1">Gestión Interna</p>
            </div>
            <button className="md:hidden text-gray-500" onClick={() => setIsSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-1">
            <SidebarItem icon={LayoutDashboard} label="Resumen" active />
            <SidebarItem icon={Users} label="Pacientes" />
            <SidebarItem icon={Calendar} label="Citas" />
            <SidebarItem icon={Activity} label="Rendimiento" />
          </div>

          <div className="mt-auto pt-10 space-y-1">
            <div className="px-6 text-xs font-bold text-gray-400 uppercase mb-2">Sistema</div>
            <SidebarItem icon={Settings} label="Ajustes" />
            <Link to="/">
              <SidebarItem icon={LogOut} label="Salir del Panel" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 min-w-0 overflow-auto">
        {/* Topbar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-gray-500"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Bienvenida, Dra. Sarah</h1>
              <p className="text-sm text-gray-500">Esto es lo que sucede hoy.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 self-end sm:self-auto">
            <div className="relative cursor-pointer group">
              <Bell className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" alt="Dra. Sarah" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Crecimiento de Pacientes (2024)</h3>
            <div className="h-[300px] w-full">
              <ReactECharts 
                ref={chart1Ref}
                option={patientsData} 
                style={{ height: '100%', width: '100%' }} 
                opts={{ renderer: 'svg' }}
              />
            </div>
          </div>

          {/* Side Charts */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Tratamientos Populares</h3>
              <div className="h-[200px] w-full">
                <ReactECharts 
                  ref={chart2Ref}
                  option={treatmentsData} 
                  style={{ height: '100%', width: '100%' }} 
                  opts={{ renderer: 'svg' }}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Canales de Adquisición</h3>
              <div className="h-[200px] w-full">
                <ReactECharts 
                  ref={chart3Ref}
                  option={channelsData} 
                  style={{ height: '100%', width: '100%' }} 
                  opts={{ renderer: 'svg' }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;