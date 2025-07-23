import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Zap, 
  Shield, 
  Globe, 
  Ruler,
  Building2,
  CheckCircle
} from "lucide-react";

const FibraTab = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5517997444451", "_blank");
  };

  const features = [
    {
      icon: <Ruler className="w-8 h-8 text-accent" />,
      title: "Profundidade Segura",
      description: "Enterrada a 1,20m de profundidade para máxima proteção e durabilidade"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Amplo Raio de Atuação",
      description: "Atendemos em um raio de 500km, conectando cidades, fazendas e empresas"
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent" />,
      title: "Foco Empresarial",
      description: "Especializado em conexões para empresas e propriedades rurais"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Máxima Segurança",
      description: "Infraestrutura subterrânea protegida contra intempéries e vandalismo"
    }
  ];

  const benefits = [
    "Mais de 2.000 km de rede subterrânea executados",
    "Equipes técnicas especializadas",
    "Equipamentos de última geração",
    "Compromisso total com prazos",
    "Qualidade garantida em todos os projetos",
    "Suporte técnico especializado"
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="bg-gradient-to-br from-background to-secondary py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/5e2b61ab-f8d0-4e44-8fc5-99732c2bccc5.png')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <Zap className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-arimo">
              Fibra Óptica
              <span className="text-white"> Subterrânea</span>
            </h1>
            <p className="text-xl text-white mb-8 font-arimo max-w-3xl mx-auto">
              Conectamos cidades, fazendas e empresas com a mais avançada tecnologia em 
              fibra óptica subterrânea. Infraestrutura robusta e segura para o futuro da comunicação.
            </p>
            <Button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-arimo font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conhecer Diferenciais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-arimo">
            Diferenciais da Nossa Fibra Óptica
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold font-arimo mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-arimo text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-arimo">
                  Especificações Técnicas
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold font-arimo mb-1">Raio de Atuação</h3>
                      <p className="text-muted-foreground font-arimo">
                        Atendemos em um raio de 500km, garantindo conectividade 
                        para grandes distâncias
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold font-arimo mb-1">Profundidade de Instalação</h3>
                      <p className="text-muted-foreground font-arimo">
                        Cabos enterrados a 1,20m de profundidade para máxima proteção 
                        contra intempéries e danos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold font-arimo mb-1">Público-Alvo</h3>
                      <p className="text-muted-foreground font-arimo">
                        Especializado em conexões entre cidades, fazendas e empresas 
                        (não atendemos uso residencial)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-arimo text-center">
                      Por que Escolher Nossa Fibra?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span className="font-arimo text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-arimo">
            Pronto para Conectar seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-arimo">
            Entre em contato conosco e descubra como nossa fibra óptica subterrânea 
            pode transformar a conectividade da sua empresa ou propriedade.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-arimo font-medium"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com Especialista
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FibraTab;