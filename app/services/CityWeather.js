// @flow

export default async function getWeather(city: string) {
    if (!city) {
        return {
            error: 'Invalid City',
        };
    }

    const response = await fetch(`https://api.hgbrasil.com/weather/?format=json&city_name=${city}&key=7c92f385`);

    if (!response.ok) {
        return {
            error: 'Error at obtain data about this city',
        };
    }

    const province = await response.json().then(res => res.results);

    return {
        temp: province.temp,
        date: province.date,
        time: province.time,
        condition_code: province.condition_code,
        description: province.description,
        currently: province.currently,
        cid: province.currently,
        city: province.city,
        img_id: province.img_id,
        humidity: province.humidity,
        wind_speedy: province.wind_speedy,
        sunrise: province.sunrise,
        sunset: province.sunset,
        condition_slug: province.condition_slug,
        city_name: province.city_name
    };

}