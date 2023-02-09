import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResource";

export default function CookieStandForm() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
      event.preventDefault();
      const info = {
          location: event.target.location.value,
          minimum_customers_per_hour: parseInt(event.target.minimum.value),
          maximum_customers_per_hour: parseInt(event.target.maximum.value),
          average_cookies_per_sale: parseFloat(event.target.average.value),
          // owner: user.id,
      };
      createResource(info);

  }

  return (
      <form onSubmit={handleSubmit}>
          <fieldset>
              <legend>Create Cookie Stand</legend>
              <input placeholder='location' name='location' />
              <input placeholder='minimum' name='minimum' />
              <input placeholder='maximum' name='maximum' />
              <input placeholder='average' name='average' />
              <button>create</button>
          </fieldset>
      </form>
  );
}
