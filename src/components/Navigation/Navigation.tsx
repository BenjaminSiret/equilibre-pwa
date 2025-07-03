import { Link } from "@tanstack/react-router";
import Button from "../ui/Button";

const Navigation = () => {
  return (
    <nav className="flex justify-center gap-4 p-4 bg-gray-100">
      <Button as={Link} to="/" variant="secondary">
        Index
      </Button>
      <Button as={Link} to="/mood" variant="secondary">
        Mood
      </Button>
      <Button as={Link} to="/journal" variant="secondary">
        Journal
      </Button>
    </nav>
  );
};

export default Navigation;
