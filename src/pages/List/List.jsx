import "./List.css";
import guestsData from "../../data/guests.json";
import { GuestCard } from "../../components/GuestCard/GuestCard";

export const List = () => {
  const sortedGuests = [...guestsData.guests].sort((a, b) =>
    (a.name || "").localeCompare(b.name || "", "cs", { sensitivity: "base" })
  );

  return (
    <>
      <section className="guests-grid">
        {sortedGuests.map((item) => (
          <GuestCard key={item.id} guest={item} />
        ))}
      </section>

      <h1 className="guests-heading">... and more coming up!</h1>
    </>
  );
};