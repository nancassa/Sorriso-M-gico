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

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-clinic-blue/10 rounded-full flex items-center justify-center">
                <Smile className="text-clinic-blue w-8 h-8" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Star className="text-clinic-green w-4 h-4 fill-clinic-green" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 leading-none">
                Sorriso <span className="text-clinic-green">Mágico</span>
              </span>
              <span className="text-[10px] text-clinic-blue font-bold uppercase tracking-widest mt-1">
                Clínica Dentária
              </span>
            </div>
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#sobre" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-600">Sobre</a>
              <a href="#servicos" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-600">Serviços</a>
              <a href="#equipa" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-600">Equipa</a>
              <a href="#contactos" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-600">Contactos</a>
              <a 
                href="tel:910000000" 
                className="block w-full text-center bg-clinic-blue text-white py-3 rounded-xl font-bold"
              >
                Marcar Consulta
              </a>
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
  <section id="sobre" className="py-24 bg-white">
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
  <section id="servicos" className="py-24 bg-gray-50">
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
  <section id="equipa" className="py-24 bg-gray-50">
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
  <section id="contactos" className="py-24 bg-white">
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
          <Smile className="text-clinic-blue w-8 h-8" />
          <span className="text-2xl font-bold">Sorriso <span className="text-clinic-green">Mágico</span></span>
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
