import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Truck, 
  MapPin, 
  Settings,
  Mountain,
  Route,
  Shovel,
  CheckCircle
} from "lucide-react";

const TerraplagemTab = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5517997444451", "_blank");
  };

  const services = [
    {
      icon: <Mountain className="w-8 h-8 text-accent" />,
      title: "Terraplanagem",
      description: "Movimentação de terra para preparação de terrenos e nivelamento"
    },
    {
      icon: <Shovel className="w-8 h-8 text-accent" />,
      title: "Limpeza de Terreno",
      description: "Remoção de vegetação e detritos para preparação do solo"
    },
    {
      icon: <Route className="w-8 h-8 text-accent" />,
      title: "Pavimentação",
      description: "Preparação e execução de pavimentação para diferentes tipos de piso"
    },
    {
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: "Manutenção de Estradas",
      description: "Conservação e reparo de vias para manter a qualidade do tráfego"
    },
    {
      icon: <Shovel className="w-8 h-8 text-accent" />,
      title: "Escavações",
      description: "Escavações especializadas para fundações e infraestrutura"
    }
  ];

  const equipment = [
    {
      name: "Retroescavadeira",
      description: "Para escavações, carregamento e movimentação de materiais",
      icon: <Truck className="w-12 h-12 text-accent" />
    },
    {
      name: "Minicarregadeira",
      description: "Ideal para trabalhos em espaços reduzidos e alta manobralidade",
      icon: <Truck className="w-12 h-12 text-accent" />
    },
    {
      name: "Motoniveladora",
      description: "Para nivelamento e acabamento fino de superfícies",
      icon: <Truck className="w-12 h-12 text-accent" />
    }
  ];

  const highlights = [
    "Raio de atuação de 100km",
    "Equipamentos modernos e bem conservados",
    "Operadores experientes e qualificados",
    "Projeto referência: Supermercados Amigão",
    "Compromisso com prazos e qualidade",
    "Soluções completas para obras"
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="bg-gradient-to-br from-background to-secondary py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/7ab0efa8-194f-488c-869c-d72b341a9cff.png')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <Mountain className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-arimo">
              Terraplanagem e
              <span className="text-accent"> Locação de Máquinas</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 font-arimo max-w-3xl mx-auto">
              Soluções completas em terraplanagem e locação de máquinas pesadas. 
              Eficiência, segurança e economia para todos os tipos de obras.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-arimo font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-arimo">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold font-arimo mb-2">{service.title}</h3>
                  <p className="text-muted-foreground font-arimo text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-arimo">
              Equipamentos Disponíveis para Locação
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {equipment.map((item, index) => (
                <Card key={index} className="border-none shadow-xl">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-arimo">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-arimo text-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage and Highlights */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-arimo">
                Área de Atuação
              </h2>
              <div className="flex items-start mb-6">
                <MapPin className="w-8 h-8 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold font-arimo mb-2">Raio de 100km</h3>
                  <p className="text-muted-foreground font-arimo">
                    Atendemos toda a região em um raio de 100km a partir de José Bonifácio, 
                    garantindo rapidez no atendimento e economia no transporte de equipamentos.
                  </p>
                </div>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg">
                <h4 className="font-bold font-arimo mb-2 text-accent">Projeto Destaque</h4>
                <p className="font-arimo">
                  Terraplanagem completa do <strong>Supermercados Amigão</strong>, 
                  um dos maiores empreendimentos da cidade, marcando nossa entrada 
                  no segmento com excelência.
                </p>
              </div>
            </div>
            <div>
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-arimo text-center">
                    Por que Nos Escolher?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="font-arimo text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-arimo">
            Precisa de Terraplanagem ou Locação?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-arimo">
            Entre em contato conosco e descubra como podemos ajudar no seu projeto. 
            Oferecemos soluções completas com equipamentos modernos e equipe especializada.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-arimo font-medium"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar Orçamento
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TerraplagemTab;