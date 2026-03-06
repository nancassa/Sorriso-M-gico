import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  MessageCircle,
  Stethoscope,
  Smile,
  ShieldCheck,
  Zap,
  Users,
  Calendar,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const CLINIC_INFO = {
  name: "Sorriso Mágico",
  slogan: "O seu sorriso é a nossa prioridade",
  location: "Lisboa / Rua 123",
  phone: "910000000",
  email: "info@sorrisomagico.pt",
  hours: "Seg - Sex: 09:00 - 19:00 | Sáb: 09:00 - 13:00"
};

const SERVICES = [
  {
    title: "Implantologia",
    description: "Recupere a funcionalidade e estética do seu sorriso com implantes de alta qualidade.",
    icon: <Stethoscope className="w-8 h-8 text-clinic-blue" />
  },
  {
    title: "Ortodontia",
    description: "Alinhamento dentário para todas as idades com as técnicas mais modernas.",
    icon: <Zap className="w-8 h-8 text-clinic-blue" />
  },
  {
    title: "Branqueamento",
    description: "Um sorriso mais radiante e branco com tratamentos seguros e eficazes.",
    icon: <Smile className="w-8 h-8 text-clinic-blue" />
  },
  {
    title: "Limpeza e Prevenção",
    description: "Mantenha a sua saúde oral em dia com check-ups regulares e limpezas profundas.",
    icon: <ShieldCheck className="w-8 h-8 text-clinic-blue" />
  },
  {
    title: "Odontopediatria",
    description: "Cuidados especializados para os mais pequenos, num ambiente acolhedor.",
    icon: <Users className="w-8 h-8 text-clinic-blue" />
  },
  {
    title: "Estética Dentária",
    description: "Transforme o seu sorriso com facetas e outros tratamentos estéticos avançados.",
    icon: <Star className="w-8 h-8 text-clinic-blue" />
  }
];

const ADVANTAGES = [
  "Dentistas certificados",
  "Equipamentos modernos",
  "Atendimento personalizado",
  "Ambiente confortável",
  "Atendimento para toda a família"
];

const TESTIMONIALS = [
  {
    name: "Ana Silva",
    text: "Excelente atendimento e profissionais muito atenciosos. Recomendo vivamente!",
    rating: 5,
    image: "https://picsum.photos/seed/patient1/100/100"
  },
  {
    name: "João Pereira",
    text: "A tecnologia utilizada é impressionante. Senti-me muito seguro durante todo o tratamento.",
    rating: 5,
    image: "https://picsum.photos/seed/patient2/100/100"
  },
  {
    name: "Maria Santos",
    text: "A melhor clínica onde já estive. O cuidado com o paciente é a prioridade absoluta.",
    rating: 5,
    image: "https://picsum.photos/seed/patient3/100/100"
  }
];

const TEAM = [
  {
    name: "Dr. Ricardo Costa",
    specialty: "Implantologia",
    experience: "15 anos de experiência",
    image: "https://picsum.photos/seed/doctor1/400/500"
  },
  {
    name: "Dra. Sofia Martins",
    specialty: "Ortodontia",
    experience: "10 anos de experiência",
    image: "https://picsum.photos/seed/doctor2/400/500"
  },
  {
    name: "Dr. Miguel Oliveira",
    specialty: "Estética Dentária",
    experience: "12 anos de experiência",
    image: "https://picsum.photos/seed/doctor3/400/500"
  }
];

const Logo = ({ className = "h-16 w-auto" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 2134 2134" 
    className={className}
    style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
  >
    <rect id="Logo-Sorriso-Mágico" x="0" y="0" width="2133.333" height="2133.333" style={{ fill: 'none' }} />
    <g>
      <g>
        <path d="M1138.066,1175.791l2.425,11.956c-473.93,103.358 -650.431,-92.032 -669.979,-63.952c-6.539,9.394 178.215,237.472 470.825,251.295c260.66,12.314 379.167,-94.525 385.646,-98.567c1.661,-1.036 29.3,0.626 -0.726,24.462c-495.363,393.242 -1018.137,25.57 -1080.938,-367.115c-7.888,-49.32 48.838,24.643 212.377,82.923c853.814,304.276 1320.362,-463.259 1204.88,-625.862c-51.962,-73.164 -239.152,-62.167 -112.177,-81.509c177.416,-27.026 145.04,-186.81 154.671,-196.315c28.844,-28.466 0.195,120.589 97.297,173.175c42.637,23.091 162.965,35.687 104.225,44.954c-156.499,24.69 -157.378,53.519 -197.219,235.705c-12.083,55.251 -88.562,404.974 -428.707,562.147c-82.944,38.326 -44.665,-81.899 -76.769,-66.446c-18.924,9.109 30.194,66.772 -75.754,93.721c-20.562,5.23 8.341,18.689 9.923,19.426Z" style={{ fill: '#74bbe6' }} />
        <path d="M521.458,1417.174c3.754,-1.411 4.753,-7.096 8.507,-8.507c3.669,-1.379 23.069,10.801 24.944,11.978c46.86,29.418 341.256,214.236 691.525,-11.219c246.766,-158.834 295.783,-362.582 316.757,-429.356c17.971,-57.213 119.72,-133.977 165.404,-323.463c14.521,-60.229 20.713,57.311 20.991,62.585c25.96,492.757 -301.985,740.102 -513.572,821.292c-296.79,113.885 -598.549,-15.59 -714.555,-123.31Z" style={{ fill: '#a5cf6d' }} />
        <path d="M1476.238,478.731c52.596,94.637 96.765,39.335 112.302,69.758c11.291,22.109 -104.133,-2.881 -118.485,99.485c-13.508,96.344 -25.025,-14.886 -40.753,-42.407c-30.104,-52.677 -128.999,-38.999 -100.91,-61.68c20.653,-16.676 98.592,25.81 117.925,-100.962c11.034,-72.35 26.95,25.331 29.921,35.807Z" style={{ fill: '#a5cd6a' }} />
        <path d="M1976.032,662.911c-79.123,21.36 -77.184,31.898 -89.05,82.29c-13.681,58.098 -17.881,-21.875 -36.882,-49.883c-19.833,-29.234 -83.545,-24.953 -72.944,-43.406c11.502,-20.02 67.478,27.449 88.799,-74.904c14.927,-71.657 15.928,24.78 43.998,50.493c27.739,25.41 66.799,12.686 66.079,35.41Z" style={{ fill: '#a4cc6b' }} />
        <path d="M383.151,835.024c-2.058,2.494 -4.116,4.989 -6.175,7.483c-237.242,31.18 -170.228,224.421 -212.494,206.659c-12.433,-5.225 -33.253,-233.965 177.246,-227.093c44.003,1.437 40.266,10.923 41.423,12.95Z" style={{ fill: '#79bae3' }} />
        <path d="M1138.066,1175.791l9.229,-6.805c30.109,-1.387 33.364,-0.64 36.185,0.008c64.319,14.76 77.641,-22.369 118.553,-5.248c31.667,13.252 -3.866,14.337 -36.12,24.733c-41.536,13.388 -47.003,82.008 -49.004,84.034c-35.584,36.036 14.666,-84.766 -76.418,-84.767l-2.425,-11.956Z" style={{ fill: '#afd5e9' }} />
        <path d="M1112.415,1266.017c17.81,-19.932 44.402,3.3 25.055,25.165l-6.836,3.875c-0.58,-0.019 -4.553,8.615 -17.133,-5.037c-12.447,-13.509 -4.354,-16.107 -4.363,-16.717l3.277,-7.287Z" style={{ fill: '#73b2d7' }} />
      </g>
      <text x="39.215px" y="1915.71px" style={{ fontFamily: 'Poppins-MediumItalic, Poppins', fontWeight: 500, fontStyle: 'italic', fontSize: '273.962px', fill: '#74bbe6' }}>Sorriso Mágico</text>
    </g>
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <Logo className="h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-600 hover:text-clinic-blue transition-colors font-medium">Sobre</a>
            <a href="#servicos" className="text-gray-600 hover:text-clinic-blue transition-colors font-medium">Serviços</a>
            <a href="#equipa" className="text-gray-600 hover:text-clinic-blue transition-colors font-medium">Equipa</a>
            <a href="#contactos" className="text-gray-600 hover:text-clinic-blue transition-colors font-medium">Contactos</a>
            <a 
              href="tel:910000000" 
              className="bg-clinic-blue text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-400 transition-all shadow-lg shadow-clinic-blue/20"
            >
              Marcar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 pt-2 pb-8 space-y-2">
              <a 
                href="#sobre" 
                onClick={() => setIsOpen(false)} 
                className="block py-3 text-lg font-semibold text-gray-700 hover:text-clinic-blue transition-colors border-b border-gray-50"
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                onClick={() => setIsOpen(false)} 
                className="block py-3 text-lg font-semibold text-gray-700 hover:text-clinic-blue transition-colors border-b border-gray-50"
              >
                Serviços
              </a>
              <a 
                href="#equipa" 
                onClick={() => setIsOpen(false)} 
                className="block py-3 text-lg font-semibold text-gray-700 hover:text-clinic-blue transition-colors border-b border-gray-50"
              >
                Equipa
              </a>
              <a 
                href="#contactos" 
                onClick={() => setIsOpen(false)} 
                className="block py-3 text-lg font-semibold text-gray-700 hover:text-clinic-blue transition-colors border-b border-gray-50"
              >
                Contactos
              </a>
              <div className="pt-4">
                <a 
                  href="tel:910000000" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-clinic-blue text-white py-4 rounded-2xl font-bold shadow-lg shadow-clinic-blue/20"
                >
                  <Calendar className="w-5 h-5" />
                  Marcar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-clinic-blue/10 text-clinic-blue text-sm font-bold uppercase tracking-wider mb-6">
            Bem-vindo à Sorriso Mágico
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
            Cuide do seu sorriso com <span className="text-clinic-blue">especialistas</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            {CLINIC_INFO.slogan}. Tecnologia de ponta e atendimento humanizado para a sua saúde oral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:910000000" 
              className="flex items-center justify-center gap-2 bg-clinic-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-400 transition-all shadow-xl shadow-clinic-blue/30"
            >
              <Calendar className="w-5 h-5" />
              Marcar Consulta
            </a>
            <a 
              href="#servicos" 
              className="flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all"
            >
              Ver Serviços
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              <span className="text-gray-900 font-bold">+2.000</span> pacientes satisfeitos em Lisboa
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Dentista profissional" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-clinic-green/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-clinic-blue/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="absolute bottom-6 -left-6 z-20 glass-card p-4 rounded-2xl shadow-xl hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-clinic-green rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Tecnologia Moderna</p>
                <p className="text-xs text-gray-500">Equipamentos de última geração</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-24 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
            alt="Clínica moderna" 
            className="rounded-3xl shadow-xl"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Excelência em Saúde Oral</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Na Sorriso Mágico, combinamos anos de experiência com a tecnologia mais moderna do setor. O nosso compromisso é proporcionar um atendimento personalizado, focado no conforto e bem-estar de cada paciente.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Experiência Comprovada",
              "Tecnologia Moderna",
              "Atendimento Personalizado",
              "Foco no Conforto"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-clinic-green/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-clinic-green" />
                </div>
                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="py-24 bg-gray-50 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Serviços</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Oferecemos uma gama completa de tratamentos dentários para garantir que o seu sorriso se mantém saudável e bonito.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="mb-6 p-4 bg-clinic-blue/5 rounded-2xl w-fit group-hover:bg-clinic-blue group-hover:text-white transition-colors">
              {React.cloneElement(service.icon as React.ReactElement, { 
                className: "w-8 h-8 transition-colors group-hover:text-white" 
              })}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-24 bg-clinic-blue">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center text-white">
        <div>
          <h2 className="text-4xl font-bold mb-8">Porquê escolher a Sorriso Mágico?</h2>
          <div className="space-y-6">
            {ADVANTAGES.map((adv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-medium">{adv}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
            alt="Equipa médica" 
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl text-gray-900 shadow-2xl">
            <p className="text-3xl font-bold text-clinic-blue">100%</p>
            <p className="text-sm font-semibold text-gray-500">Satisfação Garantida</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">O que dizem os nossos pacientes</h2>
        <div className="flex justify-center gap-1 text-yellow-400">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} fill="currentColor" size={16} />)}
            </div>
            <p className="text-gray-600 italic mb-8">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <span className="font-bold text-gray-900">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="equipa" className="py-24 bg-gray-50 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Equipa Médica</h2>
        <p className="text-lg text-gray-600">Especialistas dedicados à sua saúde e estética oral.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {TEAM.map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl mb-6">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinic-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-medium">Marcar consulta com {member.name.split(' ')[1]}</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-clinic-blue font-bold mb-1">{member.specialty}</p>
            <p className="text-gray-500 text-sm">{member.experience}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-clinic-green rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-8">Marque a sua consulta hoje mesmo</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Não adie o cuidado com o seu sorriso. A nossa equipa está pronta para o receber com toda a segurança e conforto.
          </p>
          <a 
            href="tel:910000000" 
            className="inline-flex items-center gap-3 bg-white text-clinic-green px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl"
          >
            <Phone className="w-6 h-6" />
            Agendar Consulta
          </a>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  </section>
);

const Contacts = () => (
  <section id="contactos" className="py-24 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Onde nos encontrar</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-clinic-blue/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-clinic-blue" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Morada</p>
                <p className="text-gray-600">{CLINIC_INFO.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-clinic-blue/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-clinic-blue" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Telefone</p>
                <p className="text-gray-600">{CLINIC_INFO.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-clinic-blue/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-clinic-blue" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Email</p>
                <p className="text-gray-600">{CLINIC_INFO.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-clinic-blue/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-clinic-blue" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Horário</p>
                <p className="text-gray-600">{CLINIC_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          {/* Placeholder for Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-9.1393366!3d38.7222524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon!5e0!3m2!1sen!2spt!4v1625000000000!5m2!1sen!2spt" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Logo className="h-12 w-auto brightness-0 invert" />
        </div>
        <div className="flex gap-8 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sorriso Mágico. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.a 
    href="https://wa.me/351910000000" 
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
  >
    <MessageCircle size={32} />
  </motion.a>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-clinic-blue/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <Team />
      <CTA />
      <Contacts />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
