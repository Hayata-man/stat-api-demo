document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    const url = 'https://api.e-stat.go.jp/rest/3.0/app/getStatsList?lang=J&surveyYears=2020';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}
