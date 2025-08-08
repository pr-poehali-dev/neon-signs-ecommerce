import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm z-50 border-b border-neon-pink/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-neon-pink neon-glow animate-neon-pulse">
              NEON SIGNS
            </div>
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-neon-cyan transition-colors">Главная</a>
              <a href="#catalog" className="hover:text-neon-cyan transition-colors">Каталог</a>
              <a href="#portfolio" className="hover:text-neon-cyan transition-colors">Портфолио</a>
              <a href="#order" className="hover:text-neon-cyan transition-colors">Заказать</a>
              <a href="#contacts" className="hover:text-neon-cyan transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-background to-neon-cyan/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-glow text-neon-pink animate-float">
            НЕОНОВЫЕ
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 neon-glow text-neon-cyan">
            ВЫВЕСКИ
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Создаем яркие неоновые вывески на заказ. Привлекайте внимание клиентов с помощью 
            современных светящихся решений для вашего бизнеса.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-neon-pink hover:bg-neon-pink/80 neon-border border-neon-pink">
            <Icon name="Zap" className="mr-2" size={24} />
            Заказать вывеску
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/50 border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-neon-cyan/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Zap" size={32} className="text-neon-cyan" />
                </div>
                <CardTitle className="text-center text-neon-cyan">Яркие цвета</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Используем самые яркие и насыщенные неоновые цвета для максимального эффекта
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-neon-pink/30 hover:border-neon-pink/60 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-neon-pink/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={32} className="text-neon-pink" />
                </div>
                <CardTitle className="text-center text-neon-pink">Изготовление</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Полный цикл производства от дизайна до установки готовой вывески
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-neon-yellow/30 hover:border-neon-yellow/60 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-neon-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Star" size={32} className="text-neon-yellow" />
                </div>
                <CardTitle className="text-center text-neon-yellow">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Используем качественные материалы и современные технологии производства
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-background/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 neon-glow text-neon-pink">
            Каталог вывесок
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Ресторан", price: "от 15,000 ₽", color: "neon-pink" },
              { title: "Магазин", price: "от 12,000 ₽", color: "neon-cyan" },
              { title: "Бар", price: "от 18,000 ₽", color: "neon-yellow" },
              { title: "Кафе", price: "от 10,000 ₽", color: "neon-green" },
              { title: "Офис", price: "от 20,000 ₽", color: "neon-purple" },
              { title: "Салон", price: "от 14,000 ₽", color: "neon-pink" }
            ].map((item, index) => (
              <Card key={index} className="bg-background/50 border-neon-pink/30 hover:border-neon-pink/60 transition-all hover:scale-105">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-neon-pink/20 to-neon-pink/5 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                    {index < 3 && (
                      <img 
                        src={`/img/${index === 0 ? 'a39b5fe0-c33a-4bf6-8ccd-24fe6ece9a9f' : index === 1 ? '474f1b5d-9ac5-43a5-a7b2-fca00e6a5d1a' : '90204261-25ec-47c0-ac19-080a44c093ea'}.jpg`}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
                      />
                    )}
                    <div className="text-6xl font-bold text-neon-pink neon-glow relative z-10">
                      {item.title}
                    </div>
                  </div>
                  <CardTitle className="text-center text-neon-pink">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-4">{item.price}</p>
                    <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 neon-glow text-neon-cyan">
            Наши работы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg">
                <div className="w-full h-64 bg-gradient-to-br from-neon-pink/30 via-neon-cyan/30 to-neon-yellow/30 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white neon-glow">
                    ПРОЕКТ {item}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary">
                    <Icon name="Eye" className="mr-2" size={20} />
                    Посмотреть
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-20 bg-background/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 neon-glow text-neon-pink">
            Заказать вывеску
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-background/50 border-neon-pink/30">
              <CardHeader>
                <CardTitle className="text-center text-neon-pink">Оставьте заявку</CardTitle>
                <CardDescription className="text-center">
                  Заполните форму и мы свяжемся с вами для обсуждения проекта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Input placeholder="Ваше имя" className="bg-background/50 border-neon-pink/30" />
                </div>
                <div>
                  <Input placeholder="Телефон" className="bg-background/50 border-neon-cyan/30" />
                </div>
                <div>
                  <Input placeholder="Email" className="bg-background/50 border-neon-yellow/30" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите ваш проект: размер, цвета, текст..." 
                    className="bg-background/50 border-neon-green/30"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-neon-pink hover:bg-neon-pink/80 neon-border border-neon-pink">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 neon-glow text-neon-cyan">
            Контакты
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-neon-pink/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={32} className="text-neon-pink" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-neon-pink">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-neon-cyan/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={32} className="text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">Email</h3>
              <p className="text-gray-300">info@neonsigns.ru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-neon-yellow/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={32} className="text-neon-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-neon-yellow">Адрес</h3>
              <p className="text-gray-300">Москва, ул. Неоновая, 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background/50 border-t border-neon-pink/30">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-neon-pink neon-glow mb-4">
            NEON SIGNS
          </div>
          <p className="text-gray-400 mb-6">
            Создаем яркие неоновые вывески с 2020 года
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-neon-pink hover:text-neon-pink/80">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="sm" className="text-neon-cyan hover:text-neon-cyan/80">
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button variant="ghost" size="sm" className="text-neon-yellow hover:text-neon-yellow/80">
              <Icon name="Phone" size={24} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}