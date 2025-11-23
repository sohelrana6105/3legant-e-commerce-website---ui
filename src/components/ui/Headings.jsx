export default function Heading({ children, variant = "primary" }) {
  const styles = variant === "primary" ? "text-4xl" : "text-5xl";

  return <h1 className={styles}>{children}</h1>;
}
