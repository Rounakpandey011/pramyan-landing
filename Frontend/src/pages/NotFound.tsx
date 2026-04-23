import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-screen flex items-center justify-center bg-background px-6">
    <div className="text-center max-w-md">
      <div className="font-display text-7xl md:text-8xl font-bold text-brand-teal mb-4">
        404
      </div>
      <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
        Page not found
      </h1>
      <p className="text-muted-foreground mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-brand-yellow text-accent-foreground font-semibold px-8 py-3 rounded-md shadow-lg hover:scale-105 transition-transform">
        Back to Home
      </Link>
    </div>
  </main>
);

export default NotFound;
