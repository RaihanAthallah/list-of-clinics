const apiEndpoint = "http://103.214.112.202:8080/clinics";

function getApi({ setOptions }) {
  let coba = "";
  fetch(apiEndpoint)
    .then((data) => data.json())
    .then((data) => {
      coba = data.data.map((d) => ({
        value: d.city,
        label: d.city,
      }));
      let uniqueChars = coba.filter((thing, index, self) => index !== self.findIndex((t) => t.city === thing.city));
      setOptions(uniqueChars);
    });
}

export default getApi;
