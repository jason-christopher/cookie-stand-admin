import { hourlySales } from '../data';

export default function Table({ locations }) {

  const hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let grandTotal = 0;
  const tableHeaders = ["Location", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"];

  return locations.length > 0 ? (
    <table className="w-1/2 mx-auto my-4 border border-gray-700">
      <thead>
        <tr>
          {tableHeaders.map((item, idx) =>
            <th className="bg-green-500 border border-gray-700" key={idx}>{item}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {locations.map((item, idx) => {
          let locationTotal = 0;
          return (
            <tr key={idx} className="even:bg-green-500 odd:bg-green-200">
              <td className="pl-2 border border-gray-700">{item.name}</td>
              {hourlySales.map((hourly, idx) => {
                hourlyTotals[idx] += hourly;
                locationTotal += hourly;
                grandTotal += hourly;
                return (<td key={idx} className="pl-2 border border-gray-700">{hourly}</td>)
              })}
              <td className="pl-2 border border-gray-700">{locationTotal}</td>
            </tr>
          )
        })}
        <tr className="even:bg-green-500 odd:bg-green-200 font-bold">
          <td className="pl-2 border border-gray-700">Totals</td>
          {
            hourlyTotals.map((item, idx) => 
              <td key={idx} className="pl-2 border border-gray-700">{item}</td>
            )
          }
          <td className="pl-2 border border-gray-700">{grandTotal}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <h1 className="text-center text-2xl">No Cookie Stands Available</h1>
  );
}
