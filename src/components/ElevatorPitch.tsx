import { useState } from "react";  
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play, Users, Target, Gamepad2, Palette, Zap, Smartphone } from "lucide-react";
import gameplayHero from "@/assets/gameplay-2d-hero.png";
import gravityArtistLogo from "@/assets/gravity-artist-logo.png";
import mechanicsDemo from "@/assets/mechanics-2d-demo.png";
import levelDesign from "@/assets/level-design-2d.png";
import uspIllustration from "@/assets/usp-illustration.png";
import targetAudience from "@/assets/target-audience.png";

const slides = [
  {
    title: "Game Overview",
    content: (
      <div className="space-y-8">
        <div className="text-center space-y-6">
          <img src={gravityArtistLogo} alt="Gravity Artist Logo" className="h-32 mx-auto" />
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">Gravity Artist</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A quirky puzzle-platformer where you control a ragdoll artist who manipulates gravity to create masterpieces with paint trails
            </p>
          </div>
        </div>
        
        <img src={gameplayHero} alt="Gameplay Hero" className="w-full max-w-4xl mx-auto rounded-xl shadow-paint" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Badge variant="secondary" className="justify-center p-3">
            <Gamepad2 className="w-4 h-4 mr-2" />
            2D Puzzle-Platformer
          </Badge>
          <Badge variant="secondary" className="justify-center p-3">
            <Target className="w-4 h-4 mr-2" />
            Web Game
          </Badge>
          <Badge variant="secondary" className="justify-center p-3">
            <Users className="w-4 h-4 mr-2" />
            Age 12+
          </Badge>
          <Badge variant="secondary" className="justify-center p-3">
            <Palette className="w-4 h-4 mr-2" />
            Physics-Based
          </Badge>
        </div>
      </div>
    )
  },
  {
    title: "Game Summary & Core Gameplay",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Paint with Motion!</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Use gravity control to fling a ragdoll through artistic challenges, leaving trails that complete masterpieces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={mechanicsDemo} alt="Mechanics Demo" className="rounded-xl shadow-card-custom" />
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Core Mechanics</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-paint-red"></div>
                  <span>Instant gravity direction changes (Up/Down/Left/Right)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-paint-blue"></div>
                  <span>Persistent paint trails follow ragdoll movement</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-paint-green"></div>
                  <span>Canvas zones must be painted to complete levels</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-paint-yellow"></div>
                  <span>Physics-based collisions with realistic ragdoll movement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "USP & Target Audience",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Unique Selling Points</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={uspIllustration} alt="Unique Selling Points" className="rounded-xl shadow-card-custom" />
          <div className="grid gap-6">
            <Card className="p-6 bg-gradient-card border-0 shadow-card-custom text-center space-y-4">
              <Palette className="w-12 h-12 mx-auto text-paint-red" />
              <h3 className="text-xl font-semibold">Art as Gameplay</h3>
              <p className="text-muted-foreground">Every move leaves a visible, creative trace that becomes part of the puzzle solution</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-0 shadow-card-custom text-center space-y-4">
              <Play className="w-12 h-12 mx-auto text-paint-blue" />
              <h3 className="text-xl font-semibold">Ragdoll Humor</h3>
              <p className="text-muted-foreground">Unexpected physics interactions add delightful chaos to every playthrough</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-0 shadow-card-custom text-center space-y-4">
              <Target className="w-12 h-12 mx-auto text-paint-green" />
              <h3 className="text-xl font-semibold">Dynamic Objectives</h3>
              <p className="text-muted-foreground">Paint different shapes and patterns, not just reach the exit</p>
            </Card>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Target Audience",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Target Audience</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={targetAudience} alt="Target Audience" className="rounded-xl shadow-card-custom" />
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="font-medium">Puzzle Gamers</p>
                <p className="text-sm text-muted-foreground">Strategic thinkers who enjoy creative problem-solving</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Gamepad2 className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="font-medium">Casual Players</p>
                <p className="text-sm text-muted-foreground">Easy to pick up, hard to master gameplay</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Palette className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="font-medium">Indie Game Fans</p>
                <p className="text-sm text-muted-foreground">Appreciate unique and creative experiences</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Zap className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="font-medium">Age 12+</p>
                <p className="text-sm text-muted-foreground">Family-friendly content for all ages</p>
              </div>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-3">Primary Demographics</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-primary">Age Range</p>
                  <p className="text-muted-foreground">12-35 years</p>
                </div>
                <div>
                  <p className="font-medium text-primary">Platforms</p>
                  <p className="text-muted-foreground">Web, Mobile</p>
                </div>
                <div>
                  <p className="font-medium text-primary">Play Style</p>
                  <p className="text-muted-foreground">Casual Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Gameplay Elements & Mechanics",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Gameplay Elements</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Player Mechanics</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <span>W/A/S/D - Shift gravity directions</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  <span>Ragdoll physics with elastic limbs</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  <span>Paint trail generation on movement</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Interactables</h3>
              <div className="grid grid-cols-2 gap-3">
                <Badge variant="outline" className="justify-center p-2">Paint Pots</Badge>
                <Badge variant="outline" className="justify-center p-2">Speed Boosts</Badge>
                <Badge variant="outline" className="justify-center p-2">Canvas Zones</Badge>
                <Badge variant="outline" className="justify-center p-2">Collectibles</Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img src={levelDesign} alt="Level Design" className="rounded-xl shadow-card-custom" />
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hazards & Obstacles</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-destructive/10 rounded-lg text-center">
                  <span className="text-destructive font-medium">Spikes</span>
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg text-center">
                  <span className="text-destructive font-medium">Moving Saws</span>
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg text-center">
                  <span className="text-destructive font-medium">Falling Blocks</span>
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg text-center">
                  <span className="text-destructive font-medium">Rotating Bars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Monetization & Platform",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Monetization Strategy</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card border-0 shadow-card-custom">
            <div className="text-center space-y-4">
              <Play className="w-16 h-16 mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">Web Launch</h3>
              <p className="text-xl font-bold text-primary">Free to Play</p>
              <p className="text-muted-foreground">Unity ads integration for web browsers with optional cosmetics</p>
              <div className="pt-4 space-y-2">
                <Badge variant="secondary" className="mr-2">Unity Ads</Badge>
                <Badge variant="secondary">Rewarded Videos</Badge>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-card border-0 shadow-card-custom">
            <div className="text-center space-y-4">
              <Smartphone className="w-16 h-16 mx-auto text-accent" />
              <h3 className="text-2xl font-semibold">Mobile Expansion</h3>
              <p className="text-xl font-bold text-accent">Ad-Supported</p>
              <p className="text-muted-foreground">Interstitial and banner ads with optional cosmetic purchases</p>
              <div className="pt-4 space-y-2">
                <Badge variant="outline" className="mr-2">iOS/Android</Badge>
                <Badge variant="outline">In-App Purchases</Badge>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="bg-muted p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">Development Timeline</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">1</div>
              <h4 className="font-semibold">Prototype</h4>
              <p className="text-sm text-muted-foreground">1 week</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto text-secondary-foreground font-bold">2</div>
              <h4 className="font-semibold">Core Gameplay</h4>
              <p className="text-sm text-muted-foreground">2 weeks</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto text-accent-foreground font-bold">3</div>
              <h4 className="font-semibold">Level Building</h4>
              <p className="text-sm text-muted-foreground">1 week</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-paint-green rounded-full flex items-center justify-center mx-auto text-white font-bold">4</div>
              <h4 className="font-semibold">Polish</h4>
              <p className="text-sm text-muted-foreground">1 week</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function ElevatorPitch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={gravityArtistLogo} alt="Gravity Artist Logo" className="h-12" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">Gravity Artist</h1>
                <p className="text-sm text-muted-foreground">Elevator Pitch Presentation</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Slide Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide Content */}
          <div className="bg-card rounded-2xl shadow-card-custom p-8 md:p-12 min-h-[600px]">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                {slides[currentSlide].title}
              </Badge>
            </div>
            
            <div className="animate-in fade-in-50 duration-500">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button variant="outline" onClick={prevSlide} disabled={currentSlide === 0} className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              <Button variant="hero" size="lg" className="gap-2">
                <Play className="w-4 h-4" />
                View Full GDD
              </Button>
            </div>
            
            <Button variant="outline" onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="gap-2">
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Gravity Artist - Puzzle-Platformer Game Concept | Unity 2022 LTS | Target Release: 2024
          </p>
        </div>
      </footer>
    </div>
  );
}