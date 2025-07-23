import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Award, Target, Eye } from "lucide-react";
import inicioBg from "@/assets/inicio-bg.jpg";

const InicioTab = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5517997444451", "_blank");
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="bg-gradient-to-br from-background to-secondary py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${inicioBg}')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-arimo">
              Conectando o futuro com
              <span className="text-white"> infraestrutura sólida</span>
            </h1>
            <p className="text-xl text-white mb-8 font-arimo max-w-3xl mx-auto">
              Mais de 16 anos de experiência em soluções de fibra óptica subterrânea e terraplanagem.
              Uma empresa familiar comprometida com qualidade, segurança e inovação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-arimo font-medium"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              <Button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-arimo font-medium"
              >
                Conheça nossos serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-arimo">
            Nossa História
          </h2>
          <div className="prose prose-lg max-w-none font-arimo text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              A Torres e Torres é uma empresa familiar que carrega em seu DNA a força do trabalho dedicado, 
              da confiança e da evolução constante. São mais de <strong className="text-accent">16 anos de trajetória</strong>, 
              marcada pelo compromisso em entregar soluções robustas e seguras.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Iniciamos nossa história atendendo o segmento de torres metálicas para via rádio, ajudando a 
              conectar pessoas e empresas quando a comunicação sem fio ainda estava em expansão. Mas não 
              paramos no tempo: há mais de 6 anos, nos especializamos na implantação de 
              <strong className="text-accent"> redes de fibra óptica subterrânea</strong>, uma tecnologia 
              essencial para a infraestrutura de cidades mais conectadas e modernas.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Com mais de <strong className="text-accent">2.000 km de rede subterrânea executados</strong>, 
              atendemos diversos projetos de pequeno, médio e grande porte, sempre com equipes técnicas 
              especializadas, equipamentos de ponta e total comprometimento com prazos e qualidade.
            </p>
            <p className="text-lg leading-relaxed">
              Expandindo nosso portfólio, há 2 anos ingressamos no ramo de <strong className="text-accent">
              terraplanagem e locação de máquinas</strong>, dando início a esse novo capítulo com um grande 
              marco: a terraplanagem completa de um dos maiores empreendimentos da cidade, o Supermercados 
              Amigão. Hoje, seguimos oferecendo soluções completas para obras, garantindo mais eficiência, 
              segurança e economia para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-2xl font-bold font-arimo">Missão</h3>
                  </div>
                  <p className="text-foreground font-arimo leading-relaxed">
                    Entregar soluções de infraestrutura com qualidade, segurança e inovação, 
                    contribuindo para o desenvolvimento das cidades e o sucesso dos nossos clientes, 
                    sempre com responsabilidade, transparência e compromisso.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Eye className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-2xl font-bold font-arimo">Visão</h3>
                  </div>
                  <p className="text-foreground font-arimo leading-relaxed">
                    Ser referência regional em implantação de redes subterrâneas, terraplanagem e 
                    locação de máquinas, expandindo com solidez, tecnologia e excelência, mantendo 
                    a essência familiar que constrói relações de confiança duradouras.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-arimo">
            Entre em Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold font-arimo mb-2">Localização</h3>
                <p className="text-muted-foreground font-arimo">
                  Av. Silio Paschoal, 330<br />
                  Polo Industrial<br />
                  José Bonifácio - SP
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold font-arimo mb-4">Contato</h3>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-arimo font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  (17) 99744-4451
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InicioTab;