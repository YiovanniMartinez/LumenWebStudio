import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg gradient-neon flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-sm">L</span>
            </div>
            <span className="font-heading font-semibold text-lg text-foreground">
              Lumen<span className="text-primary">Web</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm">Iluminamos la presencia digital de tu negocio.</p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/lumenweb._"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} LumenWeb Studio. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
