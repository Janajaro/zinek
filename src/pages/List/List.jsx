import "./List.css";
import guestsData from "../../data/guests.json";
import { GuestCard } from "../../components/GuestCard/GuestCard";

export const List = () => {
  return (
    <>
      <section className="guests-grid">
        {guestsData.guests.map((item) => (
          <GuestCard key={item.id} guest={item} />
        ))}
      </section>

    </>
  );
};