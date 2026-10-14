const TIERS = [
  {
    name: "Starter",
    price: "$0",
    features: ["1 project", "100 captures a month", "Community support"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Team",
    price: "$49",
    features: ["Unlimited projects", "10,000 captures a month", "Priority support"],
    cta: "Start free trial",
    featured: true,
  },
];

export function Pricing() {
  return (
    <main className="page">
      <h1>Simple pricing</h1>
      <p className="sub">Everything you need to ship design-consistent UI.</p>

      <section className="tiers">
        {TIERS.map((tier) => (
          <Tier key={tier.name} {...tier} />
        ))}
      </section>
    </main>
  );
}

function Tier({ name, price, features, cta, featured }) {
  return (
    <article className={featured ? "tier tier--featured" : "tier"}>
      <h2>{name}</h2>
      <p className="price">
        {price}
        <span>/mo</span>
      </p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className={featured ? "btn btn--primary" : "btn"}>{cta}</button>
    </article>
  );
}
