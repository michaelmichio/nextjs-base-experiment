import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="tw-p-4 tw:space-y-3">
      <h2 className="tw:text-xl tw:font-semibold">Tailwind Heading</h2>
      <p className="lead">Bootstrap Lead</p>
      <p
        className="tw:text-sm fw-800"
        style={{ backgroundColor: "var(--black)", color: "var(--white)" }}
      >
        Tailwind Small Text
      </p>
      <Button>Bootstrap Button</Button>
    </div>
  );
}
