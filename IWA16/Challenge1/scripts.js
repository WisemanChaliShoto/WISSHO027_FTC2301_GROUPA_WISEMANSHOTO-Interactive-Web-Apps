const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  // Only edit below this comment

  const createHtml = (athlete) => {
    // Destructure the properties of the athlete object from the data response
    const { firstName, surname, id, races } = data.response.data[athlete];
    // Reverse the order of the races array
    races.reverse() //changes the order of the array;
    // Create a Date object from the date property of the first (latest) race
    const latestDate = new Date(races[0].date); // creates a new date object called latestDates
    // Get the time property of the first (latest) race
    const latestTime = races[0].time;
    // Create a document fragment to hold the HTML elements
    const fragment = document.createDocumentFragment();// variable is initialized with a new empty DocumentFragment.
    // Create an h2 element and set its text content to the athlete's id
    const title = document.createElement("h2");
    title.textContent = data.response.data[athlete].id;
    // Append the title element to the fragment
    fragment.appendChild(title);
    // Create a dl element to hold the athlete's information
    const list = document.createElement("dl");
    // Get the day, month, and year of the latest race date
    const day = latestDate.getDate();
    const month = latestDate.toLocaleString("en-US", { month: "short" });
    const year = latestDate.getFullYear();
    // Destructure the latest time into its four components
    const [first, second, third, fourth] = latestTime;
    // Calculate the total time of the latest race in minutes
    let total = first + second + third + fourth;
    // Calculate the hours and minutes of the latest race
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    // Set the HTML content of the list element using template literals
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, 0)}:${minutes}</dd>
    `;
    // Append the list element to the fragment
    fragment.appendChild(list);
    // Return the completed HTML fragment
    return fragment;
    
  };

  
  // Destructure the id properties of the two athletes from the data response
  const { NM372: { id: NM372 }, SV782: {id: SV782} } = data.response.data;

 
  // Append the HTML fragment for each athlete to their respective HTML element
  document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
  document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));












